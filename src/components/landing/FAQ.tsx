import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿El margen que calcula es realmente preciso?",
      answer: "Sí. El sistema tiene en cuenta el coste de producto, envío internacional (repartido proporcionalmente), aduanas, comisiones de Vinted y cualquier gasto adicional que registres. El beneficio que ves es el neto real, no una estimación."
    },
    {
      question: "¿Cómo controla el stock disponible?",
      answer: "Cada artículo tiene un estado claro: en proveedor, en tránsito, en almacén del agente, disponible para venta, vendido, enviado, completado. Siempre sabes exactamente qué tienes y dónde está."
    },
    {
      question: "¿Qué pasa si un paquete se pierde?",
      answer: "Puedes marcar el paquete como perdido. El sistema registra la pérdida con el detalle de los artículos afectados y el valor, ajustando tu contabilidad para reflejar el impacto real en tu negocio."
    },
    {
      question: "¿Cómo gestiono QC fallidos y reemplazos?",
      answer: "Si un artículo no pasa el control de calidad, lo marcas como QC Fail. Puedes solicitar reemplazo al agente y cuando llegue el nuevo artículo, lo vinculas. El historial queda registrado para trazabilidad completa."
    },
    {
      question: "¿Qué es el modo ON_DEMAND?",
      answer: "ON_DEMAND es para ventas que haces antes de tener el producto. Cuando alguien compra, reservas el artículo, lo pides al proveedor y cuando llega, lo envías directamente. El sistema diferencia estas operaciones del stock normal."
    },
    {
      question: "¿Puedo gestionar varias cuentas de Vinted?",
      answer: "Sí. Puedes añadir múltiples cuentas de Vinted y asignar artículos y ventas a cada una. Las estadísticas se muestran por cuenta para que compares rendimiento."
    },
    {
      question: "¿Qué reportes puedo generar?",
      answer: "Puedes generar reportes por período (diario, semanal, mensual), por modelo, por cuenta de Vinted. Incluyen ventas, margen, gastos, pérdidas y comparativas. También puedes exportar datos."
    },
    {
      question: "¿Escala si vendo mucho más volumen?",
      answer: "El sistema está diseñado para crecer contigo. Ya gestiones 50 o 5.000 artículos, la estructura de datos y flujos se mantiene. El rendimiento no se degrada con el volumen."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre el funcionamiento del sistema.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-accent/50"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
