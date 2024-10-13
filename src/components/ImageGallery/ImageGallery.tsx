import css from './ImageGallery.module.css';
import ImageCard from "../ImageCard/ImageCard";
import { ModalPicture, UserPicture } from '../../types';
import React, { MouseEvent } from 'react';

// function ChildComponent() {
//     const handleChildClick = (event: MouseEvent<HTMLButtonElement>) => {
//         // Зупиняємо спливання події до батьківського компонента
//         event.stopPropagation();

//         console.log('Клікнуто дитячий компонент');
//     };

//     return (
//         <button onClick={handleChildClick}>Натисни мене</button>
//     );
// }

interface ImageGalleryProps {
    items: UserPicture[];
    onClick: () => void;
}

export default function ImageGallery({ items, onClick }: ImageGalleryProps) {

    return (
        <main>
            <div >
                <ul className={css.list}>
                    {items.map((task) => (
                        <li className={css.item} key={task.id}>
                            {/* <ImageCard onClick={() => onClick(task)} obj={task} > */}
                            <ImageCard onClick={onClick} obj={task} >
                            </ImageCard>
                        </li>
                    ))
                    }

                </ul>
            </div>
        </main >
    );
}

