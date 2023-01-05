import { ILocalStorage } from '../types/dataTypes';

export default class LocalStorage {
  private readonly storage: ILocalStorage;

  public constructor(getStorage = (): ILocalStorage => window.localStorage) {
    this.storage = getStorage();
  }

  public set(key: string, value: string): void {
    this.storage.setItem(key, value);
  }

  public get(key: string): string | null {
    return this.storage.getItem(key);
  }

  public getAll() {
    const data = { ...localStorage };
    return data;
  }

  public clear(key: string): void {
    this.storage.removeItem(key);
  }

  public clearAll() {
    localStorage.clear();
  }
}
