export interface StorageItemMap {
  auth_token: string;
  theme: "light" | "dark";
}

export const storage = {
  get<K extends keyof StorageItemMap>(key: K): StorageItemMap[K] | null {
    if (typeof window === "undefined") return null;
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as StorageItemMap[K]) : null;
    } catch {
      // In case the item was stored as a raw string without quotes
      const rawItem = localStorage.getItem(key);
      return rawItem as unknown as StorageItemMap[K];
    }
  },

  set<K extends keyof StorageItemMap>(key: K, value: StorageItemMap[K]): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Error writing to localStorage", e);
    }
  },

  remove<K extends keyof StorageItemMap>(key: K): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(key);
  },

  clear(): void {
    if (typeof window === "undefined") return;
    localStorage.clear();
  },
};
