"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Gift, Percent } from "lucide-react";

interface Promo {
  title: string;
  discount: string;
  description: string;
  duration: string;
  active?: boolean;
}

export default function PromotionalPackage() {
  const promos: Promo[] = [
    {
      title: "🔥 New Season Boost",
      discount: "Diskon 25%",
      description:
        "Dapatkan potongan harga 25% untuk semua paket joki website & sistem hingga akhir bulan ini.",
      duration: "Berlaku sampai 30 November 2025",
      active: true,
    },
    {
      title: "💎 Bundle Bonus Point",
      discount: "Gratis 1 Paket",
      description:
        "Beli 3x paket joki (kategori apa pun), gratis 1x tambahan tanpa biaya.",
      duration: "Khusus untuk pengguna baru",
    },
    {
      title: "🎁 Weekend Promo",
      discount: "Diskon 15%",
      description:
        "Diskon setiap Sabtu & Minggu untuk semua layanan desain dan branding.",
      duration: "Berlaku setiap akhir pekan",
    },
  ];

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600">
          Promo & Penawaran Spesial 🎉
        </h1>
        <p className="text-gray-600 mt-2">
          Nikmati berbagai promo menarik untuk semua kategori layanan kami
        </p>
      </div>

      {/* Promo Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {promos.map((promo, i) => (
          <motion.div
            key={i}
            className={`p-8 rounded-2xl shadow-lg border relative overflow-hidden ${
              promo.active
                ? "border-blue-600 bg-blue-50 scale-105"
                : "border-gray-200 bg-white"
            } hover:shadow-xl transition`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -5 }}
          >
            {promo.active && (
              <p className="absolute top-3 right-3 text-xs font-semibold bg-blue-600 text-white px-3 py-1 rounded-full shadow-sm">
                Aktif
              </p>
            )}

            <div className="flex justify-center mb-3">
              {promo.active ? (
                <Gift className="text-blue-600 w-8 h-8" />
              ) : (
                <Percent className="text-blue-500 w-8 h-8" />
              )}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 text-center">
              {promo.title}
            </h2>

            <p className="text-center text-blue-600 font-bold text-xl mt-3">
              {promo.discount}
            </p>

            <div className="mt-4 space-y-2 text-gray-700 text-sm">
              <p>{promo.description}</p>
              <p className="text-gray-500 italic text-xs mt-3">
                {promo.duration}
              </p>
            </div>

            <a
              href="/contact"
              className="block text-center mt-8 bg-blue-600 text-white py-3 rounded-full shadow-md font-semibold hover:bg-blue-700 transition"
            >
              Klaim Promo Sekarang
            </a>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-gray-500 text-sm mt-12">
        *Promo dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya
      </p>
    </main>
  );
}
