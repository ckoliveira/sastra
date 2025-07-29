export type Post = {
  title: string;
  body: string;
  tags: string[];
  updatedAt: number;

  readonly createdAt: number;
  readonly id: string;
};

export type PostCollection = Record<string, Post>;

export type PostCreationInput = {
  readonly id: string;
  title: string;
  body: string;
  tags: string[];
};

export type PostVersion = {
  readonly post: Post;
  readonly version: number;
  readonly createdAt: number;
};

export type PostHistory = {
  readonly postId: string;
  currentVersion: number;
  versions: PostVersion[];
};

export type History = Record<string, PostHistory>;
