"use client";

import { useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Layanan Pembuatan Website",
    tags: [
      "Website Bisnis",
      "Website Portofolio Personal",
      "Website Company Profile",
      "Website Organisasi & Komunitas",
      "Website Custom (Sesuai Kebutuhan)",
      "dan layanan pembuatan lainnya",
    ],
    description:
      "Kami membantu dengan mewujudkan ide Anda melalui website yang modern, cepat, dan responsif, estetik, serta mudah digunakan.",
  },
  {
    id: 2,
    title: "UX Design & Prototype",
    tags: [
      "Desain UI/UX",
      "Prototype Interaktif",
      "Style Guide",
      "Figma Design",
    ],
    description:
      "Kami merancang antarmuka yang estetik dan berfokus pada pengalaman pengguna untuk memastikan produk mudah digunakan dan mampu meningkatkan engagement.",
  },
  {
    id: 3,
    title: "Perancangan Sistem",
    tags: [
      "Wireframe",
      "Flowchart",
      "ERD Database",
      "Use Case Diagram",
      "Activity Diagram",
      "Dokumen Analisis Sistem",
    ],
    description:
      "Kami membantu menyusun perencanaan sistem secara profesional sehingga pengembangan aplikasi lebih terarah, minim revisi, dan efisien.",
  },
  {
    id: 4,
    title: "Branding & Konten Kreatif",
    tags: [
      "Pembuatan CV (ATS, Creative, dll)",
      "Portofolio Desain",
      "Desain PowerPoint (PPT) untuk Presentasi",
      "Banner, Poster, & Kartu Nama",
      "Branding Kit (Logo, Warna, Font, & Visual Asset)",
    ],
    description:
      "Kami menyediakan layanan branding visual untuk meningkatkan citra bisnis Anda agar lebih dikenal dan dipercaya oleh calon pelanggan.",
  },
];

export default function ServicesPage() {
  const [active, setActive] = useState(1);

  // Ref untuk header
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6">
      {/* Header */}
      <motion.div
        ref={headerRef}
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Layanan Kami
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Kami menyediakan berbagai layanan digital untuk membantu bisnis Anda
          berkembang di era modern.
        </p>
      </motion.div>

      {/* Services List */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {services.map((service, i) => {
          const cardRef = useRef(null);
          const isCardInView = useInView(cardRef, {
            once: true,
            margin: "-80px",
          });

          return (
            <motion.div
              key={service.id}
              ref={cardRef}
              className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                active === service.id
                  ? "bg-blue-50 border-blue-200 shadow-md"
                  : "bg-white border-gray-200"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={isCardInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Header */}
              <button
                onClick={() => setActive(service.id)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className="text-gray-400 font-medium text-sm w-6">
                    {String(service.id).padStart(2, "0")}
                  </span>
                  <h2
                    className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                      active === service.id
                        ? "text-blue-700"
                        : "text-gray-800 group-hover:text-blue-600"
                    }`}
                  >
                    {service.title}
                  </h2>
                </div>
                <ChevronRight
                  className={`w-5 h-5 transition-transform duration-500 ${
                    active === service.id
                      ? "rotate-90 text-blue-600"
                      : "rotate-0 text-gray-400 group-hover:text-blue-500"
                  }`}
                />
              </button>

              {/* Expanded Content */}
              {active === service.id && (
                <motion.div
                  className="px-12 pb-8 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex flex-col gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <div
                        key={tag}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">
                          ✓
                        </span>
                        <p className="text-gray-700">{tag}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-5 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                  <Link href="/contact">
                    <button className="border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all px-4 py-2 rounded-lg text-sm font-medium">
                      Diskusikan Proyek
                    </button>
                  </Link>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </main>
  );
}
