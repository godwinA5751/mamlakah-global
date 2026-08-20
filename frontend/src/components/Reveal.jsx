import * as FM from "framer-motion";

export default function Reveal({ children }) {
  return (
    <FM.motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {children}
    </FM.motion.div>
  );
}