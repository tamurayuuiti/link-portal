import { type ReactNode } from 'react';
import { useTheme } from './hooks/useTheme';

/* ========================================
   型定義
   ======================================== */
interface ProjectLink {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
}

/* ========================================
   アイコン（元SVGスプライトのpathをそのまま維持）
   ======================================== */
const ICON_PATHS = {
  ecommerce:
    'M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z',
  task: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  blog: 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10',
  code: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
  calculator:
    'M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z',
  sun: 'M12 3.75v-1.5m0 19.5v-1.5m8.25-7.5h1.5m-19.5 0h1.5M17.303 6.697l1.06-1.06M5.636 18.364l1.06-1.06m0-10.607l-1.06-1.06m12.727 12.727l-1.06-1.06M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z',
  moon: 'M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z',
} as const;

function Icon({
  path,
  className,
}: {
  path: string;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

/* ========================================
   リンク集データ（元コードの4件を維持）
   ======================================== */
const PROJECT_LINKS: ProjectLink[] = [
  {
    href: 'https://www.uniqlo.com/jp/ja/',
    icon: <Icon path={ICON_PATHS.ecommerce} className="h-16 w-16" />,
    title: 'Eコマース',
    description: 'よく使うオンラインストアへのショートカット。',
  },
  {
    href: 'https://trello.com/',
    icon: <Icon path={ICON_PATHS.task} className="h-16 w-16" />,
    title: 'タスク管理',
    description: '日々のタスクや進捗を管理するための入口。',
  },
  {
    href: 'https://zenn.dev/',
    icon: <Icon path={ICON_PATHS.blog} className="h-16 w-16" />,
    title: '技術ブログ',
    description: '技術情報の収集や発信に使うサイトへの入口。',
  },
  {
    href: '#',
    icon: <Icon path={ICON_PATHS.calculator} className="h-16 w-16" />,
    title: '自作サイト',
    description: '自分の制作物へまとめてアクセスするための入口。',
  },
];

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
          <div className="flex items-center gap-3 leading-none" aria-label="サイトタイトル">
            <Icon path={ICON_PATHS.code} className="h-5.5 w-5.5" />
            <div className="text-lg font-bold tracking-wide md:text-xl">リンクポータル</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'ライトテーマに切替' : 'ダークテーマに切替'}
              aria-pressed={isDark}
              className="inline-grid h-9 w-9 place-items-center rounded-full border border-(--border-color) bg-(--bg-primary) text-(--text-primary) shadow-sm transition-[background-color,border-color,transform] duration-200 active:translate-y-px"
            >
              <Icon path={isDark ? ICON_PATHS.sun : ICON_PATHS.moon} className="h-4.5 w-4.5" />
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
              このページは、頻繁に利用する外部サービスや自作サイトへ素早く移動するための
              「入口」をまとめたポータルです。目的のサイトに最短でアクセスできるよう、
              余計な装飾を抑え、リンク導線に特化しています。
            </p>
          </section>

          <section>
            <h2 className="relative left-1/2 mb-8 inline-block -translate-x-1/2 border-b-2 border-(--accent-color) pb-2 text-center text-3xl font-bold text-(--text-primary)">
              リンク集
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {PROJECT_LINKS.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col overflow-hidden rounded-xl border border-(--border-color) bg-(--bg-primary) no-underline shadow-md transition-[transform,box-shadow,background-color,border-color] duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-45 items-center justify-center border-b border-(--border-color) bg-(--bg-secondary) transition-colors duration-200">
                    <div className="text-(--text-secondary) transition-[color,transform] duration-200 group-hover:scale-110 group-hover:text-(--accent-color)">
                      {link.icon}
                    </div>
                  </div>
                  <div className="flex grow flex-col p-6">
                    <h3 className="mb-2 text-xl font-bold text-(--accent-color)">{link.title}</h3>
                    <p className="grow text-(--text-secondary)">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer className="px-6 py-8 text-center text-(--text-secondary) transition-colors duration-200">
          <p>&copy; 2024 ポータルサイト. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;