import "@/styles/globals.css";

import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

type RootLayoutProps = {
    children: ReactNode;
};

export const metadata: Metadata = {
    title: "",
    description: "",
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
    return (
        <html lang='en' className={inter.variable} suppressHydrationWarning>
            <body className='font-sans antialiased'>{children}</body>
        </html>
    );
}
