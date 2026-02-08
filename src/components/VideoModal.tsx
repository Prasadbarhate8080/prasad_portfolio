import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type VideoModalProps = {
  isOpen: boolean;
  videoUrl: string | null;
  onClose: () => void;
};

export const VideoModal = ({
  isOpen,
  videoUrl,
  onClose,
}: VideoModalProps) => {
  if (!videoUrl) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal box */}
          <motion.div
            className="relative w-[90%] max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 bg-black/60 text-white rounded-full p-2 hover:bg-black"
            >
              <X size={18} />
            </button>

            {/* Video */}
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
