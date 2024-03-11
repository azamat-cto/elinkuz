import "@/styles/globals.css";

import { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

type RootLayoutProps = {
    children: ReactNode;
};

export const metadata: Metadata = {
    title: "elinkuz",
    description: "",
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang="en" className={poppins.variable} suppressHydrationWarning>
            <body className="font-sans antialiased">
                <main>{children}</main>
            </body>
        </html>
    );
}
