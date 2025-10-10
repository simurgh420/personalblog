import { useState, useEffect } from "react";
<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import logo from "@/assets/simurgh_logo.png";
import { Menu, X } from "lucide-react";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // تغییر رنگ هدر هنگام اسکرول
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // تشخیص بخش فعال
    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5, // وقتی نصف سکشن دیده بشه
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const navItems = [
        { to: "home", label: "خانه" },
        { to: "about", label: "درباره من" },
        { to: "works", label: "نمونه کارها" },
        { to: "contact", label: "تماس" },
    ];

    return (
=======
import { Link,NavLink} from "react-router";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import logo from "@/assets/simurgh_logo.png";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const navItems  = [
        { to: "/", label: "خانه" },
        { to: "/about", label: "درباره من" },
        { to: "/works", label: "نمونه کارها" },
        { to: "/contact", label: "تماس" },
    ];
    return (


>>>>>>> fa44b3a7a0c3a5e4d7ad0881da17935bc906ae66
        <motion.header
            animate={{
                backgroundColor: scrolled
                    ? "rgba(30, 30, 46, 0.6)"
                    : "rgba(30, 30, 46, 0.3)",
                backdropFilter: "blur(12px)",
            }}
            className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%]
<<<<<<< HEAD
        flex items-center justify-between px-6 py-3 
        rounded-2xl border border-slate-800 shadow-lg 
        backdrop-blur-lg transition-all duration-300 z-50`}
        >
            {/* لوگو */}
            <a href="#home" className="flex items-center gap-2">
                <img src={logo} alt="لوگو" className="w-8 h-8" />
                <span className="hidden sm:block text-white font-vazir font-bold text-lg">
          Simurgh
        </span>
            </a>
            {/* منوی دسکتاپ */}
            <nav className="hidden md:flex gap-8 font-vazir text-sm font-medium">
                {navItems.map((item) => (
                    <a
                        key={item.to}
                        href={`#${item.to}`}
                        className={`relative transition-colors duration-300
              after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-primary 
              ${
                            activeSection === item.to
                                ? "text-primary after:w-full"
                                : "text-muted-foreground hover:text-primary after:w-0 hover:after:w-full"
                        }`}
                    >
                        {item.label}
                    </a>
                ))}
            </nav>

            {/* دکمه حالت تاریک + موبایل */}
            <div >
                <ThemeToggle />
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* منوی موبایل */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 w-full bg-[#1e1e2e] border-t border-slate-700 p-4 flex flex-col gap-4 md:hidden rounded-b-2xl"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.to}
                                href={`#${item.to}`}
                                className={`block px-4 py-2 rounded-lg transition 
                  ${
                                    activeSection === item.to
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:bg-slate-800"
                                }`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
=======
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
                                    ? "text-primary after:w-full"
                                    : "text-muted-foreground hover:text-primary"
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

>>>>>>> fa44b3a7a0c3a5e4d7ad0881da17935bc906ae66
    );
};
