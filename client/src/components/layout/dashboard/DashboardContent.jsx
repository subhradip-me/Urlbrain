import React, { useState, useEffect } from 'react'
import { FaHeading, FaLink, FaInfoCircle, FaEdit, FaTrash, FaCopy, FaFileImport, FaFileExport } from 'react-icons/fa'
import { FiClipboard, FiInfo } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { urlAPI } from '../../../api/API';

import ImportModel from '../../dash components/ImportModel';
import ExportModel from '../../dash components/ExportModel';

export default function DashboardContent({ data = [], setUrlData, searchTerm = '' }) {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    purpose: '',
    tags: ''
    
  });
  const [showModal, setShowModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [previewData, setPreviewData] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (Array.isArray(item.tags) && item.tags.join(',').toLowerCase().includes(searchTerm.toLowerCase()))
  );



  // Handle add/edit submit
const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    ...formData,
    tags: typeof formData.tags === 'string'
      ? formData.tags.split(',').map(tag => tag.trim())
      : formData.tags
  };

  try {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    let response;

    if (editIndex !== null) {
      // ✅ Edit existing URL in DB
      const id = data[editIndex]._id;
      response = await API.put(`/urls/${id}`, payload, config);

      // ✅ Update frontend state
      const updated = [...data];
      updated[editIndex] = response.data;
      setUrlData(updated);
    } else {
      // ✅ Add new URL to DB
      response = await API.post('/urls', payload, config);

      // ✅ Update frontend state
      setUrlData([...data, response.data]);
    }

    // Reset modal + form
    setShowModal(false);
    setFormData({ title: '', url: '', purpose: '', tags: '' });
    setEditIndex(null);

  } catch (error) {
    console.error("Error saving URL:", error);
    alert("Failed to save URL");
  }
};
  


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handlePreview = async (url) => {
  try {
    const res = await API.get(`/urlPreview?url=${encodeURIComponent(url)}`);
    setPreviewData({ ...res.data, url }); // Ensure url is set for "Visit Site"
  } catch {
    setPreviewData({ title: "Preview failed", description: "", image: "", url });
  }
  setActiveMenu(null);
};

  // Close menu on click outside
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.menu-trigger')) setActiveMenu(null)
    }
    if (activeMenu !== null) {
      document.addEventListener('mousedown', handleClick)
    }
    return () => document.removeEventListener('mousedown', handleClick)
  }, [activeMenu])

  return (
    <>
      <div className='w-full h-full bg-zinc-300'>
        {/* Header section with title and add button */}
        <div className='w-full relative h-[10%] bg-zinc-300 shadow-sm border-b flex items-center justify-between px-6'>
          <div className='w-full'>
            {/* Column headers */}
            <ul className='w-full flex items-center gap-14 text-sm font-semibold text-gray-600'>
              <li className='w-[20%] transition-all border-b-2 border-transparent  py-4'>Title</li>
              <li className='w-[20%] transition-all border-b-2 border-transparent  py-4'>URL</li>
              <li className='w-[20%] transition-all border-b-2 border-transparent  py-4'>Purpose</li>
              <li className='w-[20%] transition-all border-b-2 border-transparent  py-4'>Tags</li>
            </ul>
          </div>
          {/* Add URL button */}
          <div className='w-83 flex justify-between items-center'>
            <button onClick={() => { setShowModal(true); setEditIndex(null); setFormData({ title: '', url: '', purpose: '', tags: '' }); }} className='w-24 px-2 py-1 bg-zinc-900 text-white text-[14px] rounded-lg hover:bg-blue-800 focus:outline-none focus:ring focus:border-blue-300'>
              <IoMdAdd className='inline-block mr-1' /> Add URL
            </button>
            <button onClick={() => {setShowImportModal(true)}} className='px-2 py-1 bg-zinc-900 text-white text-[14px] rounded-lg hover:bg-green-900 focus:outline-none focus:ring focus:border-blue-300'>
              Import <FaFileImport className='inline-block ml-1' />
            </button>
            <button onClick={() => setShowExportModal(true)} className='px-2 py-1 bg-zinc-900 text-white text-[14px] rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring focus:border-blue-300'>
              Export <FaFileExport className='inline-block ml-1' />
            </button>
          </div>
        </div>
        {/* Modal for adding/editing URL */}
        {showModal && (
          <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/20 backdrop-blur-sm">
            <div className="bg-zinc-100 rounded-lg p-8 w-full max-w-md transition-all duration-300">
              <h2 className="text-2xl text-zinc-800 font-bold mb-6">{editIndex !== null ? 'Edit URL' : 'Add New URL'}</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="eg: Learning site or site name"
                    className="w-full px-4 py-2 rounded-md bg-zinc-200 text-zinc-800 focus:outline-none focus:ring-1 focus:ring-zinc-500 "
                    required
                  />
                </div>
                {/* URL with Paste icon */}
                <div>
                  <label className="block text-sm font-medium text-zinc-700 mb-1">URL</label>
                  <div className="relative">
                    <input
                      type="url"
                      name="url"
                      value={formData.url}
                      onChange={handleChange}
                      placeholder="https://example.com"
                      className="w-full pr-10 px-4 py-2 rounded-md bg-zinc-200 text-blue-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                      required
                    />
                    <FiClipboard
                      title="Paste from clipboard"
                      onClick={async () => {
                        try {
                          const text = await navigator.clipboard.readText();
                          setFormData({ ...formData, url: text });
                        } catch {
                          alert("Clipboard access denied");
                        }
                      }}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 cursor-pointer hover:text-indigo-600"
                      size={18}
                    />
                  </div>
                </div>
                {/* Purpose with info icon */}
                <div>
                  <label className=" text-sm font-medium text-zinc-700 mb-1 flex items-center gap-1">
                    Purpose
                    <FiInfo
                      title="Why are you saving this link?"
                      className="text-blue-500"
                    />
                  </label>
                  <input
                    type="text"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    placeholder="Short description"
                    className="w-full px-4 py-2 rounded-md bg-zinc-200 text-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-600 "
                    required
                  />
                </div>
                {/* Tags with info icon */}
                <div>
                  <label className=" text-sm font-medium text-zinc-700 mb-1 flex items-center gap-1">
                    Tags
                    <FiInfo
                      title="Comma separated: React, JavaScript"
                      className="text-blue-500"
                    />
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="React, JavaScript, Frontend"
                    className="w-full px-4 py-2 rounded-lg bg-zinc-200 text-green-600 focus:outline-none focus:ring-1 focus:ring-green-700"
                  />
                </div>
                {/* Buttons */}
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => { setShowModal(false); setEditIndex(null); }}
                    className="px-4 py-2 text-sm font-semibold rounded-lg bg-zinc-200 hover:bg-zinc-300 text-zinc-800 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-sm font-semibold rounded-lg bg-zinc-900 hover:bg-zinc-700 text-white transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {/* Import Modal */}
        {showImportModal && (
          < ImportModel
            onClose={() => setShowImportModal(false)}
            setUrlData={setUrlData}
            urlData={data}
          />
        )}

        {/* Export Modal */}
        {showExportModal && (
          <ExportModel
            data={data}
            onClose={() => setShowExportModal(false)}
          />
        )}

        {/* Content section with scrollable list */}
        <div className='w-full h-[90%] overflow-y-auto no-scrollbar'>
          {filteredData.map((item, index) => (
            <div key={item._id || index} className='w-full h-12 bg-zinc-200 hover:shadow-fuchsia-200 flex items-center px-6 hover:bg-zinc-50 hover:text-zinc-700 transition-colors'>
              <ul className='flex w-full items-center text-sm font-semibold'>
                {/* Title column */}
                <li className='w-[20%] flex items-center gap-2 py-4'>
                  <FaHeading className="text-lg" />
                  {item.title}
                </li>
                {/* URL column */}
                <li className='w-[20%] pr-10 text-blue-600 overflow-hidden overflow-ellipsis flex items-center gap-2 py-4'>
                  <FaLink className="text-lg" />
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className='hover:underline truncate'>{item.url}</a>
                </li>
                {/* Purpose column */}
                <li className='w-[20%] flex items-center gap-2 py-4 text-amber-500'>
                  <FaInfoCircle className="text-lg " />
                  {item.purpose}
                </li>
                {/* Tags column */}
                <li className='w-[20%] flex items-center pl-2 gap-2'>
                  {Array.isArray(item.tags) && item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className='px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded'>
                    {tag}
                  </span>
                  ))}
                </li>
                {/* Action buttons */}
                <li className='w-[20%] flex items-center justify-end gap-4'>
                  <div className="relative menu-trigger">
                    <button
                      className="p-1 hover:bg-zinc-300 rounded-full"
                      onClick={e => {
                        e.stopPropagation();
                        setActiveMenu(activeMenu === index ? null : index);
                      }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </button>
                    {activeMenu === index && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                        <button
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                          onClick={() => {
                            navigator.clipboard.writeText(item.url);
                            setActiveMenu(null);
                          }}
                        >
                          <FaCopy className="mr-3" />
                          Copy URL
                        </button>
                        <button
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                          onClick={() => {
                            setFormData({
                              title: item.title,
                              url: item.url,
                              purpose: item.purpose,
                              tags: item.tags.join(', ')
                            });
                            setShowModal(true);
                            setEditIndex(index);
                            setActiveMenu(null);
                          }}
                        >
                          <FaEdit className="mr-3" />
                          Edit
                        </button>

                        <button
                          className="flex items-center px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 w-full"
                          onClick={() => handlePreview(item.url)}
                        >
                          <FaInfoCircle className="mr-3" />
                          Preview
                        </button>
                        <button
                          className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full"
                          onClick={async () => {
                            try {
                              const token = localStorage.getItem('token');
                              const _config = {
                                headers: { Authorization: `Bearer ${token}` }
                              };
                              await API.delete(`/urls/${item._id}`);
                              setUrlData(data.filter((_, i) => i !== index));
                            } catch (err) {
                            console.error(err);
                            alert('Failed to delete');
                            }
                            setActiveMenu(null);
                         }}
                        >
                          <FaTrash className="mr-3" />
                          Delete
                        </button>
                      </div>
                    )}
                    {/* Preview Modal */}
      {previewData && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full relative">
            <button
              className="absolute -top-5 -right-5 text-xl cursor-pointer text-gray-900 hover:text-gray-700"
              onClick={() => setPreviewData(null)}
            >✕</button>
            {previewData.image && (
              <img src={previewData.image} alt="Preview" className="w-full h-56 object-cover rounded mb-4" />
            )}
            <h3 className="text-lg font-bold mb-2">{previewData.title || "No Title"}</h3>
            <p className="text-gray-600 mb-2">{previewData.description || "No description available."}</p>
            <a
              href={previewData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visit Site
            </a>
          </div>
        </div>
      )}
                  </div>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}