import  Link  from "next/link";

import { Navbar as Navbars } from "flowbite-react";

import { useState } from "react";
const Navbar = () => {
  const [toggleShow, setToggleShow] = useState(false);
 
  return (
    <Navbars fluid={true} rounded={true} className="relative">
      <Navbars.Collapse className="Collapse ">
        <Navbars.Link href="/contact" active={true}>
          contact
        </Navbars.Link>
        <Navbars.Link href="/navbars">About</Navbars.Link>
        <Navbars.Link href="/navbars">Services</Navbars.Link>
        <Navbars.Link href="/navbars">Pricing</Navbars.Link>
        <Navbars.Link href="/navbars">Contact</Navbars.Link>
      </Navbars.Collapse>

      <Navbars.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbars.Brand>
      <Navbars.Toggle />
    </Navbars>
  );
};

export default Navbar;
