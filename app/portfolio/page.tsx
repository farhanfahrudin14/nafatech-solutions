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
    title: "Website Sistem Infomasi SDN 3 Sikampuh",
    client: "Proyek Website",
    desc: "Website Sistem Informasi SDN 3 Sikampuh ini dikembangkan menggunakan CodeIgniter 3 dengan desain modern, responsif, dan mudah digunakan untuk mendukung penyampaian informasi sekolah. Website ini mencakup halaman Beranda; halaman Profil berisi sejarah, visi misi, struktur organisasi, fasilitas, dan daftar guru; serta halaman Akademik yang memuat ekstrakurikuler, prestasi, dan data siswa. Tersedia juga halaman Berita, PPDB, Kontak, serta halaman Admin untuk mengelola seluruh konten dan pengaturan website. Dengan dukungan CI3, MySQL, Bootstrap, dan jQuery & AJAX, sistem ini mampu menyajikan informasi secara cepat, terstruktur, dan optimal di berbagai perangkat.",
    img: "/images/portfolio/portfolio1.png",
  },
  {
    title: "Website Sistem Infomasi Pariwisata Jawa Tengah",
    client: "Proyek Website",
    desc: "Website Sistem Informasi Pariwisata Jawa Tengah ini dikembangkan menggunakan CodeIgniter 4 untuk menyediakan informasi destinasi wisata secara lebih terstruktur dan mudah diakses. Website ini menampilkan daftar paket wisata, detail lokasi, kategori wisata, serta informasi fasilitas yang tersedia di setiap destinasi. Selain halaman utama dan daftar paket wisata, sistem ini juga dilengkapi halaman admin yang memungkinkan pengelolaan penuh terhadap data destinasi, kategori, paket, dan informasi tambahan lainnya. Dengan dukungan CI3, MySQL, Bootstrap, website ini dirancang responsif, cepat, dan nyaman digunakan di berbagai perangkat.",
    img: "/images/portfolio/portfolio3.png",
  },
  {
    title: "Website Sistem Infomasi SDN Kalikidang",
    client: "Proyek Website",
    desc: "Website Sistem Informasi SDN Kalikidang ini dikembangkan menggunakan CodeIgniter 3 dengan tampilan modern dan responsif untuk mempermudah penyampaian informasi sekolah. Website ini terdiri dari halaman Beranda, halaman Profil yang mencakup sejarah, visi misi, struktur organisasi, fasilitas, dan daftar guru, serta halaman Akademik yang berisi ekstrakurikuler, materi pelajaran, dan prestasi siswa. Selain itu tersedia halaman Berita, Galeri, PPDB, serta Kontak untuk memudahkan pengunjung memperoleh informasi penting. Website ini juga dilengkapi halaman Admin yang memungkinkan pengelolaan penuh terhadap semua data dan konten yang ditampilkan. Dengan dukungan CI3, MySQL, Bootstrap, dan jQuery & AJAX, sistem ini mampu menyajikan informasi secara cepat, teratur, dan optimal di berbagai perangkat.",
    img: "/images/portfolio/portfolio2.png",
  },
  {
    title: "Website Sistem Pengelolaan UMKM Fokusku UMP",
    client: "Proyek Website",
    desc: "Website Sistem Pengelolaan UMKM Fokusku UMP ini dikembangkan sebagai platform terpadu untuk mengelola dan menampilkan informasi produk UMKM binaan UMP. Sistem ini memiliki tiga jenis halaman utama: halaman User untuk melihat daftar produk, detail UMKM, dan informasi lokasi; halaman Seller untuk mengelola produk, profil usaha, serta laporan penjualan; serta halaman Admin untuk mengatur seluruh data, termasuk manajemen seller, produk, kategori, dan pengaturan sistem. Website ini dibangun menggunakan Next.js pada frontend, Laravel pada backend, serta MySQL sebagai basis data, sehingga menghasilkan performa yang cepat, aman, dan responsif di berbagai perangkat.",
    img: "/images/portfolio/portfolio4.png",
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
                  className="relative w-full h-56 group cursor-pointer"
                  onClick={() => openImageModal(p)}
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />

                  {/* Overlay Hover */}
                  <div
                    className="
    absolute inset-0 
    bg-black/60 backdrop-blur-sm
    opacity-0 group-hover:opacity-100
    transition-all duration-500 ease-out
    flex items-center justify-center
  "
                  >
                    <span
                      className="
      text-white text-l font-medium
      opacity-0 translate-y-2 scale-95
      group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100
      transition-all duration-500 ease-out
    "
                    >
                      Lihat Gambar
                    </span>
                  </div>
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
                      className="mt-3 text-blue-600 underline text-sm cursor-pointer"
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

                  {/* Gambar modal */}
                  <div className="relative w-full h-72 md:h-80 cursor-pointer">
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

              {/* Tombol Tutup */}
              <button
                onClick={hideModal}
                className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition self-center cursor-pointer"
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
