import { motion, AnimatePresence } from "framer-motion";
import { Chrome, Download, X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const DownloadModal = ({ open, onClose }: Props) => {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-background rounded-2xl p-6 max-w-lg w-full shadow-xl"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Chrome className="w-5 h-5 text-orange-500" />
              Install PhishGuard
            </h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>

          {/* Downloads */}
          <div className="space-y-3">
            <a
              href="/downloads/phishguard-extension.zip"
              download
              className="flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-muted/80 transition"
            >
              <span>PhishShield Chrome Extension</span>
              <Download />
            </a>

            <a
              href="/downloads/phishguard-backend-helper.zip"
              download
              className="flex items-center justify-between p-3 rounded-lg bg-muted hover:bg-muted/80 transition"
            >
              <span>PhishShield Helper Files</span>
              <Download />
            </a>
          </div>

          {/* Instructions */}
          <div className="mt-5 text-sm text-muted-foreground space-y-2">
            <p>1. Extract the ZIP file</p>
            <p>2. Open Chrome → Extensions</p>
            <p>3. Enable <b>Developer Mode</b></p>
            <p>4. Click <b>Load unpacked</b> → select extracted folder</p>
          </div>

          {/* Footer */}
          <button
            onClick={onClose}
            className="mt-6 w-full py-2 rounded-full font-semibold text-white
            bg-gradient-to-r from-orange-400 to-orange-600"
          >
            Done
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DownloadModal;
