import { useState, useEffect } from "react";
import "./progressBar.css";

function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    const articleElement =
      document.querySelector(".artigo-body-ig") ||
      document.querySelector(".content-body") ||
      document.documentElement;

    const articleTop = (articleElement as HTMLElement).offsetTop || 0;
    const articleHeight = (articleElement as HTMLElement).scrollHeight;
    const windowHeight = window.innerHeight;

    const scrolledInElement = Math.max(
      0,
      scrollTop + windowHeight - articleTop - windowHeight * 0.2
    );
    const totalScrollableInElement = articleHeight - windowHeight * 0.8;

    let percentage = 0;
    if (totalScrollableInElement > 0) {
      percentage = (scrolledInElement / totalScrollableInElement) * 100;
    }

    percentage = Math.max(0, Math.min(100, percentage));

    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className='progress-bar-ig'
      style={{ width: `${scrollPercentage}%` }}
    ></div>
  );
}

export default ProgressBar;
