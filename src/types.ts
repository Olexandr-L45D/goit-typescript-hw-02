// interface Articles{
//   results: undefined;
//   id: number;
//   text: string;
// }
// export interface Articles{
//     guery: string;
//     page: number;
//   };

export interface UserPictSize {
  regular: string;
  small: string
};
export interface User {
  first_name: string;
  instagram_username: string;
  name: string
}
export interface UserPicture {
  id: string;
  urls: UserPictSize;
  alt_description: string;
  description?: string;
  likes: number;
  user: User;
  tags: string;
};

export interface ArticleResponc {
  results: UserPicture[];
  total_pages: number;
};
export interface ModalPicture {
  urls: UserPictSize;
  alt_description: string;
  description: string | null;
  likes: number;
  tags: string;
  user: User;
};


