import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from 'react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  ListMusic,
  Sparkles,
  Heart,
  Share2,
  Copy,
  RefreshCw,
  Moon,
  Zap,
  Info,
  Clock,
  Maximize2,
  Minimize2,
  Shuffle,
  X,
  Music,
  BookOpen,
  Atom,
  Brain,
  Cpu,
  Feather,
  Leaf,
  Palette,
  LayoutGrid,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type Track = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  duration: string;
  url: string;
};

type QuoteItem = {
  id: string;
  quote: string;
  originalQuote?: string;
  author: string;
  authorEn?: string;
  category: string;
  bio?: string;
};

type CategoryStyle = { badge: string; activeTab: string; glow: string };
type IconType = React.ComponentType<{ className?: string }>;

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const MUSIC_LIBRARY: Track[] = [
  {
    id: 1,
    title: 'Goodbye Brother',
    artist: 'Ramin Djawadi',
    genre: 'Soundtrack',
    duration: '3:??',
    url: 'https://cdn.tarafdari.com/tarafdari-static-files/ts10.tarafdari.com/contents/user782279/content-sound/03_ramin_djawadi_-_goodbye_brother.mp3',
  },
  {
    id: 2,
    title: 'همیشه مؤمن',
    artist: 'Yavar',
    genre: 'Persian Classic',
    duration: '3:??',
    url: 'https://nicmusic.musitraf.com/upload/2025/07/28/Yavar%20Hamishe%20Momen.mp3',
  },
  {
    id: 3,
    title: 'نم نم بارون',
    artist: 'Vigen',
    genre: 'Persian Classic',
    duration: '3:??',
    url: 'https://cdn.tarafdari.com/tarafdari-static-files/ts17.tarafdari.com/contents/user844718/content-sound/nam_nam_baraan.mp3',
  },
  {
    id: 4,
    title: 'Back to Her Man',
    artist: 'Damien Rice',
    genre: 'Alternative',
    duration: '3:??',
    url: 'https://cdn.tarafdari.com/tarafdari-static-files/ts2.tarafdari.com/contents/user267979/content-sound/back_to_her_man_-_damien_rice.mp3',
  },
  {
    id: 5,
    title: 'در انتظار باران',
    artist: 'Keyhan Kalhor',
    genre: 'Persian Instrumental',
    duration: '3:??',
    url: 'https://biamusiic.musitraf.com/Album/Artist/Keyhan%20Kalhor/Keyhan%20Kalhor%20-%20Shahre%20Khamoosh/04%20Dar%20Entezare%20Baran.mp3',
  },
  {
    id: 6,
    title: 'شیدا',
    artist: 'Sowlo & Jimi',
    genre: 'Persian',
    duration: '3:??',
    url: 'https://dl.ahlemusic.eu/music404/bahar/Sowlo%20&%20Jimi%20-%20Sheyda%20(Remix).mp3',
  },
  {
    id: 7,
    title: 'Dead Rose 4',
    artist: 'Tik Rap 021 Remix',
    genre: 'Rap Remix',
    duration: '3:??',
    url: 'https://kk.soonami.ir/Dead%20Rose%204%20(Tik%20Rap%20021%20Remix).mp3',
  },
];

