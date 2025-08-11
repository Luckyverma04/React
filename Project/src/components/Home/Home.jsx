import React, { useState } from "react";

export default function Home() {
    const [cartItems, setCartItems] = useState([]);

    const featuredProducts = [
        {
            id: 1,
            name: "Patel Premium Garam Masala",
            price: 299,
            originalPrice: 399,
            image: "https://images.pexels.com/photos/4198015/pexels-photo-4198015.jpeg?auto=compress&cs=tinysrgb&w=600",
            category: "Spices",
            stock: 45,
            discount: 25
        },
        {
            id: 2,
            name: "Patel Basmati Rice 5kg",
            price: 549,
            originalPrice: 649,
            image: "https://images.pexels.com/photos/4110008/pexels-photo-4110008.jpeg?auto=compress&cs=tinysrgb&w=600",
            category: "Grains",
            stock: 28,
            discount: 15
        },
        {
            id: 3,
            name: "Patel Mango Pickle 500g",
            price: 199,
            originalPrice: 249,
            image: "https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg?auto=compress&cs=tinysrgb&w=600",
            category: "Pickles",
            stock: 67,
            discount: 20
        },
        {
            id: 4,
            name: "Patel Pure Desi Ghee 1kg",
            price: 799,
            originalPrice: 899,
            image: "https://images.pexels.com/photos/4393668/pexels-photo-4393668.jpeg?auto=compress&cs=tinysrgb&w=600",
            category: "Dairy",
            stock: 15,
            discount: 11
        },
        {
            id: 5,
            name: "Patel Turmeric Powder 200g",
            price: 89,
            originalPrice: 120,
            image: "https://images.pexels.com/photos/4198009/pexels-photo-4198009.jpeg?auto=compress&cs=tinysrgb&w=600",
            category: "Spices",
            stock: 89,
            discount: 26
        },
        {
            id: 6,
            name: "Patel Mixed Dal 1kg",
            price: 159,
            originalPrice: 199,
            image: "https://images.pexels.com/photos/4110011/pexels-photo-4110011.jpeg?auto=compress&cs=tinysrgb&w=600",
            category: "Pulses",
            stock: 34,
            discount: 20
        }
    ];

    const categories = [
        { name: "Spices & Masalas", icon: "🌶️", productCount: 45 },
        { name: "Rice & Grains", icon: "🌾", productCount: 28 },
        { name: "Pickles", icon: "🥒", productCount: 35 },
        { name: "Dairy Products", icon: "🥛", productCount: 22 },
        { name: "Pulses & Lentils", icon: "🫘", productCount: 38 },
        { name: "Snacks", icon: "🍪", productCount: 42 }
    ];

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
        alert(`${product.name} added to cart!`);
    };

    return (
        <div className="mx-auto w-full max-w-7xl">
            {/* Hero Banner */}
            <section className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white py-20 px-4 mx-2 sm:mx-16 rounded-lg mb-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                        Welcome to Patel Products
                    </h1>
                    <p className="text-xl mb-8 opacity-90">
                        Your trusted source for authentic Indian groceries and traditional products
                    </p>
                    <div className="bg-yellow-400 text-yellow-900 inline-block px-6 py-3 rounded-full font-bold text-lg mb-8">
                        FREE DELIVERY on orders above ₹500
                    </div>
                    <div>
                        <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors mr-4">
                            Shop Now
                        </button>
                        <button className="border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-all">
                            View Offers
                        </button>
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="py-16 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
                    <p className="text-lg text-gray-600">Browse our extensive collection</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer text-center group">
                            <div className="text-3xl mb-3">{category.icon}</div>
                            <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-600">{category.name}</h3>
                            <p className="text-sm text-gray-500">{category.productCount} items</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Sellers</h2>
                        <p className="text-lg text-gray-600">Top products loved by our customers</p>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="relative">
                                    <img 
                                        className="w-full h-48 object-cover" 
                                        src={product.image} 
                                        alt={product.name} 
                                    />
                                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                                        {product.discount}% OFF
                                    </div>
                                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                                        {product.stock} in stock
                                    </div>
                                </div>
                                
                                <div className="p-4">
                                    <span className="text-xs text-orange-600 font-medium uppercase">{product.category}</span>
                                    <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
                                    
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                                            <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
                                        </div>
                                        <div className="flex text-yellow-400">
                                            ⭐⭐⭐⭐⭐
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={() => addToCart(product)}
                                        className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-8">
                        <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                            View All Products →
                        </button>
                    </div>
                </div>
            </section>

            {/* Special Offers */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">🎉 Grand Opening Sale! 🎉</h2>
                        <p className="text-lg mb-6">Use code <span className="bg-yellow-400 text-green-800 px-3 py-1 rounded font-bold">PATEL30</span> for 30% off your first order</p>
                        <p className="text-sm opacity-80">*Valid for orders above ₹999. Limited time offer.</p>
                    </div>
                </div>
            </section>

            {/* Customer Reviews */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">What Our Customers Say</h2>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex text-yellow-400 justify-center mb-4">⭐⭐⭐⭐⭐</div>
                            <p className="text-gray-600 mb-4">"Amazing quality spices! The garam masala is so aromatic and fresh."</p>
                            <p className="font-semibold">- Sunita M.</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex text-yellow-400 justify-center mb-4">⭐⭐⭐⭐⭐</div>
                            <p className="text-gray-600 mb-4">"Fast delivery and authentic products. Highly recommended!"</p>
                            <p className="font-semibold">- Rakesh P.</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex text-yellow-400 justify-center mb-4">⭐⭐⭐⭐⭐</div>
                            <p className="text-gray-600 mb-4">"Best quality rice and dal. My family loves Patel products!"</p>
                            <p className="font-semibold">- Meera S.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}