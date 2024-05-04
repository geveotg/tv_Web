import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./lib/AntdRegistry";
import "./globals.css";
import Providers from "./redux/provider";
import { Footer } from "antd/es/layout/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <StyledComponentsRegistry>
                <Providers>
                    <body className={inter.className}>

                        {children}

                    </body>
                </Providers>
            </StyledComponentsRegistry>
        </html>
    );
}