// 50 quotes across 7 categories — every category tab has real matches.
const BUILTIN_QUOTES: QuoteItem[] = [
  {
    id: '1',
    quote: 'تخیل همه‌چیز است. تخیل پیش‌نمایشی از جاذبه‌های آینده زندگی شماست.',
    originalQuote:
      "Imagination is everything. It is the preview of life's coming attractions.",
    author: 'آلبرت انیشتین',
    authorEn: 'Albert Einstein',
    category: 'Science',
    bio: 'فیزیکدان نظری برنده جایزه نوبل و کاشف نظریه نسبیت.',
  },
  {
    id: '2',
    quote:
      'زمان شما محدود است، پس آن را با زندگی کردن در رویای دیگران هدر ندهید.',
    originalQuote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: 'استیو جابز',
    authorEn: 'Steve Jobs',
    category: 'Tech',
    bio: 'بنیان‌گذار اپل و از پیشگامان تحول تکنولوژی دیجیتال.',
  },
  {
    id: '3',
    quote: 'آنچه در جستجوی آن هستی، خود در جستجوی توست.',
    originalQuote: 'What you seek is seeking you.',
    author: 'مولانا جلال‌الدین بلخی',
    authorEn: 'Rumi',
    category: 'Wisdom',
    bio: 'عارف، شاعر و فیلسوف جاودانه قرن هفتم هجری.',
  },
  {
    id: '4',
    quote:
      'بر ذهن و اندیشه خود تسلط داری، نه بر رویدادهای بیرونی. این حقیقت را درک کن تا نیرو بیابی.',
    originalQuote:
      'You have power over your mind - not outside events. Realize this, and you will find strength.',
    author: 'مارکوس اورلیوس',
    authorEn: 'Marcus Aurelius',
    category: 'Philosophy',
    bio: 'امپراتور روم و فیلسوف برجسته مکتب رواقی‌گری.',
  },
  {
    id: '5',
    quote:
      'اگر می‌خواهی اسرار پنهان کیهان را بیابی، بر حسب انرژی، فرکانس و ارتعاش فکر کن.',
    originalQuote:
      'If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.',
    author: 'نیکولا تسلا',
    authorEn: 'Nikola Tesla',
    category: 'Science',
    bio: 'مخترع، مهندس برق و نابغه جریان متناوب.',
  },
  {
    id: '6',
    quote: 'در گوشه‌ای از تاریکی، چیزی شگفت‌انگیز منتظر شناخته‌شدن توسط توست.',
    originalQuote: 'Somewhere, something incredible is waiting to be known.',
    author: 'کارل سیگن',
    authorEn: 'Carl Sagan',
    category: 'Science',
    bio: 'کیهان‌شناس و اخترشناس نامدار و نویسنده کتاب کیهان.',
  },
  {
    id: '7',
    quote:
      'زندگی مسئله‌ای نیست که باید آن را حل کرد، بلکه واقعیتی است که باید آن را تجربه نمود.',
    originalQuote:
      'Life is not a problem to be solved, but a reality to be experienced.',
    author: 'سورن کی‌یرکگور',
    authorEn: 'Søren Kierkegaard',
    category: 'Philosophy',
    bio: 'فیلسوف دانمارکی و پدر فلسفه اگزیستانسیالیسم.',
  },
  {
    id: '8',
    quote: 'هرکس چرایی برای زندگی داشته باشد، با هر چگونه‌ای خواهد ساخت.',
    originalQuote: 'He who has a why to live can bear almost any how.',
    author: 'فریدریش نیچه',
    authorEn: 'Friedrich Nietzsche',
    category: 'Philosophy',
    bio: 'فیلسوف، شاعر و منتقد فرهنگی نواندیش آلمانی.',
  },
  {
    id: '9',
    quote: 'تنها راه انجام کارهای بزرگ، دوست داشتن کاری است که انجام می‌دهید.',
    originalQuote: 'The only way to do great work is to love what you do.',
    author: 'ریچارد فاینمن',
    authorEn: 'Richard Feynman',
    category: 'Science',
    bio: 'فیزیکدان کوانتومی و برنده جایزه نوبل.',
  },
  {
    id: '10',
    quote: 'سفر به سوی هزاران فرسنگ تنها با یک قدم ساده آغاز می‌شود.',
    originalQuote: 'A journey of a thousand miles begins with a single step.',
    author: 'لائوتسه',
    authorEn: 'Lao Tzu',
    category: 'Wisdom',
    bio: 'فیلسوف کهن چین و بنیان‌گذار آئین دائوئیسم.',
  },
  {
    id: '11',
    quote: 'هوش، توانایی سازگاری با تغییر است.',
    originalQuote: 'Intelligence is the ability to adapt to change.',
    author: 'استیون هاوکینگ',
    authorEn: 'Stephen Hawking',
    category: 'Science',
    bio: 'کیهان‌شناس بریتانیایی و نویسنده تاریخچه‌ی زمان.',
  },
  {
    id: '12',
    quote:
      'اگر دورتر از دیگران دیده‌ام، به این دلیل است که بر شانه‌های غول‌ها ایستاده‌ام.',
    originalQuote:
      'If I have seen further, it is by standing on the shoulders of giants.',
    author: 'آیزاک نیوتن',
    authorEn: 'Isaac Newton',
    category: 'Science',
    bio: 'فیزیکدان و ریاضی‌دان بنیان‌گذار مکانیک کلاسیک.',
  },
  {
    id: '13',
    quote: 'در زندگی چیزی برای ترسیدن وجود ندارد، فقط باید آن را درک کرد.',
    originalQuote:
      'Nothing in life is to be feared, it is only to be understood.',
    author: 'ماری کوری',
    authorEn: 'Marie Curie',
    category: 'Science',
    bio: 'نخستین برنده‌ی زن جایزه نوبل، پیشگام رادیواکتیویته.',
  },
  {
    id: '14',
    quote:
      'این قوی‌ترین گونه نیست که زنده می‌ماند، بلکه گونه‌ای است که بیشترین سازگاری را دارد.',
    originalQuote:
      'It is not the strongest that survives, but the most adaptable.',
    author: 'چارلز داروین',
    authorEn: 'Charles Darwin',
    category: 'Science',
    bio: 'طبیعی‌دان بریتانیایی و بنیان‌گذار نظریه‌ی تکامل.',
  },
  {
    id: '15',
    quote: 'تخیل چیزی‌ست که فراتر از دیدنی‌ها را می‌بیند.',
    originalQuote: 'Imagination is the faculty which sees beyond the visible.',
    author: 'ادا لاولیس',
    authorEn: 'Ada Lovelace',
    category: 'Tech',
    bio: 'نخستین برنامه‌نویس تاریخ رایانه.',
  },
  {
    id: '16',
    quote: 'تنها چیزی که می‌دانم این است که هیچ نمی‌دانم.',
    originalQuote: 'The only true wisdom is in knowing you know nothing.',
    author: 'سقراط',
    authorEn: 'Socrates',
    category: 'Philosophy',
    bio: 'فیلسوف یونان باستان و بنیان‌گذار فلسفه‌ی غرب.',
  },
  {
    id: '17',
    quote:
      'ما آنچه هستیم که بارها انجام می‌دهیم؛ پس برتری یک عادت است، نه یک عمل.',
    originalQuote:
      'We are what we repeatedly do. Excellence is not an act, but a habit.',
    author: 'ارسطو',
    authorEn: 'Aristotle',
    category: 'Philosophy',
    bio: 'فیلسوف و دانشمند یونانی، شاگرد افلاطون.',
  },
  {
    id: '18',
    quote: 'ما بیشتر از واقعیت، از تصورمان رنج می‌بریم.',
    originalQuote: 'We suffer more often in imagination than in reality.',
    author: 'سنکا',
    authorEn: 'Seneca',
    category: 'Philosophy',
    bio: 'فیلسوف رواقی و سیاست‌مدار رومی.',
  },
  {
    id: '19',
    quote: 'انسان محکوم به آزاد بودن است.',
    originalQuote: 'Man is condemned to be free.',
    author: 'ژان-پل سارتر',
    authorEn: 'Jean-Paul Sartre',
    category: 'Philosophy',
    bio: 'فیلسوف اگزیستانسیالیست و نویسنده‌ی فرانسوی.',
  },
  {
    id: '20',
    quote: 'ذهن همه‌چیز است؛ آنچه می‌اندیشی، همان می‌شوی.',
    originalQuote: 'The mind is everything. What you think you become.',
    author: 'بودا',
    authorEn: 'Buddha',
    category: 'Wisdom',
    bio: 'بنیان‌گذار آیین بودایی.',
  },
  {
    id: '21',
    quote: 'فرقی نمی‌کند چقدر آهسته حرکت می‌کنی، مادامی که متوقف نشوی.',
    originalQuote:
      'It does not matter how slowly you go as long as you do not stop.',
    author: 'کنفوسیوس',
    authorEn: 'Confucius',
    category: 'Wisdom',
    bio: 'فیلسوف و معلم بزرگ چینی باستان.',
  },
  {
    id: '22',
    quote: 'تغییری باش که می‌خواهی در جهان ببینی.',
    originalQuote: 'Be the change that you wish to see in the world.',
    author: 'ماهاتما گاندی',
    authorEn: 'Mahatma Gandhi',
    category: 'Wisdom',
    bio: 'رهبر معنوی و مبارز راه استقلال هند.',
  },
  {
    id: '23',
    quote: 'زیبایی حقیقتی است که ابدیت با آن آینه‌ی خود را نگاه می‌کند.',
    originalQuote: 'Beauty is eternity gazing at itself in a mirror.',
    author: 'جبران خلیل جبران',
    authorEn: 'Khalil Gibran',
    category: 'Wisdom',
    bio: 'شاعر و نقاش لبنانی.',
  },
  {
    id: '24',
    quote:
      'موفقیت معلم بدی است؛ باهوش‌ترین‌ها را وسوسه می‌کند که فکر کنند هرگز شکست نمی‌خورند.',
    originalQuote:
      "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    author: 'بیل گیتس',
    authorEn: 'Bill Gates',
    category: 'Tech',
    bio: 'بنیان‌گذار مایکروسافت.',
  },
  {
    id: '25',
    quote:
      'گاهی افرادی که کسی تصورشان را هم نمی‌کند، کارهایی می‌کنند که هیچ‌کس تصورش را نمی‌کرد.',
    originalQuote:
      'Sometimes it is the people no one imagines anything of who do the things that no one can imagine.',
    author: 'آلن تورینگ',
    authorEn: 'Alan Turing',
    category: 'Tech',
    bio: 'ریاضی‌دان و پدر علوم رایانه.',
  },
  {
    id: '26',
    quote:
      'آسان‌تر است بعد از انجام کار عذرخواهی کنی تا این‌که پیشاپیش اجازه بگیری.',
    originalQuote:
      "It's easier to ask forgiveness than it is to get permission.",
    author: 'گریس هاپر',
    authorEn: 'Grace Hopper',
    category: 'Tech',
    bio: 'پیشگام برنامه‌نویسی رایانه و مخترع کامپایلر.',
  },
  {
    id: '27',
    quote: 'وب برای همه است.',
    originalQuote: 'The Web is for everyone.',
    author: 'تیم برنرز-لی',
    authorEn: 'Tim Berners-Lee',
    category: 'Tech',
    bio: 'مخترع وب جهان‌گستر (WWW).',
  },
  {
    id: '28',
    quote: 'چه فکر کنی می‌توانی، چه فکر کنی نمی‌توانی، به هر حال درست می‌گویی.',
    originalQuote:
      "Whether you think you can, or you think you can't – you're right.",
    author: 'هنری فورد',
    authorEn: 'Henry Ford',
    category: 'Mindset',
    bio: 'صنعتگر آمریکایی و بنیان‌گذار فورد موتور.',
  },
  {
    id: '29',
    quote:
      'موفقیت نهایی نیست، شکست کشنده نیست: آنچه اهمیت دارد شهامت ادامه دادن است.',
    originalQuote:
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'وینستون چرچیل',
    authorEn: 'Winston Churchill',
    category: 'Mindset',
    bio: 'نخست‌وزیر بریتانیا در جنگ جهانی دوم.',
  },
  {
    id: '30',
    quote: 'من شکست نخورده‌ام؛ فقط ده‌هزار راهی را یافته‌ام که کار نمی‌کند.',
    originalQuote:
      "I have not failed. I've just found 10,000 ways that won't work.",
    author: 'توماس ادیسون',
    authorEn: 'Thomas Edison',
    category: 'Mindset',
    bio: 'مخترع آمریکایی و بنیان‌گذار جنرال الکتریک.',
  },
  {
    id: '31',
    quote: 'خوش‌بینی ایمانی است که به دستاورد منتهی می‌شود.',
    originalQuote: 'Optimism is the faith that leads to achievement.',
    author: 'هلن کلر',
    authorEn: 'Helen Keller',
    category: 'Mindset',
    bio: 'نویسنده و فعال اجتماعی نابینا و ناشنوا.',
  },
  {
    id: '32',
    quote: 'آینده متعلق به کسانی است که به زیبایی رویاهای خود ایمان دارند.',
    originalQuote:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'النور روزولت',
    authorEn: 'Eleanor Roosevelt',
    category: 'Mindset',
    bio: 'بانوی اول پیشین آمریکا و فعال حقوق بشر.',
  },
  {
    id: '33',
    quote:
      'مردم فراموش می‌کنند چه گفتی، فراموش می‌کنند چه کردی، اما هرگز فراموش نمی‌کنند چه حسی به آن‌ها دادی.',
    originalQuote:
      'People will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
    author: 'مایا آنجلو',
    authorEn: 'Maya Angelou',
    category: 'Mindset',
    bio: 'شاعر و نویسنده‌ی آمریکایی.',
  },
  {
    id: '34',
    quote: 'زندگی از نزدیک تراژدی است و از دور کمدی.',
    originalQuote:
      'Life is a tragedy when seen in close-up, but a comedy in long-shot.',
    author: 'چارلی چاپلین',
    authorEn: 'Charlie Chaplin',
    category: 'Life',
    bio: 'بازیگر و کارگردان بزرگ سینمای صامت.',
  },
  {
    id: '35',
    quote:
      'دو روز مهم در زندگی هرکس وجود دارد: روزی که متولد می‌شود و روزی که می‌فهمد چرا.',
    originalQuote:
      'The two most important days in your life are the day you are born and the day you find out why.',
    author: 'مارک تواین',
    authorEn: 'Mark Twain',
    category: 'Life',
    bio: 'نویسنده‌ی آمریکایی.',
  },
  {
    id: '36',
    quote: 'خودت باش؛ چون بقیه از قبل اشغال شده‌اند.',
    originalQuote: 'Be yourself; everyone else is already taken.',
    author: 'اسکار وایلد',
    authorEn: 'Oscar Wilde',
    category: 'Life',
    bio: 'نمایش‌نامه‌نویس و شاعر ایرلندی.',
  },
  {
    id: '37',
    quote:
      'زندگی همان چیزی است که وقتی مشغول نقشه‌کشیدن برای آینده هستی، برایت اتفاق می‌افتد.',
    originalQuote:
      "Life is what happens to you while you're busy making other plans.",
    author: 'جان لنون',
    authorEn: 'John Lennon',
    category: 'Life',
    bio: 'نوازنده و ترانه‌سرای بریتانیایی، عضو گروه بیتلز.',
  },
  {
    id: '38',
    quote: 'سادگی نهایت پیچیدگی است.',
    originalQuote: 'Simplicity is the ultimate sophistication.',
    author: 'لئوناردو داوینچی',
    authorEn: 'Leonardo da Vinci',
    category: 'Art',
    bio: 'نابغه‌ی رنسانس، نقاش و مخترع ایتالیایی.',
  },
  {
    id: '39',
    quote: 'رویایم را نقاشی می‌کنم، سپس رویای نقاشی‌ام را می‌بینم.',
    originalQuote: 'I dream my painting and then I paint my dream.',
    author: 'ونسان ونگوگ',
    authorEn: 'Vincent van Gogh',
    category: 'Art',
    bio: 'نقاش هلندی، از بزرگان پسا-امپرسیونیسم.',
  },
  {
    id: '40',
    quote:
      'هر کودکی هنرمند است؛ مشکل این است که چگونه هنرمند باقی بمانی وقتی بزرگ می‌شوی.',
    originalQuote:
      'Every child is an artist. The problem is how to remain an artist once we grow up.',
    author: 'پابلو پیکاسو',
    authorEn: 'Pablo Picasso',
    category: 'Art',
    bio: 'نقاش و مجسمه‌ساز اسپانیایی، بنیان‌گذار کوبیسم.',
  },
  {
    id: '41',
    quote: 'پاهایم برای چه به کارم می‌آیند وقتی بال دارم برای پرواز؟',
    originalQuote: 'Feet, what do I need you for when I have wings to fly?',
    author: 'فریدا کالو',
    authorEn: 'Frida Kahlo',
    category: 'Art',
    bio: 'نقاش مکزیکی و از چهره‌های برجسته‌ی هنر مدرن.',
  },
  {
    id: '42',
    quote: 'هر روز چیزهای زیباتری کشف می‌کنم؛ همین دارد مرا دیوانه می‌کند.',
    originalQuote:
      "Every day I discover more and more beautiful things. It's enough to drive one mad.",
    author: 'کلود مونه',
    authorEn: 'Claude Monet',
    category: 'Art',
    bio: 'نقاش فرانسوی و بنیان‌گذار امپرسیونیسم.',
  },
  {
    id: '43',
    quote: 'برترین هنر جنگ، شکست دادن دشمن بدون جنگیدن است.',
    originalQuote:
      'The supreme art of war is to subdue the enemy without fighting.',
    author: 'سون تزو',
    authorEn: 'Sun Tzu',
    category: 'Wisdom',
    bio: 'استراتژیست و فیلسوف نظامی چین باستان.',
  },
  {
    id: '44',
    quote:
      'انسان‌ها را نه خودِ اتفاقات، بلکه دیدگاهشان نسبت به آن‌ها آزار می‌دهد.',
    originalQuote:
      'Men are disturbed not by things, but by the views which they take of them.',
    author: 'اپیکتتوس',
    authorEn: 'Epictetus',
    category: 'Philosophy',
    bio: 'فیلسوف رواقی یونانی-رومی.',
  },
  {
    id: '45',
    quote:
      'ناممکن فقط یک کلمه است که مردان ضعیف آن را برای راحتی خودشان بزرگ کرده‌اند.',
    originalQuote: 'Impossible is just a big word thrown around by small men.',
    author: 'محمدعلی کلی',
    authorEn: 'Muhammad Ali',
    category: 'Mindset',
    bio: 'قهرمان بوکس و فعال اجتماعی آمریکایی.',
  },
  {
    id: '46',
    quote: 'ماجراجویی به خودی خود ارزشمند است.',
    originalQuote: 'Adventure is worthwhile in itself.',
    author: 'املیا ایرهارت',
    authorEn: 'Amelia Earhart',
    category: 'Mindset',
    bio: 'نخستین زن خلبانی که به‌تنهایی اقیانوس اطلس را عبور کرد.',
  },
  {
    id: '47',
    quote: 'با وجود همه چیز، هنوز اعتقاد دارم مردم واقعاً خوب هستند.',
    originalQuote:
      'In spite of everything, I still believe that people are really good at heart.',
    author: 'آن فرانک',
    authorEn: 'Anne Frank',
    category: 'Life',
    bio: 'نویسنده‌ی خاطرات معروف دوران جنگ جهانی دوم.',
  },
  {
    id: '48',
    quote: 'نمی‌توانی دریا را تنها با ایستادن و نگاه‌کردن به آب عبور کنی.',
    originalQuote:
      "You can't cross the sea merely by standing and staring at the water.",
    author: 'رابیندرانات تاگور',
    authorEn: 'Rabindranath Tagore',
    category: 'Wisdom',
    bio: 'شاعر و فیلسوف هندی، برنده جایزه نوبل ادبیات.',
  },
  {
    id: '49',
    quote:
      'ما همه به‌طور زیستی به هم، به‌طور شیمیایی به زمین و به‌طور اتمی به بقیه‌ی کیهان متصلیم.',
    originalQuote:
      'We are all connected to each other biologically, to the earth chemically and to the rest of the universe atomically.',
    author: 'نیل دوگراس تایسون',
    authorEn: 'Neil deGrasse Tyson',
    category: 'Science',
    bio: 'اخترفیزیک‌دان و مروج علم آمریکایی.',
  },
  {
    id: '50',
    quote:
      'وقتی چیزی را واقعاً بخواهی، تمام هستی در تحقق آن آرزو همدست می‌شود.',
    originalQuote:
      'And, when you want something, all the universe conspires in helping you to achieve it.',
    author: 'پائولو کوئلیو',
    authorEn: 'Paulo Coelho',
    category: 'Wisdom',
    bio: 'نویسنده‌ی برزیلی، خالق رمان کیمیاگر.',
  },
];

