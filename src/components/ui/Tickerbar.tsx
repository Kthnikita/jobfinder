"use client";
import React from "react";

const companies = [
  "https://purepng.com/public/uploads/large/purepng.com-intel-logologobrand-logoiconslogos-251519939644r68ft.png",
  "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png",
  "/amazon.png",
  "https://4.bp.blogspot.com/-JoVT-JSgcVk/UtQW0sJ7SmI/AAAAAAAABUI/iaWnDjwvz18/s1600/1.png",
  "https://i2.wp.com/www.verifiedmom.com/wp-content/uploads/2014/07/Netflix_Logo_Print_OneColorPMS.png?fit=8685%2C2333&ssl=1",
  "https://1000logos.net/wp-content/uploads/2021/10/Meta-Logo.png",
  "https://www.pngmart.com/files/22/Nestle-Logo-PNG-Isolated-Photo.png",
  "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png",
  "https://logos-world.net/wp-content/uploads/2021/11/Walmart-Logo.png"
];

const TickerBar = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-blue-200 h-24 flex items-center relative">
  <div className="inline-block animate-marquee">
    {companies.concat(companies).map((company, i) => (
      <span key={i} className="mx-6 inline-block">
        <div className="h-12 w-24 flex items-center justify-center">
          <img
  src={company}
  alt="Company Logo"
  className="h-full w-auto object-contain"
/>
        </div>
      </span>
    ))}
   
  </div>
   <div className="absolute h-24 w-48 left-0 flex flex-col gap-1 font-semibold justify-center bg-blue-200 border-r-0">
    <p className="text-gray-700 text-md ml-10">Industry Veterans</p>
    <p className="text-blue-950 text-md ml-10">Trust us</p>
  </div>
</div>
  );
};

export default TickerBar;
