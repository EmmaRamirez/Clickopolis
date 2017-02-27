export type Partial<T> = {
  [p in keyof T]?: T[P];
};
