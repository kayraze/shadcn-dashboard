"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { LogOut, Moon, Settings, Sun, User } from "lucide-react"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import { SidebarTrigger } from "./ui/sidebar";


const Navbar = () => {
  const { setTheme } = useTheme();

  return (
    <nav className='h-16 shadow-md p-4 flex items-center justify-between sticky top-0 bg-background z-10'>
      {/* { Left } */}
      <SidebarTrigger />
      {/* { Right } */}
      <div className="flex items-center gap-4 h-full">
        <Link href='/'>Dashboard</Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-al dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Dark Mode</span>
            </Button>

            
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>asd
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>


        <DropdownMenu>
          <DropdownMenuTrigger asChild>            
            <Avatar className="h-full aspect-square rounded-full overflow-hidden cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="" />
              <AvatarFallback className="w-full h-full flex items-center justify-center bg-gray-200 text-sm text-gray-500" >CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-2"/>
              User
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="h-[1.2rem] w-[1.2rem] mr-2"/>
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-2"/>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}



export default Navbar