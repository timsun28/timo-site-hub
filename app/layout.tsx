import type { Metadata } from "next";
import * as stylex from "@stylexjs/stylex";
import "@/styles/globals.css";
import { cobaltTheme } from "@/styles/cobalt.theme";
import { vars } from "@/styles/tokens.stylex";

export const metadata: Metadata = {
    title: "Timo's site shelf",
    description: "A small index of Timo's side projects and apps.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body {...stylex.props(cobaltTheme, styles.body)}>{children}</body>
        </html>
    );
}

const styles = stylex.create({
    body: {
        backgroundColor: vars.colorPaper,
        color: vars.colorInk,
        fontFamily: vars.fontBody,
        minHeight: "100dvh",
    },
});
