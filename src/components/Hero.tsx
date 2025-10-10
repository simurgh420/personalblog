import { motion } from 'framer-motion';
import WorkBtn from './styled-components/Work-btn';
import Avatar from './styled-components/Avatar';
import FrantAbout from './styled-components/Frant-about-me';
import MainBack from './styled-components/Main-back';
import ContactBtn from './styled-components/Contact-us-btn';

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-background to-[#0a0a0a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* ستون معرفی */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-center text-center"
        >
          <MainBack />
          <FrantAbout />
        </motion.div>

        {/* ستون آواتار */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Avatar />
        </motion.div>
      </div>
      {/* دکمه ها */}
      <motion.div
        className="-mt-40 mb-6 flex justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a href="#works">
          <WorkBtn />
        </a>
        <a href="#contact">
          <ContactBtn />
        </a>
      </motion.div>
    </section>
  );
};
