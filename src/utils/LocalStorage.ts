type Key = "token" | "user" | "THAO_TAC" | "user_token";

class LocalStorage {
  public get(key: Key, fallback: any = null) {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  public set(key: Key, value: any, callback?: VoidFunction) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      callback?.();
    } catch (error) {}
  }

  public remove(key: Key, callback?: VoidFunction) {
    window.localStorage.removeItem(key);
    callback?.();
  }

  public clear() {
    window.localStorage.clear();
  }
}

export default new LocalStorage();
