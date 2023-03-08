import Catalog from "@/components/catalog/Catalog";
import Header from "@/components/Container/Header/Header";
import React from "react";
// import "../app/globals.css";

export default function catalog() {
  return (
    <main>
      <Header />
      <Catalog />
      {/* <Footer /> */}
    </main>
  );
}
