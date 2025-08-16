import React from 'react';
import { FaEdit, FaTrash, FaExternalLinkAlt } from 'react-icons/fa';

export default function BookmarkList({ bookmarks = [], onEdit, onDelete }) {
  if (bookmarks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No bookmarks found. Add your first bookmark!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {bookmarks.map((bookmark) => (
        <div key={bookmark.id} className="bg-white p-4 rounded-lg shadow border">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-semibold text-lg text-gray-800">{bookmark.title}</h3>
              <a
                href={bookmark.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline flex items-center gap-1 mt-1"
              >
                {bookmark.url}
                <FaExternalLinkAlt size={12} />
              </a>
              {bookmark.description && (
                <p className="text-gray-600 mt-2">{bookmark.description}</p>
              )}
              {bookmark.tags && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {bookmark.tags.split(',').map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={() => onEdit(bookmark)}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                title="Edit bookmark"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => onDelete(bookmark.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded"
                title="Delete bookmark"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}