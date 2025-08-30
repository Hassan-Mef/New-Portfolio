import React from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, CheckCircle, Send } from "lucide-react";
import { Bg_2 } from "../assets/export";

export default function ContactSection() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: `url(${Bg_2})`, // ✅ wrap with url()
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/1 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-white">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
        >
          Let’s Connect
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Vertical Timeline */}
          <div className="relative border-l-2 border-purple-600 pl-8">
            {[
              {
                icon: <User className="w-6 h-6 text-purple-400" />,
                title: "Step 1: Your Info",
                desc: "Share your basic details so we know who you are.",
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
                title: "Step 2: Your Message",
                desc: "Let us know what you’re thinking or need help with.",
              },
              {
                icon: <Send className="w-6 h-6 text-purple-400" />,
                title: "Step 3: Submit",
                desc: "Hit send and we’ll get back to you ASAP!",
              },
              {
                icon: <CheckCircle className="w-6 h-6 text-purple-400" />,
                title: "Step 4: Confirmation",
                desc: "We’ll confirm that we’ve received your message.",
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.3 }}
                className="mb-12 relative"
              >
                {/* Icon Circle */}
                <div className="absolute -left-12 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-800 shadow-lg">
                  {step.icon}
                </div>

                {/* Step Content */}
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl p-8 rounded-2xl space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-purple-500/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-purple-500/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-purple-500/40 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
