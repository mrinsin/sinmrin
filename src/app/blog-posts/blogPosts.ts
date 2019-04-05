/* Defines the product entity */
export interface BlogPost {
  id: number,
  postTitle: string;
  postDate: string;
  category: string;
  tags?: string[];
  postBody: string;
  imageUrl: string;
}

export interface BlogPostsResolved {
  product: BlogPost;
  error?: any;
}
