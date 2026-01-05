import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Package, Boxes, Home, ShoppingBag, CheckCircle } from "lucide-react";

const SocialProof = () => {
  const steps = [
    {
      icon: BookOpen,
      title: "Catálogo",
      description: "Guarda productos de Weidian o Taobao",
      color: "bg-blue-500",
    },
    {
      icon: Package,
      title: "Compra",
      description: "Realiza el pedido a través de tu agente",
      color: "bg-indigo-500",
    },
    {
      icon: Boxes,
      title: "Almacén",
      description: "Llega a Sugargoo o CSSBuy",
      color: "bg-purple-500",
    },
    {
      icon: Home,
      title: "Stock",
      description: "Crea paquetes y recibe en casa",
      color: "bg-green-500",
    },
    {
      icon: ShoppingBag,
      title: "Venta",
      description: "Publica y vende en Vinted",
      color: "bg-accent",
    },
    {
      icon: CheckCircle,
      title: "Beneficio",
      description: "Calcula tu margen real",
      color: "bg-emerald-500",
    },
  ];

  return (
    <section className="py-20 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            El flujo completo del revendedor
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Desde que encuentras el producto hasta que calculas tu beneficio real
          </p>
        </motion.div>

        {/* Desktop flow */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between gap-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-3 shadow-lg`}>
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground max-w-[120px]">{step.description}</p>
                </div>
                
                {i < steps.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-muted-foreground/40 mx-4 flex-shrink-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile flow */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 relative"
                >
                  <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center shadow-lg z-10 flex-shrink-0`}>
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Platforms badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3"
        >
          {["Weidian", "Taobao", "Sugargoo", "CSSBuy", "Vinted"].map((platform) => (
            <span
              key={platform}
              className="px-4 py-2 rounded-full bg-secondary text-sm font-medium text-muted-foreground border border-border"
            >
              {platform}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
