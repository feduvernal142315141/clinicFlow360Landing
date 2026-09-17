"use client"

import { motion } from "motion/react"
import { fadeUp, staggerContainer } from "@/lib/motion/variants"

export function ProductShowcaseReveal({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <motion.div key={i} variants={fadeUp}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={fadeUp}>{children}</motion.div>
      )}
    </motion.div>
  )
}
