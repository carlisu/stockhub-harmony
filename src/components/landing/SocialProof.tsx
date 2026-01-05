import { motion } from "framer-motion";

const SocialProof = () => {
  const platforms = [
    { name: "Vinted", logo: "V" },
    { name: "Wallapop", logo: "W" },
    { name: "eBay", logo: "e" },
    { name: "Amazon", logo: "a" },
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
            Optimizado para vendedores en las principales plataformas
          </p>
          
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {platforms.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <span className="font-bold text-lg">{platform.logo}</span>
                </div>
                <span className="font-medium text-lg">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
