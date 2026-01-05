import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Deja de gestionar tu negocio con Excel
          </h2>
          
          <p className="text-lg text-primary-foreground/80 mb-10">
            Únete a revendedores que ya controlan todo su flujo: desde Weidian hasta la venta confirmada en Vinted.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-base px-8"
            >
              Probar 14 días gratis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base"
            >
              Ver cómo funciona
            </Button>
          </div>

          <p className="mt-6 text-sm text-primary-foreground/60">
            Sin tarjeta de crédito · Solo 14,99€/mes después de la prueba
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
