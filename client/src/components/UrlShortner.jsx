import React, { useRef, useState } from 'react';
import { BiLink } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import { FaPaste, FaCopy } from "react-icons/fa";
import { API } from '../api/auth';
import ShortedUrls from './ShortedUrls';



export default function UrlShortner({ setActiveTab }) {
  const inputRef = useRef(null);
  const [slug, setSlug] = useState('');
  const [previewData, setPreviewData] = useState(null);
  const [shortUrl, setShortUrl] = useState(null);

  const handlePaste = async () => {
    try {
      const url = await navigator.clipboard.readText();
      if (inputRef.current) inputRef.current.value = url;

      // 🔥 Fetch metadata preview from your backend (to be implemented below)
      const res = await API.get('/urlPreview', {
        params: { url }
      });

      setPreviewData(res.data);
    } catch (err) {
      console.error('Preview Fetch Error:', err);
      setPreviewData(null);
    }
  };

const handleShorten = async () => {
  try {
    const originalUrl = inputRef.current?.value;
    if (!originalUrl) return;

    if (!/^https?:\/\//.test(originalUrl)) {
      alert("Please include http:// or https://");
      return;
    }

    const payload = { url: originalUrl };
    if (slug && slug.trim()) payload.slug = slug.trim();

    console.log("Sending payload:", payload);

    const res = await API.post('/shortUrls', payload);
    setShortUrl(res.data.shortUrl);
  } catch (err) {
    console.error('Shorten Error:', err);
    if (err.response) {
      console.error('Server Response:', err.response.data);
    }
  }
};


  const handleCopy = () => {
    if (shortUrl) navigator.clipboard.writeText(shortUrl);
  };

  return (
    <div className='w-full h-full bg-zinc-300'>
      {/* Header */}
      <div className='w-full relative h-[10%] bg-zinc-300 shadow-sm border-b flex items-center justify-end px-6'>
        <h1 className='text-2xl font-bold absolute top-5 left-6 text-zinc-900'>Shorten your URL</h1>
        <div className='w-64 flex justify-end gap-2 text-md text-zinc-100'>
          <button className='bg-zinc-900 rounded-md px-2 py-1'>
            <BiLink className='inline-block mr-2' />
            Shorten Url
          </button>
          <button onClick={() => setActiveTab('analytics')} className='bg-zinc-900 rounded-md px-2 py-1 cursor-pointer hover:bg-zinc-700 hover:shadow-lg hover:shadow-fuchsia-100 text-zinc-50 flex items-center'>
            <IoIosStats className='inline-block mr-2' />
            View Stats
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className='w-full h-[90%] flex items-center justify-center'>
        {/* Left */}
        <div className='w-2/5 h-full bg-zinc-300 p-6 overflow-y-auto no-scrollbar'>
          <div className='w-full flex flex-col'>
            <p className='text-md text-zinc-900'>Enter your URL below to shorten it</p>

            {/* Input URL */}
            <div className="relative w-96 mt-2">
              <input
                type="text"
                placeholder="Enter URL here"
                ref={inputRef}
                className='w-full px-4 py-2 rounded-xl bg-zinc-50 shadow-lg shadow-zinc-400 focus:outline-none focus:bg-zinc-50 focus:shadow-fuchsia-200'
              />
              <button
                onClick={handlePaste}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-zinc-50 text-zinc-700 px-2 py-1 rounded-md text-sm hover:text-zinc-900"
                title="Paste from clipboard"
              >
                <FaPaste />
              </button>
            </div>

            {/* Custom Slug Input */}
            <input
              type="text"
              placeholder="Custom slug (optional)"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className='w-96 px-4 py-2 mt-3 rounded-xl bg-zinc-50 shadow-lg shadow-zinc-400 focus:outline-none focus:shadow-fuchsia-200'
            />

            {/* Preview Box */}
            {previewData && (
              <div className='w-96 mt-4 bg-white p-3 rounded-xl shadow-md'>
                <img src={previewData.image} alt="Preview" className='rounded-md w-full h-48 object-cover' />
                <h2 className='text-lg font-semibold mt-2'>{previewData.title}</h2>
                <p className='text-sm text-zinc-700 mt-1'>{previewData.description}</p>
              </div>
            )}

            {/* Shorten Button */}
            <button
              onClick={handleShorten}
              className='bg-zinc-900 rounded-md hover:bg-zinc-700 hover:shadow-lg hover:shadow-fuchsia-100 text-zinc-50 px-4 py-2 mt-4 w-96'
            >
              Shorten
            </button>

            {/* Shortened Result */}
            {shortUrl && (
              <div className='w-96 mt-4 bg-white p-3 rounded-xl shadow-md flex flex-col gap-2'>
                <p className='text-zinc-800 text-sm'>Your shortened link:</p>
                <div className='flex justify-between items-center bg-zinc-100 px-3 py-2 rounded-md'>
                  <span className='truncate text-zinc-800'>{shortUrl}</span>
                  <button onClick={handleCopy} title="Copy to clipboard">
                    <FaCopy className='text-zinc-600 hover:text-zinc-900' />
                  </button>
                </div>
                <div className='flex justify-between mt-2'>
                  <a href={shortUrl} target="_blank" rel="noreferrer" className='text-blue-600 hover:underline text-sm'>
                    Visit
                  </a>
                  <button onClick={() => setActiveTab('analytics')} className='text-sm text-zinc-700 hover:text-zinc-900'>
                    <IoIosStats className='inline-block mr-1' />
                    View Stats
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right */}
        <div className='w-4/5 h-full bg-zinc-300 overflow-y-scroll no-scrollbar px-3'>
        {/* all short urls */}
        <ShortedUrls />

        
        </div>
      </div>
    </div>
  );
}
