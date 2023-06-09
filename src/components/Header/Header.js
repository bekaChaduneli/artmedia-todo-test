import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header({
    todos,
    setTodos,
    active,
    setActive,
    done,
    setDone,
    inputValue,
    currentActive,
    setCurrentActive,
}) {
    useEffect(() => {
        setActive([]);
        setDone([]);
        todos.map((todo) => {
            todo.complited
                ? todo.deleted === false &&
                  setActive((prevState) => [...prevState, todo])
                : todo.deleted === false &&
                  setDone((prevState) => [...prevState, todo]);
        });
        console.log(active);
        console.log(done);
    }, [todos]);
    const activeButton = (e) => {
        console.log(e);
        e.preventDefault();
        setCurrentActive(e.target.name);
    };
    return (
        <div className={styles.Todo__Header}>
            <div className={styles.Todo__Header__Left}>
                <a
                    href="#"
                    name="active"
                    onClick={(e) => {
                        activeButton(e);
                    }}
                    className={
                        currentActive === "active"
                            ? styles.Todo__Header__TodoButton
                            : styles.Todo__Header__DoneButton
                    }
                >
                    <span className={styles.Todo__Header__TodoText}>To do</span>
                    <strong className={styles.Todo__Header__TodoLength}>
                        {active.length}
                    </strong>
                </a>
                <a
                    href="#"
                    name="done"
                    onClick={(e) => {
                        console.log("fasfa");
                        activeButton(e);
                    }}
                    className={
                        currentActive === "done"
                            ? styles.Todo__Header__TodoButton
                            : styles.Todo__Header__DoneButton
                    }
                >
                    <span className={styles.Todo__Header__DoneText}>Done</span>
                    <strong
                        id="done"
                        className={styles.Todo__Header__DoneLength}
                    >
                        {done.length}
                    </strong>
                </a>
            </div>
            <a
                onClick={(e) => {
                    activeButton(e);
                }}
                name="delete"
                href="#"
                className={
                    currentActive === "delete"
                        ? styles.Todo__Header__ActiveDeleteButton
                        : styles.Todo__Header__DeleteButton
                }
            >
                <figure className={styles.Todo__Header__DeletedIcon}>
                    <DeletedBut />
                </figure>
                <span className={styles.Todo__Header___Delete}>Deleted</span>
            </a>
        </div>
    );
}

function DeletedBut() {
    return (
        <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12.25 3.48834C10.3075 3.29584 8.35333 3.19667 6.405 3.19667C5.25 3.19667 4.095 3.255 2.94 3.37167L1.75 3.48834"
                stroke="#FCF6EC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M4.95837 2.89917L5.08671 2.13501C5.18004 1.58084 5.25004 1.16667 6.23587 1.16667H7.76421C8.75004 1.16667 8.82587 1.60417 8.91337 2.14084L9.04171 2.89917"
                stroke="#FCF6EC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10.9958 5.33167L10.6167 11.2058C10.5525 12.1217 10.5 12.8333 8.87248 12.8333H5.12748C3.49998 12.8333 3.44748 12.1217 3.38332 11.2058L3.00415 5.33167"
                stroke="#FCF6EC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M6.02576 9.625H7.96826"
                stroke="#FCF6EC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M5.54163 7.29167H8.45829"
                stroke="#FCF6EC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}
