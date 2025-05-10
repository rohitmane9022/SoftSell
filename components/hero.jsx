"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import HeroImage from "./image/HeroImage.png"

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden mx-10">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Turn Unused Software Licenses Into Cash
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                SoftSell helps businesses maximize the value of their unused software licenses with our streamlined
                resale platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
              >
                Sell My Licenses
              </Button>
              <Button size="lg" variant="outline">
                Get a Quote
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="mx-auto lg:mr-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={HeroImage}
              alt="SoftSell Platform"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full aspect-square"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
