import React from "react";
import Link from "next/link"
import { useRouter } from "next/dist/client/router";

export const Header = () => {
    const { route } = useRouter();

    console.log(route)

    return (
        <header className={"w-full sticky top-0 flex justify-center rounded-lg z-50 bg-black filter backdrop-saturate-200 backdrop-filter backdrop-blur-lg bg-opacity-80"}>
            <div className={"flex w-full h-36 items-center justify-between px-16 lg2:px-36"}>
                <Link href={"/"}>
                    <a>
                        <img className={"w-12 h-12 rounded-full"} src={"https://github.com/EnderDev.png"}></img>
                    </a>
                </Link>
                <ul className={`h-10 items-center gap-12 hidden md:flex`}>
                    <li className={`flex h-10 border-b-4 ${route == "/projects" ? `border-white opacity-100` : `border-transparent`} opacity-40 hover:opacity-100 group hover:border-white transition-all`}>
                        <Link href={"/projects"}>
                            <a 
                                className={"text-xl font-semibold uppercase transition-opacity tracking-wider"}
                            >
                                Projects
                            </a>
                        </Link>
                    </li>

                    <li className={`flex h-10 border-b-4 ${route == "/contact" ? `border-white opacity-100` : `border-transparent`} opacity-40 hover:opacity-100 group hover:border-white transition-all`}>
                        <Link href={"/contact"}>
                            <a 
                                className={"text-xl font-semibold uppercase transition-opacity tracking-wider"}
                            >
                                Contact
                            </a>
                        </Link>
                    </li>

                    <li className={`flex h-10 border-b-4 ${route == "/resume" ? `border-white opacity-100` : `border-transparent`} opacity-40 hover:opacity-100 group hover:border-white transition-all`}>
                        <Link href={"/resume"}>
                            <a 
                                className={"text-xl font-semibold uppercase transition-opacity tracking-wider"}
                            >
                                Résumé
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}