/* ------------------------------------------------------------------ */
/* Category system — single source of truth                            */
/* ------------------------------------------------------------------ */
/* Tabs, icons, colors and the empty-state check are all DERIVED from   */
/* this block + the live quote bank below. Nothing is hand-duplicated,  */
/* so a category can never silently "fall back" to showing unrelated    */
/* quotes again (that was the bug in the previous version).             */

const CATEGORY_LABELS: Record<string, string> = {
  Philosophy: 'فلسفه',
  Science: 'علم و کیهان',
  Mindset: 'نگرش',
  Tech: 'تکنولوژی',
  Wisdom: 'حکمت',
  Life: 'زندگی',
  Art: 'هنر',
};

const CATEGORY_ORDER = [
  'Philosophy',
  'Science',
  'Mindset',
  'Tech',
  'Wisdom',
  'Life',
  'Art',
];

const CATEGORY_ICONS: Record<string, IconType> = {
  Philosophy: BookOpen,
  Science: Atom,
  Mindset: Brain,
  Tech: Cpu,
  Wisdom: Feather,
  Life: Leaf,
  Art: Palette,
};

const CATEGORY_STYLES: Record<string, CategoryStyle> = {
  Philosophy: {
    badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
    activeTab: 'from-violet-600 to-indigo-500',
    glow: 'rgba(139,92,246,0.35)',
  },
  Science: {
    badge: 'bg-sky-500/10 text-sky-300 border-sky-500/20',
    activeTab: 'from-sky-600 to-cyan-500',
    glow: 'rgba(56,189,248,0.35)',
  },
  Mindset: {
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    activeTab: 'from-amber-600 to-orange-500',
    glow: 'rgba(251,191,36,0.35)',
  },
  Tech: {
    badge: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
    activeTab: 'from-teal-600 to-emerald-500',
    glow: 'rgba(45,212,191,0.35)',
  },
  Wisdom: {
    badge: 'bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20',
    activeTab: 'from-fuchsia-600 to-pink-500',
    glow: 'rgba(232,121,249,0.35)',
  },
  Life: {
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    activeTab: 'from-emerald-600 to-teal-500',
    glow: 'rgba(52,211,153,0.35)',
  },
  Art: {
    badge: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
    activeTab: 'from-rose-600 to-fuchsia-500',
    glow: 'rgba(251,113,133,0.35)',
  },
};

