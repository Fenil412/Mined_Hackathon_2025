import React from 'react';

export default function LoginForm() {
    return (
        <div className="relative flex items-top justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-teal-800 to-purple-900 animate-gradient sm:items-center sm:pt-0">
            <div className="max-w-md mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="p-8 bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-500 animate-slide-in-left">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
                            Log In
                        </h1>
                        <form className="space-y-6">
                            {/* Email */}
                            <div className="flex flex-col">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="px-4 py-3 text-white bg-white/10 border border-gray-300/30 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 outline-none transition duration-300 placeholder:text-gray-400"
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col">
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="px-4 py-3 text-white bg-white/10 border border-gray-300/30 rounded-lg focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/50 outline-none transition duration-300 placeholder:text-gray-400"
                                />
                            </div>

                            {/* Submit ButtonA */}
                            <button
                                type="submit"
                                className="w-full px-6 py-3 text-white font-bold bg-gradient-to-r from-yellow-600 to-amber-500 rounded-lg hover:from-amber-500 hover:to-yellow-600 hover:scale-105 transform transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                            >
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}