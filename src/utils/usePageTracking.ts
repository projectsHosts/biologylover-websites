import { useLocation } from "react-router-dom";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-87MX05Z62Q", {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default usePageTracking;
