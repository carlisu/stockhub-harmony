import { motion } from "framer-motion";
import { Calculator, TrendingDown, History, ShieldCheck } from "lucide-react";

const AccountingBlock = () => {
  const features = [
    {
      icon: Calculator,
      title: "Margen real calculado",
      description: "Cada venta muestra el beneficio neto restando coste de producto, envío, comisiones y gastos asociados."
    },
    {
      icon: TrendingDown,
      title: "Costes correctamente asignados",
      description: "Los costes de paquetes, envíos y aduanas se reparten proporcionalmente a cada artículo."
    },
    {
      icon: ShieldCheck,
      title: "Pérdidas controladas",
      description: "Incidencias, devoluciones y paquetes perdidos quedan registrados para que no desaparezca dinero."
    },
    {
      icon: History,
      title: "Historial auditable",
      description: "Cada movimiento queda registrado. Puedes revisar qué pasó con cualquier artículo en cualquier momento."
    }
  ];

  return (
    <section id="contabilidad" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm font-medium mb-4">
            Contabilidad
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contabilidad y margen real
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            El sistema mantiene coherencia de costes y beneficios en todo momento. 
            Trazabilidad completa desde la compra hasta el payout.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 text-center hover:border-green-500/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-green-500/5 to-accent/5 rounded-2xl border border-border p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-foreground mb-1">100%</p>
              <p className="text-sm text-muted-foreground">de operaciones con trazabilidad</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground mb-1">0€</p>
              <p className="text-sm text-muted-foreground">desaparecidos sin explicación</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground mb-1">Real</p>
              <p className="text-sm text-muted-foreground">margen calculado, no estimado</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccountingBlock;
