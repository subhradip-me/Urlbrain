import React, { useState, useRef, useEffect } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaFileExport } from "react-icons/fa";
import Graph from './Graph';
import ClickHeatmap from './ClickHeatmap';
import { API } from '../../../api/auth';

export default function Analytics() {
  const [range, setRange] = useState("7days");
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [chart, setChart] = useState({ "7days": [], "30days": [], "90days": [] });
  const [stats, setStats] = useState({
    clicks: "0",
    location: "-",
    device: "-",
    referrer: "-"
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [heatmapData, setHeatmapData] = useState([]);

  const ranges = [
    { value: "7days", label: "Last 7 days" },
    { value: "30days", label: "Last 30 days" },
    { value: "90days", label: "Last 90 days" }
  ];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  // Fetch analytics data
  useEffect(() => {
    async function fetchAnalytics() {
      setLoading(true);
      setError("");
      try {
        // Fetch chart and basic stats
        const res = await API.get("/analytics", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        
        // Fetch top stats (location, device, referrer)
        const statsRes = await API.get("/stats/top", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        
        setChart(res.data.chart);
        // Merge the analytics stats with top stats
        setStats({
          clicks: res.data.stats.clicks,
          location: statsRes.data.location,
          device: statsRes.data.device,
          referrer: statsRes.data.referrer
        });
      } catch (err) {
        setError("Failed to load analytics");
        console.error("Analytics fetch error:", err);
      }
      setLoading(false);
    }
    fetchAnalytics();
  }, []);

  // Example API call for heatmap data
  useEffect(() => {
    async function fetchHeatmapData() {
      try {
        const res = await API.get('/analytics/heatmap', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        setHeatmapData(res.data.heatmap);
      } catch (err) {
        console.error("Failed to load heatmap data", err);
      }
    }
    fetchHeatmapData();
  }, []);

  return (
    <div className='w-full h-full flex flex-col bg-zinc-300 rounded-3xl'>
      {/* Header */}
      <div className="w-full h-[10%] bg-zinc-300 shadow-sm border-b flex items-center justify-between px-6">
        <h2 className="text-2xl font-bold text-zinc-800">Analytics Overview</h2>
        <button className="h-8 px-4 rounded-lg bg-zinc-900 text-white hover:bg-zinc-700 font-semibold shadow flex items-center transition">
          Export <FaFileExport className='inline-block ml-1' />
        </button>
      </div>
      <div className="w-full h-[90%] flex flex-col items-center justify-start p-6 overflow-y-scroll no-scrollbar">

        {/* Main Content */}
        <div className="w-full flex flex-col md:flex-row gap-8">
          {/* Chart Card */}
          <div className="w-full md:w-3/4 bg-zinc-100 rounded-2xl shadow-lg p-4 relative flex flex-col">
            <div className="mb-4 relative" ref={dropdownRef}>
              <button
                className="w-44 p-2 rounded-lg bg-zinc-900 text-sm text-amber-50 font-medium shadow flex justify-between items-center transition hover:bg-zinc-800"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {ranges.find(r => r.value === range)?.label}
                <span className={`ml-2 transition-transform ${showDropdown ? "rotate-180" : ""}`}>
                  <RiArrowDropDownLine size={24} />
                </span>
              </button>
              {showDropdown && (
                <div className="absolute left-0 mt-2 w-44 bg-white rounded-xl shadow-xl z-10 border animate-fade-in">
                  {ranges.map(r => (
                    <button
                      key={r.value}
                      className={`w-full text-left text-sm px-4 py-2 hover:bg-zinc-100 transition ${range === r.value ? "font-bold text-zinc-900" : "text-zinc-700"}`}
                      onClick={() => {
                        setRange(r.value);
                        setShowDropdown(false);
                      }}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="flex-1 flex items-center justify-center bg-zinc-50 rounded-xl border border-zinc-200 text-2xl text-zinc-800 min-h-[40vh]">
              {loading ? (
                <div className="text-zinc-400">Loading...</div>
              ) : error ? (
                <div className="text-red-500">{error}</div>
              ) : (
                <Graph range={range} data={chart[range]} />
              )}
            </div>
          </div>

          {/* Stats Card */}
          <div className="w-full md:w-1/3 bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-4">
            <div className="text-lg font-semibold text-zinc-800 mb-1">Quick Stats</div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">Total Clicks</span>
                <span className="font-bold text-fuchsia-700">{stats.clicks}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">Top Location</span>
                <span className="font-bold text-blue-700">{stats.location}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">Top Device</span>
                <span className="font-bold text-green-700">{stats.device}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">Top Referrer</span>
                <span className="font-bold text-amber-700">{stats.referrer}</span>
              </div>
            </div>
            <div className='w-[26vw] h-40 bg-zinc-100 rounded-2xl'>
                 {/* Example: pass your API heatmap data */}
                <ClickHeatmap heatmap={heatmapData} />
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="w-full flex rounded-2xl gap-6 mt-8">
          <div className='w-1/3 h-40 bg-zinc-50 rounded-xl flex flex-col items-center justify-center mx-auto shadow'>
            <h3 className='text-xl font-semibold text-zinc-800 mb-2'>Top Location</h3>
            <span className="text-blue-700 font-bold text-lg">{stats.location}</span>
          </div>
          <div className='w-1/3 h-40 bg-zinc-50 rounded-xl flex flex-col items-center justify-center mx-auto shadow'>
            <h3 className='text-xl font-semibold text-zinc-800 mb-2'>Top Device</h3>
            <span className="text-green-700 font-bold text-lg">{stats.device}</span>
          </div>
          <div className='w-1/3 h-40 bg-zinc-50 rounded-xl flex flex-col items-center justify-center mx-auto shadow'>
            <h3 className='text-xl font-semibold text-zinc-800 mb-2'>Top Referrer</h3>
            <span className="text-amber-700 font-bold text-lg">{stats.referrer}</span>
          </div>
        </div>
      </div>
    </div>
  );
}