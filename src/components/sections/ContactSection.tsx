"use client";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  return (
    <section className="py-24 bg-bg-card relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(124,58,237,0.1) 0%, transparent 70%)" }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-poppins font-bold text-kryphor-white text-4xl sm:text-5xl mb-6">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-muted font-inter text-lg mb-10 leading-relaxed">
            Estamos listos para construir algo increíble juntos. Cuéntanos tu idea y hagámosla
            realidad.
          </p>
          <Button href="/contact" size="lg">
            <Mail size={20} />
            Contáctanos
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
