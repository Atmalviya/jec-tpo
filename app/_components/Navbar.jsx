'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import {logo} from '@/public/logo.png'
import Image from "next/image";
import { CompaniesMenu, StudentsMenu } from "@/components/ui/NavigationMenu";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function NavbarComp() {
  const { user, isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Placements",
    "About Us",
    "Contact Us",
    "For Companies",
    "Sign Up",
    "Sign In",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className=" bg-primary">
      <NavbarContent color="secondary">
        <NavbarMenuToggle 
        color="secondary"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand> 
        <Image
              src="/logo.png"
              alt="Hero"
              width={50}
              height={50}
              className="object-contain hidden md:block h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          <p className="font-bold text-white ">JEC</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10">
        <NavbarItem>
          <Link color="secondary" href="#">
            Placements
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="secondary" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <CompaniesMenu />
        </NavbarItem>
        <NavbarItem>
          <StudentsMenu />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`} color="secondary">
            <Link
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
          
        ))}
      </NavbarMenu>
      
      {isSignedIn && (
          <div className="flex items-center gap-5">
            <UserButton />
          </div>
        )}
    </Navbar>
  );
}