
export interface UserPictSize {
  regular: string;
  small: string;
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
  description: string | null;
  likes: number;
  user: User;
  tags: string;
};

export interface ModalPicture {
  urls: UserPictSize;
  alt_description: string;
  description: string | null;
  likes: number;
  tags: string;
  user: User;
};

export interface ArticleResponc {
  results: UserPicture[];
  total_pages: number;
};

export interface ModalBigPicture {
  regular: string;
  alt_description: string | null;
  description: string | null;
  likes: number;
  tags: string;
  first_name: string;
  instagram_username: string;
  name: string;
};

// export interface ModalBigPicture {
//   urls: {
//     small: string;
//     regular: string;
//   };
//   user: {
//     first_name: string;
//     instagram_username: string;
//     name: string;
//   };
//   alt_description: string | null;
//   description: string | null;
//   likes: number;
//   tags: string;
// };

