import { motion } from "framer-motion";

const innerIcons = ["/appwrite_icon.jpg", "css_icon.jpg", "expressjs_icon.png"];

const outerIcons = ["figma_icon.png", "framermotion_icon.png", "html_icon.jpg", "js_icon.jpg"];

const extraOuterIcons = ["nextjs_icon.jpg", "postman_icon.png", "react_icon.jpg", "tailwind_icon.jpg", "nodejs_icon.jpg"];


export default function ToolsSection() {
  return (
    <div className="text-center overflow-hidden ">
      <h1 className="text-xl font-bold mb-6 text-muted-foreground">
        Tools I Use
      </h1>

      {/* MAIN WRAPPER */}
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto mt-10  rounded-full">
        {/* 🟣 EXTRA OUTER CIRCLE */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute inset-0  rounded-full"
        >
          {extraOuterIcons.map((icon, index) => {
            const angle = (360 / extraOuterIcons.length) * index;

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translate(140px)
                    rotate(-${angle}deg)
                  `,
                }}
              >
                <div className="text-xs sm:text-sm font-mono">
                  <img
                    src={icon}
                    alt="js icon"
                    width={23}
                    className="object-fit rounded-md"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* 🔵 OUTER CIRCLE */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          className="absolute inset-0  rounded-full"
        >
          {outerIcons.map((icon, index) => {
            const angle = (360 / outerIcons.length) * index;

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translate(105px)
                    rotate(-${angle}deg)
                  `,
                }}
              >
                <div className="text-sm sm:text-base">
                  <img
                    src={icon}
                    alt="js icon"
                    width={23}
                    className="object-fit rounded-md"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* 🟠 INNER CIRCLE */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52
                     -translate-x-1/2 -translate-y-1/2  rounded-full"
        >
          {innerIcons.map((icon, index) => {
            const angle = (360 / innerIcons.length) * index;

            return (
              <div
                key={index}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `
                    rotate(${angle}deg)
                    translate(60px)
                    rotate(-${angle}deg)
                  `,
                }}
              >
                <div className="text-sm sm:text-base font-semibold">
                  <img
                    src={icon}
                    alt="js icon"
                    width={23}
                    className="object-fit rounded-md"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
