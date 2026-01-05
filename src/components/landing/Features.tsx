import { motion } from "framer-motion";
import { DollarSign, Truck, BarChart3, RefreshCcw } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Controla cada céntimo",
      description: "El sistema tiene en cuenta devoluciones, fallos de QC, aduanas y costes de envío para darte tu Net Profit real. Sin sorpresas.",
      stats: { label: "Precisión", value: "99.8%" },
      reverse: false,
    },
    {
      icon: Truck,
      title: "Automatización logística",
      description: "Sincronización automática de estados de envío. Sabrás dónde está cada paquete sin entrar en webs chinas ni revisar emails.",
      stats: { label: "Tiempo ahorrado", value: "4h/día" },
      reverse: true,
    },
    {
      icon: BarChart3,
      title: "Analytics que importan",
      description: "Dashboards diseñados para vendedores reales. Métricas de producto, proveedor y canal de venta en un solo lugar.",
      stats: { label: "ROI promedio", value: "+340%" },
      reverse: false,
    },
    {
      icon: RefreshCcw,
      title: "Gestión de devoluciones",
      description: "Registra devoluciones, reembolsos y pérdidas. El sistema recalcula automáticamente tus márgenes reales.",
      stats: { label: "Devoluciones rastreadas", value: "100%" },
      reverse: true,
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Todo lo que necesitas, nada que no
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Herramientas diseñadas específicamente para el negocio de importación y reventa.
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${feature.reverse ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={feature.reverse ? "lg:order-2" : ""}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-6`}>
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {feature.description}
                </p>

                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-card border border-border">
                  <span className="text-sm text-muted-foreground">{feature.stats.label}</span>
                  <span className="text-lg font-bold text-accent">{feature.stats.value}</span>
                </div>
              </div>

              <div className={`${feature.reverse ? "lg:order-1" : ""}`}>
                <div className="relative bg-card rounded-2xl border border-border p-6 shadow-soft overflow-hidden">
                  {/* Feature illustration placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-secondary to-muted rounded-lg flex items-center justify-center">
                    <feature.icon className="h-16 w-16 text-muted-foreground/30" />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
