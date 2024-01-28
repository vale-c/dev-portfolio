"use client";
import {
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import BurgerIcon from "../../public/images/burger-icon.svg";
import CloseIcon from "../../public/images/close-icon.svg";
import Image from "next/image";
export function HeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [position, setPosition] = useState("bottom");

  return (
    <header className="bg-[#011627] text-[#607B96] px-8 flex justify-between items-center md:px-10 w-full border-b border-[#2A3B4C] backdrop-blur-md">
      <div className="flex text-md h-full items-stretch">
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-4">
            <span className="mr-24">vale-c</span>
            <NavigationMenuLink
              href="/hello"
              className="border-x border-[#2A3B4C] px-8 py-3 hover:underline underline-offset-18 decoration-[#FEA55F] decoration-3"
            >
              _hello
            </NavigationMenuLink>
            <NavigationMenuLink
              href="/about-me"
              className="border-r border-[#2A3B4C] pr-8 py-3 hover:underline underline-offset-18 decoration-[#FEA55F] decoration-3"
            >
              _about-me
            </NavigationMenuLink>
            <NavigationMenuLink
              href="/projects"
              className="border-r border-[#2A3B4C] pr-8 py-3 hover:underline underline-offset-18 decoration-[#FEA55F] decoration-3"
            >
              _projects
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuLink
            className="hover:underline underline-offset-8 decoration-[#FEA55F] decoration-3"
            href="mailto:valent95@gmail.com"
          >
            _contact-me
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="md:hidden py-4">
        <DropdownMenu onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger asChild>
            {isMenuOpen ? (
              <Image alt="Close" src={CloseIcon} />
            ) : (
              <Image alt="Burger" src={BurgerIcon} />
            )}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>vale c</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={position}
              onValueChange={setPosition}
            >
              <DropdownMenuRadioItem value="_hello">
                _hello
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="_about-me">
                _about-me
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="_projects">
                _projects
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
