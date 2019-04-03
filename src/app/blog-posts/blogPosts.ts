/* Defines the product entity */
export interface BlogPosts {
  id: number,
  postTitle: string;
  postDate: string;
  category: string;
  tags?: string[];
  postBody: string;
  imageUrl: string;
}

export interface BlogPostsResolved {
  product: BlogPosts;
  error?: any;
}
