import { useEffect, useState } from 'react';

import './SecureTerminal.css';

type ScanItem = {
  icon: string;
  title: string;
  value: string;
};

type Quote = {
  textFa: string;
  textEn: string;
  author: string;
};

const SCAN_ITEMS: ScanItem[] = [
  {
    icon: '👀',
    title: 'هدف اسکن',
    value: 'شخصی که همین الان QR را اسکن کرده',
  },
  {
    icon: '🧐',
    title: 'میزان کنجکاوی',
    value: 'کمی بیشتر از حد استاندارد',
  },
  {
    icon: '🤨',
    title: 'نیت اولیه',
    value: 'ببینم این QR برای چیه...',
  },
  {
    icon: '🚨',
    title: 'وضعیت مشکوک',
    value: 'کاربر بیش از حد کنجکاو است',
  },
  {
    icon: '⏱️',
    title: 'نتیجه نهایی',
    value: 'چند ثانیه از عمر شما ثبت شد',
  },
];

const QUOTES: Quote[] = [
  {
    textFa: 'وقتت محدود است؛ آن را صرف زندگیِ دیگران نکن.',
    textEn:
      "Your time is limited, so don't waste it living someone else's life.",
    author: 'Steve Jobs',
  },
  {
    textFa: 'باید کاری را پیدا کنی که دوستش داری.',
    textEn: "You've got to find what you love.",
    author: 'Steve Jobs',
  },
  {
    textFa: 'گرسنه بمان؛ دیوانه بمان.',
    textEn: 'Stay hungry. Stay foolish.',
    author: 'Steve Jobs',
  },
  {
    textFa: 'آینده از آنِ کسانی است که به زیبایی رویاهایشان باور دارند.',
    textEn:
      'The future belongs to those who believe in the beauty of their dreams.',
    author: 'Eleanor Roosevelt',
  },
  {
    textFa:
      'آنچه پشت سر ماست و آنچه پیش روی ماست، در برابر آنچه در درون ماست کوچک است.',
    textEn:
      'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    author: 'Ralph Waldo Emerson',
  },
  {
    textFa:
      'هر کاری را که می‌توانی انجام بده؛ با آنچه داری، همین جایی که هستی.',
    textEn: 'Do what you can, with what you have, where you are.',
    author: 'Theodore Roosevelt',
  },
  {
    textFa: 'باور کن که می‌توانی؛ آن‌وقت نیمی از راه را رفته‌ای.',
    textEn: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  {
    textFa: 'همیشه غیرممکن به نظر می‌رسد تا وقتی که انجام شود.',
    textEn: "It always seems impossible until it's done.",
    author: 'Nelson Mandela',
  },
  {
    textFa: 'زندگی یا یک ماجراجویی جسورانه است یا هیچ.',
    textEn: 'Life is either a daring adventure or nothing at all.',
    author: 'Helen Keller',
  },
  {
    textFa: 'سخت‌ترین بخش، تصمیم به عمل کردن است؛ بقیه فقط پشتکار است.',
    textEn:
      'The most difficult thing is the decision to act, the rest is merely tenacity.',
    author: 'Amelia Earhart',
  },
  {
    textFa: 'راز پیشرفت، شروع کردن است.',
    textEn: 'The secret of getting ahead is getting started.',
    author: 'Mark Twain',
  },
  {
    textFa: 'مهم نیست چقدر آهسته پیش می‌روی؛ فقط متوقف نشو.',
    textEn: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    textFa:
      'چه فکر کنی می‌توانی و چه فکر کنی نمی‌توانی، در هر دو صورت حق با توست.',
    textEn: "Whether you think you can or think you can't, you're right.",
    author: 'Henry Ford',
  },
  {
    textFa: 'تنها جایگاهی که موفقیت قبل از کار می‌آید، فرهنگ لغت است.',
    textEn:
      'The only place where success comes before work is in the dictionary.',
    author: 'Vince Lombardi',
  },
  {
    textFa: 'هرچه بیشتر از خلاقیت استفاده کنی، بیشتر از آن خواهی داشت.',
    textEn: "You can't use up creativity. The more you use, the more you have.",
    author: 'Maya Angelou',
  },
  {
    textFa:
      'زندگی مانند دوچرخه‌سواری است؛ برای حفظ تعادل باید به حرکت ادامه بدهی.',
    textEn:
      'Life is like riding a bicycle. To keep your balance, you have to keep moving.',
    author: 'Albert Einstein',
  },
  {
    textFa: 'اگر چیزی را می‌خواهی، منتظر نمان؛ قدم بردار.',
    textEn: 'The future depends on what you do today.',
    author: 'Mahatma Gandhi',
  },
  {
    textFa: 'موفقیت، رفتن از شکستی به شکست دیگر بدون از دست دادن اشتیاق است.',
    textEn:
      'Success consists of going from failure to failure without loss of enthusiasm.',
    author: 'Winston Churchill',
  },
  {
    textFa: 'اشتباه کردن پایان کار نیست؛ ایستادن پایان کار است.',
    textEn:
      'Our greatest glory is not in never falling, but in rising every time we fall.',
    author: 'Confucius',
  },
  {
    textFa:
      'اگر نمی‌توانی کار بزرگی انجام دهی، کارهای کوچک را به شکلی بزرگ انجام بده.',
    textEn: 'If you cannot do great things, do small things in a great way.',
    author: 'Napoleon Hill',
  },
  {
    textFa: 'دیروز مهم نیست؛ امروز بازی دیگری است.',
    textEn: "Yesterday's home runs don't win today's games.",
    author: 'Babe Ruth',
  },
  {
    textFa: 'صددرصدِ شوت‌هایی را که نمی‌زنی، از دست می‌دهی.',
    textEn: "You miss 100% of the shots you don't take.",
    author: 'Wayne Gretzky',
  },
  {
    textFa: 'من بارها و بارها شکست خورده‌ام؛ و به همین دلیل موفق شده‌ام.',
    textEn:
      "I've failed over and over and over again in my life. And that is why I succeed.",
    author: 'Michael Jordan',
  },
  {
    textFa:
      'کفِ زمین شاید به نظر پایان باشد، اما می‌تواند پایه‌ی محکمی برای ساختن باشد.',
    textEn:
      'Rock bottom became the solid foundation on which I rebuilt my life.',
    author: 'J. K. Rowling',
  },
];

function SecureTerminal() {
  const [scanItems, setScanItems] = useState<ScanItem[]>([]);
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);
  const [restart, setRestart] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  /*
   * SCAN
   */

  useEffect(() => {
    let cancelled = false;
    let timerId: number | null = null;
    let index = 0;

    setScanItems([]);
    setProgress(0);
    setFinished(false);

    const scanNext = () => {
      if (cancelled) {
        return;
      }

      if (index >= SCAN_ITEMS.length) {
        setProgress(100);

        timerId = window.setTimeout(() => {
          if (!cancelled) {
            setFinished(true);
          }
        }, 700);

        return;
      }

      const currentItem = SCAN_ITEMS[index];

      setScanItems((currentItems) => [...currentItems, currentItem]);

      index += 1;

      const nextProgress = Math.round((index / SCAN_ITEMS.length) * 100);

      setProgress(nextProgress);

      timerId = window.setTimeout(scanNext, 600);
    };

    timerId = window.setTimeout(scanNext, 500);

    return () => {
      cancelled = true;

      if (timerId !== null) {
        window.clearTimeout(timerId);
      }
    };
  }, [restart]);

  /*
   * QUOTES
   *
   * هر ۵ ثانیه جمله عوض می‌شود.
   */

  useEffect(() => {
    if (!finished) {
      return;
    }

    const timerId = window.setInterval(() => {
      setQuoteIndex((currentIndex) => (currentIndex + 1) % QUOTES.length);
    }, 5000);

    return () => {
      window.clearInterval(timerId);
    };
  }, [finished]);

  /*
   * RESTART
   */

  const restartScan = () => {
    setQuoteIndex(0);

    setRestart((current) => current + 1);
  };

  const currentQuote = QUOTES[quoteIndex];

  return (
    <main className="prank-page">
      <div className="background-glow glow-one" aria-hidden="true" />

      <div className="background-glow glow-two" aria-hidden="true" />

      <div className="background-grid" aria-hidden="true" />

      <section className="prank-card">
        {/* HEADER */}

        <header className="prank-header">
          <div className="brand">
            <div className="brand-icon" aria-hidden="true">
              🕵️
            </div>

            <div>
              <span className="brand-kicker">سیستم آزمایشی شماره ۴۰۴</span>

              <h1 className="brand-title">مرکز تشخیص افراد فضول</h1>
            </div>
          </div>

          <div className="live-badge">
            <span className="live-dot" />
            در حال بررسی
          </div>
        </header>

        {/* BODY */}

        <div className="prank-body">
          {!finished ? (
            <>
              {/* INTRO */}

              <div className="scan-intro">
                <div className="radar">
                  <div className="radar-ring ring-one" />
                  <div className="radar-ring ring-two" />
                  <div className="radar-ring ring-three" />

                  <div className="radar-sweep" />

                  <div className="radar-center" aria-hidden="true">
                    👁️
                  </div>
                </div>

                <div className="intro-copy">
                  <span className="eyebrow">اسکن ناشناس شروع شد</span>

                  <h2>
                    صبر کن...
                    <br />
                    یه چیز جالب پیدا کردیم.
                  </h2>

                  <p>
                    لطفاً صفحه را نبند.
                    <br />
                    این بررسی کاملاً «علمی» است. 😌
                  </p>
                </div>
              </div>

              {/* PROGRESS */}

              <div className="progress-section">
                <div className="progress-top">
                  <span>در حال بررسی سوژه...</span>

                  <strong>{progress}%</strong>
                </div>

                <div className="progress-track">
                  <div
                    className="progress-value"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </div>

              {/* RESULTS */}

              <div className="scan-results">
                {scanItems.map((item) => (
                  <div className="scan-item" key={item.title}>
                    <div className="scan-icon" aria-hidden="true">
                      {item.icon}
                    </div>

                    <div className="scan-content">
                      <span>{item.title}</span>

                      <strong>{item.value}</strong>
                    </div>

                    <div className="scan-check" aria-hidden="true">
                      ✓
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            /* FINAL */

            <div className="final-screen">
              <div className="confetti confetti-one" aria-hidden="true">
                ✦
              </div>

              <div className="confetti confetti-two" aria-hidden="true">
                +
              </div>

              <div className="confetti confetti-three" aria-hidden="true">
                •
              </div>

              <div className="confetti confetti-four" aria-hidden="true">
                ✦
              </div>

              <div className="result-badge">
                <span>✓</span>
                بررسی با موفقیت تمام شد
              </div>

              <div className="result-emoji" aria-hidden="true">
                🫵😂
              </div>

              <span className="result-kicker">نتیجه نهایی</span>

              <h2 className="result-title">گولت زدیم!</h2>

              <p className="result-description">
                هیچ سیستمی هک نشد.
                <br />
                هیچ اطلاعاتی هم دزدیده نشد.
                <br />
                فقط فهمیدیم خیلی کنجکاوی. 😂
              </p>

              <div className="verdict-box">
                <div className="verdict-row">
                  <span>متهم</span>

                  <strong>شخص محترمی که این QR را اسکن کرد</strong>
                </div>

                <div className="verdict-row">
                  <span>جرم</span>

                  <strong>کنجکاوی بیش از حد</strong>
                </div>

                <div className="verdict-row">
                  <span>مجازات</span>

                  <strong className="fun-value">چند ثانیه از عمر شما 😂</strong>
                </div>
              </div>

              {/* QUOTE */}

              <section className="quote-section">
                <div className="quote-label">
                  <span className="quote-line" />
                  حالا که اینجایی...
                  <span className="quote-line" />
                </div>

                <p className="quote-intro">حداقل یه چیز خوب با خودت ببر.</p>

                <div className="quote-card" key={`${quoteIndex}-${restart}`}>
                  <span className="quote-mark" aria-hidden="true">
                    “
                  </span>

                  <p className="quote-text-fa">{currentQuote.textFa}</p>

                  <p className="quote-text-en">{currentQuote.textEn}</p>

                  <div className="quote-author">— {currentQuote.author}</div>
                </div>

                <div className="quote-dots" aria-label="انتخاب جمله">
                  {QUOTES.map((item, index) => (
                    <button
                      key={`${item.author}-${index}`}
                      type="button"
                      className={
                        index === quoteIndex ? 'quote-dot active' : 'quote-dot'
                      }
                      onClick={() => setQuoteIndex(index)}
                      aria-label={`جمله ${index + 1}`}
                      aria-pressed={index === quoteIndex}
                    />
                  ))}
                </div>
              </section>

              <p className="final-joke">
                البته یک سؤال مهم هنوز باقی مانده:
                <br />
                <strong>چرا اصلاً این QR رو اسکن کردی؟ 🤨</strong>
              </p>

              <button
                type="button"
                className="again-button"
                onClick={restartScan}
              >
                <span aria-hidden="true">↻</span>
                دوباره گولم بزن
              </button>
            </div>
          )}
        </div>

        {/* FOOTER */}

        <footer className="prank-footer">
          <span>🟢 کاملاً تقلبی</span>

          <span>هیچ اطلاعاتی ذخیره نمی‌شود :)</span>

          <span>نسخه ۳.۰</span>
        </footer>
      </section>
    </main>
  );
}

export default SecureTerminal;