const ALL_CATEGORY_STYLE: CategoryStyle = {
  badge: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
  activeTab: 'from-purple-600 to-teal-500',
  glow: 'rgba(45,212,191,0.35)',
};

const getCategoryStyle = (category: string): CategoryStyle =>
  CATEGORY_STYLES[category] ?? ALL_CATEGORY_STYLE;

/* ------------------------------------------------------------------ */
/* Global CSS                                                          */
/* ------------------------------------------------------------------ */

const GLOBAL_STYLES = `
  @keyframes aurora-move {
    0%, 100% { transform: translate(-8%, -8%) rotate(0deg) scale(1.1); }
    50%      { transform: translate(8%, 8%) rotate(180deg) scale(1.3); }
  }
  @keyframes float-slow {
    0%, 100% { transform: translate(0, 0); }
    33%      { transform: translate(30px, -40px); }
    66%      { transform: translate(-25px, 25px); }
  }
  @keyframes twinkle {
    0%, 100% { opacity: 0.15; transform: scale(0.8); }
    50%      { opacity: 1;    transform: scale(1.2); }
  }
  @keyframes shoot {
    0%   { transform: translate(0, 0); opacity: 0; }
    8%   { opacity: 1; }
    25%  { transform: translate(-110vw, 55vh); opacity: 0; }
    100% { transform: translate(-110vw, 55vh); opacity: 0; }
  }
  @keyframes breathe {
    0%, 100% { transform: scale(1);    opacity: 0.45; }
    50%      { transform: scale(1.18); opacity: 0.85; }
  }
  @keyframes grid-drift {
    0%   { background-position: 0 0, 0 0; }
    100% { background-position: 60px 60px, 60px 60px; }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pop-heart {
    0%   { transform: scale(1); }
    35%  { transform: scale(1.35); }
    60%  { transform: scale(0.92); }
    100% { transform: scale(1); }
  }
  .animate-aurora    { animation: aurora-move 26s ease-in-out infinite; }
  .animate-float-slow{ animation: float-slow 16s ease-in-out infinite; }
  .animate-twinkle   { animation: twinkle 3.5s ease-in-out infinite; }
  .animate-shoot     { animation: shoot 14s ease-in infinite; }
  .animate-breathe   { animation: breathe 9s ease-in-out infinite; }
  .animate-spin-slow { animation: spin-slow 8s linear infinite; }
  .animate-fade-in   { animation: fade-in 0.4s ease-out; }
  .animate-pop-heart { animation: pop-heart 0.45s ease-out; }
  .animate-grid      {
    background-image:
      linear-gradient(rgba(157,78,221,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(45,212,191,0.05) 1px, transparent 1px);
    background-size: 60px 60px, 60px 60px;
    animation: grid-drift 30s linear infinite;
  }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  .shooting-star {
    position: fixed;
    width: 200px;
    height: 2px;
    background: linear-gradient(to left, #ffffff, rgba(45,212,191,0.6), transparent);
    border-radius: 999px;
    filter: drop-shadow(0 0 6px rgba(45,212,191,0.85));
    opacity: 0;
    pointer-events: none;
    z-index: 0;
  }
  .fluid-hero  { font-size: clamp(1.6rem, 1.1rem + 2.6vw, 2.35rem); }
  .fluid-quote { font-size: clamp(1.05rem, 0.85rem + 1.2vw, 1.55rem); line-height: 1.75; }
  @supports (padding: max(0px)) {
    .safe-bottom { padding-bottom: max(0.5rem, env(safe-area-inset-bottom)); }
  }
`;

