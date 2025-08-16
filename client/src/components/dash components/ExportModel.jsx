import React from 'react'

export default function ExportModel({ data = [], onClose }) {

  const exportToJSON = () => {
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "linkvault_export.json");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const exportToCSV = () => {
    if (data.length === 0) {
      alert("No data to export.");
      return;
    }

    const headers = ["Title", "URL", "Purpose", "Tags"];
    const rows = data.map(item => [
      `"${item.title}"`,
      `"${item.url}"`,
      `"${item.purpose}"`,
      `"${Array.isArray(item.tags) ? item.tags.join(', ') : ''}"`
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "linkvault_export.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black/20 backdrop-blur-sm">
      <div className="bg-zinc-100 rounded-lg p-8 w-full max-w-md transition-all duration-300">
        <h2 className="text-2xl text-zinc-800 font-bold mb-6">Export Data</h2>
        <div className="flex justify-end gap-3 pt-2 mb-4">
          <button
            onClick={exportToJSON}
            className="px-4 py rounded-lg bg-zinc-900 hover:bg-zinc-600 text-white text-sm font-semibold"
          >
            Download JSON
          </button>
          <button
            onClick={exportToCSV}
            className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-600 text-white font-semibold"
          >
            Download CSV
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-zinc-400 hover:bg-zinc-500 text-zinc-800 font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
