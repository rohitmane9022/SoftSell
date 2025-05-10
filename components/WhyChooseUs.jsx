"use client"

import { motion } from "framer-motion"
import { Shield, Clock, TrendingUp, Award } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Secure Transactions",
      description: "End-to-end encryption and secure payment processing for all license transfers.",
      icon: <Shield className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Fast Turnaround",
      description: "Get valuations within 24 hours and payment within 3 business days.",
      icon: <Clock className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Best Market Rates",
      description: "Our extensive network ensures you get the highest value for your licenses.",
      icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
    },
    {
      title: "Expert Support",
      description: "Our team of software licensing experts guides you through every step.",
      icon: <Award className="h-10 w-10 text-blue-600" />,
    },
  ]

  return (
    <section id="why-choose-us" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Why Choose Us</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              SoftSell offers unmatched benefits for businesses looking to recover value from unused software.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-[#1F2937] rounded-lg shadow-sm border border-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-4 rounded-full bg-[#1E3A8A] mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{reason.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
