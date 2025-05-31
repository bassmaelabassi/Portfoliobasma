import React from "react";

const Footer = () => {
  const contact_info = [
    { logo: "mail", text: "elabassibasma@gmail.com" },
    { logo: "call-outline", text: "+212 655809645" },
    { logo: "location", text: "BENI MELLAL, MAROC" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-6 flex-wrap justify-center">
          {contact_info.map((contact, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="bg-cyan-600 p-2 rounded-full text-2xl">
                <ion-icon name={contact.logo}></ion-icon>
              </div>
              <span className="text-sm">{contact.text}</span>
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-400 text-center mt-4 md:mt-0">
          © 2025 Bassma EL Abassi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
