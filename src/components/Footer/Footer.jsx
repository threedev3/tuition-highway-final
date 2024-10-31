import React, { useState } from "react";
import footerLogo from "../../assets/img/footerLogo.png";
import { visa, master, applePay } from "../../assets/img/images.js";
import { products, company, resources, socialIcons } from "../../data/data.js";
import { Link, useNavigate } from "react-router-dom";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  // const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#031338] relative pt-12 pb-6 sm:px-12 px-6 max-w-full overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center gap-2">
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-12 lg:gap-3 gap-10 border-b-2 border-b-footerBorder pb-8">
          <div className="flex flex-col items-start gap-6">
            <div className="">
              <Link to={"/"}>
                <img
                  src={footerLogo}
                  alt=""
                  className="object-cover cursor-pointer"
                  onClick={scrollToTop}
                  width={150}
                />
              </Link>
            </div>
            <div className="xl:max-w-xs max-w-[280px] text-footerText xl:text-base text-sm">
              <p>
                Excel with Tuition Highway's expert online tutoring. We cover
                all subjects and curricula, helping students worldwide achieve
                exam success!
              </p>
            </div>
            <div className="flex gap-5 items-center ">
              {socialIcons.map((item, index) => (
                <Link
                  to={item.to}
                  target="_blank"
                  key={index}
                  className="bg-footerText p-2 rounded-full flex-shrink-0"
                >
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="cursor-pointer "
                    width={24}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* <div className="flex md:flex-row flex-col items-start lg:justify-between justify-start  xl:gap-16 lg:gap-10 gap-24 lg:mt-0 mt-8"> */}
          <div className="flex flex-col gap-5">
            <h3 className="text-white xl:text-xl text-lg">Quick Links</h3>
            {company.map((comp, index) => (
              <p
                className="text-footerText cursor-pointer xl:text-base text-sm"
                key={index}
                onClick={() => {
                  navigate(comp.to);
                  scrollToTop();
                }}
              >
                {comp.title}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-white xl:text-xl text-lg">Quick Links</h3>
            {resources.map((resource, index) => (
              <p
                className="text-footerText cursor-pointer xl:text-base text-sm"
                key={index}
                onClick={() => {
                  navigate(resource.to);
                  scrollToTop();
                }}
              >
                {resource.title}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-white xl:text-xl text-lg">Contact Us</h3>
            <div className="flex gap-3 items-center">
              <MapPinIcon
                className="xl:w-5 lg:w-4 w-4 flex-shrink-0"
                color="#dadada"
              />
              <p className="text-footerText cursor-pointer xl:text-base text-sm xl:max-w-xs max-w-[260px]">
                ASE Global LLC-FZ Business Centre, Meydan Hotel, Nad Al Sheeba,
                Dubai, UAE
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <PhoneIcon
                className="xl:w-5 lg:w-4 w-4 flex-shrink-0"
                color="#dadada"
              />
              <p className="text-footerText cursor-pointer xl:text-base text-sm max-w-xs">
                +971563511722
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <EnvelopeIcon
                className="xl:w-5 lg:w-4 w-4 flex-shrink-0"
                color="#dadada"
              />
              <p className="text-footerText cursor-pointer xl:text-base text-sm max-w-xs">
                hello@tuitionhighway.com
              </p>
            </div>
            {/* {products.map((product, index) => (
                <p
                  className="text-footerText cursor-pointer sm:text-base text-sm"
                  key={index}
                  onClick={() => {
                    navigate(product.to);
                    scrollToTop();
                  }}
                >
                  {product.title}
                </p>
              ))} */}
          </div>
          {/* </div> */}
        </div>

        {/* <div className="md:flex md:flex-row md:justify-between md:items-center md:gap-4 flex flex-col gap-8 py-2 border-b-2 border-b-footerBorder pb-8">
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
        </div> */}

        <div className="md:flex md:flex-row md:justify-between md:items-center md:gap-4 flex flex-col gap-8 py-2">
          {/* <div className="flex gap-4 items-center flex-wrap text-white sm:text-base text-sm">
            <p
              className="cursor-pointer"
              onClick={() => {
                navigate("/termsofservice");
                scrollToTop();
              }}
            >
              Terms of Service
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                navigate("/privacypolicy");
                scrollToTop();
              }}
            >
              Policy Service
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                navigate("/contact");
                scrollToTop();
              }}
            >
              Contact Us
            </p>
          </div> */}

          <div>
            <p className="text-footerText xl:text-base text-sm">
              © {currentYear} Tuition Highway. All rights reserved.
            </p>
          </div>

          <div className="flex gap-10 items-center">
            <img src={visa} alt="" className="object-contain" />
            <img src={master} alt="" className="object-contain" />
            <img src={applePay} alt="" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
