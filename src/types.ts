export interface ApiPost {
  date: string;
  title: string;
  text: string;
}

export interface ApiPosts {
  [id: string]: ApiPost;
}

export interface Post extends ApiPost {
  id: string;
}
