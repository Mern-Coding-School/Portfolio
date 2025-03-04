import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sameer Khan",
    username: "@dev.sameerkhan",
    text: "Abhishek’s backend skills are top-notch! Fast, secure, and scalable APIs every time.",
    image: "https://avatars.githubusercontent.com/u/131584949?v=4",
  },
  {
    name: "Muhammad Muneeb",
    username: "@muhammadmuneeb190",
    text: "A true problem-solver! His backend architectures are efficient and well-optimized.",
    image: "https://avatars.githubusercontent.com/u/161440680?v=4",
  },
  {
    name: "Sawnwal Sulheriaa",
    username: "@sanwal_sulehriaa",
    text: "Reliable and skilled! Abhishek ensures smooth performance with every project.",
    image: "https://avatars.githubusercontent.com/u/173961159?v=4",
  },
  {
    name: "Muhammad Anwar Uddin",
    username: "@MuhammadAnwarUddin",
    text: "Backend made easy! His expertise in Node.js & MongoDB is impressive.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-[#0C0C0D] w-full min-h-[80%] text-zinc-200 py-20 px-10 max-[640px]:px-4 text-center relative select-none">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[20vw] h-[70%] bg-gradient-to-r from-[#0C0C0D] to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[20vw] h-[70%] bg-gradient-to-l from-[#0C0C0D] to-transparent pointer-events-none z-20" />
      <h2 className="text-4xl font-[bold] shiny-text">
        Here's what others are saying 💬✨
      </h2>
      <p className="text-zinc-400 mt-2 shiny-text">
        They think Abhisekh is cool, maybe you will too!
      </p>

      <div className="relative mt-30 group">
        <div className="flex gap-20 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30,
                rotate: index % 2 === 0 ? 10 : -10,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 0 }}
              className="bg-[#111] p-6 rounded-xl w-[20rem] min-h-[10rem] shadow-lg inline-block mx-6 origin-center relative z-20"
            >
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="text-lg font-[semibold]">{t.name}</h3>
                  <p className="text-sm text-zinc-400">{t.username}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-300 whitespace-normal">
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>
        {`
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 20s linear infinite;
      display: inline-block;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `}
      </style>
    </div>
  );
}
