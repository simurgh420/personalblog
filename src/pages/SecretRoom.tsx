import React, { useState, useEffect, useRef, useMemo } from 'react';
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

type GeminiResponse = {
  candidates?: Array<{
    content?: { parts?: Array<{ text?: string }> };
  }>;
};

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const MUSIC_LIBRARY: Track[] = [
  {
    id: 1,
    title: 'Cosmic Lofi Chill',
    artist: 'Aether Sound',
    genre: 'Lofi Beats',
    duration: '2:45',
    url: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3',
  },
  {
    id: 2,
    title: 'Midnight Chill Hop',
    artist: 'Starlight Beats',
    genre: 'Chillhop',
    duration: '3:12',
    url: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73313.mp3?filename=lofi-music-11521.mp3',
  },
  {
    id: 3,
    title: 'Deep Space Ambient',
    artist: 'Nebula Dreams',
    genre: 'Ambient Space',
    duration: '4:05',
    url: 'https://cdn.pixabay.com/download/audio/2021/09/06/audio_8fa50f8386.mp3?filename=ambient-piano-amp-strings-20165.mp3',
  },
  {
    id: 4,
    title: 'Synthwave Night Drive',
    artist: 'Cyberpulse',
    genre: 'Synthwave',
    duration: '3:30',
    url: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=synthwave-80s-110045.mp3',
  },
  {
    id: 5,
    title: 'Cyberpunk Chill Beats',
    artist: 'Neon Skyline',
    genre: 'Cyber Lofi',
    duration: '2:58',
    url: 'https://cdn.pixabay.com/download/audio/2022/10/25/audio_24a48f4a7d.mp3?filename=cyberpunk-beat-124451.mp3',
  },
  {
    id: 6,
    title: 'Piano & Midnight Rain',
    artist: 'Solitude Keys',
    genre: 'Piano & Rain',
    duration: '3:40',
    url: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_166b26d8ee.mp3?filename=soft-piano-with-rain-10708.mp3',
  },
  {
    id: 7,
    title: 'Lofi Dreams & Stars',
    artist: 'Celestial Waves',
    genre: 'Lofi Beats',
    duration: '3:05',
    url: 'https://cdn.pixabay.com/download/audio/2023/04/18/audio_82c40c31c7.mp3?filename=lofi-groove-146316.mp3',
  },
  {
    id: 8,
    title: 'Ethereal Meditation',
    artist: 'Zenith Horizon',
    genre: 'Deep Meditation',
    duration: '4:15',
    url: 'https://cdn.pixabay.com/download/audio/2022/11/06/audio_c29d660ff9.mp3?filename=deep-ambient-126871.mp3',
  },
];

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
];

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
  .animate-aurora    { animation: aurora-move 26s ease-in-out infinite; }
  .animate-float-slow{ animation: float-slow 16s ease-in-out infinite; }
  .animate-twinkle   { animation: twinkle 3.5s ease-in-out infinite; }
  .animate-shoot     { animation: shoot 14s ease-in infinite; }
  .animate-breathe   { animation: breathe 9s ease-in-out infinite; }
  .animate-spin-slow { animation: spin-slow 8s linear infinite; }
  .animate-fade-in   { animation: fade-in 0.35s ease-out; }
  .animate-grid      {
    background-image:
      linear-gradient(rgba(157,78,221,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,245,212,0.05) 1px, transparent 1px);
    background-size: 60px 60px, 60px 60px;
    animation: grid-drift 30s linear infinite;
  }
  .no-scrollbar::-webkit-scrollbar { display: none; }
  .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  .shooting-star {
    position: fixed;
    width: 200px;
    height: 2px;
    background: linear-gradient(to left, #ffffff, rgba(0,245,212,0.6), transparent);
    border-radius: 999px;
    filter: drop-shadow(0 0 6px rgba(0,245,212,0.85));
    opacity: 0;
    pointer-events: none;
    z-index: 0;
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
      {/* Aurora gradient blob */}
      <div
        className="absolute -inset-1/2 animate-aurora"
        style={{
          background:
            'radial-gradient(circle at 20% 30%, rgba(157,78,221,0.18), transparent 42%),' +
            'radial-gradient(circle at 80% 70%, rgba(0,245,212,0.14), transparent 42%),' +
            'radial-gradient(circle at 50% 50%, rgba(236,72,153,0.10), transparent 55%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 animate-grid opacity-40" />

      {/* Floating orbs */}
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
            'radial-gradient(circle, rgba(0,245,212,0.24), transparent 70%)',
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

      {/* Twinkling stars */}
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

      {/* Shooting stars */}
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

      {/* Vignette */}
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
  const [isLoadingAi, setIsLoadingAi] = useState<boolean>(false);
  const [showBioModal, setShowBioModal] = useState<boolean>(false);
  const [showTracklistModal, setShowTracklistModal] = useState<boolean>(false);

  // Audio state
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

  /* -------------------- Derived values -------------------- */
  const filteredQuotes = useMemo<QuoteItem[]>(() => {
    if (selectedCategory === 'All') return quotes;
    return quotes.filter(
      (q) => q.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [quotes, selectedCategory]);

  const safeQuoteList: QuoteItem[] =
    filteredQuotes.length > 0 ? filteredQuotes : quotes;

  const currentQuote: QuoteItem =
    safeQuoteList[currentIndex % Math.max(safeQuoteList.length, 1)] ?? quotes[0];

  const currentTrack: Track =
    MUSIC_LIBRARY[currentTrackIndex] ?? MUSIC_LIBRARY[0];

  /* -------------------- Clock -------------------- */
  useEffect(() => {
    const clockInterval = window.setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => window.clearInterval(clockInterval);
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
      color: Math.random() > 0.4 ? '#00f5d4' : '#9d4edd',
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
    if (!autoRotate) {
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
  }, [autoRotate, currentIndex, selectedCategory]);

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

  const handleTrackEnded = () => {
    handleNextTrack();
  };

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

  const handleNextQuote = () => {
    setProgress(0);
    setHasLikedCurrent(false);
    setCurrentIndex((prev) => (prev + 1) % Math.max(safeQuoteList.length, 1));
  };

  const handlePrevQuote = () => {
    setProgress(0);
    setHasLikedCurrent(false);
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(safeQuoteList.length, 1)) %
        Math.max(safeQuoteList.length, 1)
    );
  };

  const toggleFavorite = (quote: QuoteItem) => {
    const exists = favorites.some((f) => f.id === quote.id);
    const updated = exists
      ? favorites.filter((f) => f.id !== quote.id)
      : [...favorites, quote];
    setFavorites(updated);
    showToast(exists ? 'از علاقه‌مندی‌ها حذف شد' : 'به علاقه‌مندی‌ها اضافه شد ✨');
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
      showToast('احساسات شما ثبت شد! ❤️');
    } else {
      setLikesCount((p) => p - 1);
      setHasLikedCurrent(false);
    }
  };

  const copyQuoteToClipboard = () => {
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
        .then(() => setIsFullscreen(true))
        .catch((e: unknown) => console.log(e));
    } else if (document.exitFullscreen) {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch((e: unknown) => console.log(e));
    }
  };

  const toggleMute = () => setIsMuted((m) => !m);

  const fetchNewQuoteFromGemini = async () => {
    setIsLoadingAi(true);
    showToast('در حال دریافت هوشمندانه حکمت جدید از Gemini...');

    try {
      const apiKey = '';
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

      const systemPrompt = `تو یک استاد حکمت، فلسفه، کیهان‌شناسی و جهان‌بینی هستی. وظیفه تو انتخاب یا تولید یک نقل‌قول خیره‌کننده، عمیق و تفکربرانگیز به زبان فارسی فصیح از شخصیت‌های بزرگ تاریخ یا فرهنگ مدرن است.
پاسخ فقط و فقط یک JSON معتبر باشد:
{
  "quote": "متن عمیق و زیبای فارسی",
  "originalQuote": "متن اصلی انگلیسی یا منبع اصلی",
  "author": "نام شخصیت به فارسی",
  "authorEn": "Author Name in English",
  "category": "یکی از موارد دقیق: Philosophy, Science, Mindset, Tech, Wisdom",
  "bio": "خلاصه کوتاه ۱ خطی درباره اهمیت یا دستاورد شخصیت"
}`;

      const payload = {
        contents: [
          {
            parts: [
              {
                text: 'یک سخن ناب و جدید درباره عظمت هستی یا فلسفه زندگی خلق یا استخراج کن.',
              },
            ],
          },
        ],
        systemInstruction: { parts: [{ text: systemPrompt }] },
        generationConfig: { responseMimeType: 'application/json' },
      };

      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as GeminiResponse;
      const rawJsonText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!rawJsonText) throw new Error('Invalid Gemini response');

      const parsed = JSON.parse(rawJsonText) as Partial<QuoteItem>;

      const newQuoteObj: QuoteItem = {
        id: Date.now().toString(),
        quote: parsed.quote || 'حقیقت در ژرفای سکوت نهفته است.',
        originalQuote: parsed.originalQuote || 'Truth lies in deep silence.',
        author: parsed.author || 'متفکر بزرگ',
        authorEn: parsed.authorEn || 'Great Thinker',
        category: parsed.category || 'Wisdom',
        bio: parsed.bio || 'شخصیت برجسته تاریخ اندیشه.',
      };

      setQuotes((prev) => [newQuoteObj, ...prev]);
      setCurrentIndex(0);
      showToast('✨ نقل‌قول تازه با موفقیت ایجاد گردید!');
    } catch (err: unknown) {
      console.error('Gemini API Error:', err);
      showToast('خطا در برقراری ارتباط. لطفاً دوباره تلاش کنید.');
    } finally {
      setIsLoadingAi(false);
    }
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
      className="relative min-h-screen bg-[#03030c] text-white flex flex-col items-center justify-center p-6 overflow-hidden select-none font-['Vazirmatn',sans-serif]"
      dir="rtl"
    >
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full animate-breathe pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(157,78,221,0.35), transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="relative z-10 max-w-sm w-full flex flex-col items-center text-center space-y-8 backdrop-blur-2xl bg-white/[0.03] p-8 rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(157,78,221,0.25)]">
        <div className="relative group cursor-pointer" onClick={handleEnterApp}>
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 blur-md opacity-80 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative w-28 h-28 rounded-full bg-[#070718] border border-white/20 flex items-center justify-center shadow-2xl">
            <Sparkles className="w-12 h-12 text-cyan-300 animate-spin-slow" />
          </div>
        </div>

        <div className="space-y-3">
          <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider bg-purple-500/15 text-purple-300 border border-purple-500/30">
            به اتاق مخفی من خوش اومدی
          </span>
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-cyan-200 to-pink-300">
            اینجا اتاق مخفی منه
          </h1>
          <p className="text-xs text-gray-400 leading-relaxed font-light">
            پشت این در، دنیایی‌ست که فقط مال خودمه؛ پر از سکوت، موسیقی و
            جمله‌هایی که توی تاریکی می‌درخشن. اگر تو هم دنبال یه گوشه‌ی آروم
            برای فکر کردن هستی، پا بذار تو اتاق مخفی من.
          </p>
        </div>

        <button
          onClick={handleEnterApp}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-[0_0_35px_rgba(0,245,212,0.35)] hover:shadow-[0_0_50px_rgba(157,78,221,0.6)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
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
      className="relative min-h-screen bg-[#03030c] text-gray-100 selection:bg-cyan-500/30 pb-40 overflow-x-hidden font-['Vazirmatn',sans-serif]"
      dir="rtl"
    >
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#0c0c22]/90 backdrop-blur-2xl border border-cyan-500/40 text-cyan-200 px-6 py-3 rounded-full shadow-[0_0_35px_rgba(0,245,212,0.25)] text-xs font-semibold flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="relative z-10 max-w-xl mx-auto px-4 pt-6 space-y-6">
        {/* Header */}
        <header className="backdrop-blur-xl bg-white/[0.03] p-4 rounded-3xl border border-white/10 shadow-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1px] shadow-[0_0_20px_rgba(157,78,221,0.4)]">
              <div className="w-full h-full bg-[#070718] rounded-[15px] flex items-center justify-center">
                <Moon className="w-5 h-5 text-cyan-300" />
              </div>
            </div>
            <div>
              <h1 className="text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-cyan-300">
                اتاق مخفی من
              </h1>
              <span className="text-[10px] text-gray-400 flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-cyan-400" />
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

          <div className="flex items-center gap-2">
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
              onClick={fetchNewQuoteFromGemini}
              disabled={isLoadingAi}
              className="p-2.5 rounded-2xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 transition-all active:scale-90 disabled:opacity-60"
              title="تولید نقل قول با Gemini"
            >
              <Zap
                className={`w-4 h-4 ${
                  isLoadingAi ? 'animate-spin text-cyan-400' : ''
                }`}
              />
            </button>
          </div>
        </header>

        {/* Categories */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
          {(
            [
              ['All', 'همه'],
              ['Philosophy', 'فلسفه'],
              ['Science', 'علم و کیهان'],
              ['Mindset', 'نگرش'],
              ['Tech', 'تکنولوژی'],
              ['Wisdom', 'حکمت'],
            ] as const
          ).map(([cat, label]) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(0,245,212,0.35)] scale-105'
                    : 'bg-white/[0.03] text-gray-400 hover:bg-white/[0.08] hover:text-gray-200 border border-white/5'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Quote Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-400 rounded-3xl blur-md opacity-45 group-hover:opacity-80 transition duration-500"></div>

          <div className="relative rounded-3xl bg-[#08081a]/90 backdrop-blur-2xl border border-white/10 p-6 md:p-8 space-y-6 shadow-2xl overflow-hidden">
            {autoRotate && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-[width] duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-cyan-300 font-bold text-sm shadow-inner">
                  {currentQuote.author.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-gray-100 flex items-center gap-1.5">
                    {currentQuote.author}
                    <button
                      onClick={() => setShowBioModal((v) => !v)}
                      className="text-gray-400 hover:text-cyan-300 transition-colors"
                    >
                      <Info className="w-3.5 h-3.5" />
                    </button>
                  </h3>
                  <span className="text-[11px] text-gray-400 font-mono tracking-wide">
                    {currentQuote.authorEn}
                  </span>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 uppercase tracking-widest">
                {currentQuote.category}
              </span>
            </div>

            <div className="space-y-4 pt-2">
              <p className="text-lg md:text-xl font-bold leading-relaxed text-gray-100 tracking-wide">
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
                <span className="font-bold text-cyan-300 block">
                  درباره این متفکر:
                </span>
                <p className="font-light text-gray-300 leading-relaxed">
                  {currentQuote.bio}
                </p>
              </div>
            )}

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
                  className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium text-xs flex items-center gap-1.5 shadow-[0_0_15px_rgba(157,78,221,0.3)] hover:opacity-90 transition-opacity active:scale-90"
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
                    className={`w-3.5 h-3.5 ${
                      hasLikedCurrent ? 'fill-current text-pink-500' : ''
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
                      ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
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

        {/* AI Banner */}
        <button
          onClick={fetchNewQuoteFromGemini}
          disabled={isLoadingAi}
          className="w-full py-4 px-6 rounded-3xl bg-gradient-to-r from-purple-900/30 via-indigo-900/30 to-cyan-900/30 hover:from-purple-900/50 hover:to-cyan-900/50 border border-purple-500/30 text-purple-200 font-bold text-xs flex items-center justify-between transition-all duration-300 shadow-lg active:scale-[0.98] group disabled:opacity-70"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-purple-500/20 flex items-center justify-center text-cyan-300 group-hover:scale-110 transition-transform">
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-right">
              <span className="block font-bold text-sm text-gray-100">
                دریافت حکمت بی‌نهایت با Gemini AI
              </span>
              <span className="block text-[10px] text-gray-400 font-light">
                تولید هوشمند جملات فلسفی ناب و غیرتکراری
              </span>
            </div>
          </div>
          <Zap
            className={`w-5 h-5 text-cyan-400 ${
              isLoadingAi
                ? 'animate-bounce'
                : 'group-hover:translate-x-1 transition-transform'
            }`}
          />
        </button>
      </div>

      {/* Tracklist Modal */}
      {showTracklistModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center p-4">
          <div className="w-full max-w-md bg-[#0a0a1e] border border-cyan-500/30 rounded-3xl p-6 space-y-4 max-h-[80vh] flex flex-col shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-cyan-300 font-bold">
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
                        ? 'bg-gradient-to-r from-purple-600/30 to-cyan-500/30 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,245,212,0.2)]'
                        : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.06] text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold ${
                          isSelected
                            ? 'bg-cyan-400 text-black'
                            : 'bg-white/5 text-gray-400'
                        }`}
                      >
                        {isSelected ? (
                          <Music className="w-4 h-4 animate-bounce" />
                        ) : (
                          idx + 1
                        )}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-gray-100">
                          {track.title}
                        </h4>
                        <span className="text-[10px] text-gray-400">
                          {track.artist} • {track.genre}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">
                      {track.duration}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Player Bar */}
      <div className="fixed bottom-4 left-0 right-0 px-4 z-40 max-w-lg mx-auto">
        <div className="backdrop-blur-2xl bg-[#08081c]/90 rounded-3xl p-4 border border-cyan-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)] space-y-3">
          {/* Progress */}
          <div className="space-y-1">
            <input
              type="range"
              min={0}
              max={durationAudio || 100}
              value={currentTimeAudio}
              onChange={handleSeek}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[9px] text-gray-400 font-mono px-0.5">
              <span>{formatAudioTime(currentTimeAudio)}</span>
              <span>{formatAudioTime(durationAudio)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            {/* Track info */}
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div
                onClick={() => setShowTracklistModal(true)}
                className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-0.5 cursor-pointer hover:scale-105 transition-transform shrink-0"
              >
                <div className="w-full h-full bg-[#0a0a20] rounded-[14px] flex items-center justify-center text-cyan-300">
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

            {/* Controls */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={handlePrevTrack}
                className="p-2 rounded-xl hover:bg-white/10 text-gray-300 transition-colors"
                title="آهنگ قبلی"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={toggleAudio}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,245,212,0.4)] active:scale-90 transition-transform"
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

            {/* Right cluster */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsShuffle((v) => !v)}
                className={`p-2 rounded-xl transition-colors ${
                  isShuffle
                    ? 'text-cyan-400 bg-cyan-500/20'
                    : 'text-gray-400 hover:text-white'
                }`}
                title="پخش تصادفی"
              >
                <Shuffle className="w-3.5 h-3.5" />
              </button>

              {/* Mute + Volume slider */}
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
                  className="w-16 h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  aria-label="میزان صدا"
                />
              </div>

              {/* Mobile-only mute button */}
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
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-cyan-300 transition-colors"
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
