import css from './ImageGallery.module.css';
import ImageCard from "../ImageCard/ImageCard";
import { ModalBigPicture, UserPicture } from '../../types';

interface ImageGalleryProps {
    items: UserPicture[];
    onClick: (data: ModalBigPicture) => void;
}

export default function ImageGallery({ items, onClick }: ImageGalleryProps) {

    return (
        <main>
            <div >
                <ul className={css.list}>
                    {items.map((task) => (
                        <li className={css.item} key={task.id}>
                            <ImageCard onClick={onClick} obj={task} >
                            </ImageCard>
                        </li>
                    ))
                    }

                </ul>
            </div>
        </main >
    );
};


