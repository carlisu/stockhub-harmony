import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const Pricing = () => {
  const features = [
    "Catálogo de productos ilimitado",
    "Gestión de compras en Weidian/Taobao",
    "Control de agentes (Sugargoo, CSSBuy)",
    "Creación de paquetes y asignación de stock",
    "Registro de ventas en Vinted",
    "Cálculo de beneficios reales",
    "Historial completo de operaciones",
    "Soporte por email prioritario",
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Un precio simple, todo incluido
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sin planes complicados. Acceso completo a todas las funciones.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative bg-card rounded-2xl border border-accent shadow-glow p-8">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-xs font-medium">
                <Sparkles className="h-3 w-3" />
                14 días de prueba gratis
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">ResellHub Pro</h3>
              <p className="text-muted-foreground text-sm mb-4">Todo lo que necesitas para gestionar tu negocio</p>
              
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold text-foreground">€14,99</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                  <Check className="h-4 w-4 text-accent flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button className="w-full bg-gradient-primary hover:opacity-90 text-base py-6">
              Empezar prueba de 14 días
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Sin tarjeta de crédito · Cancela cuando quieras
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
