import { User, Phone, Mail, MessageSquare } from "lucide-react";

export default function CallbackSection() {
  return (
    <section className="bg-[#08a8c7] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT ILLUSTRATION */}
        <div className="flex justify-center">
          <img
            src="/callback-illustration.png"
            alt="Callback Illustration"
            className="max-w-md w-full"
          />
        </div>

        {/* RIGHT FORM CARD */}
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full mx-auto">

          <p className="text-[#08a8c7] font-semibold">
            Wanderlust Calling?
          </p>

          <h2 className="text-2xl font-bold mt-1 mb-6">
            Allow Us to Call You Back!
          </h2>

          <form className="space-y-4">

            {/* Name */}
            <InputField
              icon={<User size={18} />}
              placeholder="e.g. John Smith"
              label="Name *"
            />

            {/* Phone */}
            <InputField
              icon={<Phone size={18} />}
              placeholder="Enter your 10 digit number"
              label="Phone Number *"
            />

            {/* Email */}
            <InputField
              icon={<Mail size={18} />}
              placeholder="john@example.com"
              label="Email Id *"
            />

            {/* Message */}
            <InputField
              icon={<MessageSquare size={18} />}
              placeholder="Any Message"
              label="Message"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 bg-[#08a8c7] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
            >
              Request Callback
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

/* ---------- Reusable Input Field ---------- */

function InputField({ icon, label, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">
        {label}
      </label>
      <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
        <span className="text-gray-400">{icon}</span>
        <input
          type="text"
          placeholder={placeholder}
          className="w-full outline-none text-sm"
        />
      </div>
    </div>
  );
}
