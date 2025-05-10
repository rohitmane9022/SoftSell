"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"




export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm()

  const licenseType = watch("licenseType")

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted:", data)
  

    reset()
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Get in Touch</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ready to turn your unused software licenses into cash? Fill out the form below and we'll get back to you
              within 24 hours.
            </p>
          </div>
        </div>

        <motion.div
          className="sm:w-3/5 mx-auto mt-12 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-[#1F2937] py-5 px-10">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
              >
                Full Name
              </label>
              <Input
                id="name"
                placeholder="John Doe"
                {...register("name", { required: "Name is required" })}
                className={`${errors.name ? "border-red-500" : ""} bg-[#020817] text-white` }
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`${errors.email ? "border-red-500" : ""} bg-[#020817] text-white` }
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="company"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
              >
                Company
              </label>
              <Input
                id="company"
                placeholder="Acme Inc."
                {...register("company", { required: "Company is required" })}
                className={`${errors.company ? "border-red-500" : ""} bg-[#020817] text-white` }
              />
              {errors.company && <p className="text-sm text-red-500">{errors.company.message}</p>}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="licenseType"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
              >
                License Type
              </label>
              <Select onValueChange={(value) => setValue("licenseType", value)} value={licenseType}>
                <SelectTrigger className={`${errors.licenseType ? "border-red-500" : ""} bg-[#020817] text-white ` }>
                  <SelectValue placeholder="Select license type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="enterprise">Enterprise Software</SelectItem>
                  <SelectItem value="cloud">Cloud Services</SelectItem>
                  <SelectItem value="desktop">Desktop Applications</SelectItem>
                  <SelectItem value="developer">Developer Tools</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.licenseType && <p className="text-sm text-red-500">{errors.licenseType.message}</p>}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your software licenses..."
                {...register("message", { required: "Message is required" })}
                className={`${errors.message ? "border-red-500" : ""} bg-[#020817] text-white` }
                rows={4}
              />
              {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
