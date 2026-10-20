import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Berkeley Competitive Robotics", description: "Competitive robotics team at Berkeley", icons: {
  icon: "/images/CRB_Logo.jpg"}
 };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full "><Navbar />{children}<Footer /></body>
    </html>
  );
}

