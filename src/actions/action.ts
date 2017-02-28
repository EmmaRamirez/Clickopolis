function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
  return names.map(n => o[n]);
}

export interface Action<T> {
  type: string;
  amount?: T;
  error?: boolean;
  meta?: any;
}
