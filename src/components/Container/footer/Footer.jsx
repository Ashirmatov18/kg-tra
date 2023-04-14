import React from "react";
import styles from "../../../../public/styles/Footer.module.css";
import ScrollUpButton from "react-scroll-up-button";
import { Facebook, Insta, Telegram, Whats, Youtube } from "./FooterSvg";
import Link from "next/link";

export default function Footer(props) {
  return (
    <div className={styles.footer_main} {...props}>
      <ScrollUpButton />

      <div className={styles.first_part}>
        <div className={styles.logo}>
          <div>
            <span>Бишкек, ул. Ч.Валиханова 4а/6</span>
          </div>
        </div>

        <div className={styles.call}>
          <h2>Связаться с нами</h2>
          <h3>+996 755 081 000</h3>
          <h3>+82 10 5553 9928</h3>
          <div className={styles.face_whats}>
            <Facebook />
            <Whats />
          </div>
        </div>

        <div className={styles.link}>
          <Telegram />
          <Link href={"https://instagram.com/kg_trading?igshid=YmMyMTA2M2Y="}>
            <Insta />
          </Link>
          <Link href={"https://www.youtube.com/@kgtrading5495"}>
          <Youtube />
          </Link>
        </div>
      </div>

      <div className={styles.second_part}>
        <ul>
          <li>Главная</li>
          <li>О нас</li>
          <li>Контакты</li>
          <li>Партнеры</li>
        </ul>
      </div>
    </div>
  );
}
