
import css from "./SearchBar.module.css"
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('enter a name.');
import { useRef, useState, FormEvent } from "react";
import { CiSearch } from "react-icons/ci";
import { FiNavigation2 } from "react-icons/fi";

import React, { ChangeEvent } from 'react';

// type InputProps = {
//   value: string | number;
//   type: 'text' | 'number';
//   onChange: (value: string | number) => void;
// }

// function Input({ value, type, onChange }: InputProps) {

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     let newValue = event.target.value;

//     if (type === 'number') {
//       newValue = Number(newValue);
//     }
    
//     console.log('Змінене значення:', newValue);
//     onChange(newValue);
//   };

  type SearchBarProps = {
    value: string | number;
    type?: 'text' | 'number';
    onSearch: (value: string | number) => void;
    onFilter: (value: string | number) => void;
  }

export default function SearchBar({ value, onSearch, onFilter }: SearchBarProps) {

    const formRef = useRef(1)
    const [cliks, setClik] = useState('');

    // const handleScroll = () => {
    //     const dimsScrol = formRef.current.getBoundingClientRect();
    //     scrollTo({
    //         top: dimsScrol.y,
    //         behavior: "smooth",
    //     });
    // };

    // const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    //     evt.preventDefault();
    //     const form = evt.target;
    //     const topic = form.elements.topic.value.toLowerCase().trim();
    //     // Якщо текстове поле порожнє, виводимо повідомлення ('enter a name.') і припиняємо виконання функції.
    //     if (form.elements.topic.value.trim() === "") {
    //         notify()
    //         return;
    //     }
    //     // У протилежному випадку викликаємо пропс  і передаємо йому значення поля
    //     onSearch(topic);
    //     window.scrollTo(0, 1);
    //     form.reset();
    // };
    
    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        // const form = evt.target;
        const topic = evt.target.elements.topic.value.toLowerCase().trim();
        // Якщо текстове поле порожнє, виводимо повідомлення ('enter a name.') і припиняємо виконання функції.
        if (evt.target.elements.topic.value.trim() === "") {
            notify()
            return;
        }
        // У протилежному випадку викликаємо пропс  і передаємо йому значення поля
        onSearch(topic);
        // window.scrollTo(0, 1);
        evt.target.reset();
    };

    return (
        <div>

            <header className={css.header}>
                <div className={css.items}>
                    {/* <form ref={formRef} className={css.form} onSubmit={handleSubmit}> */}
                    <form  className={css.form} onSubmit={handleSubmit}>
                        <button className={css.submitButton} type="submit"> <CiSearch /></button>
                        <Toaster />

                        <input className={css.input}
                            placeholder="Please enter the name"
                            name="topic"
                            required
                            autoFocus type="text" value={value}
                            onChange={(e) => onFilter(e.target.value)}
                        />
                    </form>
                    
                    {/* <button onClick={handleScroll} className={css.buttonRef} type="clik"> {cliks} <FiNavigation2 /></button> */}
                </div>
            </header >


        </div>
    );
};

// приклад функції з практики
// const hundleSubmit = (ev) => {
//     ev.preventDefault();
//     const request = ev.target.elements.request.value;
//     // console.log(request);
//     const isValid = Formula.test(request);
//     // console.log(isValid);
//     if (!isValid) {
//       return
//     }
//     const [amount, from, , to] = request.split(' ');
//     const params = { amount, from, to }
//     console.log(params);

//     ev.target.reset()
//   }


