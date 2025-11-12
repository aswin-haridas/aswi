"use client";

import { useState } from "react";

export default function HomePage() {
  const [selectedIndex, setSelectedIndex] = useState(2);

  const menuItems = [
    { label: "ABOUT", disabled: false, href: "/about" },
    { label: "PROJECTS", disabled: false, href: "/projects" },
    { label: "BLOG", disabled: false, href: "/blogs" },
    { label: "CONTACT", disabled: false, href: "/contact" },
  ];

  return (
    <>
      <main className="relative flex items-center justify-start w-screen h-screen overflow-hidden bg-black">
        {/* Fullscreen Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover glitch-image"
            style={{
              filter: "brightness(0.5) contrast(1.3) saturate(0.8)",
            }}
          >
            <source src="/eye.mp4" type="video/mp4" />
          </video>
          {/* Glitch overlay */}
          <div className="absolute inset-0 glitch-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent opacity-90" />
        </div>

        {/* Scanlines Effect */}
        <div className="absolute inset-0 z-10 scanlines pointer-events-none" />

        {/* Menu Container */}
        <div className="relative z-20 ml-20 space-y-6">
          {/* SOMA Title */}
          <h1 className="text-8xl font-bold text-white mb-16 tracking-wider glitch-text">
            Aswin
          </h1>

          {/* Menu Items */}
          <nav className="space-y-4">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => !item.disabled && setSelectedIndex(index)}
                className={`
                  block text-left text-2xl font-bold tracking-wide transition-all duration-200
                  ${
                    item.disabled
                      ? "text-gray-600 cursor-not-allowed pointer-events-none"
                      : "text-white cursor-pointer"
                  }
                  ${
                    selectedIndex === index && !item.disabled
                      ? "text-cyan-400 pl-4"
                      : ""
                  }
                  ${
                    selectedIndex === index && !item.disabled
                      ? "bg-cyan-900/30 pr-8"
                      : ""
                  }
                  hover:${!item.disabled ? "text-cyan-400" : ""}
                `}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Vignette Effect */}
        <div className="absolute inset-0 z-30 pointer-events-none bg-radial-gradient" />
      </main>
    </>
  );
}
