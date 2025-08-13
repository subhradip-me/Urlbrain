import React from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const hours = Array.from({ length: 24 }, (_, i) => i);

// color based on intensity
function getColor(count, max) {
  if (!max || count === 0) return "#F3F4F6"; // light gray
  const intensity = 0.15 + 0.85 * (count / max); // opacity scale
  return `rgba(5, 150, 105, ${intensity})`; // green
}

export default function ClickHeatmap({ heatmap }) {
  if (!Array.isArray(heatmap) || !heatmap.length) {
    return (
      <div className="flex items-center justify-center h-full text-zinc-400 py-8">
        No heatmap data available
      </div>
    );
  }

  const max = Math.max(...heatmap.flat());

  return (
    <div className="overflow-x-auto rounded-lg bg-white p-2 border border-zinc-200">
      {/* Hour labels */}
      <div className="flex ml-5 mb-">
        {hours.map((h) => (
          <div
            key={h}
            className="w-6 text-[10px] text-center text-zinc-400 font-medium"
          >
            {h}
          </div>
        ))}
      </div>

      {/* Heatmap grid */}
      <div className="flex flex-col gap-1">
        {heatmap.map((row, dayIdx) => (
          <div key={dayIdx} className="flex items-center">
            {/* Day label */}
            <div className="w-10  text-xs text-zinc-500 font-semibold">
              {days[dayIdx]}
            </div>
            {/* Cells */}
            {row.map((count, hourIdx) => (
              <div
                key={hourIdx}
                title={`${days[dayIdx]} ${hourIdx}:00 — ${count} clicks`}
                className="w-6 h-4  hover:scale-105 transition-transform duration-200 cursor-pointer border"
                style={{
                  backgroundColor: getColor(count, max),
                  borderColor: count > 0 ? "#059669" : "#E5E7EB",
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center mt-4 ml-12 gap-2 text-xs text-zinc-400">
        <span>Low</span>
        <div
          className="w-6 h-4 rounded"
          style={{ background: getColor(1, max) }}
        />
        <div
          className="w-6 h-4 rounded"
          style={{ background: getColor(Math.floor(max / 2), max) }}
        />
        <div
          className="w-6 h-4 rounded"
          style={{ background: getColor(max, max) }}
        />
        <span>High</span>
      </div>
    </div>
  );
}
