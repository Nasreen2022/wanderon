import React, { useState } from "react";

/* =====================================================
   ENQUIRY COMPONENT
===================================================== */

export default function EnquirySection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  /* ================= VALIDATION ================= */

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    return newErrors;
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form Data:", form);

    setSubmitted(true);
    setForm({ name: "", phone: "" });
  };

  /* ================= UI ================= */

  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="bg-[#cfe3e7] border border-[#6ba7b1] rounded-2xl p-8">

        {/* HEADING */}
        <h2 className="text-xl font-semibold text-[#0a6c74] mb-6">
          Don’t Just Dream, Travel! 🔥
        </h2>

        {/* SUCCESS MESSAGE */}
        {submitted && (
          <div className="mb-4 bg-green-100 text-green-700 p-3 rounded">
            Thank you! Our team will contact you soon.
          </div>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-6 items-start md:items-end"
        >

          {/* NAME */}
          <div className="w-full md:w-[280px]">
            <div className="flex items-center bg-white border rounded-xl px-4 py-3">
              <span className="mr-3 text-gray-400">👤</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name*"
                value={form.name}
                onChange={handleChange}
                className="outline-none w-full text-sm"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* PHONE */}
          <div className="w-full md:w-[280px]">
            <div className="flex items-center bg-white border rounded-xl px-4 py-3">
              <span className="mr-3 text-gray-400">📞</span>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number*"
                value={form.phone}
                onChange={handleChange}
                className="outline-none w-full text-sm"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-[#0aa3b8] hover:bg-[#0893a6] text-white font-semibold px-10 py-4 rounded-full transition w-full md:w-auto"
          >
            ENQUIRE NOW
          </button>

        </form>
      </div>
    </section>
  );
}