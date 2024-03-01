import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Footer } from "./components/Footer/Footer";

import "./style.css";

export const App = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 904);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <Header isSmallScreen={isSmallScreen} />
      <LoginForm />
      <Footer />
      {isSmallScreen ? null : (
        <img
          src="/BG.svg"
          className="background"
          alt="background DCM logo"
          role="presentation"
        />
      )}
    </main>
  );
};
