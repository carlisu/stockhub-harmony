import { motion } from "framer-motion";
import { FolderOpen, Package, Warehouse, ArrowRight } from "lucide-react";

const ProblemSolution = () => {
  const items = [
    {
      icon: FolderOpen,
      problem: "¿Catálogo disperso?",
      solution: "Centraliza productos de Weidian y Taobao. Organizado por categorías y listo para cuando quieras comprar.",
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      icon: Package,
      problem: "¿Perdido con los agentes?",
      solution: "Lleva el control de tus compras en agentes como Sugargoo o CSSBuy. Anota QC, costes y crea paquetes desde el programa.",
      color: "bg-green-500/10 text-green-500",
    },
    {
      icon: Warehouse,
      problem: "¿Stock descontrolado?",
      solution: "Controla lo que tienes, vendiste y está en camino. Todas las plataformas en un solo lugar.",
      color: "bg-purple-500/10 text-purple-500",
    },
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Del caos al control total
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos los problemas que todo revendedor de Vinted conoce.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl border border-border p-8 hover:shadow-medium transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-6`}>
                <item.icon className="h-7 w-7" />
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.problem}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <ArrowRight className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Nuestra solución</span>
              </div>

              <p className="text-muted-foreground">
                {item.solution}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
