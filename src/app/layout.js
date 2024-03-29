// components/RootLayout.js

import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { TableDemo } from "./components/PatientsList";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Health App",
  description: "Generated by Maki ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
