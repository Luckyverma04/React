import React, { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(3);

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-gray-900 text-white py-2">
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
                    <div className="hidden md:flex items-center space-x-6">
                        <span>📞 24/7 Customer Support: (800) 123-4567</span>
                        <span>🚚 Free Shipping on Orders $75+</span>
                    </div>
                    <div className="flex items-center space-x-4 ml-auto">
                        <a href="#" className="hover:text-blue-300 transition-colors">Track Order</a>
                        <a href="#" className="hover:text-blue-300 transition-colors">Help</a>
                        <a href="#" className="hover:text-blue-300 transition-colors">Sign In</a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                            <span className="text-blue-600">Shop</span>Hub
                        </h1>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search products, brands, categories..."
                                className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        {/* Search Icon - Mobile */}
                        <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>

                        {/* Wishlist */}
                        <button className="hidden md:flex items-center p-2 hover:bg-gray-100 rounded-full relative">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>

                        {/* Shopping Cart */}
                        <button className="relative p-2 hover:bg-gray-100 rounded-full">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 0 0 5 17h14M7 13v4a2 2 0 002 2h8a2 2 0 002-2v-4M7 13H5" />
                            </svg>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden p-2 hover:bg-gray-100 rounded-full"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 py-4">
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
                        <div className="relative group">
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Categories</a>
                            {/* Dropdown would go here */}
                        </div>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Electronics</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Fashion</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home & Garden</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sports</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sale</a>
                        <a href="#" className="text-red-600 hover:text-red-700 font-bold transition-colors">🔥 Deals</a>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-200">
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                />
                                <div className="space-y-2">
                                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Home</a>
                                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Categories</a>
                                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Electronics</a>
                                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Fashion</a>
                                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Home & Garden</a>
                                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Sports</a>
                                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Sale</a>
                                    <a href="#" className="block py-2 text-red-600 hover:text-red-700 font-bold">🔥 Deals</a>
                                    <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">Wishlist</a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}