import { ReactNode } from "react";
import DashboardNav from "../components/DashboardNav";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "../lib/db";

async function getData({
    email, id,
    FirstName,
    LastName,
    profileImage
}: {
    email: string; id: string;
    FirstName: string | undefined | null;
    LastName: string | undefined | null;
    profileImage: string | undefined | null
}) {

    const user = await prisma.user.findUnique({
        where: { id: id },
        select: { id: true, stripeCustomerId: true },
    })

    // If the user is not in our db... let us create him.
    if (!user) {

        const name = `${FirstName ?? ''} ${LastName ?? ''}`

        await prisma.user.create({
            data: {
                id: id,
                email: email,
                name: name,

            }
        })
    }
}

export default async function DashboardLayout({ children }: { children: ReactNode }) {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    if (!user) {
        redirect('/')
    }
    await getData({
        email: user.email as string,
        FirstName: user.family_name as string,
        LastName: user.given_name as string,
        id: user.id as string,
        profileImage: user.picture
    })
    return (
        <div className="flex flex-col space-y-6 mt-10">
            <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
                <aside className="hidden w-[200px] flex-col md:flex">
                    <DashboardNav />
                </aside>
                <main>{children}</main>
            </div>
        </div>
    )
}