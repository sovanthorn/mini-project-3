
"use client";

import { Footer } from "flowbite-react";
import {  BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

export function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-auto justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 ">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="mylogo.png"
              alt="Flowbite Logo"
              name="KHMERKH"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="">Company</Footer.Link>
                <Footer.Link href="">Contact</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.facebook.com/noun.sovannthon/">Facebook</Footer.Link>
                <Footer.Link href="/">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="/policy">Privacy Policy</Footer.Link>
                <Footer.Link href="/policy">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-auto sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/noun.sovannthon/" icon={BsFacebook} />
            <Footer.Icon href="/" icon={BsInstagram} />
            <Footer.Icon href="/" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
