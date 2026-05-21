"use client";
import { motion } from "framer-motion";
import { Lightbulb, Star, Globe, Heart } from "lucide-react";

const values = [
  { icon: Lightbulb, label: "Innovación", desc: "Siempre buscamos la solución más creativa." },
  { icon: Star, label: "Calidad", desc: "Cada línea de código importa." },
  { icon: Globe, label: "Accesibilidad", desc: "Tecnología para todos, sin excepción." },
  { icon: Heart, label: "Pasión", desc: "Construimos con amor lo que usamos con orgullo." },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-bg-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-kryphor-white text-4xl sm:text-5xl mb-6">
            Sobre <span className="gradient-text">Kryphor Labs</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-poppins font-bold text-cyan text-xl mb-4">🎯 Misión</h3>
            <p className="text-muted leading-relaxed font-inter">
              Crear tecnología que mejore la vida de las personas, desde aplicaciones móviles hasta
              inteligencia artificial, con calidad y propósito. Cada producto que desarrollamos tiene
              un impacto real en quienes lo usan.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="font-poppins font-bold text-soft-purp text-xl mb-4">🚀 Visión</h3>
            <p className="text-muted leading-relaxed font-inter">
              Ser una referencia latinoamericana en desarrollo de software independiente, accesible e
              innovador. Que el nombre Kryphor Labs sea sinónimo de excelencia tecnológica desde Colombia
              para el mundo.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {values.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="glass rounded-2xl p-5 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center mx-auto mb-3">
                <Icon size={22} className="text-cyan" />
              </div>
              <h4 className="font-poppins font-bold text-kryphor-white text-sm mb-2">{label}</h4>
              <p className="text-muted text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
