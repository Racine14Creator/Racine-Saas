"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CreditCard, DoorClosed, Home, Settings } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export const NavItems = [
    { name: "Home", href: '/dashboard', icon: Home },
    { name: "Settings", href: '/dahsboard/settings', icon: Settings },
    { name: "Billing", href: '/dahsboard/billing', icon: CreditCard },
]

export default function UserNav({ name, email, image }: { name: string, email: string, image: string }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10 rounded-full">
                        <AvatarImage src={image} alt="Profil" />
                        <AvatarFallback>Gra</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{name}</p>
                        <p className="text-xs leading-none text-muted-foreground">{email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {NavItems.map((item, i) => (
                        <DropdownMenuItem asChild key={i}>
                            <Link href={item.href} className="w-full flex justify-between items-center">
                                {item.name}
                                <span>
                                    <item.icon className="w-4 h-4" />
                                </span>
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <div>
                        <LogoutLink className="w-full flex justify-between items-center">
                            Logout
                            <span>
                                <DoorClosed className="w-4 h-4" />
                            </span>
                        </LogoutLink>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}