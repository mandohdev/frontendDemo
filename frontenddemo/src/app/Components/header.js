import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div class="scrolling-text-container">
                <div class="scrolling-text">Stake $PROOF & EARN A SHARE OF THE TRADING VOLUME OF PROOF LAUNCHED TOKENS</div>
                <div class="scrolling-text pl-5">Stake $PROOF & EARN A SHARE OF THE TRADING VOLUME OF PROOF LAUNCHED TOKENS</div>
            </div>

            <nav className="flex items-center justify-between bg-gray-800 py-4 px-6">
            {/* Left section */}
            <div className="flex items-center">
                <button className="text-white hover:text-gray-300 mr-4">Button 1</button>
            </div>
            
            {/* Middle section */}
            <div className="flex justify-center">
                <button className="text-white hover:text-gray-300 mr-4">Button 2</button>
                <button className="text-white hover:text-gray-300 mr-4">Button 3</button>
                <button className="text-white hover:text-gray-300 mr-4">Button 4</button>
                <button className="text-white hover:text-gray-300">Button 5</button>
            </div>
            
            {/* Right section */}
            <div className="flex items-center">
                <button className="text-white hover:text-gray-300 mr-4">Button 6</button>
                <button className="text-white hover:text-gray-300">Button 7</button>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;
