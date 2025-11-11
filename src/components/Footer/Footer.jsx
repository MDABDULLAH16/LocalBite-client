import React from "react";
 import logo from '/logo.png'
import { toast } from "react-toastify";
import Container from "../Container/Container";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Thanks for subscribing to LocalBite!");
  };

  const date = new Date().getFullYear();

  return (
    <footer className="py-10 bg-linear-to-b from-white to-green-50 sm:pt-16 lg:pt-24 border-t border-gray-200">
      <Container>
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            {/* Logo and About */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                          <div className="flex items-center mb-4">
                              <img className="w-12 h-12 lg:w-14 lg:h-14 mr-2" src={logo} alt="Logo" />
                <span className="text-4xl font-extrabold text-primary">
                  Local
                </span>
                <span className="text-4xl font-extrabold text-primary ml-1">
                  Bite
                </span>
              </div>

              <p className="text-base leading-relaxed text-gray-600 mb-4">
                LocalBite connects food lovers who explore local restaurants,
                street food, and home-cooked meals. Share your reviews, discover
                hidden gems, and celebrate local flavors together.
              </p>

              {/* Social Icons */}
              <ul className="flex items-center space-x-3">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center bg-white hover:bg-green-100 rounded-full w-9 h-9 transition-all duration-200 shadow-sm"
                  >
                    <img
                      src="https://i.ibb.co.com/0Rv7bW1Y/youtube.png"
                      alt="YouTube"
                      className="w-6 h-6 object-contain"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center bg-white hover:bg-green-100 rounded-full w-9 h-9 transition-all duration-200 shadow-sm"
                  >
                    <img
                      src="https://i.ibb.co.com/bRQ00X7r/whatsApp.png"
                      alt="WhatsApp"
                      className="w-6 h-6 object-contain"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center bg-white hover:bg-green-100 rounded-full w-9 h-9 transition-all duration-200 shadow-sm"
                  >
                    <img
                      src="https://i.ibb.co.com/ycV6JKZR/github.png"
                      alt="GitHub"
                      className="w-6 h-6 object-contain"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center bg-white hover:bg-green-100 rounded-full w-9 h-9 transition-all duration-200 shadow-sm"
                  >
                    <img
                      src="https://i.ibb.co.com/tpRg3Hpr/linkedin.png"
                      alt="LinkedIn"
                      className="w-6 h-6 object-contain"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center bg-white hover:bg-green-100 rounded-full w-9 h-9 transition-all duration-200 shadow-sm"
                  >
                    <img
                      src="https://i.ibb.co.com/bj0vfrG4/facebook-messenger-logo.png"
                      alt="Messenger"
                      className="w-6 h-6 object-contain"
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Explore
              </p>
              <ul className="mt-6 space-y-4">
                {["Home", "Top Reviews", "Restaurants", "Add Review"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-base text-gray-800 hover:text-green-600 transition-all duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Support */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Support
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "Contact Us",
                  "FAQ",
                  "Terms & Conditions",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-base text-gray-800 hover:text-green-600 transition-all duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe */}
            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Subscribe for updates
              </p>
              <form onSubmit={handleSubscribe} className="mt-6">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  className="block w-full p-4 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-pink-600 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="btn bg-primary hover:bg-pink-700 font-semibold text-white w-full my-4 transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <hr className="mt-16 mb-10 border-gray-300" />

          <p className="text-sm text-center text-gray-600">
            © {date} <span className="font-bold text-primary">LocalBite</span>{" "}
            — Connecting Food Lovers Everywhere 🍜
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
