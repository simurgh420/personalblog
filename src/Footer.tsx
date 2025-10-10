
import LinkIcon from "./components/styled-components/Link-icon";


export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#0a0a0a] border-t border-white/10 py-8 mt-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                {/* متن کپی‌رایت */}
                <p className="text-gray-400 font-vazir text-sm text-center md:text-left">
                    © {year} تمامی حقوق محفوظ است | طراحی توسط{" "}
                    <span className="text-purple-400">Simurgh</span>
                </p>
             <LinkIcon size="small"/>
            </div>

        </footer>
    );
};
