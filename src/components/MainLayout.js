import React from "react";
import styles from "../styles/MainLayout.module.css";

export default function MainLayout({ children }) {
  return <div className={styles.main_lay}>{children}</div>;
}
