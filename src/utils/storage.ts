/* ========================================
   localStorage 安全アクセス Utility
   - localStorageが利用不可（プライベートモード等）な環境でも
     例外で処理が止まらないようにラップする
   - get/set双方で同一のtry-catchパターンを共通化
   ======================================== */

export function getStorageItem(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    /* localStorage不可時は無視 */
    return null;
  }
}

export function setStorageItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* 保存できない環境では無視 */
  }
}