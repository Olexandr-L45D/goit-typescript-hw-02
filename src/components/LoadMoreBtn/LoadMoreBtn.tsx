import { number } from 'yup';
import css from './LoadMoreBtn.module.css';
import React, { MouseEvent } from 'react';

 type LoadMoreBtnProps = {
     onAdd: ()=> void;
    };

    // type handleClickProps = {
    //     values: string | number | null;
    // }

export default function LoadMoreBtn({ onAdd }: LoadMoreBtnProps)
 {
    return <>
        <div className={css.container}>
            <form className={css.styleBtn} >
                <button className={css.button} onClick={onAdd} type="button">
                    Load more
                </button>
            </form>

        </div>
    </>
};



// export default function LoadMoreBtn({ onAdd })
// {

//     // const handleClick = (values: MouseEvent<HTMLButtonElement>) => {
//     //     // values.stopPropagation();
//     //     // onAdd<T>(values: T);
//     //     onAdd(values)
//     //     // console.log(values);
//     // };
//     return <>
//         <div className={css.container}>
//             <form className={css.styleBtn} >
//                 <button className={css.button} onClick={handleClick} type="button">
//                     Load more
//                 </button>
//             </form>

//         </div>
//     </>
// };

// приклад з конспекту звичайний клік
// function ChildComponent() {
//     const handleChildClick = (event: MouseEvent<HTMLButtonElement>) => {
//       // Зупиняємо спливання події до батьківського компонента
//       event.stopPropagation();
  
//       console.log('Клікнуто дитячий компонент');
//     };
  
//     return (
//       <button onClick={handleChildClick}>Натисни мене</button>
//     );
//   }


// type InputProps = {
//     value: string | number;
//     type: 'text' | 'number';
//     onChange: (value: string | number) => void;
//   }
  
//   function Input({ value, type, onChange }: InputProps) {

// type Props = {
// children: React.ReactElement;
// };

// export function Panel({ children }: Props) {
// return <div>{children}</div>;
// }