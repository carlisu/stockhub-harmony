import { motion } from "framer-motion";

const SocialProof = () => {
  const sources = [
    { name: "Weidian", type: "Compra" },
    { name: "Taobao", type: "Compra" },
    { name: "Sugargoo", type: "Agente" },
    { name: "CSSBuy", type: "Agente" },
  ];

  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Compatible con las principales plataformas y agentes
          </p>
          
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {sources.map((source, i) => (
              <motion.div
                key={source.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center gap-1 text-muted-foreground/60 hover:text-muted-foreground transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <span className="font-bold text-lg">{source.name[0]}</span>
                </div>
                <span className="font-medium">{source.name}</span>
                <span className="text-xs text-muted-foreground/50">{source.type}</span>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex flex-col items-center gap-1"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <span className="font-bold text-lg text-accent">V</span>
              </div>
              <span className="font-medium text-accent">Vinted</span>
              <span className="text-xs text-accent/70">Venta</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
