'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";
import { CompaniesMenu, StudentsMenu } from "@/components/ui/NavigationMenu";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";

export default function NavbarComp() {
  const { user, isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Placements", href: "#placements" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
    { name: "For Companies", href: "#companies" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="JEC Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">JEC</span>
              <span className="text-xs text-gray-500 -mt-1">TPO Portal</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <CompaniesMenu />
            <StudentsMenu />
            {isSignedIn ? (
              <UserButton />
            ) : (
              <Button
                as={Link}
                href="/sign-in"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
              >
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
            <div className="px-6 py-4 space-y-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200/50 space-y-3">
                <div className="flex flex-col space-y-2">
                  <CompaniesMenu />
                  <StudentsMenu />
                </div>
                {isSignedIn ? (
                  <div className="flex justify-center">
                    <UserButton />
                  </div>
                ) : (
                  <Button
                    as={Link}
                    href="/sign-in"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}