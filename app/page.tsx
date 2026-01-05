"use client";

import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Promo {
  title: string;
  desc: string;
  img: string;
  label: string;
  info: string;
  oldPrice?: string;
  price?: string;
}

export default function Home() {
  const [current, setCurrent] = useState<number>(0);
  const [openImage, setOpenImage] = useState<string | null>(null);
  const [direction, setDirection] = useState<number>(0);

  const promos: Promo[] = [
    {
      title: "Promo Pembuatan Landing Page seharga 450k",
      desc: "Buat landing page dengan performa top, design yang cantik, dan proses cepat.",
      img: "/images/promo/promo1.png",
      label: "Promo",
      oldPrice: "500k",
      price: "450k",
      info: "Promo aktif bulan ini • Kuota terbatas",
    },

    {
      title: "Gratis Konsultasi Desain Website",
      desc: "Konsultasi kebutuhan websitemu secara gratis dengan tim kami.",
      img: "/images/promo/promo2.png",
      label: "Gratis",
      info: "Tersedia untuk pelanggan baru • Berlaku bulan ini",
    },
    {
      title: "Diskon 25% untuk Sistem Informasi Instansi",
      desc: "Bangun sistem informasi kampus atau instansi dengan harga hemat.",
      img: "/images/promo/promo3.png",
      label: "Diskon",
      info: "Berlaku hingga akhir bulan • Kuota terbatas",
    },
  ];

  const nextSlide = () => {
    setDirection(-1); // maju → muncul dari kanan
    setCurrent((prev) => (prev + 1) % promos.length);
  };

  const prevSlide = () => {
    setDirection(1); // mundur → muncul dari kiri
    setCurrent((prev) => (prev === 0 ? promos.length - 1 : prev - 1));
  };

  // Hooks untuk animasi scroll
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });

  const promoRef = useRef(null);
  const isPromoInView = useInView(promoRef, { once: true, margin: "-100px" });

  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-6 md:px-20 pt-20"
      >
        <motion.div
          className="text-center md:text-left md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 leading-tight">
            Solusi Kebutuhan Digital Terbaik, Bersama{" "}
            <span className="text-gray-900">NafaTechSolutions</span>
          </h1>

          <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto md:mx-0">
            Kami menyediakan berbagai layanan digital mulai dari pembuatan
            website, desain UI/UX, dokumentasi digital seperti flowchart &
            wireframe, dan layanan lainnya — semua dikerjakan secara
            profesional.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/process"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all"
            >
              Lihat Proses
            </a>
            <a
              href="/contact"
              className="border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 px-8 py-3 rounded-full font-semibold transition-all"
            >
              Hubungi Kami
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 md:mt-0 md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <Image
              src="/images/image.png"
              alt="Ilustrasi Pembuatan Website"
              width={500}
              height={500}
              className="w-[500px] md:w-[500px] object-contain drop-shadow-lg"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Tentang Kami */}
      <motion.section
        ref={aboutRef}
        className="py-16 bg-gray-50 text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Tentang NafaTechSolutions
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
          NafaTechSolutions adalah penyedia layanan digital yang berfokus pada
          pembuatan website, desain UI/UX, serta pembuatan dokumen visual
          seperti flowchart dan wireframe. Kami menghadirkan solusi modern yang
          responsif, mudah digunakan, dan dirancang untuk mendukung perkembangan
          bisnismu agar semakin relevan dan kompetitif di era digital.
        </p>
      </motion.section>

      {/* Layanan Unggulan */}
      <motion.section
        ref={servicesRef}
        className="py-16 text-center px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-gray-800"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
          }}
        >
          Layanan Unggulan
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {[
            {
              title: "Pembuatan Website",
              desc: "Website profesional untuk bisnis, portofolio, hingga sistem informasi.",
            },
            {
              title: "UI/UX Design",
              desc: "Desain antarmuka modern dan pengalaman pengguna yang lebih optimal.",
            },
            {
              title: "Dokumentasi Sistem",
              desc: "Pembuatan flowchart, wireframe, dan dokumen visual pendukung proyek.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Promo Carousel */}
      <motion.section
        ref={promoRef}
        className="pt-8 pb-14 px-4 md:pt-10 md:pb-18 flex flex-col items-center bg-[#f9fafb] relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={isPromoInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 text-center">
          Promo Spesial Bulan Ini
        </h2>

        <div className="relative max-w-5xl w-full">
          <div className="relative overflow-hidden rounded-3xl min-h-[470px] md:h-[360px] flex items-center justify-center">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ x: direction === 1 ? 150 : -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction === 1 ? -150 : 150, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute w-full bg-white border border-gray-100 rounded-3xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left"
              >
                <div className="w-full md:w-1/2">
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {promos[current].label}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
                    {promos[current].title}
                  </h3>
                  <p className="text-gray-600 mb-5">{promos[current].desc}</p>
                  <a
                    href="/price/promo"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-semibold transition-all shadow-sm"
                  >
                    Lihat Detail Promo
                  </a>
                  <p className="text-sm text-gray-500 mt-4">
                    {promos[current].info}
                  </p>
                </div>

                <div
                  className="w-full md:w-1/2 cursor-pointer flex justify-center px-3 md:px-0"
                  onClick={() => setOpenImage(promos[current].img)}
                >
                  <Image
                    src={promos[current].img}
                    alt={promos[current].title}
                    width={480}
                    height={280}
                    className="rounded-xl border shadow-sm object-cover w-full h-44 xs:h-52 sm:h-60 md:h-auto md:object-contain"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tombol Navigasi Carousel */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 
  bg-blue-600 hover:bg-blue-700 w-14 h-14 items-center justify-center 
  rounded-full text-white text-2xl shadow-lg transition-all duration-300 
  active:scale-90 z-20"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 
  bg-blue-600 hover:bg-blue-700 w-14 h-14 items-center justify-center 
  rounded-full text-white text-2xl shadow-lg transition-all duration-300 
  active:scale-90 z-20"
          >
            ❯
          </button>

          <div className="flex md:hidden justify-center gap-6 mt-6">
            <button
              onClick={prevSlide}
              className="bg-blue-600 hover:bg-blue-700 w-14 h-14 flex items-center 
    justify-center rounded-full text-white text-2xl shadow-lg transition-all 
    duration-300 active:scale-90"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="bg-blue-600 hover:bg-blue-700 w-14 h-14 flex items-center 
    justify-center rounded-full text-white text-2xl shadow-lg transition-all 
    duration-300 active:scale-90"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Modal Gambar */}
        <AnimatePresence>
          {openImage && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenImage(null)}
            >
              <motion.div
                className="relative bg-white/95 p-3 rounded-2xl shadow-2xl 
                   max-w-xl w-full border border-gray-200"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.35 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Gambar ✅ Di Atas */}
                <Image
                  src={openImage!}
                  alt="Promo Image"
                  width={650}
                  height={400}
                  className="rounded-xl object-contain max-h-[70vh] mx-auto"
                />

                {/* Tombol Tutup ✅ Di Bawah */}
                <div className="w-full flex justify-center mt-4">
                  <button
                    onClick={() => setOpenImage(null)}
                    className="bg-black text-white px-5 py-2 rounded-lg
                       text-sm font-semibold shadow-md
                       hover:bg-gray-800 transition-all"
                  >
                    Tutup
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* CTA */}
      <motion.section
        ref={ctaRef}
        className="py-20 bg-blue-600 text-white text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Semua Bisa Lebih Mudah dengan Dukungan Kami
        </h2>
        <p className="mb-8 text-blue-100">
          Mulai langkah digitalmu bersama NafaTechSolutions sekarang juga!
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition-all"
        >
          Mulai Konsultasi
        </a>
      </motion.section>
    </main>
  );
}
