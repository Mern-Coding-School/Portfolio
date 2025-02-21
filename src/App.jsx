import { useEffect, useRef } from "react";
import gsap from "gsap";

const App = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 });
    gsap.to(barRef.current, { width: "6rem", duration: 1.5, repeat: -1, yoyo: true });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold">
        Work in Progress
      </h1>
      <p ref={textRef} className="text-lg md:text-2xl mt-4 text-gray-400">
        My portfolio is coming soon. Stay tuned!
      </p>
      <div ref={barRef} className="w-24 h-2 bg-blue-500 rounded-full mt-6" />
    </div>
  );
};

export default App;
