import Image from "next/image";
import React from "react";

import contactImg from "../public/assets/contact.jpg";
import {FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../components/Button";
import Link from "next/link";

const Contact = () => {
  return (
    <setion id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto py-16 text-center md:text-left">
        <h2 className="tracking-wider uppercase text-center pt-3">contact</h2>
        <div className="flex flex-col md:flex-row gap-8 mt-4">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <Image
              src={contactImg}
              alt="man with laptop"
              className="rounded-xl"
            />
            <p className="pt-2 pb-8">
              I am open to talk regarding freelancing or full-time
              opportunities. Fell free to contact me using your preferred
              medium.
            </p>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
              <Link href="https://www.linkedin.com/in/mamadykonte">
                <a className="flex items-center justify-center rounded-full shadow-md shadow-main dark:shadow-main-dark hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaLinkedin size={25} />
                </a>
              </Link>
              <Link href="https://github.com/mamadykonte">
                <a className="flex items-center justify-center rounded-full shadow-md shadow-main dark:shadow-main-dark hover:scale-105 duration-200 p-3 cursor-pointer">
                  <FaGithub size={25} />
                </a>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <div className="p-4 text-left">
              <form action="#" method="POST">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 font-light">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-2 flex focus:outline-none border-foreground dark:border-foreground-dark"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 font-light">
                      phone
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="border-2 rounded-lg p-2 flex focus:outline-none border-foreground dark:border-foreground-dark"
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 font-light">
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-2 rounded-lg p-2 flex focus:outline-none border-foreground dark:border-foreground-dark"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 font-light">
                      message
                    </label>
                    <textarea
                      name="message"
                      rows="7"
                      className="border-2 rounded-lg p-2 flex focus:outline-none border-foreground dark:border-foreground-dark"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Button>send message</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </setion>
  );
};

export default Contact;
