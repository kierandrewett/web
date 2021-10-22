import React from "react";
import { Header } from "../components/Header"
import { TransitionLayout } from "../components/TransitionLayout";

const Contact = () => {
    return (
        <>
            <Header />

            <TransitionLayout>
                <div className={"flex w-full items-center flex-col px-16 lg2:px-36"}>
                    <div className={"bg-black text-white w-full max-w-screen-2xl h-full"}>
                        <main className={"w-full py-28 xs:py-56 flex justify-center flex-col"}>
                            <small className={"text-3xl font-medium uppercase tracking-wider opacity-50"}>
                                Hey, I'm Kieran.
                            </small>

                            <h1 className={"text-6xl py-4 max-w-screen-lg leading-tight"}>
                                I am a software developer with a passion for privacy.
                            </h1>
                        </main>

                        <section id={"projects"}>
                            <small className={"text-2xl font-medium uppercase tracking-wider0"}>
                                Projects
                            </small>
                        </section>

                        <div className={"w-full gap-20 flex-wrap py-16 flex"}>
                            <div className={"flex"} style={{ width: "32rem", maxWidth: "108rem" }}>
                                <div className={"flex flex-col rounded-xl"}>
                                    <img className={"rounded-xl"} src={"https://placeimg.com/640/480/any"}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TransitionLayout>
        </>
    )
}

export default Contact;