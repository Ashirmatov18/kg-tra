import Catalog from "@/components/catalog/Catalog";
import Header from "@/components/Container/Header/Header";
import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
// import "../app/globals.css";

export default function CatalogCar() {
  return (
    <ProSidebarProvider>
      <main>
        <Header />
        <Catalog />
      </main>{" "}
    </ProSidebarProvider>
  );
}
