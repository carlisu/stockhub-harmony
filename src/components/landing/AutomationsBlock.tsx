import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

const AutomationsBlock = () => {
  const automations = [
    {
      trigger: "Artículo llega al almacén",
      action: "Estado cambia automáticamente a 'En almacén'"
    },
    {
      trigger: "Paquete marcado como recibido",
      action: "Artículos pasan a 'Disponible para venta'"
    },
    {
      trigger: "Venta registrada",
      action: "Artículo se mueve a 'Vendido - Pendiente envío'"
    },
    {
      trigger: "Envío confirmado",
      action: "Estado actualiza a 'Enviado al cliente'"
    },
    {
      trigger: "Payout recibido",
      action: "Venta se marca como 'Completada' con beneficio final"
    },
    {
      trigger: "Costes de paquete actualizados",
      action: "Reparto proporcional a artículos recalculado"
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-500/10 text-yellow-600 text-sm font-medium mb-4">
            Automatizaciones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Menos clics, más ventas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            El sistema actualiza estados y asignaciones automáticamente. 
            Tú te centras en lo importante: comprar y vender.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.map((auto, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-xl border border-border p-6 hover:border-yellow-500/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">
                    {auto.trigger}
                  </p>
                  <div className="flex items-center gap-2 text-foreground">
                    <ArrowRight className="h-4 w-4 text-yellow-600" />
                    <span className="font-medium text-sm">{auto.action}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Las automatizaciones reducen errores humanos y ahorran tiempo en tareas repetitivas.
        </motion.p>
      </div>
    </section>
  );
};

export default AutomationsBlock;
