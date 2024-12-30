import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8">
      <div className="h-[2px] bg-[#E1E3E5] w-full mb-10 md:mb-20" />
      <div className="mx-auto max-w-screen-2xl flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Logo and Description */}
        <div className="flex flex-col gap-6 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo Icon.png" // Updated to use the correct path
              alt="Logo"
              width={40}
              height={40}
              className="w-8 sm:w-10 h-auto"
            />
            <Link
              href="/"
              className="font-inter font-medium text-xl sm:text-2xl lg:text-[26px] text-[#272343]"
            >
              Comforty
            </Link>
          </div>
          <div className="text-[#272343]/60 font-inter font-normal text-sm md:text-base leading-6">
            <p>Vivamus tristique odio sit amet velit semper,</p>
            eu posuere turpis interdum.
            <br /> Cras egestas purus
          </div>
          <div className="flex gap-3">
            {[FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube].map(
              (Icon, index) => (
                <div
                  key={index}
                  className="social-icon w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#FFFFFF] hover:bg-slate-200 hover:scale-110 transition-all"
                >
                  <Link href="/">
                    <Icon className="text-gray-500" />
                  </Link>
                </div>
              )
            )}
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap md:flex-row gap-12 w-full md:w-auto">
          {/* Category Links */}
          <div className="flex-1">
            <h1 className="font-inter font-medium text-sm text-[#9A9CAA]">
              CATEGORY
            </h1>
            <div className="flex flex-col gap-2 mt-4 font-inter text-sm text-[#272343]">
              {[
                "Sofa",
                "Armchair",
                "Wing Chair",
                "Desk Chair",
                "Wooden Chair",
                "Park Bench",
              ].map((category, index) => (
                <Link
                  key={index}
                  href="/"
                  className={`hover:underline ${
                    category === "Desk Chair" ? "underline" : ""
                  }`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* Support Links */}
          <div className="flex-1">
            <h1 className="font-inter font-medium text-sm text-[#9A9CAA]">
              SUPPORT
            </h1>
            <div className="flex flex-col gap-2 mt-4 font-inter text-sm text-[#272343]">
              {[
                "Help & Support",
                "Terms & Conditions",
                "Privacy Policy",
                "Help",
              ].map((support, index) => (
                <Link key={index} href="/" className="hover:underline">
                  {support}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="flex-1 md:max-w-[400px]">
          <h1 className="font-inter font-medium text-sm text-[#9A9CAA]">
            NEWSLETTER
          </h1>
          <div className="mt-4">
            <div className="flex flex-col lg:flex-row gap-2">
              <input
                type="text"
                placeholder="Your email"
                className="h-[46px] flex-1 rounded-[8px] border border-[#E1E3E5] px-4"
              />
              <button className="h-[46px] bg-[#029FAE] text-white rounded-[8px] px-6 hover:bg-[#027F8A] transition-all">
                Subscribe
              </button>
            </div>
            <div className="text-[#9A9CAA] font-inter text-sm leading-[20px] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <p> Nullam tincidunt erat enim.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[2px] bg-[#E1E3E5] w-full mt-10 md:mt-20" />

      <div className="mx-auto max-w-screen-2xl py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-poppins font-normal text-xs md:text-sm text-[#9A9CAA] text-center sm:text-left">
            &copy; 2024 - by Hasnain Ahmed
          </p>
          <div className="flex gap-2 justify-center sm:justify-start">
            {["/paypal.png", "/anmerican_express.jpeg", "/visa.png"].map(
              (image, index) => (
                <Image
                  key={index}
                  src={image} // Correct path for public assets
                  alt="payment method"
                  width={50}
                  height={30}
                  className="h-auto"
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
