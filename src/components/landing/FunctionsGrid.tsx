import { useState } from "react";
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
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type ModuleData = {
  icon: any;
  title: string;
  benefit: string;
  bullets: string[];
  detailedBullets: string[];
  cases: { title: string; description: string }[];
  problem: string;
};

const FunctionsGrid = () => {
  const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);

  const modules: ModuleData[] = [
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      benefit: "Visión completa de tu negocio en un solo vistazo",
      bullets: [
        "Resumen de ventas y margen del día",
        "Stock disponible y pendiente",
        "Alertas de paquetes y envíos"
      ],
      detailedBullets: [
        "Resumen de ventas, margen y beneficio del día/semana/mes",
        "Stock disponible, en tránsito y pendiente de envío",
        "Alertas de paquetes detenidos o próximos a límites",
        "Indicadores DAC7 por cuenta de Vinted",
        "Accesos rápidos a las acciones más frecuentes",
        "Gráficos de evolución de ventas y margen"
      ],
      cases: [
        {
          title: "Vista matutina",
          description: "Abres el dashboard por la mañana y ves de un vistazo: 3 ventas pendientes de envío, 2 paquetes llegando hoy y una cuenta cerca del límite DAC7."
        },
        {
          title: "Control semanal",
          description: "Revisas el resumen semanal y detectas que el margen ha bajado. Identificas que un modelo concreto está vendiendo por debajo de coste."
        }
      ],
      problem: "Sin un dashboard centralizado, pierdes tiempo navegando entre secciones para saber el estado real de tu negocio. Las alertas importantes pasan desapercibidas."
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
      detailedBullets: [
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
      icon: Package,
      title: "Inventario",
      benefit: "Controla cada artículo desde la compra hasta la venta",
      bullets: [
        "Estados del flujo automatizados",
        "Modo STOCK y ON_DEMAND",
        "QC, incidencias y devoluciones"
      ],
      detailedBullets: [
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
      icon: Boxes,
      title: "Paquetes",
      benefit: "Gestiona envíos internacionales y reparte costes",
      bullets: [
        "Crear y asignar artículos",
        "Confirmar llegada y disponibilidad",
        "Reparto automático de costes"
      ],
      detailedBullets: [
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
      icon: MapPin,
      title: "Tracking",
      benefit: "Sigue el estado de cada envío en tiempo real",
      bullets: [
        "Vista unificada de seguimiento",
        "Estados actualizados del paquete",
        "Historial de movimientos"
      ],
      detailedBullets: [
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
      icon: ShoppingBag,
      title: "Ventas",
      benefit: "Registra ventas y calcula el beneficio neto real",
      bullets: [
        "Precio, comisiones y resultado",
        "Estados de fulfillment claros",
        "Trazabilidad por artículo"
      ],
      detailedBullets: [
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
      icon: Users,
      title: "Cuentas Vinted",
      benefit: "Multi-cuenta con vigilancia DAC7 integrada",
      bullets: [
        "Gestión de varias cuentas",
        "Alertas de límites DAC7",
        "Estadísticas por cuenta"
      ],
      detailedBullets: [
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
      detailedBullets: [
        "Registro de gastos fijos (suscripciones, herramientas)",
        "Gastos variables por operación o paquete",
        "Asignación directa a artículos específicos",
        "Categorización para análisis posterior",
        "Impacto visible en el margen real calculado",
        "Histórico de gastos por período"
      ],
      cases: [
        {
          title: "Suscripción mensual",
          description: "Pagas 15€/mes por una herramienta. El gasto se registra y puedes ver cómo afecta a tu margen global mensual."
        },
        {
          title: "Gasto de aduana inesperado",
          description: "Un paquete tiene 20€ de aduanas extra. Lo registras y el coste se reparte entre los artículos del paquete, ajustando su margen real."
        }
      ],
      problem: "Si no registras todos los gastos, tu margen calculado es falso. Crees que ganas más de lo que realmente ganas."
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
      detailedBullets: [
        "Reportes de ventas por período (día, semana, mes)",
        "Informe de margen y beneficios",
        "Reporte de stock y valoración de inventario",
        "Exportación a CSV/Excel para contabilidad",
        "Historial completo auditable",
        "Filtros por cuenta, modelo o categoría"
      ],
      cases: [
        {
          title: "Cierre mensual",
          description: "A final de mes generas un reporte completo: ventas totales, margen, gastos y beneficio neto. Listo para tu contabilidad."
        },
        {
          title: "Análisis de rentabilidad",
          description: "Generas un reporte por modelo y descubres que uno tiene margen negativo. Decides dejar de comprarlo."
        }
      ],
      problem: "Sin reportes estructurados, no puedes analizar tu negocio. Tomas decisiones a ciegas sin datos reales."
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
      detailedBullets: [
        "Estadísticas de ventas por modelo y variante",
        "Margen medio por producto y categoría",
        "Comparativa entre cuentas de Vinted",
        "Tendencias de ventas a lo largo del tiempo",
        "Productos más rentables vs menos rentables",
        "Velocidad de rotación del stock"
      ],
      cases: [
        {
          title: "Modelo estrella",
          description: "Las estadísticas muestran que un modelo tiene 45% de margen medio y se vende en 3 días. Decides hacer más stock."
        },
        {
          title: "Cuenta con mejor rendimiento",
          description: "Comparas tus dos cuentas de Vinted y ves que una tiene 20% más de margen. Analizas qué hace diferente."
        }
      ],
      problem: "Sin estadísticas, no sabes qué productos te dan dinero y cuáles te lo quitan. Compras por intuición en vez de por datos."
    }
  ];

  return (
    <>
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
                
                <button 
                  onClick={() => setSelectedModule(module)}
                  className="text-sm text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  Ver detalles →
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de detalles */}
      <Dialog open={!!selectedModule} onOpenChange={() => setSelectedModule(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] p-0">
          {selectedModule && (
            <>
              <DialogHeader className="p-6 pb-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <selectedModule.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold text-foreground">
                      {selectedModule.title}
                    </DialogTitle>
                    <p className="text-muted-foreground mt-1">{selectedModule.benefit}</p>
                  </div>
                </div>
              </DialogHeader>
              
              <ScrollArea className="max-h-[60vh] px-6 pb-6">
                <div className="space-y-6 pt-6">
                  {/* Funciones */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Funcionalidades</h4>
                    <ul className="space-y-3">
                      {selectedModule.detailedBullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Casos reales */}
                  <div className="bg-secondary/50 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      <h4 className="font-semibold text-foreground">Casos reales</h4>
                    </div>
                    <div className="space-y-4">
                      {selectedModule.cases.map((caseItem, idx) => (
                        <div key={idx} className="border-l-2 border-accent/30 pl-4">
                          <h5 className="font-medium text-foreground mb-1">{caseItem.title}</h5>
                          <p className="text-sm text-muted-foreground">{caseItem.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Problema que resuelve */}
                  <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-destructive mb-1">Qué problema resuelve</p>
                        <p className="text-sm text-muted-foreground">{selectedModule.problem}</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Button className="w-full bg-gradient-primary hover:opacity-90">
                      Solicitar demo
                    </Button>
                  </div>
                </div>
              </ScrollArea>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FunctionsGrid;
