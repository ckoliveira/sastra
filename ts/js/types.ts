export type Post = {
  title: string;
  body: string;
  tags: string[];
  updatedAt: string;

  readonly createdAt: string;
  readonly id: string;
};

export type PostCollection = Record<string, Post>;
