import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme";
import DarkModeToggle from "./components/darkModeToggle";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"]
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Harshadeep Chowdary Kommareddi",
    description: "Harsha's personal website"
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans} ${geistMono} antialiased mx-20 transition-colors duration-300`}
            suppressHydrationWarning>
                <ThemeProvider>
                    <DarkModeToggle />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}