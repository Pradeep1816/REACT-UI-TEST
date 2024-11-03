import React from "react";
import Layout from "../header/Layout";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <Layout className="mt-10">
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 ">
          <div className="brond-address flex flex-col gap-5">
            <div>
              <figure>
                <img
                  src="/images/brand.jpeg"
                  alt=""
                  className="h-14 object-cover object-center"
                />
              </figure>
            </div>
            <div className="">
              <p className="text-sm">
                712, Lokmat Bhawan,A WING, Ramdaspeth, Nagpur, Maharashtra
                440010
              </p>
            </div>
            <div className="flex gap-5">
              <FaInstagram />
              <CiYoutube />
              <CiLinkedin />
              <FaTwitter />
            </div>
          </div>
          <div>
            <h2 className="font-bold mt-2 text-lg">Services</h2>
            <ul className="text-sm flex flex-col gap-4">
              <li>Companies Act </li>
              <li>Securities Law</li>
              <li>Financial Services</li>
              <li>Investment Banking</li>
              <li>Risk Management</li>
              <li>Audit</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mt-2 text-lg">Resources</h2>
            <ul className="text-sm flex flex-col gap-4">
              <li>About</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mt-2 text-lg">Contact Information</h2>
            <ul className="text-sm flex flex-col gap-4">
              <li>+91 299366311</li>
              <li>+91 299366311</li>
              <li className="mt-2">infor@moredaliya.com</li>
            </ul>
            <div className="mt-10">
              <button className="border p-2 rounded-full bg-stone-900 text-white transition-transform duration-300 hover:bg-blue-700 hover:scale-105">
                Get in touch with us
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Footer;
