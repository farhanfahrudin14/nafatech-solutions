"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface Package {
  name: string;
  price: string;
  popular?: boolean;
  features: string[];
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<
    "website" | "desain" | "sistem" | "branding"
  >("website");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const packages: Record<
    "website" | "desain" | "sistem" | "branding",
    Package[]
  > = {
    website: [
      {
        name: "Landing Page",
        price: "Rp 500.000",
        features: [
          "1 Halaman",
          "Desain responsif",
          "Contact Form / WhatsApp",
          "Revisi 2x",
        ],
      },
      {
        name: "UMKM Website",
        price: "Rp 750.000",
        popular: true,
        features: [
          "3–5 Halaman",
          "Katalog Produk",
          "Hosting & Domain Gratis 1 Bulan",
          "Revisi 3x",
        ],
      },
      {
        name: "Sistem Informasi",
        price: "Mulai Rp 1.500.000",
        features: [
          "Login Admin",
          "CRUD Database",
          "Laporan Export PDF/Excel",
          "Revisi Unlimited",
        ],
      },
    ],
    desain: [
      {
        name: "UI/UX Desain",
        price: "Rp 100.000 / Halaman",
        features: ["Desain Figma Modern", "Prototype Interaktif", "1 Revisi"],
      },
      {
        name: "Wireframe",
        price: "Rp 50.000 / Halaman",
        popular: true,
        features: ["Skema Struktur Tampilan", "Penjelasan Alur", "Revisi 1x"],
      },
      {
        name: "Flowchart Sistem",
        price: "Rp 50.000 / Diagram",
        features: ["BPMN / UML", "Format PDF/PNG", "Revisi 1x"],
      },
    ],
    sistem: [
      {
        name: "Perancangan Basis Data",
        price: "Rp 300.000 / Sistem",
        features: ["Diagram ERD", "Desain Tabel & Relasi", "Revisi 1x"],
      },
      {
        name: "Sistem Informasi",
        price: "Mulai Rp 1.500.000",
        features: [
          "Login Admin",
          "CRUD Database",
          "Laporan Export PDF/Excel",
          "Revisi Unlimited",
        ],
      },
    ],
    branding: [
      {
        name: "Branding",
        price: "Rp 200.000 / Paket",
        features: ["Logo", "Palet Warna", "Guideline Brand"],
      },
      {
        name: "Konten Kreatif",
        price: "Rp 150.000 / Konten",
        features: ["Desain Post Media Sosial", "Template Konten", "Revisi 1x"],
      },
    ],
  };

  const currentPackages = packages[activeTab];

  const nameMap: Record<string, string> = {
    website: "Website",
    desain: "Desain UI/UX",
    sistem: "Perancangan Sistem",
    branding: "Branding & Konten Kreatif",
  };

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600">
          Pilih Kebutuhanmu 🚀
        </h1>
        <p className="text-gray-600 mt-2">
          Solusi lengkap untuk tugas & website profesional
        </p>
      </div>

      {/* Tabs Desktop */}
      <div className="hidden md:flex justify-center gap-4 mb-12 flex-wrap">
        {Object.keys(packages).map((key) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              className={`px-6 py-2 rounded-full font-semibold border transition ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }`}
              onClick={() => setActiveTab(key as any)}
            >
              {nameMap[key]}
            </button>
          );
        })}
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden mb-6 relative">
        {/* Label */}
        <p className="text-sm text-gray-600 mb-1 text-center">
          Pilih Kategori Paket
        </p>

        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="w-full bg-blue-600 text-white rounded-md py-3 px-4 flex justify-between items-center font-semibold shadow-md hover:bg-blue-700 transition"
        >
          {nameMap[activeTab]}
          <span
            className={`transform transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full mt-2 left-0 w-full bg-blue-50 rounded-md shadow-lg overflow-hidden z-50"
            >
              {Object.keys(packages).map((key) => (
                <motion.button
                  key={key}
                  onClick={() => {
                    setActiveTab(key as any);
                    setDropdownOpen(false);
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="w-full text-left px-4 py-3 hover:bg-blue-100 transition font-medium text-blue-600"
                >
                  {nameMap[key]}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pricing Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {currentPackages.map((p: Package, i: number) => (
          <motion.div
            key={i}
            className={`p-8 rounded-2xl shadow-lg border ${
              p.popular
                ? "border-blue-600 bg-blue-50 scale-105"
                : "border-gray-200 bg-white"
            } hover:shadow-xl transition`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -5 }}
          >
            {p.popular && (
              <p className="text-center text-sm font-semibold text-blue-700 mb-2">
                🌟 Best Seller 🌟
              </p>
            )}

            <h2 className="text-2xl font-bold text-gray-900 text-center">
              {p.name}
            </h2>

            <p className="text-center text-blue-600 font-bold text-xl mt-3">
              {p.price}
            </p>

            <div className="mt-6 space-y-2">
              {p.features.map((f: string, idx: number) => (
                <div key={idx} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle
                    size={18}
                    className="text-blue-600 min-w-[20px]"
                  />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="block text-center mt-8 bg-blue-600 text-white py-3 rounded-full shadow-md font-semibold hover:bg-blue-700 transition"
            >
              Pesan Sekarang
            </a>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-gray-500 text-sm mt-12">
        *Harga dapat berubah sesuai tingkat kesulitan dan deadline
      </p>
    </main>
  );
}
