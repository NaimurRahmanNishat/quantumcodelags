// src/app/contact/page.tsx
"use client";
import { useState } from "react";
import { Phone, Mail, MessageSquare, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const serviceOptions = [
  "Website Development",
  "Custom Software Solutions",
  "E-Commerce Setup",
  "Prebuilt Websites",
  "UI/UX Design",
  "Maintenance & Support",
];

const budgetOptions = [
  "Under $500",
  "$500 – $1000",
  "$1000 – $2000",
  "$2000 – $5000",
  "$5000+",
];

const Contactpage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Website Development",
    budget: "Under $500",
    description: "",
    agreePrivacy: false,
    agreeTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-28 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header (Top to Bottom Animation) */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Ready to start your next project? Contact us today for a free consultation.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left: Contact Info Card (Left to Right Animation) */}
          <motion.div 
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full lg:w-96 shrink-0 rounded-xl overflow-hidden bg-[#1a2f5e] text-white flex flex-col shadow-lg"
          >
            <div className="p-6 flex-1">
              <h3 className="text-lg font-bold mb-2">Contact Information</h3>
              <p className="text-blue-200 text-xs leading-relaxed mb-6">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <ul className="space-y-5">
                {[
                  {
                    icon: <Phone className="w-3.5 h-3.5 text-blue-300" />,
                    title: "Phone / WhatsApp",
                    value: "+8801736340278",
                  },
                  {
                    icon: <Mail className="w-3.5 h-3.5 text-blue-300" />,
                    title: "Email",
                    value: "hello@quantumcodelabs.com",
                    extra: "quantumcodelabs@gmail.com",
                  },
                  {
                    icon: <MessageSquare className="w-3.5 h-3.5 text-blue-300" />,
                    title: "Telegram",
                    value: "@Quantumcodelabs",
                  },
                  {
                    icon: <MapPin className="w-3.5 h-3.5 text-blue-300" />,
                    title: "Office Location",
                    value: "Rangpur, Bangladesh",
                  },
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 shrink-0 w-7 h-7 rounded-full bg-blue-500/30 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{item.title}</p>
                      <p className="text-blue-200 text-xs mt-0.5">{item.value}</p>
                      {item.extra && <p className="text-blue-200 text-xs">{item.extra}</p>}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Google Map Section (Bottom Up Animation) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative h-48 bg-[#132040] w-full"
            >
              <iframe
                title="Developer House Location"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3595.6811232811466!2d89.244111!3d25.657972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM5JzI4LjciTiA4OcKwMTQnMzguOCJF!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>

          {/* Right: Form Card (Right to Left Animation) */}
          <motion.div 
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm"
          >
            {submitted ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center h-full py-16 text-center"
              >
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500 text-sm">
                  Thank you! Our team will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Row 1 (Bottom to Top) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </motion.div>

                {/* Row 2 (Bottom to Top) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+880 17XX XXXXXX"
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Service of Interest
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      {serviceOptions.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>

                {/* Row 3 (Bottom to Top) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="grid grid-cols-1 gap-4"
                >
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    >
                      {budgetOptions.map((b) => (
                        <option key={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                </motion.div>

                {/* Row 4 (Bottom to Top) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals, features needed, etc."
                    required
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </motion.div>

                {/* Checkboxes (Bottom to Top) */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="space-y-2.5"
                >
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreePrivacy"
                      checked={form.agreePrivacy}
                      onChange={handleChange}
                      required
                      className="mt-0.5 w-3.5 h-3.5 rounded border-gray-300 text-blue-600 shrink-0"
                    />
                    <span className="text-xs text-gray-600 leading-relaxed">
                      I have read and agree to the{" "}
                      <span className="text-blue-600 cursor-pointer hover:underline">Privacy Policy</span>
                      . I consent to processing my personal data to respond to my inquiry.
                    </span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={form.agreeTerms}
                      onChange={handleChange}
                      required
                      className="mt-0.5 w-3.5 h-3.5 rounded border-gray-300 text-blue-600 shrink-0"
                    />
                    <span className="text-xs text-gray-600">
                      I agree to the{" "}
                      <span className="text-blue-600 cursor-pointer hover:underline">Terms of Service</span>
                      .
                    </span>
                  </label>
                </motion.div>

                {/* Submit Button (Hover & Tap Animations included) */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-sm py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 shadow-md"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contactpage;
