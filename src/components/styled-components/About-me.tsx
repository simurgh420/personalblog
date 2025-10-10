

const AboutMe = () => {
  return (
    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1">
      <div className="text-white rounded-3xl border border-green-500/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] shadow-2xl duration-700 z-10 relative backdrop-blur-xl hover:border-green-500/40 overflow-hidden hover:shadow-green-500/10 hover:shadow-3xl w-[350px]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-green-400/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-green-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce delay-500" />
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-green-500/5 blur-xl animate-ping" />
          <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-green-500/5 blur-lg animate-ping delay-1000" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
        </div>
        <div className="p-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-green-500/20 animate-ping" />
              <div className="absolute inset-0 rounded-full border border-green-500/10 animate-pulse delay-500" />
              <div className="p-6 rounded-full backdrop-blur-lg border border-green-500/20 bg-gradient-to-br from-black/80 to-gray-900/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 hover:shadow-green-500/20">
                <div className="transform group-hover:rotate-180 transition-transform duration-700">
                <svg
  className="w-8 h-8 text-green-500 fill-current group-hover:text-green-400 transition-colors duration-300 filter drop-shadow-lg"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
  role="img"
>
                                      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
                                        <circle cx="12" cy="9" r="3" fill="currentColor" />
                                    <path
    d="M5 18c0-3.314 3.582-4.5 7-4.5s7 1.186 7 4.5v1H5v-1z"
    fill="currentColor"
  />
                                  
                                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-400 bg-clip-text text-transparent animate-pulse">
                درباره من 
              </p>
            </div>
            <div className="space-y-1 max-w-sm">
              <p className="text-white font-semibold text-base transform group-hover:scale-105 transition-transform duration-300">
              
              </p>
              <p className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
              توسعه‌دهنده وب، علاقه‌مند به طراحی رابط کاربری و تجربه کاربری
              </p>
              <p className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
                 من روی پروژه‌های مدرن با React،,Next TypeScript و Tailwind کار می‌کنم و
              </p>
              <p className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
                     تجربه کاربری رو با طراحی‌های تمیز و تعاملی ارتقا میدم.
              </p>
            </div>
            <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse" />
            <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-500/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-green-500/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
}

export default AboutMe;
