import { useState } from "react";
import { Mail, MapPin, Send, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};


const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

const formVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.3,
      duration: 0.4,
      ease: "easeOut" as const,
    },
  }),
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "hello@alexchen.dev",
    href: "mailto:hello@alexchen.dev",
    isLink: true,
  },
  {
    icon: MapPin,
    title: "Location",
    content: "San Francisco, CA (Remote Available)",
    isLink: false,
  },
  {
    icon: Calendar,
    title: "Availability",
    content: "Open to freelance & full-time opportunities",
    isLink: false,
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const form = e.currentTarget;
  const formData = new FormData(form);

  const params = new URLSearchParams();

  formData.forEach((value, key) => {
    params.append(key, value.toString());
  });

  try {
    await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    toast.success("Message sent successfull")
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    alert("Failed to send message");
  } finally {
    setIsSubmitting(false);
  }
};


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(190_100%_50%_/_0.08)_0%,_transparent_50%)]" />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/5 blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's Work <span className="gradient-text">Together</span>
          </motion.h2>
          <motion.p
            className="section-subheading mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                custom={index}
                variants={cardVariants}
                className="glass-card rounded-xl p-6 group hover:border-primary/50 transition-all duration-300"
                whileHover={{
                  x: 10,
                  boxShadow: "0 10px 30px hsl(190 100% 50% / 0.1)",
                }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <info.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {info.title}
                    </h3>
                    {info.isLink ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Response Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-xl p-6 border-primary/30"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <Sparkles className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <p className="font-medium text-sm">Quick Response Time</p>
                  <p className="text-muted-foreground text-xs">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-8 relative overflow-hidden"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            {/* Form glow effect */}
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-[60px]"
              animate={{
                scale: focusedField ? 1.5 : 1,
                opacity: focusedField ? 0.3 : 0.1,
              }}
              transition={{ duration: 0.3 }}
            />
            <input type="hidden" name="form-name" value="contact" />
            <div className="space-y-6 relative">
              <motion.div
                custom={0}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    placeholder="John Doe"
                    required
                    className="bg-secondary/50 border-border focus:border-primary transition-all duration-300"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                custom={1}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="john@example.com"
                  required
                  className="bg-secondary/50 border-border focus:border-primary transition-all duration-300"
                />
              </motion.div>

              <motion.div
                custom={2}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-secondary/50 border-border focus:border-primary resize-none transition-all duration-300"
                />
              </motion.div>

              <motion.div
                custom={3}
                variants={inputVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full relative overflow-hidden group"
                    disabled={isSubmitting}
                  >
                    {/* Button shimmer */}
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                      animate={{ translateX: ["100%", "-100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut",
                      }}
                    />
                    {isSubmitting ? (
                      <motion.span
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
