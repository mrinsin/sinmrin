/* Defines the product entity */
export interface Post {
  id: number,
  postTitle: string;
  postDate: string;
  category: string;
  tags?: string[];
  postBody: string;
  imageUrl: string;
}

export interface PostResolved {
  post: Post;
  error?: any;
}
