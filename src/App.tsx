import { Code2, Sun, Moon } from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import { PROJECT_LINKS } from './data/projectLinks';
import { LinkCard } from './components/LinkCard';

/* ========================================
   App本体
   ======================================== */
function App() {
  const [theme, toggleTheme] = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      {/* ヘッダー（タイトル＋テーマ切替） */}
      <header className="sticky top-0 z-20 border-b border-(--header-border) bg-(--header-bg) backdrop-blur-md backdrop-saturate-150 transition-colors duration-200">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3.5">
          <div className="flex items-center gap-2.5 leading-none" aria-label="サイトタイトル">
            <Code2 className="h-5.5 w-5.5 text-(--accent-color)" strokeWidth={2} />
            <div className="text-lg font-bold tracking-wide md:text-xl">リンクポータル</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'ライトテーマに切替' : 'ダークテーマに切替'}
              aria-pressed={isDark}
              className="theme-toggle inline-grid h-9 w-9 place-items-center rounded-full border border-(--border-color) bg-(--bg-primary) text-(--text-primary) shadow-sm"
            >
              {isDark ? (
                <Sun className="h-4.5 w-4.5" strokeWidth={2} />
              ) : (
                <Moon className="h-4.5 w-4.5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6">
        <main className="pb-12 pt-8">
          <section className="mb-12">
            <h2 className="relative left-1/2 mb-8 inline-block -translate-x-1/2 border-b-2 border-(--accent-color) pb-2 text-center text-3xl font-bold text-(--text-primary)">
              このサイトについて
            </h2>
            <p className="mx-auto max-w-175 text-center text-(--text-secondary)">
              自作Webアプリへ素早くアクセスできるポータルサイトです。
            </p>
          </section>

          <section>
            <h2 className="relative left-1/2 mb-8 inline-block -translate-x-1/2 border-b-2 border-(--accent-color) pb-2 text-center text-3xl font-bold text-(--text-primary)">
              リンク集
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {PROJECT_LINKS.map((link) => (
                <LinkCard key={link.title} {...link} />
              ))}
            </div>
          </section>
        </main>

        <footer className="px-6 py-8 text-center text-(--text-secondary)">
          <p>&copy; {new Date().getFullYear()} リンクポータル</p>
        </footer>
      </div>
    </>
  );
}

export default App;