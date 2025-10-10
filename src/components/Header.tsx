import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import logo from '@/assets/simurgh_logo.png';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const navItems = [
    { to: '/', label: 'خانه' },
    { to: '/about', label: 'درباره من' },
    { to: '/works', label: 'نمونه کارها' },
    { to: '/contact', label: 'تماس' },
  ];
  return (
    <motion.header
      animate={{
        backgroundColor: scrolled
          ? 'rgba(30, 30, 46, 0.6)'
          : 'rgba(30, 30, 46, 0.3)',
        backdropFilter: 'blur(12px)',
      }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%]
    flex items-center justify-between px-6 py-3 
    rounded-2xl border border-slate-800 shadow-lg 
    backdrop-blur-lg transition-all duration-300 z-50`}
    >
      <nav className="hidden md:flex gap-8 font-vazir text-sm font-medium">
        <Link to="/" className="text-white font-vazir text-lg font-bold">
          Simurgh
        </Link>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `relative transition-colors duration-300
         after:absolute after:-bottom-1 after:left-0 after:w-0 
         after:h-[2px] after:bg-primary after:transition-all after:duration-300 
         hover:after:w-full
         ${
           isActive
             ? 'text-primary after:w-full'
             : 'text-muted-foreground hover:text-primary'
         }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="لوگو" className="w-8 h-8" />
          <ThemeToggle />
        </Link>
      </div>
    </motion.header>
  );
};
