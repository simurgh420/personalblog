<<<<<<< HEAD

import AboutBack from "@/components/styled-components/About-Back";
import ContactForm from "@/components/styled-components/Contact-form";
import LinkIcon from "@/components/styled-components/Link-icon";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-background to-[#0a0a0a]">
      {/* بک‌گراند متحرک */}
      <AboutBack />

      <div className="relative text-center mb-12 z-10">
        <h2 className="text-3xl font-bold mb-2 font-vazir text-white">تماس با من</h2>
        <p className="text-gray-300 font-vazir">
          خوشحال می‌شوم از طریق فرم زیر یا شبکه‌های اجتماعی با من در ارتباط باشید
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto grid md:grid-cols-2 gap-6 z-10">
        {/* فرم */}
        <Card className="bg-black/40 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl">
          <CardHeader>
            <CardTitle className="text-white font-vazir text-lg">ارسال پیام</CardTitle>
            <p className="text-gray-400 text-sm font-vazir">
              اگر سوال، ایده یا پیشنهادی دارید خوشحال می‌شوم اینجا بنویسید 🌟
            </p>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        {/* شبکه‌های اجتماعی */}
        <div className="flex flex-col items-center justify-center space-y-4 p-6">
          <h3 className="font-vazir text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            شبکه‌های اجتماعی
          </h3>
          <p className="text-gray-400 text-sm">در هر یک از شبکه‌های زیر من را دنبال کنید</p>
          <LinkIcon size="large" />
        </div>
      </div>
    </section>
  );
=======
import { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { toast } from "sonner";
import {Link} from "react-router";


export const Contact  = () => {
    const socials = [
        { icon: <FaTelegram size={24} />, link: "https://t.me/Mmdrza_hb" },
        { icon: <FaLinkedin size={24} />, link: "https://www.linkedin.com/in/mohammadreza-hbibzade-272a46377/" },
        { icon: <FaGithub size={24} />, link: "https://github.com/simurgh420" },
    ];
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("پیام شما با موفقیت ارسال شد ✅");
        setFormData({ name: "", email: "", message: "" });
    };
    return (
        <section className="py-20 bg-gradient-to-b from-background to-[#0a0a0a]">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2 font-vazir text-white">تماس با من</h2>
                <p className="text-gray-300 font-vazir text-c">
                    خوشحال می‌شوم از طریق فرم زیر یا شبکه‌های اجتماعی با من در ارتباط باشید
                </p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                <Card className="bg-black/40 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl">
                    <CardHeader>
                        <CardTitle className="text-white font-vazir text-lg">ارسال پیام</CardTitle>
                        <p className="text-gray-400 text-sm font-vazir">
                            اگر سوال، ایده یا پیشنهادی دارید خوشحال می‌شوم اینجا بنویسید 🌟
                        </p>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <Input
                                placeholder="نام شما"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="font-vazir bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                            />
                            <Input
                                placeholder="ایمیل شما"
                                type="email"
                                name="email"
                                value={formData.email}
                                required
                                onChange={handleChange}
                                className="font-vazir bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                            />
                            <Textarea
                                placeholder="متن پیام"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}

                                className="font-vazir bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                            />
                            <Button
                                type="submit"
                                className="w-full font-vazir bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:scale-105 active:scale-95 transition"
                            >
                                ارسال پیام
                            </Button>
                        </form>
                    </CardContent>
                </Card>
                    <div className="flex flex-col items-center justify-center space-y-4 p-6">
                        <h3 className="font-vazir text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                            شبکه‌های اجتماعی
                        </h3>
                        <p className="text-gray-400 text-sm">در هر یک از شبکه‌های زیر من را دنبال کنید</p>
                        <div className="flex space-x-4">
                            {
                                socials.map((item,index) => (
                                    <Link
                                    key={index}
                                    to={item.link}
                                    target="_blank"
                                    className="w-12 h-12 flex items-center justify-center rounded-full
                       bg-white/5 backdrop-blur-md border border-white/10
                       text-white hover:text-purple-400 hover:scale-110
                       transition-all duration-300"
                                    >
                                        {item.icon}
                                    </Link>
                                ))}
                        </div>
                    </div>
            </div>

        </section>
    );
>>>>>>> fa44b3a7a0c3a5e4d7ad0881da17935bc906ae66
};
