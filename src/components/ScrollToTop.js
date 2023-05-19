// Code from https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScrollToTop = () => {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    handleScrollToTop();
  }, [pathname]);

  return null;
}
