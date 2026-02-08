import { motion } from "framer-motion";

const innerIcons = [
  { src: "/appwrite_icon.jpg", name: "Appwrite" },
  { src: "/css_icon.jpg", name: "CSS" },
  { src: "/expressjs_icon.png", name: "Express" },
];

const outerIcons = [
  { src: "/figma_icon.png", name: "Figma" },
  { src: "/framermotion_icon.png", name: "Framer" },
  { src: "/html_icon.jpg", name: "HTML" },
  { src: "/js_icon.jpg", name: "JavaScript" },
];

const extraOuterIcons = [
  { src: "/nextjs_icon.jpg", name: "Next.js" },
  { src: "/postman_icon.png", name: "Postman" },
  { src: "/react_icon.jpg", name: "React" },
  { src: "/tailwind_icon.jpg", name: "Tailwind" },
  { src: "/nodejs_icon.jpg", name: "Node.js" },
];

interface OrbitRingProps {
  icons: { src: string; name: string }[];
  radius: number;
  duration: number;
  reverse?: boolean;
  iconSize: number;
}

const OrbitRing = ({
  icons,
  radius,
  duration,
  reverse = false,
  iconSize,
}: OrbitRingProps) => {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      className="absolute inset-0 rounded-full"
      style={{ willChange: "transform" }}
    >
      {icons.map((icon, index) => {
        const angle = (360 / icons.length) * index;
        const radians = (angle * Math.PI) / 180;
        const x = Math.cos(radians) * radius;
        const y = Math.sin(radians) * radius;

        return (
          <motion.div
            key={icon.name}
            className="absolute top-1/2 left-1/2 group"
            style={{
              x: x - iconSize / 2,
              y: y - iconSize / 2,
              willChange: "transform",
            }}
            animate={{ rotate: reverse ? 360 : -360 }}
            transition={{ repeat: Infinity, duration, ease: "linear" }}
          >
            <div className="relative overflow-hidden">
              <div
                className="rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 p-1.5 shadow-lg transition-all duration-300 hover:scale-110 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                style={{ width: iconSize, height: iconSize }}
              >
                <img
                  src={icon.src}
                  alt={icon.name}
                  className="w-full h-full object-contain rounded-md"
                  loading="lazy"
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {icon.name}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default function ToolsSection() {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-mono text-sm tracking-wider uppercase"
        >
          My Tech Stack
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mt-2 mb-4"
        >
          Tools I <span className="text-gradient">Use</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-md mx-auto"
        >
          Technologies and frameworks I work with daily
        </motion.p>
      </div>

      {/* Orbit Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto mt-16 lg:scale-110 xl:scale-125"
      >
        {/* Decorative rings */}
        <div className="absolute inset-0 rounded-full border border-border/20" />
        <div className="absolute inset-[25%] rounded-full border border-border/30" />
        <div className="absolute inset-[42%] rounded-full border border-border/40" />

        {/* Center glow */}
        <div className="absolute inset-[40%] rounded-full bg-primary/10 blur-2xl" />

        {/* Center icon placeholder */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>

        {/* Extra Outer Ring */}
        <OrbitRing
          icons={extraOuterIcons}
          radius={140}
          duration={35}
          iconSize={36}
        />

        {/* Outer Ring */}
        <OrbitRing
          icons={outerIcons}
          radius={100}
          duration={25}
          reverse
          iconSize={32}
        />

        {/* Inner Ring */}
        <OrbitRing
          icons={innerIcons}
          radius={55}
          duration={18}
          iconSize={28}
        />
      </motion.div>
    </section>
  );
}
