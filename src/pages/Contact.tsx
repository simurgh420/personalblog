
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
};
