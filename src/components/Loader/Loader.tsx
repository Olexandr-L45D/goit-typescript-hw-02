import css from "./Loader.module.css"
import { ColorRing } from 'react-loader-spinner'
import React from 'react';

type Props = {
    rotatingLoader: React.ReactNode;
};

export default function RotatingLoader({ rotatingLoader }: Props) {
    return (
        <div className={css.container}>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    )

};
















// export default function RotatingLoader(params) {
//     return (
//         <div className={css.container}>
//             <ColorRing
//                 visible={true}
//                 height="80"
//                 width="80"
//                 ariaLabel="color-ring-loading"
//                 wrapperStyle={{}}
//                 wrapperClass="color-ring-wrapper"
//                 colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//             />
//         </div>
//     )

// };

// приклад типізації станів компонента завантаження
// type Status = 'loading' | 'idle' | 'error';

// export function LoadingComponent() {
//   const [status, setStatus] = useState<Status>('idle');

//   const loadData = async () => {
//     setStatus('loading');
//     try {
//       // Тут була б ваша логіка завантаження даних
//       // У випадку успіху:
//       setStatus('idle');
//     } catch (error) {
//       // У випадку помилки:
//       setStatus('error');
//     }
//   };

