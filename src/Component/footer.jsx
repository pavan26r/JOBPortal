import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
return ( <div className="w-full bg-white shadow-inner py-6 px-8 flex flex-col md:flex-row items-center justify-between text-gray-600">

```
  {/* Left - Logo */}
  <div className="flex items-center gap-3">
    <img width={160} src={assets.logo} alt="Logo" />
  </div>

  {/* Middle - Copyright */}
  <p className="text-sm mt-4 md:mt-0">
    © Copyright @PavanRajput.dev | All rights reserved
  </p>

  {/* Right - Social Icons */}
  <div className="flex gap-4 mt-4 md:mt-0">
    <a href="" target="_blank" rel="noreferrer">
                <img src={assets.instagram_icon} alt="App Store" className="h-12 hover:scale-105 transition" />
              </a>
       <a href="" target="_blank" rel="noreferrer">
                <img src={assets.instagram_icon} alt="App Store" className="h-12 hover:scale-105 transition" />
              </a>
                 <a href="" target="_blank" rel="noreferrer">
                <img src={assets.instagram_icon} alt="App Store" className="h-12 hover:scale-105 transition" />
              </a>
  </div>
</div>
)
};

export default Footer;
