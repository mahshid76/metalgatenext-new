"use client";

import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from "react";

const services = [
  "Manual and Automatic Metal Gates",
  "Railings",
  "Metal fences",
  "Metal staircases",
  "Canopy",
  "Repair all metal gates",
  "Welding all sort of steel work",
];

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "/about", current: false },
  { name: "Contact Us", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 shadow-md relative z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-14 sm:h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src="/assets/logo.png"
                  alt="Metal Gate Logo"
                  className="h-12 sm:h-14 w-auto"
                />
              </div>
              {/* Logo2  */}
              <div className="flex-shrink-0 hidden md:flex">
                <img
                  src="/assets/logo2.svg"
                  alt="Metal Gate Logo"
                  className="h-20 sm:h-23 w-auto"
                />
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-6 h-full">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-white border-b-2 border-indigo-500"
                        : "text-gray-300 hover:text-white hover:border-b-2 hover:border-indigo-400",
                      "text-sm sm:text-base font-medium px-1 transition-all duration-200 border-b-2 border-transparent"
                    )}
                  >
                    {item.name}
                  </a>
                ))}

                {/* Services Dropdown */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex items-center text-gray-300 hover:text-white text-sm sm:text-base font-medium">
                      Services
                      <ChevronDownIcon className="ml-1 h-4 w-4" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                      <div className="py-2">
                        {services.map((service) => (
                          <div
                            key={service}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-default"
                          >
                            {service}
                          </div>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>

              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden z-50 relative">
            <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col items-center">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-sm sm:text-base font-medium w-full text-center transition-colors"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              {/* Services list for mobile */}
              <div className="w-full mt-3 bg-gray-900 rounded-md p-3">
                <p className="text-gray-400 text-xs uppercase mb-2">Services</p>
                {services.map((service) => (
                  <div
                    key={service}
                    className="block w-full rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 text-center cursor-default"
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
