import css from "./Loader.module.css"
import { ColorRing } from 'react-loader-spinner'
import React from 'react';

type Props = {
    params: React.ReactElement;
    };

export default function RotatingLoader(params: Props) {
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

// type Props = {
// children: React.ReactElement;
// };

// export function Panel({ children }: Props) {
// return <div>{children}</div>;
// }

