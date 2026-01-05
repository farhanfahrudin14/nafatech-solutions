"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface Testimonial {
  image: string;
  caption: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    image: "/images/testi/2.jpeg",
    caption: "Testimoni WA",
    date: "20 November 2025",
  },
  {
    image: "/images/testi/3.jpeg",
    caption: "Testimoni WA",
    date: "24 November 2025",
  },
  {
    image: "/images/testi/4.jpeg",
    caption: "Testimoni WA",
    date: "29 November 2025",
  },
  {
    image: "/images/testi/5.jpeg",
    caption: "Testimoni WA",
    date: "2 Desember 2025",
  },
  {
    image: "/images/testi/6.jpeg",
    caption: "Testimoni WA",
    date: "12 Desember 2025",
  },
  {
    image: "/images/testi/7_new.jpeg",
    caption: "Testimoni WA",
    date: "20 Desember 2025",
  },
];

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // disable scroll saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Testimoni Lewat WhatsApp
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bukti nyata kepuasan klien yang telah mempercayakan project mereka.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => {
            const cardRef = useRef(null);
            const isInView = useInView(cardRef, {
              once: true,
              margin: "-100px",
            });

            return (
              <motion.div
                key={idx}
                ref={cardRef}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="
                  bg-white rounded-2xl overflow-hidden
                  shadow-md hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300 border border-gray-100
                "
              >
                {/* IMAGE */}
                <div
                  className="relative w-full h-80 group cursor-pointer"
                  onClick={() => setSelectedImage(t.image)}
                >
                  <Image
                    src={t.image}
                    alt={t.caption}
                    fill
                    className="object-cover"
                  />

                  {/* OVERLAY */}
                  <div
                    className="
                      absolute inset-0 bg-black/60 backdrop-blur-sm
                      opacity-0 group-hover:opacity-100
                      transition-all duration-500 ease-out
                      flex items-center justify-center
                    "
                  >
                    <span
                      className="
                        text-white text-lg font-medium
                        opacity-0 translate-y-2 scale-95
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        group-hover:scale-100
                        transition-all duration-500 ease-out
                      "
                    >
                      Lihat Testimoni
                    </span>
                  </div>
                </div>

                {/* CAPTION */}
                <div className="p-4 text-center bg-gray-50">
                  <p className="text-gray-700 text-sm font-medium">
                    {t.caption}
                  </p>
                  <p className="text-gray-400 text-xs">{t.date}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedImage}
                  alt="Testimoni"
                  fill
                  className="object-contain"
                />
              </div>

              <button
                onClick={() => setSelectedImage(null)}
                className="
                  absolute top-3 right-3
                  bg-black/70 text-white text-sm
                  px-3 py-1 rounded-md
                  hover:bg-black transition
                "
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
