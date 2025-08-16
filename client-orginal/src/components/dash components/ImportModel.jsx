import React, { useRef } from 'react'
import Papa from "papaparse";
import { FaTimes } from "react-icons/fa";
import { API } from '../../api/auth';

export default function ImportModel({ onClose, setUrlData, urlData }) {
  const fileInputRef = useRef();

  const handleImport = async (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = async (event) => {
      try {
        const content = event.target.result;
        let importedData = [];

        if (file.name.endsWith(".json")) {
          importedData = JSON.parse(content);
        } else if (file.name.endsWith(".csv")) {
          const parsed = Papa.parse(content, {
            header: true,
            skipEmptyLines: true
          });
          importedData = parsed.data;
        } else {
          alert("Unsupported file type!");
          return;
        }

        const newData = [];

        for (let item of importedData) {
          if (!item.title || !item.url) {
            console.warn('Skipping item with missing title or url:', item);
            continue;
          }
          const payload = {
            title: item.title,
            url: item.url,
            purpose: item.purpose || '',
            tags: Array.isArray(item.tags)
              ? item.tags
              : typeof item.tags === 'string'
                ? item.tags.split(',').map(t => t.trim())
                : []
          };

          try {
            const response = await API.post('/urls', payload);
            newData.push(response.data);
          } catch (err) {
            console.error('Failed to import item:', item, err?.response?.data || err.message);
          }
        }

        setUrlData([...urlData, ...newData]);
        alert('Import successful!');
        onClose();
      } catch (err) {
        console.error(err);
        alert("Import failed!");
      }
    };

    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-zinc-500 hover:text-red-500 text-xl"
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-zinc-800">Import URLs</h2>
        <form
          onSubmit={handleImport}
          className="flex flex-col gap-6"
        >
          <input
            type="file"
            accept=".json, .csv"
            ref={fileInputRef}
            className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-zinc-200 hover:bg-zinc-300 text-zinc-800 font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-500 text-white font-semibold"
            >
              Import
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
