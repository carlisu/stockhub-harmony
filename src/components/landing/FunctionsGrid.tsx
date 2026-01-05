import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  BookOpen, 
  Package, 
  Boxes, 
  MapPin, 
  ShoppingBag, 
  Users, 
  Receipt, 
  FileText, 
  BarChart3 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FunctionsGrid = () => {
  const modules = [
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      benefit: "Visión completa de tu negocio en un solo vistazo",
      bullets: [
        "Resumen de ventas y margen del día",
        "Stock disponible y pendiente",
        "Alertas de paquetes y envíos"
      ],
      anchor: "#dashboard"
    },
    {
      icon: BookOpen,
      title: "Catálogo",
      benefit: "Organiza modelos y variantes como base de tu inventario",
      bullets: [
        "Gestión de modelos y variantes",
        "Tallas, colores y SKUs únicos",
        "Precios de coste y venta sugeridos"
      ],
      anchor: "#catalogo"
    },
    {
      icon: Package,
      title: "Inventario",
      benefit: "Controla cada artículo desde la compra hasta la venta",
      bullets: [
        "Estados del flujo automatizados",
        "Modo STOCK y ON_DEMAND",
        "QC, incidencias y devoluciones"
      ],
      anchor: "#inventario"
    },
    {
      icon: Boxes,
      title: "Paquetes",
      benefit: "Gestiona envíos internacionales y reparte costes",
      bullets: [
        "Crear y asignar artículos",
        "Confirmar llegada y disponibilidad",
        "Reparto automático de costes"
      ],
      anchor: "#paquetes"
    },
    {
      icon: MapPin,
      title: "Tracking",
      benefit: "Sigue el estado de cada envío en tiempo real",
      bullets: [
        "Vista unificada de seguimiento",
        "Estados actualizados del paquete",
        "Historial de movimientos"
      ],
      anchor: "#tracking"
    },
    {
      icon: ShoppingBag,
      title: "Ventas",
      benefit: "Registra ventas y calcula el beneficio neto real",
      bullets: [
        "Precio, comisiones y resultado",
        "Estados de fulfillment claros",
        "Trazabilidad por artículo"
      ],
      anchor: "#ventas"
    },
    {
      icon: Users,
      title: "Cuentas Vinted",
      benefit: "Gestiona múltiples cuentas y asigna ventas",
      bullets: [
        "Multi-cuenta sin líos",
        "Asignación a artículos/ventas",
        "Estadísticas por cuenta"
      ],
      anchor: "#cuentas-vinted"
    },
    {
      icon: Receipt,
      title: "Gastos",
      benefit: "Registra todos los gastos para un margen preciso",
      bullets: [
        "Gastos fijos y variables",
        "Asignación a paquetes/artículos",
        "Impacto en margen real"
      ],
      anchor: "#gastos"
    },
    {
      icon: FileText,
      title: "Reportes",
      benefit: "Genera informes para entender tu negocio",
      bullets: [
        "Reportes por período",
        "Exportación de datos",
        "Historial auditable"
      ],
      anchor: "#reportes"
    },
    {
      icon: BarChart3,
      title: "Estadísticas",
      benefit: "Analiza rendimiento por modelo, cuenta y período",
      bullets: [
        "Métricas por variante y modelo",
        "Resúmenes temporales",
        "Tendencias y comparativas"
      ],
      anchor: "#estadisticas"
    }
  ];

  return (
    <section id="funciones" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Funciones
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Todo lo que necesitas para controlar tu negocio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Saber qué tienes, cuánto cuesta, cuánto ganas y dónde se pierde dinero. Sin complicaciones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {modules.map((module, i) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-card rounded-xl border border-border p-6 hover:border-accent/50 hover:shadow-soft transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <module.icon className="h-5 w-5 text-accent" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {module.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {module.benefit}
              </p>
              
              <ul className="space-y-2 mb-4">
                {module.bullets.map((bullet, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
              
              <a 
                href={module.anchor}
                className="text-sm text-accent hover:text-accent/80 font-medium transition-colors"
              >
                Ver detalles →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionsGrid;
