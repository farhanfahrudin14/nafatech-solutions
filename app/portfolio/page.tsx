"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  client: string;
  desc: string;
  img: string;
}

const projects: Project[] = [
  {
    title: "ePengantar",
    client: "Kementerian Ketenagakerjaan",
    desc: "Aplikasi pengelolaan surat pengantar berbasis web dengan alur persetujuan terstruktur.",
    img: "/images/coba.jpg",
  },
  {
    title: "Sosialoka Web App",
    client: "Sosialoka",
    desc: "Platform manajemen kampanye sosial dan monitoring performa konten. Ini deskripsi contoh yang super panjang biar kamu bisa lihat tombol Lihat Selengkapnya muncul di bawah card jika karakternya melebihi batas tertentu.",
    img: "/images/sosialoka.png",
  },
  {
    title: "Bizhub",
    client: "Kementerian Ketenagakerjaan",
    desc: "Ekosistem kolaborasi bisnis dan pelatihan kerja dalam satu platform.",
    img: "/images/bizhub.png",
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showDescription, setShowDescription] = useState(false);
  const MAX_LENGTH = 120;

  // Disable scroll saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const openImageModal = (project: Project) => {
    setShowDescription(false);
    setSelected(project);
  };

  const openDescriptionModal = (project: Project) => {
    setShowDescription(true);
    setSelected(project);
  };

  const hideModal = () => {
    setSelected(null);
    setShowDescription(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Proyek Pilihan Kami
          </h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto mt-4"
          >
            Kami menampilkan beberapa proyek terbaik kami yang mewakili kualitas
            dan performa layanan kami.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, index) => {
            const isLong = p.desc.length > MAX_LENGTH;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 cursor-pointer"
              >
                {/* Klik gambar → modal gambar */}
                <div
                  className="relative w-full h-56 group"
                  onClick={() => openImageModal(p)}
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-1">{p.client}</p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {p.title}
                  </h3>

                  {/* Deskripsi pendek */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {isLong ? p.desc.slice(0, MAX_LENGTH) + "..." : p.desc}
                  </p>

                  {isLong && (
                    <button
                      className="mt-3 text-blue-600 underline text-sm"
                      onClick={() => openDescriptionModal(p)}
                    >
                      Lihat Selengkapnya
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-lg w-full relative p-6 flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {!showDescription && (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {selected.title}
                  </h3>
                  <div className="relative w-full h-72 md:h-80">
                    <Image
                      src={selected.img}
                      alt={selected.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </>
              )}

              {showDescription && (
                <div className="text-center mt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {selected.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {selected.desc}
                  </p>
                </div>
              )}

              <button
                onClick={hideModal}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition self-center"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
