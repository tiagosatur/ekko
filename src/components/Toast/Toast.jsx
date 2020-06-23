import React, { useState, useEffect, useCallback } from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import styles from "./Toast.module.scss";

export default function Toast({ toastList, autoClose, dismissTime }) {
  const [list, setList] = useState(toastList);

  const deleteToast = useCallback(
    (id) => {
      const listItemIndex = list.findIndex((item) => item.id === id);
      const toastListItem = toastList.findIndex((item) => item.id === id);
      list.splice(listItemIndex, 1);
      toastList.splice(toastListItem, 1);
      setList([...list]);
    },
    [list, toastList]
  );

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoClose && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, dismissTime);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, autoClose, dismissTime, list, deleteToast]);

  return (
    <>
      <div className={`${styles.notificationContainer} ${styles.topRight}`}>
        {list?.map((toast, i) => (
          <div
            key={i}
            className={`${styles.notification} ${styles.toast} ${
              styles.topRight
            } ${
              toast.type === "success" ? styles.successBg : styles.defaultBg
            }`}
          >
            <div className={styles.notificationIcon}>
              {toast.type === "success" && <AiOutlineCheck size={24} />}
            </div>

            <div className={styles.content}>
              <p className={styles.notificationTitle}>{toast.title}</p>
              <p className={styles.notificationMessage}>{toast.description}</p>
            </div>
            <button
              onClick={() => deleteToast(toast.id)}
              className={styles.closeButton}
            >
              <AiOutlineClose />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
