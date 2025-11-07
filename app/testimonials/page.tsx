"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Testimonial {
  image: string;
  caption: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    image: "/images/testi/1.jpeg",
    caption: "Testimoni WA",
    date: "2 November 2025",
  },
  {
    image: "/images/testi/testi-wa2.png",
    caption: "Testimoni WA",
    date: "28 Oktober 2025",
  },
  {
    image: "/images/testi/testi-wa3.png",
    caption: "Testimoni WA",
    date: "15 Oktober 2025",
  },
];

export default function Testimonials() {
  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Header */}
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

        {/* Grid Testimonials */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => {
            const cardRef = useRef(null);
            const isCardInView = useInView(cardRef, {
              once: true,
              margin: "-100px",
            });

            return (
              <motion.div
                key={idx}
                ref={cardRef}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 border border-gray-100 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isCardInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
              >
                {/* Gambar */}
                <div className="relative w-full h-80">
                  <Image
                    src={t.image}
                    alt={t.caption}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Caption */}
                <div className="p-4 text-center bg-gray-50">
                  <p className="text-gray-700 text-sm font-medium mb-1">
                    {t.caption}
                  </p>
                  <p className="text-gray-400 text-xs">{t.date}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
