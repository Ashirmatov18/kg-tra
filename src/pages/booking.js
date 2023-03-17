import Booking from "@/components/booking/Booking";
import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";

export default function BookingCar() {
  return (
    <ProSidebarProvider>
      <Booking />
    </ProSidebarProvider>
  );
}
