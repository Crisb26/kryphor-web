"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { apps } from "@/data/apps";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AppsSection() {
  const preview = apps.slice(0, 4);

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
          <h2 className="font-poppins font-bold text-kryphor-white text-4xl sm:text-5xl mb-4">
            Nuestras <span className="gradient-text">Aplicaciones</span>
          </h2>
          <p className="text-muted font-inter max-w-xl mx-auto">
            Cada app nace de una idea poderosa y se construye con pasión y propósito.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
        >
          {preview.map((app) => (
            <motion.div
              key={app.id}
              variants={item}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              className="glass rounded-2xl p-6 group cursor-pointer"
              style={{
                borderColor: `${app.color}30`,
                border: `1px solid ${app.color}20`,
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: `${app.color}20` }}
                >
                  {app.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-poppins font-bold text-kryphor-white">{app.name}</h3>
                    <Badge variant={app.status === "disponible" ? "green" : "gray"}>
                      {app.status === "disponible" ? "Play Store" : "En desarrollo"}
                    </Badge>
                  </div>
                  <p className="text-muted text-sm mb-3">{app.tagline}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {app.features.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="text-xs px-2 py-0.5 rounded-md"
                        style={{ background: `${app.color}15`, color: app.color }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button href="/apps" variant="outline" size="lg">
            <ExternalLink size={18} />
            Ver todas las apps
          </Button>
        </div>
      </div>
    </section>
  );
}
