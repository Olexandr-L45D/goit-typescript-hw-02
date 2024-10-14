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
  // name?: string
}
export interface UserPicture {
  id: string;
  urls: UserPictSize;
  alt_description: string;
  likes: number;
  user: User;
  tags: string;
};

export interface ArticleResponc {
  results: UserPicture[];
  total_pages: number;
};
export interface ModalPicture {
  urls: { regular: string };
  alt_description: string;
  description?: string;
  likes: number;
  user: {
    instagram_username: string;
    name: string;
  }
};

// export interface ImageModalProps {
//   data: ModalPicture;
//   isOpen: boolean;
//   onClose: boolean;
// }
