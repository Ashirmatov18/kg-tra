import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Booking from "../components/booking/Booking";

export default function BookingCar() {
  return (
    <ProSidebarProvider>
      <Booking />
    </ProSidebarProvider>
  );
}
