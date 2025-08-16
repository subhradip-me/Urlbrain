import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link, BarChart3, Globe, Shield, Copy } from "lucide-react";

export default function Header() {
    const navigate = useNavigate();

    const goLogin = () => {
        navigate('/login');
    }
  return (
    <>
    {/* Header */}
      <header className="relative z-50 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <Link className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-black">linkly.ai</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Products</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Solutions</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Tools</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Resources</a>
            </nav>
            <div className="flex items-center space-x-4">
            {/* Login Button */}
              {/*<button className="bg-transparent text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded">
              Login
              </button>*/}

            {/* Get Started Button */}
              <button onClick={goLogin} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium">
                Get Started
             </button>
           </div>
          </div>
        </div>
      </header>
    </>
  )
}
