import React, { useEffect, useState } from 'react';
import { urlAPI } from '../../../api/API';
import { IoIosStats } from "react-icons/io";
import { FiMoreVertical, FiCopy, FiEye, FiTrash2, FiShare2 } from "react-icons/fi";

export default function ShortedUrls() {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState('');
  const [activeMenu, setActiveMenu] = useState(null);
  const [previewData, setPreviewData] = useState(null);

  useEffect(() => {
    const getUserUrls = async () => {
      try {
        const data = await urlAPI.getUrls();
        setUrls(data);
      } catch (error) {
        console.error('Error fetching URLs:', error);
        setError('Failed to load URLs');
      }
    };

    getUserUrls();
  }, []);

  const handleCopy = (shortUrl) => {
    navigator.clipboard.writeText(shortUrl);
    alert("Short URL copied!");
    setActiveMenu(null);
  };

  const handleShare = (shortUrl) => {
    if (navigator.share) {
      navigator.share({ url: shortUrl });
    } else {
      alert("Share not supported in this browser.");
    }
    setActiveMenu(null);
  };

  const handlePreview = async (url) => {
    try {
      // You should have an endpoint like /api/urlPreview?url=...
      const res = await API.get(`/urlPreview?url=${encodeURIComponent(url)}`);
      setPreviewData(res.data);
    } catch {
      setPreviewData({ title: "Preview failed", description: "", image: "" });
    }
    setActiveMenu(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this short URL?")) return;
    try {
      await urlAPI.deleteUrl(id);
      setUrls(urls.filter(u => u._id !== id));
    } catch (error) {
      console.error('Delete error:', error);
      alert("Failed to delete.");
    }
    setActiveMenu(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl absolute top-32 font-bold mb-4">Your Shortened URLs</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {urls.length === 0 ? (
        <p>No shortened URLs found.</p>
      ) : (
        <ul className="space-y-3">
          {urls.map((url, idx) => (
            <li
              key={url._id}
              className="p-4 rounded-md bg-zinc-100 hover:shadow-lg shadow-fuchsia-200 transition"
            >
              <div className="flex justify-between items-center relative">
                <div className='w-[20vw]'>
                  <div className='mb-2 overflow-hidden flex items-center justify-start gap-2 mr-0'>
                    <p className="text-sm text-center text-gray-500 ">Original:</p>
                    <a
                      href={url.full_url}
                      className="text-blue-600 hover:underline break-all truncate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {url.full_url}
                    </a>
                  </div>
                  <div className='flex items-center justify-start gap-2 mr-10'>
                    <p className="text-sm text-gray-500 ">Short:</p>
                    <a
                      href={url.shortUrl}
                      className="text-green-600 hover:underline break-all truncate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {url.shortUrl}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-700">
                  <span>{new Date(url.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-700">
                  <IoIosStats className="text-xl" />
                  <span>{url.clicks}</span>
                </div>
                {/* 3-dot menu */}
                <div className="relative">
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-200 cursor-pointer"
                    onClick={() => setActiveMenu(activeMenu === idx ? null : idx)}
                  >
                    <FiMoreVertical />
                  </button>
                  {activeMenu === idx && (
                    <div className="absolute right-0 mt-2 w-40 bg-white  rounded-md shadow-xl z-10">
                      <button
                        className="flex items-center w-full px-4 py-2 text-sm hover:bg-zinc-200"
                        onClick={() => handleCopy(url.shortUrl)}
                      >
                        <FiCopy className="mr-2" /> Copy Short URL
                      </button>
                      <button
                        className="flex items-center w-full px-4 py-2 text-sm hover:bg-zinc-100"
                        onClick={() => handleShare(url.shortUrl)}
                      >
                        <FiShare2 className="mr-2" /> Share
                      </button>
                      <button
                        className="flex items-center w-full px-4 py-2 text-sm hover:bg-zinc-100"
                        onClick={() => handlePreview(url.full_url)}
                      >
                        <FiEye className="mr-2" /> Preview
                      </button>
                      <button
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-zinc-100"
                        onClick={() => handleDelete(url._id)}
                      >
                        <FiTrash2 className="mr-2" /> Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
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
  );
}