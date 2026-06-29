import { useState, useEffect, useCallback } from 'react';
import { type Theme, THEME_STORAGE_KEY, getInitialTheme, getSavedTheme } from '../utils/theme';
import { setStorageItem } from '../utils/storage';

/* ========================================
   テーマ管理フック
   - localStorage('theme') を保存先として維持
   - OS設定（prefers-color-scheme）をユーザー未指定時の初期値として維持
   - テーマ切替時の一時的なトランジション無効化（ズレ対策）を維持
   ======================================== */
export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('no-theme-transition');
    root.setAttribute('data-theme', theme);
    setStorageItem(THEME_STORAGE_KEY, theme);

    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        root.classList.remove('no-theme-transition');
      });
    });
    return () => cancelAnimationFrame(raf1);
  }, [theme]);

  useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      if (!getSavedTheme()) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };
    if (mq.addEventListener) {
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    } else {
      mq.addListener(handler);
      return () => mq.removeListener(handler);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return [theme, toggleTheme];
}