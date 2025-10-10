<<<<<<< HEAD

import LinkIcon from "./components/styled-components/Link-icon";


export const Footer = () => {
    const year = new Date().getFullYear();

=======
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { Link } from "react-router";

export const Footer = () => {
    const year = new Date().getFullYear();
    const socials = [
        { icon: <FaTelegram size={24} />, link: "https://t.me/Mmdrza_hb" },
        { icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/mohammadreza-hbibzade-272a46377/" },
        { icon: <FaGithub size={24} />, link: "https://github.com/simurgh420" },
    ];
>>>>>>> fa44b3a7a0c3a5e4d7ad0881da17935bc906ae66
    return (
        <footer className="bg-[#0a0a0a] border-t border-white/10 py-8 mt-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                {/* متن کپی‌رایت */}
                <p className="text-gray-400 font-vazir text-sm text-center md:text-left">
                    © {year} تمامی حقوق محفوظ است | طراحی توسط{" "}
<<<<<<< HEAD
                    <span className="text-purple-400">Simurgh</span>
                </p>
             <LinkIcon size="small"/>
=======
                    <span className="text-purple-400">محمدرضا</span>
                </p>
                <div className="flex space-x-4">
                    {socials.map((item, index) => (
                        <Link
                            key={index}
                            to={item.link}
                            target="_blank"
                            className="w-10 h-10 flex items-center justify-center rounded-full
                         bg-white/5 backdrop-blur-md border border-white/10
                         text-white hover:text-purple-400 hover:scale-110
                         transition-all duration-300"
                        >
                            {item.icon}
                        </Link>
                    ))}
                </div>
>>>>>>> fa44b3a7a0c3a5e4d7ad0881da17935bc906ae66
            </div>

        </footer>
    );
};
