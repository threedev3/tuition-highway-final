import React, { useState } from "react";
import footerLogo from "../../assets/img/footerLogo.png";

import { products, company, resources, socialIcons } from "../../data/data.js";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-headingColor relative py-20 px-6 max-w-full overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center gap-6">
        <div className="md:flex md:flex-row md:justify-between md:items-center md:gap-4 flex flex-col gap-8 border-b-2 border-b-footerBorder pb-8">
          <div className="flex flex-col items-start gap-6">
            <div className="w-48">
              <img
                src={footerLogo}
                alt=""
                className="object-cover cursor-pointer"
                onClick={scrollToTop}
              />
            </div>
            <div className="flex gap-5 items-center ml-4">
              {socialIcons.map((item, index) => (
                <Link to={item.to} target="_blank" key={index}>
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-row items-start justify-between flex-wrap lg:gap-28 gap-12">
            <div className="flex flex-col gap-5">
              <h3 className="text-white text-xl">Products</h3>
              {products.map((product, index) => (
                <p
                  className="text-footerText cursor-pointer sm:text-base text-sm"
                  key={index}
                >
                  {product}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-white text-xl">Company</h3>
              {company.map((comp, index) => (
                <p
                  className="text-footerText cursor-pointer sm:text-base text-sm"
                  key={index}
                >
                  {comp}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-white text-xl">Resources</h3>
              {resources.map((resource, index) => (
                <p
                  className="text-footerText cursor-pointer sm:text-base text-sm"
                  key={index}
                >
                  {resource}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-row md:justify-between md:items-center md:gap-4 flex flex-col gap-8 py-2 border-b-2 border-b-footerBorder pb-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-xl">Join Our Newletter</h3>
            <p className="text-footerText sm:text-base text-sm">
              keep up with everything Tuition Highway
            </p>
          </div>

          <div className="flex flex-row  gap-3 items-center">
            <form className="w-full flex gap-3 items-center">
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-2 border-footerBorder rounded-full sm:py-2 sm:px-6 py-2 px-3 focus:outline-none text-white w-[80%] sm:text-base text-sm sm:placeholder:text-base placeholder:text-sm "
              />
              <button
                type="submit"
                className="bg-gradient-to-b from-orangeHeading to-toOrange sm:py-2 sm:px-6 py-2 px-3 sm:text-base text-sm rounded-full text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="md:flex md:flex-row md:justify-between md:items-center md:gap-4 flex flex-col gap-8 py-2">
          <div className="flex gap-4 items-center flex-wrap text-white sm:text-base text-sm">
            <p className="cursor-pointer">Terms of Service</p>
            <p className="cursor-pointer">Policy Service</p>
            <p className="cursor-pointer">Cookie Policy</p>
          </div>

          <div>
            <p className="text-white sm:text-base text-sm">
              © {currentYear} Tuition Highway. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
