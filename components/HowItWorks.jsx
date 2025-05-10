"use client"

import { motion } from "framer-motion"
import { Upload, DollarSign, CheckCircle } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload License",
      description: "Submit your software license details through our secure platform.",
      icon: <Upload className="h-10 w-10 text-teal-500" />,
    },
    {
      title: "Get Valuation",
      description: "Receive a competitive market valuation within 24 hours.",
      icon: <DollarSign className="h-10 w-10 text-teal-500" />,
    },
    {
      title: "Get Paid",
      description: "Accept our offer and receive payment through your preferred method.",
      icon: <CheckCircle className="h-10 w-10 text-teal-500" />,
    },
  ]

  return (
    <section id="how-it-works" className="py-16 bg-[#111827]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">How It Works</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our simple three-step process makes selling your unused software licenses quick and easy.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 ">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-[#1F2937] rounded-lg shadow-sm border border-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-4 rounded-full bg-[#1E3A8A] mb-4">{step.icon}</div>
              <h3 className="text-xl text-white font-bold mb-2">{step.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
