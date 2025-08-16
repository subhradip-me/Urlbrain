import React, { useState } from "react";
import { Link, BarChart3, Globe, Shield, Copy } from "lucide-react";
import { Header } from "../components/navigation";
import axios from "axios"

export default function HomePage() {
  const [url, setValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [shortUrl, setShortUrl] = useState("");

  const getUrl = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/create", { url });
      console.log(data.shortUrl);
      setShortUrl(data.shortUrl);
      setShowPopup(true);
    } catch (error) {
      setShortUrl("Error shortening URL");
      setShowPopup(true);
    }
  };

  console.log(url);

  return (
    <div className="h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, gray 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Header */}
      <Header />

      {/* Floating UI Elements */}
      <div className="absolute top-20 left-10 bg-white rounded-xl shadow-lg p-4 z-5 hidden lg:block">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <div className="text-sm font-semibold">Analytics</div>
            <div className="text-xs text-gray-500">Real-time tracking</div>
          </div>
        </div>
      </div>

      <div className="absolute top-32 right-16 bg-white rounded-xl shadow-lg p-4 z-5 hidden lg:block">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Globe className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-sm font-semibold">Custom Domain</div>
            <div className="text-xs text-gray-500">Brand your links</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-96 left-16 bg-white rounded-xl shadow-lg p-4 z-5 hidden lg:block">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <div className="text-sm font-semibold">Secure Links</div>
            <div className="text-xs text-gray-500">Protected & safe</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-96 right-30 bg-white rounded-xl shadow-lg p-6 z-5 hidden lg:block">
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600 mb-1">10M+</div>
          <div className="text-sm text-gray-600">Links Shortened</div>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 pt-12 pb-32">
        <div className="container mx-auto px-6 text-center">
          {/* Central Logo/Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-white rounded-2xl shadow-xl mx-auto flex items-center justify-center mb-8">
              <Link className="w-12 h-12 text-black" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight max-w-5xl mx-auto">
            World's First AI-Powered
            <br />
            <span className="text-purple-600">URL Shortener</span>
          </h1>

          {/* Subtitle */}
          <p className="text-md text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
            Smart URL shortening that learns, optimizes, and manages all in one place.
            <br />
            10x Growth. Automated.
          </p>

          {/* User Trust Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-white"></div>
            </div>
            <span className="ml-3 text-sm text-gray-600 font-medium">4M+ Trusted users</span>
          </div>



          {/* Platform Icons */}
          {/* ... You can keep your platform SVGs as they are, since they’re JSX-friendly */}

          
        </div>
      </main>

      {/* Bottom Mockups */}
      <div className="absolute bottom-0 left-0 right-0 z-5">
        <div className="relative h-32">
          <div className="absolute bottom-25 left-8 rotate-20 bg-white rounded-xl shadow-2xl p-4 w-64 hidden lg:block">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Copy className="w-4 h-4 text-purple-600" />
              </div>
              <div className="text-sm font-semibold">Quick Shorten</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">Original URL</div>
              <div className="text-xs text-gray-800 truncate">https://example.com/very-long-url...</div>
              <div className="text-xs text-purple-600 mt-2">linkly.ai/abc123</div>
            </div>
          </div>

          <div className="absolute bottom-30 right-10 rotate-345 bg-white rounded-xl shadow-2xl p-4 w-72 hidden lg:block">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-semibold">Link Performance</div>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">+24%</div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Total Clicks</span>
                <span className="font-semibold">1,247</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Today</span>
                <span className="font-semibold">89</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
