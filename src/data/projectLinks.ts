import { type ComponentType } from 'react';
import { ShoppingBag, ListChecks, Newspaper, Globe } from 'lucide-react';

/* ========================================
   型定義
   ======================================== */
export interface ProjectLink {
  href: string;
  Icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

/* ========================================
   リンク集データ（元コードの4件を維持）
   ======================================== */
export const PROJECT_LINKS: ProjectLink[] = [
  {
    href: 'https://www.uniqlo.com/jp/ja/',
    Icon: ShoppingBag,
    title: 'Eコマース',
    description: 'よく使うオンラインストアへのショートカット。',
  },
  {
    href: 'https://trello.com/',
    Icon: ListChecks,
    title: 'タスク管理',
    description: '日々のタスクや進捗を管理するための入口。',
  },
  {
    href: 'https://zenn.dev/',
    Icon: Newspaper,
    title: '技術ブログ',
    description: '技術情報の収集や発信に使うサイトへの入口。',
  },
  {
    href: '#',
    Icon: Globe,
    title: '自作サイト',
    description: '自分の制作物へまとめてアクセスするための入口。',
  },
];