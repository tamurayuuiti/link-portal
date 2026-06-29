import { getStorageItem } from './storage';

/* ========================================
   テーマ関連 Utility（React非依存の純粋関数）
   ======================================== */
export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';

function isValidTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark';
}

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined' || !window.matchMedia) return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getSavedTheme(): Theme | null {
  const saved = getStorageItem(THEME_STORAGE_KEY);
  return isValidTheme(saved) ? saved : null;
}

export function getInitialTheme(): Theme {
  return getSavedTheme() ?? getSystemTheme();
}

export { THEME_STORAGE_KEY };