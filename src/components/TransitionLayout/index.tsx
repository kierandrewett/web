import { Router, useRouter } from "next/dist/client/router";
import React from "react";
import FadeIn from "react-fade-in";

export const TransitionLayout = ({ children }) => {
    return (
        <FadeIn delay={100} transitionDuration={500}>
            {children}
        </FadeIn>
    );
}