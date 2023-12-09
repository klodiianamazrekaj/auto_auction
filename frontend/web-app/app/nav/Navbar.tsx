'use client'

import React from 'react'

//icons
import { RiAuctionLine } from "react-icons/ri";

export default function Navbar() {
    console.log('Client component')
    return (
        <header 
            className='sticky top-0 z-50 flex justify-between 
                bg-white p-5 items-center text-gray-800 shadow-md'>
            <div className='flex items-center gap-2 text-3xl font-semibold text-red-500'>
                <RiAuctionLine size={34}/>
                <div>Auto Auction</div>
            </div>
            <div>Search</div>
            <div>Login</div>
        </header>
    )
}
