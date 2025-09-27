// app/contact/page.jsx
"use client";
import { useState } from "react";
import Navbar from "../navbar/Navbar";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // اینجا می‌تونی API یا ایمیل سرور اضافه کنی
    alert("Message sent!");
  };
 <Navbar/>
  return (
   
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md grid lg:grid-cols-2 grid-cols-1 overflow-hidden">
        {/* Left Side */}
        <div className="bg-gray-800 text-white p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-gray-300">
            We welcome all enquiries — no job is too small. Contact us today for a
            free, no-obligation quote.
          </p>

          <ul className="space-y-3">
            <li>
              <span className="mr-2">📧</span>
              <strong>Email:</strong>{" "}
              <a href="mailto:metalgateleeds@gmail.com" className="text-blue-400">
                metalgateleeds@gmail.com
              </a>
            </li>
            <li>
              <span className="mr-2">📞</span>
              <strong>Phone:</strong>{" "}
              <a href="tel:+447710063815" className="text-blue-400">
                +44 7710063815
              </a>
            </li>
            <li>
              <span className="mr-2">📍</span>
              <strong>Address:</strong> The OLD School, Bireley Lane, Bradford, BD4 6AA
            </li>
            <li>
              <span className="mr-2">⏰</span>
              <strong>Hours:</strong> Mon–Fri, 9AM–6PM
            </li>
          </ul>

          {/* Map */}
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.8231!2d-1.7401!3d53.7841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487be5c123456789%3A0xabcdef123456789!2sBradford!5e0!3m2!1sen!2suk!4v1699999999999!5m2!1sen!2suk"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border-0"
            ></iframe>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-gray-100 p-8 flex flex-col justify-center">
  {/* Header for the form */}
  <div className="mb-6 text-center lg:text-left">
    <h3 className="text-2xl font-bold text-gray-800">Send us a message</h3>
    <p className="text-gray-600 mt-2">
      For more information or any enquiry, please fill out the form below.
    </p>
  </div>

  <form onSubmit={handleSubmit} className="space-y-4">
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={form.name}
      onChange={handleChange}
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={form.email}
      onChange={handleChange}
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
      required
    />
    <textarea
      name="message"
      placeholder="Your Message"
      rows="5"
      value={form.message}
      onChange={handleChange}
      className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
      required
    ></textarea>
    <button
      type="submit"
      className="w-full py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
    >
      Send Message
    </button>
  </form>
</div>

      </div>
    </section>
  );
}



