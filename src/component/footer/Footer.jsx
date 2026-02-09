import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f2226] text-gray-300 pt-16">

      {/* TOP LINKS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">

        <FooterColumn title="International Trips" items={[
          "Europe", "Bali", "Vietnam", "Thailand", "Kazakhstan",
          "Singapore", "Bhutan", "Maldives", "Dubai", "Malaysia"
        ]} />

        <FooterColumn title="India Trips" items={[
          "Ladakh", "Spiti Valley", "Meghalaya", "Kashmir",
          "Himachal Pradesh", "Andaman", "Kerala",
          "Rajasthan", "Nagaland"
        ]} />

        <FooterColumn title="WanderOn Special" items={[
          "Community Trips", "Honeymoon Trips",
          "Corporate Trips", "Weekend Getaways"
        ]} />

        <FooterColumn title="Quick Links" items={[
          "About Us", "Privacy Policy", "Terms & Conditions",
          "Customer Success & Support", "Disclaimer",
          "Careers", "Blogs", "Payments"
        ]} />

      </div>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto my-12 border-t border-gray-600" />

      {/* COMPANY INFO */}
      <div className="text-center px-6">
        <h2 className="text-xl font-bold text-white tracking-wide">
          WANDERON EXPERIENCES PVT LTD
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          CIN-U63040HR2019PTC118957
        </p>

        <p className="mt-4 text-sm max-w-3xl mx-auto leading-relaxed">
          3rd Floor, Building No-436, Phase IV, Udyog Vihar,
          Sector-18, Gurugram, Haryana-122015
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
          <span>hello@wanderon.in</span>
          <span>+91-9090403075</span>
          <span>www.wanderon.in</span>
        </div>
      </div>

      {/* SOCIAL ICONS */}
      <div className="mt-8 flex justify-center">
        <div className="flex items-center gap-4 bg-[#152f34] px-6 py-3 rounded-full">
          <SocialIcon icon={<FaFacebookF />} />
          <SocialIcon icon={<FaInstagram />} />
          <SocialIcon icon={<FaLinkedinIn />} />
          <SocialIcon icon={<FaYoutube />} />
        </div>
      </div>

      {/* SKYLINE STRIP */}
      <div className="mt-10">
        <img
          src="/footer-skyline.png"
          alt="City skyline"
          className="w-full opacity-90"
        />
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-sm text-gray-400 py-6 border-t border-gray-700">
        © WANDERON EXPERIENCES PVT LTD, All rights reserved.
      </div>

    </footer>
  );
}

/* ---------- Helper Components ---------- */

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">
        {title}
      </h3>
      <ul className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li
            key={index}
            className="hover:text-white cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#0f2226] cursor-pointer hover:scale-110 transition">
      {icon}
    </div>
  );
}
