
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
export default function Footer() {
  return (
   <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* About Us */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Metalgate Leeds Ltd provides expert metal fabrication across the UK,
            specialising in custom metalwork, gates, railings, and structural
            steel—with a focus on quality, precision, and reliable service.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 <a href="tel:+447710063815" className="hover:text-white">+44 7710063815</a></li>
            <li>📧 <a href="mailto:metalgateleeds@gmail.com" className="hover:text-white">metalgateleeds@gmail.com</a></li>
            <li>📍 The OLD School, Bireley Lane, Bradford, BD4 6AA</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/metalgateleeds"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <FaFacebookF className="text-xl" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/metal_gate_leeds"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <FaInstagram className="text-xl" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/447710063815"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © 2025 MetalGate Website. All rights reserved.
      </div>
    </footer>
  );
}