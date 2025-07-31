// LCMS Scientific Website
import { MailIcon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/assets/logo-transparent.png";

export default function LCMSPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-4 md:px-12 py-8 font-sans">
      <motion.header 
        className="text-center space-y-4 mb-16"
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center">
          <Image src={Logo} alt="LCMS Scientific Logo" width={180} height={180} />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-sky-900">
          Precision Meets Performance
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
          Refurbished LC/MS instrumentation, tailored support, and expert service for AB/Sciex, Thermo Finnigan, Micromass, and Agilent systems.
        </p>
        <a href="#contact" className="inline-block mt-4 bg-sky-800 text-white px-6 py-3 rounded-xl hover:bg-sky-900 transition">Request Service</a>
      </motion.header>

      <section className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-sky-800">Our Services</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Operator Training:</strong> compound optimization, method development, data analysis</li>
            <li><strong>Maintenance Training:</strong> hardware overview, maintenance, calibration</li>
            <li><strong>Preventive Maintenance:</strong> OEM-standard service, consumables included</li>
            <li><strong>Telephone Consultation:</strong> hourly expert guidance</li>
          </ul>
        </div>

        <div className="rounded-2xl shadow-sm border border-gray-200 p-6 space-y-3">
          <h2 className="text-2xl font-semibold text-sky-800">Instrument Sales</h2>
          <p className="text-sm text-gray-500">All units refurbished and fully tested</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Quantity 2 — Thermo LCQ Advantage ion trap instruments</li>
            <li>Sciex API 3200 triple quadrupole</li>
            <li>Sciex API 3000 with HSID upgrade (meets API 4000 specs)</li>
          </ul>
          <p className="text-sm text-gray-500">Sold this year: LCQ Advantage and API 3000/HSID systems to a lab in Toronto</p>
        </div>
      </section>

      <section className="bg-sky-50 rounded-2xl shadow-inner p-6 md:p-10 mb-20">
        <h2 className="text-2xl font-semibold text-sky-800 mb-4">Why Choose LCMS Scientific?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>All instruments tested to OEM standards</li>
          <li>Personalized training and support</li>
          <li>Preventive and emergency services available</li>
          <li>Trusted by clients nationwide — references available</li>
        </ul>
      </section>

      <section id="contact" className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm mb-20">
        <h2 className="text-2xl font-semibold text-sky-800 mb-4">Request Service</h2>
        <form action="mailto:john@lcmscs.com" method="POST" encType="text/plain" className="space-y-4">
          <input type="text" name="Name" placeholder="Your Name" className="w-full border border-gray-300 rounded-xl px-4 py-2" required />
          <input type="email" name="Email" placeholder="Your Email" className="w-full border border-gray-300 rounded-xl px-4 py-2" required />
          <select name="Service Type" className="w-full border border-gray-300 rounded-xl px-4 py-2">
            <option>Operator Training</option>
            <option>Maintenance Training</option>
            <option>Preventive Maintenance</option>
            <option>Telephone Consultation</option>
            <option>Other</option>
          </select>
          <textarea name="Details" rows={5} placeholder="Tell us more about your request..." className="w-full border border-gray-300 rounded-xl px-4 py-2" />
          <button type="submit" className="bg-sky-800 text-white px-6 py-3 rounded-xl hover:bg-sky-900 transition">
            Submit Request
          </button>
        </form>
      </section>

      <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm">
        <h2 className="text-2xl font-semibold text-sky-800 mb-4">Contact Us</h2>
        <p className="mb-4 text-gray-600">We’ll respond within 24 hours.</p>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-700">
            <MailIcon className="h-5 w-5 text-sky-600" />
            <span><strong>sales@lcmsscientific.com</strong> — Instrument & part inquiries</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MailIcon className="h-5 w-5 text-sky-600" />
            <span><strong>support@lcmsscientific.com</strong> — Technical assistance</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <MailIcon className="h-5 w-5 text-sky-600" />
            <span><strong>invoicing@lcmsscientific.com</strong> — Billing questions</span>
          </div>
        </div>
      </section>

      <footer className="mt-20 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} LCMS Scientific, Inc. All rights reserved.
      </footer>
    </div>
  );
}