/* ------------------------------------------------------------------ */
/* Ambient Background component                                        */
/* ------------------------------------------------------------------ */

const AmbientBackground: React.FC = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        dur: 2 + Math.random() * 4,
        size: Math.random() > 0.85 ? 2 : 1,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute -inset-1/2 animate-aurora"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, rgba(157,78,221,0.20), transparent 42%),' +
            'radial-gradient(circle at 80% 70%, rgba(45,212,191,0.16), transparent 42%),' +
            'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.10), transparent 55%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="absolute inset-0 animate-grid opacity-40" />

      <div
        className="absolute top-[12%] left-[8%] w-64 h-64 rounded-full animate-float-slow"
        style={{
          background:
            'radial-gradient(circle, rgba(157,78,221,0.30), transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute top-[45%] right-[10%] w-72 h-72 rounded-full animate-float-slow"
        style={{
          background:
            'radial-gradient(circle, rgba(45,212,191,0.26), transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '4s',
        }}
      />
      <div
        className="absolute bottom-[10%] left-[30%] w-80 h-80 rounded-full animate-float-slow"
        style={{
          background:
            'radial-gradient(circle, rgba(236,72,153,0.18), transparent 70%)',
          filter: 'blur(90px)',
          animationDelay: '8s',
        }}
      />

      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
            boxShadow: '0 0 6px rgba(255,255,255,0.9)',
          }}
        />
      ))}

      <div
        className="shooting-star"
        style={{ top: '8%', right: '-8%', animationDelay: '2s' }}
      />
      <div
        className="shooting-star"
        style={{ top: '35%', right: '-8%', animationDelay: '9s' }}
      />
      <div
        className="shooting-star"
        style={{ top: '65%', right: '-8%', animationDelay: '16s' }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 45%, rgba(3,3,12,0.7) 100%)',
        }}
      />
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */

