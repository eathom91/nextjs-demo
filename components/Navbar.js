import React from "react";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center">
            <img src="./logo.png"/>
            <div className="flex items-center">
                <a href="/"
                className="hover:bg-gray-100 text-black py-2 px-4">Sermons</a>
                <a href="/"
                className="hover:bg-gray-100 text-black py-2 px-4">Locations</a>
                <a href="/"
                className="hover:bg-gray-100 text-black py-2 px-4">About</a>
                <a href="/"
                className="hover:bg-gray-100 text-black py-2 px-4">Get Involved</a>
                <a href="/"
                className="hover:bg-gray-100 text-black py-2 px-4">Store</a>
                <a href="/"
                className="hover:bg-gray-100 text-black py-2 px-4">Online</a>
                <a href="/"
                className="hover:bg-gray-100 text-black py-2 px-4">Giving</a>
            </div>
        </nav>
    )
}