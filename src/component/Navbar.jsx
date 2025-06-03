import React from "react";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import { LogoPestDoc } from "../component/LogoPestDoc.jsx";
import ThemeSwitcher from "./ThemeSwithcer.jsx";

export default function NavbarComponent() {
  return (
    <Navbar className="bg-[#006676] dark:bg-[#00494d] flex justify-start">
      <NavbarBrand className="ml-3">
        <LogoPestDoc />
        <p className="text-white ml-2 font-bold text-3xl">
          <span className="font-bold">Pest</span>
          <span className="font-normal">Doc</span>
          <span className="font-bold">-AI</span>
        </p>
      </NavbarBrand>
      <div className="ml-auto flex items-center space-x-4">
        <ThemeSwitcher className="flex justify-end" />
      </div>
    </Navbar>
  );
}
