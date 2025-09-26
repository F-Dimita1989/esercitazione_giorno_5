import React, { useEffect, useState } from "react";

const WindowWidth: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>Larghezza finestra: {width}px</div>;
};

export default WindowWidth;
