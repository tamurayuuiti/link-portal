import { type ProjectLink } from '../data/projectLinks';

/* ========================================
   リンクカード
   ======================================== */
export function LinkCard({ href, Icon, title, description }: ProjectLink) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="link-card group flex flex-col overflow-hidden rounded-2xl border border-(--border-color) bg-(--bg-primary) no-underline"
    >
      <div className="flex h-40 items-center justify-center border-b border-(--border-color) bg-(--bg-secondary)">
        <Icon className="link-card-icon h-12 w-12 text-(--text-secondary)" strokeWidth={1.5} />
      </div>
      <div className="flex grow flex-col gap-2 p-6">
        <h3 className="text-xl font-bold text-(--accent-color)">{title}</h3>
        <p className="grow text-(--text-secondary)">{description}</p>
      </div>
    </a>
  );
}