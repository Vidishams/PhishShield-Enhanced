import { useEffect, useState } from "react";
import { getRedirectResult, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result?.user) {
          navigate("/", { replace: true });
        }
      } catch (error) {
        console.error("Google redirect sign-in failed:", error);
        setErrorMessage("Google sign-in could not be completed. Please try again.");
      }
    };

    void handleRedirectResult();
  }, [navigate]);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/", { replace: true });
    } catch (error) {
      const code = typeof error === "object" && error && "code" in error ? (error as { code?: string }).code : undefined;

      if (code === "auth/popup-blocked" || code === "auth/popup-closed-by-user") {
        try {
          await signInWithRedirect(auth, googleProvider);
          return;
        } catch (redirectError) {
          console.error("Google redirect sign-in failed:", redirectError);
        }
      }

      console.error("Google sign-in failed:", error);
      setErrorMessage("Unable to sign in with Google right now. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family: "Inter", sans-serif;
        }

        .navbar{
          position:fixed;
          top:0;
          left:0;
          width:100%;
          height:70px;
          display:flex;
          align-items:center;
          padding:0 40px;
          background:white;
          border-bottom:1px solid #e5e7eb;
        }

        .brand{
          display:flex;
          align-items:center;
          gap:10px;
          font-size:22px;
          font-weight:700;
          color:#0f172a;
        }

        .brand img{
          width:40px;
          height:40px;
        }

        .login-container{
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:white;
        }

        .login-card{
          background:white;
          padding:45px;
          border-radius:16px;
          width:360px;
          text-align:center;
          border:2px solid black;
          box-shadow:0 10px 20px rgba(0,0,0,0.1);
          animation:fadeIn 0.8s ease;
        }

        .logo{
          font-size:26px;
          font-weight:700;
          color:#0f172a;
          margin-bottom:10px;
        }

        .logo span{
          color:#f97316;
        }

        .subtitle{
          font-size:14px;
          color:#64748b;
          margin-bottom:30px;
        }

        .google-btn{
          width:100%;
          padding:12px;
          border:none;
          border-radius:10px;
          background:#f97316;
          color:white;
          font-size:15px;
          font-weight:600;
          cursor:pointer;
          display:flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          transition:0.3s;
        }

        .google-btn:hover{
          background:#ea580c;
          transform:translateY(-2px);
          box-shadow:0 6px 18px rgba(0,0,0,0.25);
        }

        .google-icon{
          width:20px;
        }

        @keyframes fadeIn{
          from{
            opacity:0;
            transform:translateY(20px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }
      `}</style>

      {/* Top Logo Bar */}
      <div className="navbar">
        <div className="brand">
          <img src="/orange_fish.jpg" alt="logo" />
          PhishShield
        </div>
      </div>

      <div className="login-container">
        <div className="login-card">
          <div className="logo">
            Phish<span>Shield</span>
          </div>

          <p className="subtitle">
            Detect phishing attacks instantly and stay protected online.
          </p>

          {errorMessage && <p className="mb-4 text-sm text-red-500">{errorMessage}</p>}

          <button className="google-btn" onClick={handleGoogleLogin} disabled={isLoading}>
            <img
              className="google-icon"
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              alt="google"
            />
            {isLoading ? "Signing in..." : "Sign in with Google"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;