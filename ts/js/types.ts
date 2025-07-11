export type Post = {
  title: string;
  body: string;
  tags: string[];
  updatedAt: number;

  readonly createdAt: number;
  readonly id: string;
};

export type PostCollection = Record<string, Post>;

export type PostMenuInput = {
  title: string;
  body: string;
  tags: string[];
};
