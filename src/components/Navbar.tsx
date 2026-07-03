import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Chrome } from "lucide-react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/toaster";
import DownloadModal from "./DownloadModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToChrome = () => {
    if (!user) {
      toast.error("Please login to continue");
      navigate("/login");
      return;
    }

    console.log("Add to Chrome clicked");
    setShowModal(true);
  };

  return (
    <>
      <DownloadModal open={showModal} onClose={() => setShowModal(false)} />

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-b"
      >
        <div className="container mx-auto px-6 h-16 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/orange_fish.jpg"
              alt="PhishShield Logo"
              className="w-10 h-10 rounded-xl object-cover"
            />
            <span className="font-bold text-xl">PhishShield</span>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex gap-4 items-center">
            {user && (
              <motion.button
                onClick={handleAddToChrome}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 rounded-full text-white font-semibold
                bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg"
              >
                <Chrome className="inline mr-2 w-4 h-4" />
                Add to Chrome
              </motion.button>
            )}

            {user ? (
              <button
                onClick={() => signOut(auth)}
                className="px-4 py-2 rounded-full bg-red-500 text-white"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>

        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;