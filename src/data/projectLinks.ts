import { type ComponentType } from 'react';
import {
  ChartColumn,
  Users,
  Calculator,
  Superscript,
  Puzzle,
  Image,
  Grid3x3,
  Gamepad2,
  Home,
} from 'lucide-react';

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
   リンク集データ
   ======================================== */
export const PROJECT_LINKS: ProjectLink[] = [
  {
    href: '#',
    Icon: Home,
    title: 'このサイト',
    description: '自作Webアプリへまとめてアクセスできるポータルサイト。',
  },
  {
    href: 'https://meal-pass-dashboard.vercel.app/',
    Icon: ChartColumn,
    title: '学食利用分析',
    description: '大学食堂の利用履歴を分析し、損益や栄養状況を可視化するダッシュボード。',
  },
  {
    href: 'https://student-roster.vercel.app/',
    Icon: Users,
    title: '学年名簿',
    description: '学年ごとの名簿を検索・閲覧できる、Firebase認証対応のアプリ。',
  },
  {
    href: 'https://prime-factorizer.vercel.app/',
    Icon: Calculator,
    title: '素因数分解計算機',
    description: '大きな整数を高速に素因数分解できる計算ツール。',
  },
  {
    href: 'https://power-calculator-beige.vercel.app/',
    Icon: Superscript,
    title: '累乗計算機',
    description: '巨大な整数にも対応した高精度な累乗計算ツール。',
  },
  {
    href: 'https://picross-solver.vercel.app/',
    Icon: Puzzle,
    title: 'ピクロスソルバー',
    description: 'ピクロスのヒントから解答を自動で導き出すパズル解析ツール。',
  },
  {
    href: 'https://sudoku-solver-eta-woad.vercel.app',
    Icon: Grid3x3,
    title: 'ナンプレソルバー',
    description: '数独の入力・解析・自動解答ができるナンプレ支援ツール。',
  },
  {
    href: 'https://steganography-tool-iota.vercel.app/',
    Icon: Image,
    title: '画像ステガノグラフィー',
    description: '画像にファイルを埋め込み、抽出できるステガノグラフィーツール。',
  },
  {
    href: 'https://gomoku-pink.vercel.app/',
    Icon: Gamepad2,
    title: '五目並べ',
    description: '対人戦やAI戦、禁じ手ルールに対応した五目並べゲーム。',
  },
];