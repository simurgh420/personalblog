import profileImg from '@/assets/profphoto.jpg'
import { Link } from "react-router";
import { motion } from "framer-motion";


export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-[#0a0a0a]">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-right"
                >
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold font-vazir text-white leading-snug"
                    >
                        سلام، من{" "}
                        <span className="text-primary">محمدرضا</span>{" "}
                        هستم
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="mt-4 text-lg text-muted-foreground font-vazir"
                    >
                        توسعه‌دهنده وب، علاقه‌مند به طراحی رابط کاربری و تجربه کاربری
                    </motion.p>
                <motion.p
                    className="max-w-lg leading-relaxed text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    من روی پروژه‌های مدرن با <span className="text-[#61DAFB] font-bold">React</span>، TypeScript و Tailwind کار می‌کنم و
                    تجربه کاربری رو با طراحی‌های تمیز و تعاملی ارتقا میدم.
                </motion.p>
                <motion.div
                    className="flex gap-4 justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <Link
                        to="/works"
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:scale-105 transition"
                    >
                        مشاهده نمونه‌کارها
                    </Link>
                    <Link
                        to="/contact"
                        className="px-6 py-3 border border-primary text-primary rounded-xl hover:bg-primary hover:text-primary-foreground transition"
                    >
                        تماس با من
                    </Link>
                </motion.div>
            </motion.div>
            <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-primary shadow-[0_0_40px_-5px] shadow-primary transition-all duration-500 hover:shadow-[0_0_50px_5px] hover:shadow-purple-950 hover:border-pink-900">
                    <img
                        src={profileImg}
                        alt="پروفایل"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                </div>
            </motion.div>
            </div>
        </section>
    );
};
