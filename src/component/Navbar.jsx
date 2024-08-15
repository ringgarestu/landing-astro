import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { LogoPestDoc } from "../component/LogoPestDoc.jsx";

export default function App() {
  return (
    <Navbar className="bg-[#006676]">
      <NavbarBrand>
        <LogoPestDoc />
        <p className="text-white text-base ml-2">
          <span className="font-bold">Pest</span>
          <span className="font-normal">Doc</span>
          <span className="font-bold">-AI</span>
        </p>
      </NavbarBrand>
    </Navbar>
  );
}
