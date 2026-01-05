import { motion } from "framer-motion";
import { 
  Package, 
  Boxes, 
  MapPin, 
  ShoppingBag, 
  BookOpen,
  Users,
  CheckCircle2,
  AlertTriangle,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FunctionDetails = () => {
  const sections = [
    {
      id: "inventario",
      icon: Package,
      title: "Inventario / Stock",
      subtitle: "Control total de cada artículo en cada momento",
      bullets: [
        "Alta y edición de artículos con estados automáticos del flujo",
        "Soporte de aprovisionamiento STOCK (compra anticipada) y ON_DEMAND (reservas)",
        "Acciones operativas: mover a almacén, registrar venta, marcar enviado",
        "Confirmar pago y payout para cerrar el ciclo de venta",
        "Gestión de incidencias: reportar problemas post-venta",
        "Devoluciones, ajustes y write-off de pérdidas controladas",
        "Control de calidad: flujo de QC Fail y gestión de reemplazos"
      ],
      cases: [
        {
          title: "Reemplazo por QC fallido",
          description: "Compras unas zapatillas, el QC falla. Solicitas reemplazo al agente, el sistema registra la incidencia y cuando llega el nuevo par, lo vinculas automáticamente."
        },
        {
          title: "Venta ON_DEMAND",
          description: "Un cliente compra en Vinted un artículo que aún no tienes. Lo marcas como reserva, compras al proveedor y cuando llega, lo envías directamente."
        }
      ],
      problem: "Sin un sistema, pierdes el rastro de qué tienes disponible, qué está en camino y qué ya vendiste. El inventario se descuadra y no sabes tu stock real."
    },
    {
      id: "paquetes",
      icon: Boxes,
      title: "Paquetes",
      subtitle: "Gestiona envíos internacionales y reparte costes con precisión",
      bullets: [
        "Crear paquetes y asignar artículos de forma visual",
        "Confirmar llegada y actualizar disponibilidad automáticamente",
        "Recalcular reparto de costes del paquete hacia cada artículo",
        "Marcar paquete como perdido con registro detallado",
        "Histórico de envíos y estados de cada paquete",
        "Costes de envío, aduanas e impuestos asignados correctamente"
      ],
      cases: [
        {
          title: "Paquete con 15 artículos",
          description: "Envías un paquete con 15 productos diferentes. El sistema reparte el coste de envío proporcionalmente al peso o valor de cada artículo."
        },
        {
          title: "Paquete perdido",
          description: "Un paquete se pierde en tránsito. Lo marcas como perdido, el sistema registra la pérdida total y ajusta tu contabilidad automáticamente."
        }
      ],
      problem: "Calcular manualmente cuánto cuesta cada artículo cuando el envío incluye varios productos es tedioso y propenso a errores. Sin control, tu margen real es una incógnita."
    },
    {
      id: "tracking",
      icon: MapPin,
      title: "Tracking",
      subtitle: "Sigue cada envío sin salir del sistema",
      bullets: [
        "Vista unificada de todos los envíos activos",
        "Estados actualizados de cada paquete",
        "Historial completo de movimientos",
        "Alertas de paquetes detenidos o con problemas",
        "Vinculación directa con artículos del inventario"
      ],
      cases: [
        {
          title: "Paquete retenido en aduanas",
          description: "Ves que un paquete lleva 5 días sin moverse. Revisas el tracking, identificas retención en aduanas y actúas antes de que sea problema."
        },
        {
          title: "Cliente pregunta por su pedido",
          description: "Un comprador pregunta cuándo llega su artículo. En segundos localizas el paquete y le das una estimación precisa."
        }
      ],
      problem: "Revisar múltiples webs de tracking, recordar qué artículo va en qué paquete y cuándo debería llegar cada uno consume tiempo que podrías dedicar a vender."
    },
    {
      id: "ventas",
      icon: ShoppingBag,
      title: "Ventas",
      subtitle: "Registra cada venta y conoce tu beneficio neto real",
      bullets: [
        "Registro de ventas con precio de venta y comisiones",
        "Cálculo automático del resultado neto por artículo",
        "Estados del fulfillment: pagado, enviado, completado",
        "Trazabilidad completa desde compra hasta payout",
        "Histórico de ventas por período y cuenta",
        "Gestión de incidencias post-venta y devoluciones"
      ],
      cases: [
        {
          title: "Venta completada con margen real",
          description: "Vendes unas zapatillas por 85€. El sistema resta automáticamente coste de producto (35€), envío (8€) y comisión Vinted (7€). Tu margen real: 35€."
        },
        {
          title: "Devolución gestionada",
          description: "Un cliente devuelve un artículo. Registras la devolución, el artículo vuelve a stock disponible y la venta se anula correctamente."
        }
      ],
      problem: "Si calculas beneficios restando solo el coste de compra al precio de venta, ignoras envíos, comisiones e impuestos. Tu margen real puede ser muy diferente al que crees."
    },
    {
      id: "catalogo",
      icon: BookOpen,
      title: "Catálogo",
      subtitle: "Modelos y variantes organizados como base de tu inventario",
      bullets: [
        "Crear modelos con múltiples variantes (talla, color)",
        "SKUs únicos para identificación rápida",
        "Precios de coste y venta sugeridos por variante",
        "Notas y enlaces a proveedores (Weidian, Taobao)",
        "Base para alta rápida de artículos en inventario",
        "Estadísticas de rendimiento por modelo"
      ],
      cases: [
        {
          title: "Modelo con 12 tallas",
          description: "Añades un modelo de zapatilla con 12 variantes de talla. Cuando compras stock, solo seleccionas modelo + talla y el artículo hereda toda la info."
        },
        {
          title: "Análisis de qué modelo vende más",
          description: "Consultas estadísticas del catálogo y descubres que un modelo concreto tiene el mejor margen. Decides hacer más stock de ese modelo."
        }
      ],
      problem: "Sin un catálogo centralizado, repites información cada vez que compras. Pierdes tiempo y es fácil equivocarse en precios o referencias."
    },
    {
      id: "cuentas-vinted",
      icon: Users,
      title: "Cuentas Vinted",
      subtitle: "Gestiona múltiples cuentas sin perder el control",
      bullets: [
        "Añadir y gestionar varias cuentas de Vinted",
        "Asignar artículos y ventas a cada cuenta",
        "Vigilancia DAC7: marcadores de riesgo al acercarte a límites",
        "Alertas automáticas cerca de 30 transacciones o 2.000€",
        "Estadísticas separadas por cuenta",
        "Control de qué cuenta vende qué producto",
        "Histórico de ventas por cuenta"
      ],
      cases: [
        {
          title: "Alerta DAC7 antes de tiempo",
          description: "Una cuenta llega a 25 transacciones. El sistema te avisa con indicadores de riesgo para que actúes antes de superar los límites reportables."
        },
        {
          title: "Dos cuentas, control total",
          description: "Operas con dos cuentas de Vinted. El sistema te muestra ventas, margen y estado DAC7 de cada una para que equilibres la carga."
        }
      ],
      problem: "Sin vigilancia DAC7 puedes superar los límites sin darte cuenta (30 transacciones o 2.000€ por cuenta). Hacienda recibirá tus datos y no estarás preparado."
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Detalle de cada módulo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora en profundidad las capacidades de cada sección del sistema.
          </p>
        </motion.div>

        <div className="space-y-24">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-24"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left: Content */}
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 mb-6">
                    <section.icon className="h-6 w-6 text-accent" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {section.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    {section.subtitle}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {section.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Problem block */}
                  <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-destructive mb-1">Qué problema resuelve</p>
                        <p className="text-sm text-muted-foreground">{section.problem}</p>
                      </div>
                    </div>
                  </div>

                  <Button className="bg-gradient-primary hover:opacity-90">
                    Solicitar demo
                  </Button>
                </div>

                {/* Right: Cases */}
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-card rounded-2xl border border-border p-6 shadow-soft">
                    <div className="flex items-center gap-2 mb-6">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      <h4 className="font-semibold text-foreground">Casos reales</h4>
                    </div>
                    
                    <div className="space-y-6">
                      {section.cases.map((caseItem, idx) => (
                        <div key={idx} className="border-l-2 border-accent/30 pl-4">
                          <h5 className="font-medium text-foreground mb-1">{caseItem.title}</h5>
                          <p className="text-sm text-muted-foreground">{caseItem.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionDetails;
