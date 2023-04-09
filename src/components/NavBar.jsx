import React from "react";
import { useState } from "react";
import { logo } from "../assets";
import { navLinks } from "../content/content";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="">
            <span className="sr-only">Hoobank</span>
            <img className="h-8 w-auto" src={logo} alt="Logo of Hoobank" />
          </a>
        </div>
        {/* mobile menu toggle button */}
        <div className="flex sm:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md text-slate-50"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-auto" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden sm:flex sm:gap-x-8 lg:gap-x-10">
          {/* desktop menu */}
          {navLinks.map((link) => (
            <a
              href="#"
              className="text-lg font-semibold leading-6 text-slate-50"
              key={link.id}>
              {link.title}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="sm:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="">
              <span className="sr-only">Hoobank</span>
              <img className="h-8 w-auto" src={logo} alt="Logo of Hoobank" />
            </a>
            <button
              type="button"
              className="rounded-md text-slate-50"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-auto" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="text- space-y-2 py-6 text-center">
              {/* desktop menu */}
              {navLinks.map((link) => (
                <a
                  href="#"
                  className="block px-3 py-2 text-lg font-semibold leading-7 text-slate-50"
                  key={link.id}>
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default NavBar;
