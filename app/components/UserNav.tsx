import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function UserNav(){
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="Profil"/>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}