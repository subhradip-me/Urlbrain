import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaCopy, FaEdit, FaTimes, FaGripLines } from 'react-icons/fa';

export default function SummaryPopup({ summary, onClose, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedSummary, setEditedSummary] = useState(summary);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ width: 400, height: 300 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const popupRef = useRef(null);

  // Auto-resize based on content
  useEffect(() => {
    const lines = summary.split('\n').length;
    const words = summary.split(' ').length;
    
    // Calculate appropriate size based on content
    const minWidth = 350;
    const minHeight = 200;
    const maxWidth = 600;
    const maxHeight = 500;
    
    // Estimate width based on word count (rough calculation)
    const estimatedWidth = Math.min(maxWidth, Math.max(minWidth, words * 8 + 100));
    
    // Estimate height based on lines and content length
    const estimatedHeight = Math.min(maxHeight, Math.max(minHeight, lines * 25 + 150));
    
    setSize({ width: estimatedWidth, height: estimatedHeight });
  }, [summary]);

  const handleMouseDown = (e, action) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (action === 'drag') {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    } else if (action === 'resize') {
      setIsResizing(true);
      setResizeStart({
        x: e.clientX,
        y: e.clientY,
        width: size.width,
        height: size.height
      });
    }
  };

  const handleMouseMove = useCallback((e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    } else if (isResizing) {
      const newWidth = Math.max(300, resizeStart.width + (e.clientX - resizeStart.x));
      const newHeight = Math.max(200, resizeStart.height + (e.clientY - resizeStart.y));
      setSize({ width: newWidth, height: newHeight });
    }
  }, [isDragging, isResizing, dragStart.x, dragStart.y, resizeStart.width, resizeStart.height, resizeStart.x, resizeStart.y]);

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragStart, resizeStart, handleMouseMove]);

  const handleCopy = () => {
    navigator.clipboard.writeText(editedSummary);
    // You could add a toast notification here
    alert('Summary copied to clipboard!');
  };

  const handleSave = () => {
    onEdit(editedSummary);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedSummary(summary);
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/20 z-50 flex items-center justify-center">
      <div
        ref={popupRef}
        className="bg-white/90 backdrop-blur-md rounded-lg shadow-2xl border border-white/30 overflow-hidden"
        style={{
          position: 'absolute',
          left: position.x,
          top: position.y,
          width: size.width,
          height: size.height,
          minWidth: '300px',
          minHeight: '200px',
          maxWidth: '80vw',
          maxHeight: '80vh'
        }}
      >
        {/* Header with drag handle */}
        <div
          className="bg-white/30 backdrop-blur-sm px-4 py-2 border-b border-white/20 flex items-center justify-between cursor-move select-none"
          onMouseDown={(e) => handleMouseDown(e, 'drag')}
        >
          <div className="flex items-center gap-2">
            <FaGripLines className="text-gray-600" />
            <h3 className="font-semibold text-gray-900">AI Summary</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="p-1 hover:bg-white/20 rounded text-gray-700 hover:text-gray-900 transition-all"
              title="Copy summary"
            >
              <FaCopy size={14} />
            </button>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="p-1 hover:bg-white/20 rounded text-gray-700 hover:text-gray-900 transition-all"
              title="Edit summary"
            >
              <FaEdit size={14} />
            </button>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded text-gray-700 hover:text-gray-900 transition-all"
              title="Close"
            >
              <FaTimes size={14} />
            </button>
          </div>
        </div>

        {/* Content area */}
        <div className="p-4 overflow-auto" style={{ height: 'calc(100% - 60px)' }}>
          {isEditing ? (
            <div className="h-full flex flex-col">
              <textarea
                value={editedSummary}
                onChange={(e) => setEditedSummary(e.target.value)}
                className="flex-1 w-full p-3 border border-white/30 bg-white/20 backdrop-blur-sm rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-gray-900 placeholder-gray-600"
                placeholder="Edit your summary..."
              />
              <div className="flex gap-2 mt-3 justify-end">
                <button
                  onClick={handleCancel}
                  className="px-3 py-1 text-sm bg-white/30 backdrop-blur-sm text-gray-700 rounded hover:bg-white/40 transition-all border border-white/20"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-3 py-1 text-sm bg-blue-500/80 backdrop-blur-sm text-white rounded hover:bg-blue-600/80 transition-all border border-blue-400/30"
                >
                  Save
                </button>
              </div>
            </div>
          ) : (
            <div className="text-md leading-relaxed text-gray-900 h-full overflow-auto">
              {editedSummary.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-2">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Resize handle */}
        <div
          className="absolute bottom-0 right-0 w-4 h-4 bg-gray-300 cursor-se-resize hover:bg-gray-400 transition"
          onMouseDown={(e) => handleMouseDown(e, 'resize')}
          style={{
            clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)'
          }}
        />
      </div>
    </div>
  );
}