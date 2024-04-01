import Link from "next/link"
import { ThemeToggle } from "./Themetoggle"
import { Button } from "@/components/ui/button"
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";


const Navbar = () => {
    return (
        <nav className="border-b bg-background h-[10vh] flex items-center">
            <div className="container mx-auto flex items-center justify-between">
                <Link href={'/'}><h1 className="text-3xl font-bold">Racine<span className="text-primary">SaaS</span></h1></Link>
                <div className="flex items-center gap-x-5">
                    <ThemeToggle />
                    <div className="flex items-center gap-x-5">
                        <LoginLink>

                            <Button>Sign In</Button>
                        </LoginLink>
                        <RegisterLink>
                            <Button variant={'secondary'}>Sign Up</Button>
                        </RegisterLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar