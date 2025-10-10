const FrantAbout = () => {
  return (
    <div className="group relative cursor-pointer overflow-hidden 
      bg-[#1a1a1a] rounded-2xl px-8 pt-14 pb-12 
      shadow-xl ring-1 ring-white/10 
      transition-all duration-500 transform 
      hover:scale-105 hover:shadow-2xl 
      sm:mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
      
      {/* افکت گرادیان پس‌زمینه */}
      <span className="absolute top-0 left-0 z-0 h-40 w-40 rounded-full 
        bg-gradient-to-r from-purple-500 to-blue-500 opacity-60 
        transition-all duration-500 transform group-hover:scale-[20]" />
      
      <div className="relative z-10 mx-auto max-w-2xl">
        {/* آیکون */}
        <span className="grid h-28 w-28 place-items-center rounded-full 
          bg-gradient-to-r from-purple-500 to-blue-500 
          transition-all duration-500 transform 
          group-hover:from-pink-500 group-hover:to-yellow-500">
          <svg
            className="h-14 w-14 text-white transition-all"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </span>

        {/* متن معرفی */}
        <div className="space-y-6 pt-6 text-lg leading-8 text-gray-300 
          transition-all duration-500 group-hover:text-white">
          <p className="font-medium">
            سلام، من محمدرضا هستم  
            توسعه‌دهنده وب، علاقه‌مند به طراحی رابط کاربری و تجربه کاربری  
            من روی پروژه‌های مدرن با React،Next TypeScript و Tailwind کار می‌کنم و تجربه کاربری رو با طراحی‌های تمیز و تعاملی ارتقا میدم.
          </p>
        </div>

        {/* امضا */}
        <div className="pt-6 text-lg font-semibold leading-7">
          <p>
            <span className="text-purple-400 transition-all duration-500 group-hover:text-white">
              Mmdrza HB →
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrantAbout;
