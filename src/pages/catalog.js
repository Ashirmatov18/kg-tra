import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Catalog from "../components/catalog/Catalog";
import Header from "../components/Container/Header/Header";

export default function CatalogCar() {
  return (
    <ProSidebarProvider>
      <main>
        <Header />
        <Catalog />
      </main>
    </ProSidebarProvider>
  );
}
