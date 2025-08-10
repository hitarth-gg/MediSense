import React from "react";
import { motion } from "framer-motion";
import { Quote, User, UserCheck } from "lucide-react";

const testimonials = [
  {
    quote:
      "MediSense has revolutionized how we provide healthcare in remote villages. The AI-powered treatment advice helps me make better decisions for my patients, even when specialist consultation isn't immediately available.",
    author: "Dr. Priya Sharma",
    role: "Rural Health Specialist",
    location: "Rajasthan",
    icon: UserCheck,
  },
  {
    quote:
      "As a field facilitator, MediSense makes my job so much easier. The interface is simple to use, and I can quickly onboard patients and connect them with doctors. It's truly bridging the healthcare gap in our community.",
    author: "Ravi Kumar",
    role: "Community Health Facilitator",
    location: "Uttar Pradesh",
    icon: User,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24"
      aria-labelledby="testimonials-heading"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/60 to-purple-50/60" />

      {/* Floating gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl animate-[spin_22s_linear_infinite]" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl animate-[spin_26s_linear_infinite]" />
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[58rem] text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
            Real stories • Real impact
          </div>
          <h2
            id="testimonials-heading"
            className="mt-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl"
          >
            Trusted by Healthcare Heroes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            See how MediSense is making a difference in rural healthcare
            delivery across India.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:mt-14 md:grid-cols-2"
        >
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Soft inner sheen */}
              <div className="pointer-events-none absolute inset-px rounded-[1rem] bg-gradient-to-br from-white/70 to-white/20" />

              {/* Decorative corner glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-indigo-600/20 blur-2xl opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Giant quote mark background */}
              <Quote
                className="pointer-events-none absolute -left-2 -top-2 h-20 w-20 text-blue-600/10"
                aria-hidden="true"
              />

              <div className="relative flex h-full flex-col gap-5">
                {/* Badge row */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
                  Verified practitioner
                </div>

                {/* Quote */}
                <p className="text-[15px] leading-relaxed text-slate-700">
                  <span className="mr-1 text-blue-600/70">“</span>
                  {t.quote}
                  <span className="ml-1 text-blue-600/70">”</span>
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-2 text-white shadow-sm shadow-blue-600/30">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">
                      {t.author}
                    </p>
                    <p className="truncate text-xs text-slate-600">{t.role}</p>
                    <p className="truncate text-[11px] text-slate-500">
                      {t.location}
                    </p>
                  </div>
                </div>

                {/* Micro-CTA */}
                <button
                  type="button"
                  className="mt-1 inline-flex w-max items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all hover:gap-3 hover:border-slate-300 hover:shadow"
                  onClick={() => console.log(`Read more about ${t.author}`)}
                >
                  Read story
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M7.5 4.5L13.5 10L7.5 15.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Hover ring */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition-[ring,opacity] duration-300 group-hover:ring-blue-500/25" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
