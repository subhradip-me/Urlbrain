import React, { useRef, useState, useEffect } from 'react';
import { BiLink } from "react-icons/bi";
import { IoIosStats } from "react-icons/io";
import { FaPaste, FaCopy } from "react-icons/fa";
import { urlAPI } from '../../../api/API';
import { aiSuggest, aiSummarize } from '../../../ai/ai';
import ShortedUrls from './ShortedUrls';
import SummaryPopup from './SummaryPopup';

export default function UrlShortener({ setActiveTab }) {
  const inputRef = useRef(null);
  const [slug, setSlug] = useState('');
  const [previewData, setPreviewData] = useState(null);
  const [shortUrl, setShortUrl] = useState(null);
  
  // AI-related state variables
  const [aiLoading, setAiLoading] = useState(false);
  const [aiTags, setAiTags] = useState([]);
  const [aiCategory, setAiCategory] = useState('');
  const [aiSummary, setAiSummary] = useState('');
  const [showSummaryPopup, setShowSummaryPopup] = useState(false);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (window.previewTimeout) {
        clearTimeout(window.previewTimeout);
      }
    };
  }, []);

  const handlePaste = async () => {
    try {
      const url = await navigator.clipboard.readText();
      if (inputRef.current) inputRef.current.value = url;

      // Fetch preview after pasting
      await fetchPreview(url);
    } catch (err) {
      console.error('Paste Error:', err);
    }
  };

  const fetchPreview = async (url) => {
    if (!url || !url.trim() || !/^https?:\/\//.test(url)) {
      setPreviewData(null);
      return;
    }

    try {
      console.log('Fetching preview for:', url);
      const data = await urlAPI.getPreview(url);
      setPreviewData(data);
    } catch (err) {
      console.error('Preview Fetch Error:', err);
      setPreviewData(null);
    }
  };

  const handleInputChange = (e) => {
    const url = e.target.value;
    
    // Clear AI results when URL changes
    setAiTags([]);
    setAiCategory('');
    setAiSummary('');
    
    // Debounce the preview fetch to avoid too many requests
    clearTimeout(window.previewTimeout);
    window.previewTimeout = setTimeout(() => {
      fetchPreview(url);
    }, 500); // Wait 500ms after user stops typing
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

    const data = await urlAPI.shortenUrl(payload);
    console.log("✅ Success response:", data);
    setShortUrl(data.shortUrl);
  } catch (err) {
    console.error('❌ Shorten Error:', err);
    console.error('❌ Error details:', {
      message: err.message,
      status: err.response?.status,
      statusText: err.response?.statusText,
      data: err.response?.data,
      config: err.config
    });
    
    // Show user-friendly error message
    const errorMessage = err.message || err.error || 'Failed to shorten URL';
    alert(`Error: ${errorMessage}`);
  }
};

const handleAISuggest = async () => {
  const url = inputRef.current?.value;
  if (!url || !url.trim()) {
    alert('Please enter a URL first to get AI suggestions');
    return;
  }
  
  if (!/^https?:\/\//.test(url)) {
    alert('Please enter a valid URL starting with http:// or https://');
    return;
  }
  
  setAiLoading(true);
  try {
    console.log('Starting AI suggest for URL:', url);
    const result = await aiSuggest(url);
    console.log('AI suggest result:', result);
    
    setAiTags(result.tags || []);
    setAiCategory(result.category || "");
    setAiLoading(false);
  } catch (err) {
    console.error('AI Suggest Error:', err);
    
    let errorMessage = 'Failed to get AI suggestions. Please try again.';
    
    if (err.response?.status === 401) {
      errorMessage = 'Authentication required. Please log in first.';
    } else if (err.response?.status === 400) {
      errorMessage = 'Invalid URL provided for AI analysis.';
    } else if (err.response?.status >= 500) {
      errorMessage = 'Server error. Please try again later.';
    } else if (err.response?.data?.error) {
      errorMessage = err.response.data.error;
    }
    
    alert(errorMessage);
    setAiLoading(false);
  }
};

const handleAISummary = async () => {
  const url = inputRef.current?.value;
  if (!url || !url.trim()) {
    alert('Please enter a URL first to get AI summary');
    return;
  }
  
  if (!/^https?:\/\//.test(url)) {
    alert('Please enter a valid URL starting with http:// or https://');
    return;
  }
  
  setAiLoading(true);
  try {
    console.log('Starting AI summary for URL:', url);
    const result = await aiSummarize(url);
    console.log('AI summary result:', result);
    
    setAiSummary(result.summary || "");
    setShowSummaryPopup(true); // Show popup instead of inline display
    setAiLoading(false);
  } catch (err) {
    console.error('AI Summary Error:', err);
    
    let errorMessage = 'Failed to generate AI summary. Please try again.';
    
    if (err.response?.status === 401) {
      errorMessage = 'Authentication required. Please log in first.';
    } else if (err.response?.status === 400) {
      errorMessage = 'Invalid URL provided for AI analysis.';
    } else if (err.response?.status >= 500) {
      errorMessage = 'Server error. Please try again later.';
    } else if (err.response?.data?.error) {
      errorMessage = err.response.data.error;
    }
    
    alert(errorMessage);
    setAiLoading(false);
  }
};


  const handleCopy = () => {
    if (shortUrl) navigator.clipboard.writeText(shortUrl);
  };

  const handleSummaryEdit = (editedSummary) => {
    setAiSummary(editedSummary);
  };

  const handleCloseSummaryPopup = () => {
    setShowSummaryPopup(false);
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
                onChange={handleInputChange}
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

            {/* AI Features */}
            <div className="flex gap-2 mt-4">
              <button 
                onClick={handleAISuggest} 
                disabled={aiLoading}
                className="px-3 py-1 rounded bg-emerald-600 text-white disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-emerald-700 transition cursor-pointer"
              >
                {aiLoading ? "Thinking..." : "Suggest Tags"}
              </button>
              <button 
                onClick={handleAISummary} 
                disabled={aiLoading}
                className="px-3 py-1 rounded bg-zinc-900 text-white disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-zinc-600 transition  cursor-pointer"
              >
                {aiLoading ? "Summarizing..." : "Summarize"}
              </button>
            </div>

            {(aiCategory || aiTags.length > 0) && (
              <div className="mt-3 text-sm w-96">
                {aiCategory && <p><b>Category:</b> {aiCategory}</p>}
                {aiTags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {aiTags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Show summary status when available */}
            {aiSummary && !showSummaryPopup && (
              <div className="mt-3 text-sm bg-blue-50 p-3 w-96 rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <span className="text-blue-800 font-medium">✓ Summary generated</span>
                  <button
                    onClick={() => setShowSummaryPopup(true)}
                    className="text-blue-600 hover:text-blue-800 text-sm underline cursor-pointer"
                  >
                    View Summary
                  </button>
                </div>
              </div>
            )}


            {/* Shorten Button */}
            <button
              onClick={handleShorten}
              className='bg-zinc-900 rounded-md hover:bg-zinc-700 hover:shadow-lg hover:shadow-fuchsia-100 text-zinc-50 px-4 py-2 mt-4 w-96 cursor-pointer'
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

      {/* Summary Popup */}
      {showSummaryPopup && aiSummary && (
        <SummaryPopup
          summary={aiSummary}
          onClose={handleCloseSummaryPopup}
          onEdit={handleSummaryEdit}
        />
      )}
    </div>
  );
}