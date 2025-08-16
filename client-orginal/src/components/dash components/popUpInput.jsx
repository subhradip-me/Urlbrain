import { useState } from "react";
import { FiClipboard, FiInfo } from "react-icons/fi";

<div className="fixed inset-0 flex justify-center items-center z-50 bg-black/20 backdrop-blur-sm">
  <div className="bg-zinc-100 rounded-2xl shadow-2xl p-8 w-full max-w-md transition-all duration-300">
    <h2 className="text-2xl text-zinc-800 font-bold mb-6">Add New URL</h2>

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
          className="w-full px-4 py-2 rounded-lg bg-zinc-200 text-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 shadow-inner"
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
            className="w-full pr-10 px-4 py-2 rounded-lg bg-zinc-200 text-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-inner"
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
        <label className="block text-sm font-medium text-zinc-700 mb-1 flex items-center gap-1">
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
          className="w-full px-4 py-2 rounded-lg bg-zinc-200 text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-inner"
          required
        />
      </div>

      {/* Tags with info icon */}
      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1 flex items-center gap-1">
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
          className="w-full px-4 py-2 rounded-lg bg-zinc-200 text-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 shadow-inner"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={() => setShowModal(false)}
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-zinc-200 hover:bg-zinc-300 text-zinc-800 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition"
        >
          Submit
        </button>
      </div>

    </form>
  </div>
</div>
