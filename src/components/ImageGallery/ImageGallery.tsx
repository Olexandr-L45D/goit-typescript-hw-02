import css from './ImageGallery.module.css';
import ImageCard from "../ImageCard/ImageCard"
import { Articles } from '../../types';


interface ImageGalleryProps {
    items: Articles[];
     onClick:(id: number) => void;
}

export default function ImageGallery: React.FC<ImageGalleryProps>({ items, onClick }) {

    return (
        <main>
            <div >
                <ul className={css.list}>
                    {items.map((task) => (
                        <li className={css.item} key={task.id}>
                            <ImageCard onClick={() => onClick(task)} obj={task} >

                            </ImageCard>
                        </li>
                    ))
                    }

                </ul>
            </div>
        </main >
    );
}

