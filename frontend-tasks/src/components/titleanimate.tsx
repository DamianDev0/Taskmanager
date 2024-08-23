import { motion } from "framer-motion";

interface TextProps {
  name: string;
}

export const TextAnimate = ({ name }: TextProps) => {
  return (
    <motion.div
      className="absolute text-white text-4xl font-bold"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: "circInOut" }}
      whileHover={{
        y: [0, -10, 0], 
        transition: { repeat: Infinity, repeatType: "loop", duration: 2 },
      }}
    >
      {name}
    </motion.div>
  );
};
