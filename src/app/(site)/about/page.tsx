"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Users, Megaphone, Heart } from "lucide-react"
import { CamelIcon, ElephantIcon } from "@/components/icons"
import aboutContent from "../../../content/about.json"

const iconMap = {
  "book-open": BookOpen,
  users: Users,
  megaphone: Megaphone,
  heart: Heart,
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--sand-50)] to-[var(--oasis-50)] py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="font-display text-4xl font-bold text-[var(--ink)] sm:text-5xl lg:text-6xl mb-6">
              {aboutContent.hero.title}
            </h1>
            <p className="text-lg text-[var(--ink-soft)] leading-relaxed sm:text-xl">{aboutContent.hero.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <p className="text-lg text-[var(--ink-soft)] leading-relaxed">{aboutContent.story}</p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="bg-[var(--sand-50)] py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-[var(--ink)] sm:text-4xl">
              {aboutContent.vision.title}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutContent.vision.values.map((value, index) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap]
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-[var(--sand-200)]">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--oasis-100)]">
                          <Icon className="h-5 w-5 text-[var(--oasis-600)]" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-[var(--ink)]">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-[var(--ink-soft)] leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Symbolism */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-[var(--ink)] sm:text-4xl mb-6">
              {aboutContent.symbolism.title}
            </h2>
            <p className="text-lg text-[var(--ink-soft)] leading-relaxed">{aboutContent.symbolism.description}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {aboutContent.symbolism.symbols.map((symbol, index) => (
              <motion.div
                key={symbol.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--sand-100)]">
                  {symbol.name === "Camel" ? (
                    <CamelIcon className="h-8 w-8 text-[var(--sand-800)]" />
                  ) : (
                    <ElephantIcon className="h-8 w-8 text-[var(--sand-800)]" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[var(--ink)] mb-2">{symbol.name}</h3>
                <p className="text-[var(--ink-soft)] leading-relaxed">{symbol.meaning}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-[var(--sand-50)] py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-[var(--ink)] sm:text-4xl">Our Leadership</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutContent.team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-[var(--sand-200)]">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-[var(--oasis-100)] flex items-center justify-center">
                      <span className="text-2xl font-bold text-[var(--oasis-600)]">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-semibold text-[var(--ink)]">{member.name}</CardTitle>
                    <CardDescription className="text-[var(--date-500)] font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--ink-soft)] leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-[var(--ink)] sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl"
          >
            <Accordion type="single" collapsible className="w-full">
              {aboutContent.faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-[var(--ink)] hover:text-[var(--oasis-600)]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--ink-soft)] leading-relaxed">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
