
import css from "./ErrorMessage.module.css";

type Props = {
    // error: React.ReactElement;
    masseg: string | null;
  };
//   який тип повертає функція ErrorMessage ?
export default function ErrorMessage({ masseg }: Props) {

    return (
        <div className={css.notifCard}>
            <h3 className={css.notifi}>{masseg}</h3>

        </div>
    );
};

// type Props = {
//     name: string;
//     age: number;
//     children: React.ReactNode; // Типизация для children
//   };
  
//   export function User({ name, age, children }: Props) {
//     return (
//       <div>
//         <p>{`User name is ${name}`}</p>
//         <p>{`User age is ${age}`}</p>
//         {children} {/* Рендерим children */}
//       </div>
//     );
//   }


