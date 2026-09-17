"use client"

import { motion } from "motion/react"
import { fadeUp } from "@/lib/motion/variants"

export function SectionReveal({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
