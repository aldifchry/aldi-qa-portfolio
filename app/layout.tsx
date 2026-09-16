import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aldi Fachry | QA Engineer Portfolio",
  description: "QA Engineer portfolio — Manual Testing, API Testing and Automation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}