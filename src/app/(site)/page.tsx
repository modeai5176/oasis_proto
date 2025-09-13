"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, TrendingUp, MapPin, ArrowRight } from "lucide-react"
import { CamelIcon, ElephantIcon } from "@/components/icons"
import homeContent from "../../../content/home.json"
import { AnimationWrapper } from "@/app/components/animation-wrapper"

const iconMap = {
  users: Users,
  shield: Shield,
  "trending-up": TrendingUp,
}

export default function HomePage() {
  return (
    <AnimationWrapper>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--sand-50)] via-[var(--oasis-50)] to-[var(--sand-100)] py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="/desert.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl"
            >
              {homeContent.hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--ink-soft)] sm:text-xl"
            >
              {homeContent.hero.subhead}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[var(--oasis-600)] hover:bg-[var(--oasis-800)] text-white focus-ring"
              >
                <Link href="/communities">{homeContent.hero.primaryCta}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[var(--date-500)] text-[var(--date-500)] hover:bg-[var(--date-500)] hover:text-white focus-ring bg-transparent"
              >
                <Link href="/contribute">{homeContent.hero.secondaryCta}</Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-[var(--ink)] sm:text-4xl">
              {homeContent.mission.title}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.mission.pillars.map((pillar, index) => {
              const Icon = iconMap[pillar.icon as keyof typeof iconMap]
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-[var(--sand-200)] hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--oasis-100)]">
                        <Icon className="h-6 w-6 text-[var(--oasis-600)]" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-[var(--ink)]">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-[var(--ink-soft)] leading-relaxed">
                        {pillar.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-[var(--sand-100)] py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[var(--oasis-600)] mb-2">{stat.value.toLocaleString()}+</div>
                <div className="text-[var(--ink-soft)] font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories & Quotes */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-[var(--ink)] sm:text-4xl">
              Stories from Our Community
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {homeContent.quotes.map((quote, index) => (
              <motion.div
                key={quote.author}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-[var(--sand-200)]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Image
                        src={quote.image || "/placeholder.svg"}
                        alt={quote.author}
                        width={80}
                        height={80}
                        className="rounded-full flex-shrink-0"
                      />
                      <div>
                        <blockquote className="text-[var(--ink)] leading-relaxed mb-4">"{quote.text}"</blockquote>
                        <div>
                          <div className="font-semibold text-[var(--ink)]">{quote.author}</div>
                          <div className="text-sm text-[var(--ink-soft)]">{quote.role}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-[var(--sand-50)] py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-[var(--ink)] sm:text-4xl">Upcoming Events</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeContent.upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-[var(--sand-200)] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-[var(--oasis-100)] text-[var(--oasis-800)]">
                        {event.type}
                      </Badge>
                      <div className="text-sm text-[var(--ink-soft)]">{new Date(event.date).toLocaleDateString()}</div>
                    </div>
                    <CardTitle className="text-lg font-semibold text-[var(--ink)]">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-[var(--ink-soft)] mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </div>
                    <Button size="sm" className="w-full bg-[var(--date-500)] hover:opacity-90 text-white focus-ring">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              variant="outline"
              className="border-[var(--oasis-600)] text-[var(--oasis-600)] hover:bg-[var(--oasis-600)] hover:text-white focus-ring bg-transparent"
            >
              <Link href="/projects">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center mb-16"
          >
            <h2 className="font-display text-3xl font-bold text-[var(--ink)] sm:text-4xl">How You Can Help</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--oasis-100)]">
                <CamelIcon className="h-8 w-8 text-[var(--oasis-600)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--ink)] mb-4">Donate</h3>
              <p className="text-[var(--ink-soft)] leading-relaxed mb-6">
                Support our community programs and help us reach more people.
              </p>
              <Button asChild className="bg-[var(--oasis-600)] hover:bg-[var(--oasis-800)] text-white focus-ring">
                <Link href="/contribute">Contribute Now</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--date-500)]/10">
                <Users className="h-8 w-8 text-[var(--date-500)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--ink)] mb-4">Volunteer</h3>
              <p className="text-[var(--ink-soft)] leading-relaxed mb-6">
                Join our community circles and share your time and skills.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-[var(--date-500)] text-[var(--date-500)] hover:bg-[var(--date-500)] hover:text-white focus-ring bg-transparent"
              >
                <Link href="/communities">Find Communities</Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--sand-300)]/50">
                <ElephantIcon className="h-8 w-8 text-[var(--sand-800)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--ink)] mb-4">Partner</h3>
              <p className="text-[var(--ink-soft)] leading-relaxed mb-6">
                Collaborate with us to expand our reach and impact.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-[var(--sand-600)] text-[var(--sand-800)] hover:bg-[var(--sand-600)] hover:text-white focus-ring bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      </div>
    </AnimationWrapper>
  )
}