export default function App() {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [quotes, setQuotes] = useState<QuoteItem[]>(BUILTIN_QUOTES);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [autoRotate, setAutoRotate] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [likesCount, setLikesCount] = useState<number>(142);
  const [hasLikedCurrent, setHasLikedCurrent] = useState<boolean>(false);
  const [heartBurst, setHeartBurst] = useState<boolean>(false);

  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const [favorites, setFavorites] = useState<QuoteItem[]>(() => {
    try {
      const saved = localStorage.getItem('secret_room_favs');
      return saved ? (JSON.parse(saved) as QuoteItem[]) : [];
    } catch {
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isDiscovering, setIsDiscovering] = useState<boolean>(false);
  const [showBioModal, setShowBioModal] = useState<boolean>(false);
  const [showTracklistModal, setShowTracklistModal] = useState<boolean>(false);

  const [recentlyShownIds, setRecentlyShownIds] = useState<string[]>([]);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);
  const [volume, setVolume] = useState<number>(0.75);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTimeAudio, setCurrentTimeAudio] = useState<number>(0);
  const [durationAudio, setDurationAudio] = useState<number>(0);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const discoverTimeoutRef = useRef<number | null>(null);

  /* -------------------- Derived values -------------------- */
  const filteredQuotes = useMemo<QuoteItem[]>(() => {
    if (selectedCategory === 'All') return quotes;
    return quotes.filter((q) => q.category === selectedCategory);
  }, [quotes, selectedCategory]);

  // No more silent fallback to the full list when a category is empty — the
  // UI now shows an honest empty state instead (see hasQuotesInCategory).
  const hasQuotesInCategory = filteredQuotes.length > 0;
  const currentQuote: QuoteItem | null = hasQuotesInCategory
    ? filteredQuotes[currentIndex % filteredQuotes.length]
    : null;

  const currentTrack: Track =
    MUSIC_LIBRARY[currentTrackIndex] ?? MUSIC_LIBRARY[0];

  // Tabs are computed live from the actual quote bank — add/remove a quote's
  // category anywhere and the tab list, its counts and its icon update
  // automatically. Nothing is hand-maintained in two places anymore.
  const categoryTabs = useMemo(() => {
    const counts = new Map<string, number>();
    quotes.forEach((q) =>
      counts.set(q.category, (counts.get(q.category) ?? 0) + 1)
    );
    const present = CATEGORY_ORDER.filter((c) => counts.has(c));
    return [
      {
        key: 'All',
        label: 'همه',
        count: quotes.length,
        Icon: LayoutGrid as IconType,
      },
      ...present.map((key) => ({
        key,
        label: CATEGORY_LABELS[key] ?? key,
        count: counts.get(key) ?? 0,
        Icon: CATEGORY_ICONS[key] ?? (Sparkles as IconType),
      })),
    ];
  }, [quotes]);

  /* -------------------- Clock -------------------- */
  useEffect(() => {
    const clockInterval = window.setInterval(
      () => setCurrentTime(new Date()),
      1000
    );
    return () => window.clearInterval(clockInterval);
  }, []);

  /* -------------------- Fullscreen state sync (fixes Esc-key desync) -------------------- */
  useEffect(() => {
    const handleFsChange = () =>
      setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', handleFsChange);
    return () =>
      document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  /* -------------------- Particle canvas -------------------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.4 + 0.8,
      color: Math.random() > 0.4 ? '#2dd4bf' : '#9d4edd',
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.55 + 0.25,
    }));

    const mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) {
        mouse.x = t.clientX;
        mouse.y = t.clientY;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    let animationFrameId = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * 1.2;
          p.y -= Math.sin(angle) * 1.2;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.shadowBlur = 18;
        ctx.shadowColor = p.color;
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distance < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - distance / 110) * 0.14;
            ctx.lineWidth = 0.6;
            ctx.shadowBlur = 0;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  /* -------------------- Auto-rotate progress -------------------- */
  useEffect(() => {
    if (!autoRotate || !hasQuotesInCategory) {
      setProgress(0);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      return;
    }

    setProgress(0);
    const totalTime = 8000;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min((elapsed / totalTime) * 100, 100);
      setProgress(p);
      if (p >= 100) {
        handleNextQuote();
      } else {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRotate, currentIndex, selectedCategory, hasQuotesInCategory]);

  /* -------------------- Volume sync -------------------- */
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  /* -------------------- Track change: update src + load -------------------- */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const newSrc = MUSIC_LIBRARY[currentTrackIndex]?.url;
    if (!newSrc) return;

    if (!audio.src.endsWith(newSrc)) {
      audio.src = newSrc;
      audio.load();
    }
  }, [currentTrackIndex]);

  /* -------------------- Play / pause -------------------- */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !hasEntered) return;

    if (isPlaying) {
      const p = audio.play();
      if (p && typeof p.catch === 'function') {
        p.catch(() => setIsPlaying(false));
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, hasEntered, currentTrackIndex]);

  /* -------------------- Cleanup pending discover timeout on unmount -------------------- */
  useEffect(() => {
    return () => {
      if (discoverTimeoutRef.current !== null) {
        window.clearTimeout(discoverTimeoutRef.current);
      }
    };
  }, []);

  /* -------------------- Audio helpers -------------------- */
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTimeAudio(audio.currentTime);
    setDurationAudio(audio.duration || 0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = seekTime;
      setCurrentTimeAudio(seekTime);
    }
  };

  const handleTrackEnded = () => handleNextTrack();

  const showToast = (msg: string) => {
    setToastMessage(msg);
    window.setTimeout(() => setToastMessage(null), 3000);
  };

  const handleEnterApp = () => {
    setHasEntered(true);
    setIsPlaying(true);

    window.setTimeout(() => {
      const audio = audioRef.current;
      if (audio && audio.paused) {
        const p = audio.play();
        if (p && typeof p.catch === 'function') p.catch(() => undefined);
      }
    }, 120);
  };

  const toggleAudio = () => setIsPlaying((v) => !v);

  const handleNextTrack = () => {
    const nextIdx = isShuffle
      ? Math.floor(Math.random() * MUSIC_LIBRARY.length)
      : (currentTrackIndex + 1) % MUSIC_LIBRARY.length;
    setCurrentTrackIndex(nextIdx);
    setIsPlaying(true);
  };

  const handlePrevTrack = () => {
    const prevIdx =
      (currentTrackIndex - 1 + MUSIC_LIBRARY.length) % MUSIC_LIBRARY.length;
    setCurrentTrackIndex(prevIdx);
    setIsPlaying(true);
  };

  const selectTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setShowTracklistModal(false);
  };

  const handleNextQuote = useCallback(() => {
    if (filteredQuotes.length === 0) return;
    setProgress(0);
    setHasLikedCurrent(false);
    setCurrentIndex((prev) => (prev + 1) % filteredQuotes.length);
  }, [filteredQuotes.length]);

  const handlePrevQuote = () => {
    if (filteredQuotes.length === 0) return;
    setProgress(0);
    setHasLikedCurrent(false);
    setCurrentIndex(
      (prev) => (prev - 1 + filteredQuotes.length) % filteredQuotes.length
    );
  };

  const toggleFavorite = (quote: QuoteItem) => {
    const exists = favorites.some((f) => f.id === quote.id);
    const updated = exists
      ? favorites.filter((f) => f.id !== quote.id)
      : [...favorites, quote];
    setFavorites(updated);
    showToast(
      exists ? 'از علاقه‌مندی‌ها حذف شد' : 'به علاقه‌مندی‌ها اضافه شد ✨'
    );
    try {
      localStorage.setItem('secret_room_favs', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleLikeQuote = () => {
    if (!hasLikedCurrent) {
      setLikesCount((p) => p + 1);
      setHasLikedCurrent(true);
      setHeartBurst(true);
      window.setTimeout(() => setHeartBurst(false), 450);
      showToast('احساسات شما ثبت شد! ❤️');
    } else {
      setLikesCount((p) => p - 1);
      setHasLikedCurrent(false);
    }
  };

  const copyQuoteToClipboard = () => {
    if (!currentQuote) return;
    const text = `"${currentQuote.quote}"\n— ${currentQuote.author}`;
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(text)
        .then(() => showToast('متن نقل‌قول با موفقیت کپی شد!'))
        .catch(() => showToast('کپی نشد، دوباره تلاش کنید'));
    } else {
      showToast('مرورگر شما از کپی پشتیبانی نمی‌کند');
    }
  };

  const handleShare = () => {
    if (!currentQuote) return;
    if (navigator.share) {
      navigator
        .share({
          title: 'اتاق مخفی من',
          text: `"${currentQuote.quote}" - ${currentQuote.author}`,
          url: window.location.href,
        })
        .catch((err: unknown) => console.log(err));
    } else {
      copyQuoteToClipboard();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .catch((e: unknown) => console.log(e));
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch((e: unknown) => console.log(e));
    }
  };

  const toggleMute = () => setIsMuted((m) => !m);

  const handleDiscoverQuote = () => {
    setIsDiscovering(true);
    showToast('در حال جست‌وجو در گنجینه‌ی حکمت...');

    discoverTimeoutRef.current = window.setTimeout(() => {
      const pool = BUILTIN_QUOTES.filter(
        (q) => !recentlyShownIds.includes(q.id)
      );
      const source = pool.length > 0 ? pool : BUILTIN_QUOTES;
      const picked = source[Math.floor(Math.random() * source.length)];

      const updatedRecent = [...recentlyShownIds, picked.id];
      setRecentlyShownIds(
        updatedRecent.length >= BUILTIN_QUOTES.length
          ? [picked.id]
          : updatedRecent
      );

      setQuotes((prev) => {
        const withoutDupe = prev.filter((q) => q.id !== picked.id);
        return [picked, ...withoutDupe];
      });
      setSelectedCategory('All');
      setCurrentIndex(0);
      setHasLikedCurrent(false);
      setIsDiscovering(false);
      showToast('✨ یک حکمت تازه پیدا شد!');
    }, 550);
  };

  const formatAudioTime = (seconds: number): string => {
    if (!isFinite(seconds) || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  /* ------------------------------------------------------------------ */
  /* Render: Intro                                                       */
  /* ------------------------------------------------------------------ */

  const renderIntro = () => (
    <div
      className="relative min-h-dvh bg-[#03030c] text-white flex flex-col items-center justify-center p-5 sm:p-6 overflow-hidden select-none font-['Vazirmatn',sans-serif]"
      dir="rtl"
    >
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-75 h-75 sm:w-105 sm:h-105 rounded-full animate-breathe pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(157,78,221,0.35), transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="relative z-10 max-w-sm sm:max-w-md w-full flex flex-col items-center text-center space-y-6 sm:space-y-8 backdrop-blur-2xl bg-white/3 p-6 sm:p-9 rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(157,78,221,0.25)]">
        <div className="relative group cursor-pointer" onClick={handleEnterApp}>
          <div className="absolute -inset-1 rounded-full bg-linear-to-r from-purple-600 via-fuchsia-500 to-teal-400 blur-md opacity-80 group-hover:opacity-100 transition duration-500" />
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#070718] border border-white/20 flex items-center justify-center shadow-2xl">
            <Sparkles className="w-11 h-11 sm:w-12 sm:h-12 text-teal-300 animate-spin-slow" />
          </div>
        </div>

        <div className="space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/30">
            به اتاق مخفی من خوش اومدی
          </span>
          <h1 className="fluid-hero font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-300 via-teal-200 to-fuchsia-300">
            اینجا اتاق مخفی منه
          </h1>
          <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed font-light">
            پشت این در، دنیایی‌ست که فقط مال خودمه؛ پر از سکوت، موسیقی و
            جمله‌هایی که توی تاریکی می‌درخشن. اگر تو هم دنبال یه گوشه‌ی آروم
            برای فکر کردن هستی، پا بذار تو اتاق مخفی من.
          </p>
        </div>

        <button
          onClick={handleEnterApp}
          className="w-full py-4 px-6 rounded-2xl bg-linear-to-r from-purple-600 via-fuchsia-600 to-teal-500 text-white font-bold text-sm shadow-[0_0_35px_rgba(45,212,191,0.35)] hover:shadow-[0_0_50px_rgba(157,78,221,0.6)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
        >
          <span>ورود به اتاق مخفی</span>
          <Play className="w-4 h-4 fill-current ml-1" />
        </button>
      </div>
    </div>
  );

  /* ------------------------------------------------------------------ */
  /* Render: Main                                                        */
  /* ------------------------------------------------------------------ */

  const renderMain = () => (
    <div
      className="relative min-h-dvh bg-[#03030c] text-gray-100 selection:bg-teal-500/30 pb-44 sm:pb-40 overflow-x-hidden font-['Vazirmatn',sans-serif]"
      dir="rtl"
    >
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {toastMessage && (
        <div className="fixed top-5 sm:top-6 left-1/2 -translate-x-1/2 z-50 bg-[#0c0c22]/90 backdrop-blur-2xl border border-teal-500/40 text-teal-200 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-[0_0_35px_rgba(45,212,191,0.25)] text-xs font-semibold flex items-center gap-2 animate-fade-in max-w-[90vw] text-center">
          <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
          <span className="truncate">{toastMessage}</span>
        </div>
      )}

      <div className="relative z-10 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-6 pt-6 space-y-5 sm:space-y-6">
        {/* Header */}
        <header className="backdrop-blur-xl bg-white/3 p-4 rounded-3xl border border-white/10 shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-linear-to-tr from-purple-600 to-teal-400 p-px shadow-[0_0_20px_rgba(157,78,221,0.4)] shrink-0">
              <div className="w-full h-full bg-[#070718] rounded-[15px] flex items-center justify-center">
                <Moon className="w-5 h-5 text-teal-300" />
              </div>
            </div>
            <div className="min-w-0">
              <h1 className="text-base sm:text-lg font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-300 to-teal-300 truncate">
                اتاق مخفی من
              </h1>
              <span className="text-[10px] text-gray-400 flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-teal-400" />
                {currentTime.toLocaleTimeString('fa-IR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}{' '}
                •{' '}
                {currentTime.toLocaleDateString('fa-IR', {
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={toggleFullscreen}
              className="p-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition-all active:scale-90"
              title="حالت تمام‌صفحه"
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>

            <button
              onClick={handleDiscoverQuote}
              disabled={isDiscovering}
              className="p-2.5 rounded-2xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 transition-all active:scale-90 disabled:opacity-60"
              title="حکمت تصادفی تازه"
            >
              <Zap
                className={`w-4 h-4 ${isDiscovering ? 'animate-spin text-teal-400' : ''}`}
              />
            </button>
          </div>
        </header>

        {/* Categories — dynamic, icon + live count per tab */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar sm:flex-wrap sm:overflow-visible">
          {categoryTabs.map(({ key, label, count, Icon }) => {
            const isActive = selectedCategory === key;
            const style =
              key === 'All' ? ALL_CATEGORY_STYLE : getCategoryStyle(key);
            return (
              <button
                key={key}
                onClick={() => {
                  setSelectedCategory(key);
                  setCurrentIndex(0);
                }}
                style={
                  isActive ? { boxShadow: `0 0 20px ${style.glow}` } : undefined
                }
                className={`px-3.5 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? `bg-linear-to-r ${style.activeTab} text-white scale-105`
                    : 'bg-white/3 text-gray-400 hover:bg-white/8 hover:text-gray-200 border border-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{label}</span>
                <span
                  className={`text-[10px] rounded-full px-1.5 ${
                    isActive ? 'bg-black/20' : 'bg-white/5 text-gray-500'
                  }`}
                >
                  {count.toLocaleString('fa-IR')}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quote Card */}
        {currentQuote ? (
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-linear-to-r from-purple-600 via-fuchsia-600 to-teal-400 rounded-3xl blur-md opacity-45 group-hover:opacity-80 transition duration-500" />

            <div className="relative rounded-3xl bg-[#08081a]/90 backdrop-blur-2xl border border-white/10 p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-2xl overflow-hidden">
              {autoRotate && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
                  <div
                    className="h-full bg-linear-to-r from-purple-500 to-teal-400 transition-[width] duration-75 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}

              <div
                key={currentQuote.id}
                className="space-y-5 sm:space-y-6 animate-fade-in"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-purple-500/20 to-teal-500/20 border border-white/10 flex items-center justify-center text-teal-300 font-bold text-sm shadow-inner shrink-0">
                      {currentQuote.author.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm text-gray-100 flex items-center gap-1.5 truncate">
                        {currentQuote.author}
                        <button
                          onClick={() => setShowBioModal((v) => !v)}
                          className="text-gray-400 hover:text-teal-300 transition-colors shrink-0"
                        >
                          <Info className="w-3.5 h-3.5" />
                        </button>
                      </h3>
                      <span className="text-[11px] text-gray-400 font-mono tracking-wide truncate block">
                        {currentQuote.authorEn}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest shrink-0 ${getCategoryStyle(currentQuote.category).badge}`}
                  >
                    {CATEGORY_LABELS[currentQuote.category] ??
                      currentQuote.category}
                  </span>
                </div>

                <div className="space-y-4 pt-2">
                  <p className="fluid-quote font-bold text-gray-100 tracking-wide">
                    "{currentQuote.quote}"
                  </p>
                  {currentQuote.originalQuote && (
                    <p
                      dir="ltr"
                      className="text-xs text-gray-400 font-serif italic tracking-wider text-left opacity-75 border-l-2 border-purple-500/40 pl-3"
                    >
                      "{currentQuote.originalQuote}"
                    </p>
                  )}
                </div>

                {showBioModal && currentQuote.bio && (
                  <div className="p-3.5 rounded-2xl bg-purple-950/30 border border-purple-500/30 text-xs text-purple-200 animate-fade-in space-y-1">
                    <span className="font-bold text-teal-300 block">
                      درباره این متفکر:
                    </span>
                    <p className="font-light text-gray-300 leading-relaxed">
                      {currentQuote.bio}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevQuote}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 transition-colors active:scale-90"
                    title="نقل‌قول قبلی"
                  >
                    <SkipBack className="w-4 h-4 rotate-180" />
                  </button>

                  <button
                    onClick={handleNextQuote}
                    className="p-2.5 rounded-xl bg-linear-to-r from-purple-600 to-teal-500 text-white font-medium text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(157,78,221,0.3)] hover:opacity-90 transition-opacity active:scale-90"
                  >
                    <span>بعدی</span>
                    <SkipForward className="w-4 h-4 rotate-180" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleLikeQuote}
                    className={`px-3 py-2 rounded-xl text-xs flex items-center gap-1.5 border transition-all active:scale-90 ${
                      hasLikedCurrent
                        ? 'bg-pink-500/20 border-pink-500/50 text-pink-400'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${hasLikedCurrent ? 'fill-current text-pink-500' : ''} ${
                        heartBurst ? 'animate-pop-heart' : ''
                      }`}
                    />
                    <span className="text-[11px]">{likesCount}</span>
                  </button>

                  <button
                    onClick={() => toggleFavorite(currentQuote)}
                    className={`p-2.5 rounded-xl border transition-all active:scale-90 ${
                      favorites.some((f) => f.id === currentQuote.id)
                        ? 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                    }`}
                    title="افزودن به علاقه‌مندی‌ها"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        favorites.some((f) => f.id === currentQuote.id)
                          ? 'fill-current'
                          : ''
                      }`}
                    />
                  </button>

                  <button
                    onClick={() => setAutoRotate((v) => !v)}
                    className={`p-2.5 rounded-xl border transition-all ${
                      autoRotate
                        ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                    }`}
                    title="چرخش خودکار اسلاید"
                  >
                    <RefreshCw
                      className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`}
                    />
                  </button>

                  <button
                    onClick={copyQuoteToClipboard}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition-colors active:scale-90"
                    title="کپی متن"
                  >
                    <Copy className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleShare}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 transition-colors active:scale-90"
                    title="اشتراک‌گذاری"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* True empty state — only reachable if a category's quotes are
             ever fully removed at runtime. No more silent "show everything
             instead" fallback. */
          <div className="relative rounded-3xl bg-[#08081a]/90 backdrop-blur-2xl border border-white/10 p-8 sm:p-10 text-center space-y-4 animate-fade-in">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-white/5 flex items-center justify-center text-gray-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <p className="text-sm text-gray-300 font-semibold">
              در این دسته هنوز حکمتی ثبت نشده
            </p>
            <p className="text-xs text-gray-500">
              یک دسته‌ی دیگر را امتحان کن یا به «همه» برگرد.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setCurrentIndex(0);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-linear-to-r from-purple-600 to-teal-500 text-white text-xs font-bold"
            >
              بازگشت به همه
            </button>
          </div>
        )}

        {/* Discover banner */}
        <button
          onClick={handleDiscoverQuote}
          disabled={isDiscovering}
          className="w-full py-4 px-5 sm:px-6 rounded-3xl bg-linear-to-r from-purple-900/30 via-fuchsia-900/20 to-teal-900/30 hover:from-purple-900/50 hover:to-teal-900/50 border border-purple-500/30 text-purple-200 font-bold text-xs flex items-center justify-between transition-all duration-300 shadow-lg active:scale-[0.98] group disabled:opacity-70"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-2xl bg-purple-500/20 flex items-center justify-center text-teal-300 group-hover:scale-110 transition-transform shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-right min-w-0">
              <span className="block font-bold text-sm text-gray-100">
                دریافت حکمت تازه از گنجینه‌ی{' '}
                {BUILTIN_QUOTES.length.toLocaleString('fa-IR')} جمله‌ای
              </span>
              <span className="block text-[10px] text-gray-400 font-light">
                هر بار یک نقل‌قول تازه و بدون تکرار، تا وقتی گنجینه تمام شود
              </span>
            </div>
          </div>
          <Zap
            className={`w-5 h-5 text-teal-400 shrink-0 ${
              isDiscovering
                ? 'animate-bounce'
                : 'group-hover:translate-x-1 transition-transform'
            }`}
          />
        </button>
      </div>

      {/* Tracklist Modal */}
      {showTracklistModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0a0a1e] border border-teal-500/30 rounded-3xl p-6 space-y-4 max-h-[80vh] flex flex-col shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-teal-300 font-bold">
                <ListMusic className="w-5 h-5" />
                <span>لیست موسیقی‌های اتاق ({MUSIC_LIBRARY.length})</span>
              </div>
              <button
                onClick={() => setShowTracklistModal(false)}
                className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto space-y-2 pr-1 no-scrollbar flex-1">
              {MUSIC_LIBRARY.map((track, idx) => {
                const isSelected = idx === currentTrackIndex;
                return (
                  <div
                    key={track.id}
                    onClick={() => selectTrack(idx)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-linear-to-r from-purple-600/30 to-teal-500/30 border-teal-400 text-white shadow-[0_0_15px_rgba(45,212,191,0.2)]'
                        : 'bg-white/2 border-white/5 hover:bg-white/6 text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                          isSelected
                            ? 'bg-teal-400 text-black'
                            : 'bg-white/5 text-gray-400'
                        }`}
                      >
                        {isSelected ? (
                          <Music className="w-4 h-4 animate-bounce" />
                        ) : (
                          idx + 1
                        )}
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-gray-100 truncate">
                          {track.title}
                        </h4>
                        <span className="text-[10px] text-gray-400 truncate block">
                          {track.artist} • {track.genre}
                        </span>
                      </div>
                    </div>
                    {/* Shows the real, decoded audio duration once a track has
                        been loaded; otherwise avoids printing the placeholder
                        "3:??" values that used to leak into the UI. */}
                    <span className="text-[10px] text-gray-400 font-mono shrink-0 ml-2">
                      {isSelected && durationAudio > 0
                        ? formatAudioTime(durationAudio)
                        : track.duration.includes('?')
                          ? '—'
                          : track.duration}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Player Bar */}
      <div className="fixed bottom-3 sm:bottom-4 left-0 right-0 px-3 sm:px-4 z-40 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto safe-bottom">
        <div className="backdrop-blur-2xl bg-[#08081c]/90 rounded-3xl p-3.5 sm:p-4 border border-teal-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)] space-y-3">
          <div className="space-y-1">
            <input
              type="range"
              min={0}
              max={durationAudio || 100}
              value={currentTimeAudio}
              onChange={handleSeek}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-teal-400"
              aria-label="پیشرفت آهنگ"
            />
            <div className="flex justify-between text-[9px] text-gray-400 font-mono px-0.5">
              <span>{formatAudioTime(currentTimeAudio)}</span>
              <span>{formatAudioTime(durationAudio)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div
                onClick={() => setShowTracklistModal(true)}
                className="w-10 h-10 rounded-2xl bg-linear-to-tr from-purple-600 to-teal-400 p-0.5 cursor-pointer hover:scale-105 transition-transform shrink-0"
              >
                <div className="w-full h-full bg-[#0a0a20] rounded-[14px] flex items-center justify-center text-teal-300">
                  <Music className="w-4 h-4" />
                </div>
              </div>

              <div className="truncate min-w-0">
                <h4 className="text-xs font-bold text-gray-100 truncate">
                  {currentTrack.title}
                </h4>
                <span className="text-[10px] text-gray-400 truncate block">
                  {currentTrack.artist}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <button
                onClick={handlePrevTrack}
                className="p-2 rounded-xl hover:bg-white/10 text-gray-300 transition-colors"
                title="آهنگ قبلی"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={toggleAudio}
                className="w-10 h-10 rounded-full bg-linear-to-r from-purple-600 to-teal-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(45,212,191,0.4)] active:scale-90 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>

              <button
                onClick={handleNextTrack}
                className="p-2 rounded-xl hover:bg-white/10 text-gray-300 transition-colors"
                title="آهنگ بعدی"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={() => setIsShuffle((v) => !v)}
                className={`p-2 rounded-xl transition-colors ${
                  isShuffle
                    ? 'text-teal-400 bg-teal-500/20'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="پخش تصادفی"
              >
                <Shuffle className="w-3.5 h-3.5" />
              </button>

              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-xl hover:bg-white/10 text-gray-300 transition-colors"
                  title={isMuted ? 'بازکردن صدا' : 'بی‌صدا'}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    setVolume(v);
                    if (isMuted && v > 0) setIsMuted(false);
                  }}
                  className="w-16 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-teal-400"
                  aria-label="میزان صدا"
                />
              </div>

              <button
                onClick={toggleMute}
                className="sm:hidden p-2 rounded-xl hover:bg-white/10 text-gray-300 transition-colors"
                title={isMuted ? 'بازکردن صدا' : 'بی‌صدا'}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              <button
                onClick={() => setShowTracklistModal(true)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-teal-300 transition-colors"
                title="لیست آهنگ‌ها"
              >
                <ListMusic className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /* ------------------------------------------------------------------ */
  /* Root render — audio stays mounted across both screens               */
  /* ------------------------------------------------------------------ */

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />
      <AmbientBackground />

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleTrackEnded}
        preload="auto"
        loop={false}
      />

      {hasEntered ? renderMain() : renderIntro()}
    </>
  );
}
