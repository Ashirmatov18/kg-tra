"use client";

import Link from "next/link";
import React from "react";
import styles from "../../../public/styles/ConnectUs.module.css";



export default function ConnectUs() {
  return (
    <>
      <div className={styles.main_bg_image}>
        <h1>СВЯЗАТЬСЯ С НАМИ</h1>
      </div>
      <div className={styles.form}>
        <div className={styles.title}>Закажите машину</div>
        <div className={styles.subtitle}>Напишите что вы ищете!</div>
        <div className={`${styles.input_container} ${styles.ic1}`}>
          <input
            id="firstname"
            className={styles.input}
            type="text"
            placeholder=""
          />
          <div className={styles.cut}></div>
          <label forhtml="firstname" className={styles.placeholder}>
            ИМЯ ФАМИЛИЯ
          </label>
        </div>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <input
            id="lastname"
            className={styles.input}
            type="text"
            placeholder=""
          />
          <div className={styles.cut}></div>
          <label forhtml="lastname" className={styles.placeholder}>
            МОДЕЛЬ МАШИНЫ
          </label>
        </div>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <input
            id="email"
            className={styles.input}
            type="number"
            placeholder=""
          />
          <div className={`${styles.cut} ${styles.cut_short}`}></div>
          <label forhtml="email" className={styles.placeholder}>
            НОМЕР ТЕЛЕФОНА
          </label>
        </div>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <input
            id="color"
            className={styles.input}
            type="text"
            placeholder=""
          />
          <div className={`${styles.cut} ${styles.cut_short}`}></div>
          <label forhtml="ЦВЕТ" className={styles.placeholder}>
            ЦВЕТ
          </label>
        </div>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <input
            id="complect"
            className={styles.input}
            type="text"
            placeholder=""
          />
          <div className={`${styles.cut} ${styles.cut_short}`}></div>
          <label forhtml="COMPLECT" className={styles.placeholder}>
            КОМПЛЕКТАЦИЯ
          </label>
        </div>
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <input
            id="complect"
            className={styles.input}
            type="text"
            placeholder=""
          />
          <div className={`${styles.cut} ${styles.cut_short}`}></div>
          <label forhtml="COMPLECT" className={styles.placeholder}>
            ОБЪЁМ ДВИГАТЕЛЯ
          </label>
        </div>
       
        <div className={`${styles.input_container} ${styles.ic2}`}>
          <input
            id="complect"
            className={styles.input}
            type="text"
            placeholder=""
          />
          <div className={`${styles.cut} ${styles.cut_short}`}></div>
          <label forhtml="COMPLECT" className={styles.placeholder}>
            ГОД ВЫПУСКА
          </label>
        </div>
        <div className={styles.cut_drop}>
          <select className={styles.cut_dropdown}>
             <option value="less-than-3y">Корея</option>
             <option value="more-than-3y">Кыргызстан</option>
             <option value="more-than-5y">Россия</option>
          </select>
          </div>
        <Link href={"/"}>
          <button type="text" className={styles.submit}>
            Отправить
          </button>
        </Link>
      </div>

      <div className={styles.calculator}></div>
    </>
  );
}
