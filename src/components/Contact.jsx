import React from "react";
import assets from "../assets/assets";
import { contactData } from "../data/data";
const { letsContact, contact, designBy, name } = contactData;

const Contact = () => {
  return (
    <div id="contact" className="mt-20 w-full p-5 scroll-mt-20 tracking-wider">
      <div className="flex items-center justify-center gap-3 mb-15">
        <img src={assets.contactIcon} className="w-8 h-8" alt="Contact Icon" />
        <p className="text-white/80 text-3xl">Contact</p>
      </div>

      <div className="bg-[#c5ba22] px-3">
        <div className="md:flex px-4">
          <div className="space-y-3 py-8 md:w-1/2">
            <h2 className="text-xl font-semibold">{letsContact.heading}</h2>
            <p>{letsContact.subHeading}</p>
            <div className="flex gap-3">
              {letsContact.items.map(({ icon, path }) => {
                return (
                  <a href={path} target="_blank">
                    <div className="w-12 h-12 rounded-full p-2.5 bg-blue-500">
                      <img src={icon} alt="image" className="w-8" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="my-4 md:mt-7 md:w-1/2 md:pl-16 lg:pl-40 ">
            <h2 className="text-xl font-semibold mb-4">{contact.heading}</h2>
            {contact.items.map((item) => {
              return (
                <div className="flex items-baseline gap-4 space-y-3">
                  <img src={item.icon} alt="image" className="w-5 h-5" />
                  <p className="text-lg">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <hr />
        <p className="text-center py-2">
          {designBy} <span className="text-blue-800 font-semibold">{name}</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
