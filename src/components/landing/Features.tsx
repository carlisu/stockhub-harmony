import { motion } from "framer-motion";
import { BookOpen, Package, Boxes, ShoppingBag } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Catálogo centralizado",
      description: "Guarda manualmente productos de Weidian y Taobao en tu catálogo. Organiza por categorías, añade notas y ten todo listo para comprar cuando quieras.",
      stats: { label: "Productos", value: "Ilimitados" },
      reverse: false,
    },
    {
      icon: Package,
      title: "Gestión de agentes",
      description: "Registra manualmente tus compras cuando llegan al almacén de Sugargoo o CSSBuy. Anota el QC, costes y estado de cada artículo.",
      stats: { label: "Agentes", value: "Sugargoo, CSSBuy" },
      reverse: true,
    },
    {
      icon: Boxes,
      title: "Paquetes y stock",
      description: "Crea paquetes replicando los de Sugargoo y asigna productos. Cuando lleguen a tu casa, márcalos como stock listo para vender.",
      stats: { label: "Control", value: "Total" },
      reverse: false,
    },
    {
      icon: ShoppingBag,
      title: "Flujo completo hasta Vinted",
      description: "Desde que compras en Weidian hasta que el cliente confirma en Vinted. Registra ventas manualmente, calcula beneficios reales y cierra el ciclo.",
      stats: { label: "Ciclo", value: "Completo" },
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
            El flujo completo del revendedor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desde la compra en China hasta la venta confirmada en Vinted.
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
