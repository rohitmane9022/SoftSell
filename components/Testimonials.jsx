"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechNova Solutions",
      content:
        "SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was seamless and their valuation exceeded our expectations.",
      stars: 5,
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "Global Innovations Inc.",
      content:
        "After downsizing our team, we had numerous unused licenses. SoftSell made it incredibly easy to convert these assets into cash, which helped our bottom line significantly.",
      stars: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-16 bg-[#111827]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">What Our Customers Say</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Don't just take our word for it. Here's what businesses like yours have experienced with SoftSell.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-6 bg-[#1F2937] rounded-lg shadow-sm border-gray-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                ))}
              </div>
              <p className="text-white  mb-4 italic">"{testimonial.content}"</p>
              <div className="mt-auto">
                <p className="font-bold text-white ">{testimonial.name}</p>
                <p className="text-sm text-gray-400 dark:text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
