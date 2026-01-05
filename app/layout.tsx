import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop"; // ✅ gunakan alias @

export const metadata = {
  title: "NafaTechSolutions",
  description:
    "NafaTechSolutions adalah penyedia layanan digital yang berfokus pada pembuatan website, desain UI/UX, serta pembuatan dokumen visual seperti flowchart dan wireframe. Kami menghadirkan solusi modern yang responsif, mudah digunakan, dan dirancang untuk mendukung perkembangan bisnismu agar semakin relevan dan kompetitif di era digital.",
  icons: {
    icon: "/images/logo2.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <ScrollToTop /> {/* ✅ tombol scroll muncul di semua halaman */}
        <Footer />
      </body>
    </html>
  );
}
