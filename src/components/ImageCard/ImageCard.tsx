import css from "./ImageCard.module.css"
import { FiUser } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { ModalPicture } from "../../types";
  
  type Props = {
      obj: ModalPicture;
      onClick: (data: {
          small: string;
          regular: string;
          tags: string;
          alt_description: string | null;
          description: string | null;
          likes: number;
          first_name: string;
          instagram_username: string;
          name: string;
      }) => void;
  };
  
export default function ImageCard({ obj, onClick }: Props) {

    const {
        urls: { small, regular },
        user: { first_name, instagram_username, name },
        likes,
        tags,
        alt_description,
        description,
    } = obj;

    // const handleClick = () => {
    //     onClick(obj);  // Передаємо повний об'єкт ModalBigPicture
    // };

    const handleClick = () => {
        onClick({
             small, regular ,
             first_name, instagram_username, name ,
            likes,
            tags,
            alt_description,
            description,  
        });
    };
    return (

        <div className={css.card}  >

            <img className={css.imag} src={small} alt={tags} onClick={handleClick} />

            <div className={css.cardCommant}>
                <div className={css.comItem}>
                    <p className={css.commant}> <FiUser className={css.icon} /> {first_name}</p>
                </div>
                <div className={css.comIte}>
                    <p className={css.commant}><FiThumbsUp className={css.icon} /> {likes}</p>
                </div>
                <div className={css.comIt}>
                    <p className={css.commant}><FiInstagram className={css.icon} /> {instagram_username}</p>
                </div>

            </div>
        </div>

    );
};












// типізація чілдренів children в функції яка повертає розмітку (типами вбудованими в РЕАКТ)
// type Props = {
//     children: React.ReactElement;
//   };
  
//   export function Panel({ children }: Props) {
//     return <div>{children}</div>;
//   }
