"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Users, ExternalLink } from "lucide-react"
import projectsContent from "../../../content/projects.json"

export default function ProjectsPage() {
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
              Projects & Events
            </h1>
            <p className="text-lg text-[var(--ink-soft)] leading-relaxed sm:text-xl">
              Discover our community initiatives and join upcoming events that bring generations together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                  <TabsTrigger value="past">Past Events</TabsTrigger>
                  <TabsTrigger value="projects">Projects</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="space-y-6 mt-8">
                  {projectsContent.upcomingEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="border-[var(--sand-200)] hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="secondary" className="bg-[var(--oasis-100)] text-[var(--oasis-800)]">
                                  {event.type}
                                </Badge>
                                <span className="text-sm text-[var(--ink-soft)]">
                                  {new Date(event.date).toLocaleDateString()}
                                </span>
                              </div>
                              <CardTitle className="text-xl font-semibold text-[var(--ink)]">{event.title}</CardTitle>
                            </div>
                            <Button size="sm" className="bg-[var(--date-500)] hover:opacity-90 text-white focus-ring">
                              RSVP
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center text-[var(--ink-soft)]">
                              <Calendar className="h-4 w-4 mr-2" />
                              {event.time}
                            </div>
                            <div className="flex items-center text-[var(--ink-soft)]">
                              <MapPin className="h-4 w-4 mr-2" />
                              {event.location}
                            </div>
                          </div>
                          <p className="text-[var(--ink-soft)] leading-relaxed">{event.description}</p>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-[var(--oasis-600)] text-[var(--oasis-600)] hover:bg-[var(--oasis-600)] hover:text-white focus-ring bg-transparent"
                            >
                              Add to Calendar
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-[var(--ink-soft)] hover:text-[var(--ink)] focus-ring"
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Learn More
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </TabsContent>

                <TabsContent value="past" className="space-y-6 mt-8">
                  {projectsContent.pastEvents.map((event, index) => (
                    <motion.div
                      key={event.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="border-[var(--sand-200)]">
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                              <CardTitle className="text-xl font-semibold text-[var(--ink)]">{event.title}</CardTitle>
                              <CardDescription className="flex items-center mt-2">
                                <Calendar className="h-4 w-4 mr-1" />
                                {new Date(event.date).toLocaleDateString()}
                                <MapPin className="h-4 w-4 ml-4 mr-1" />
                                {event.location}
                              </CardDescription>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center text-[var(--ink-soft)]">
                                <Users className="h-4 w-4 mr-1" />
                                {event.attendees} attendees
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </TabsContent>

                <TabsContent value="projects" className="space-y-6 mt-8">
                  {projectsContent.projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="border-[var(--sand-200)] hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge
                                  variant={project.status === "Active" ? "default" : "secondary"}
                                  className={project.status === "Active" ? "bg-[var(--success)] text-white" : ""}
                                >
                                  {project.status}
                                </Badge>
                              </div>
                              <CardTitle className="text-xl font-semibold text-[var(--ink)]">{project.title}</CardTitle>
                              <CardDescription className="mt-2 text-[var(--date-500)] font-medium">
                                {project.goal}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-[var(--ink-soft)] leading-relaxed">{project.description}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong className="text-[var(--ink)]">Beneficiaries:</strong>
                              <br />
                              <span className="text-[var(--ink-soft)]">{project.beneficiaries}</span>
                            </div>
                            <div>
                              <strong className="text-[var(--ink)]">Impact:</strong>
                              <br />
                              <span className="text-[var(--ink-soft)]">{project.impact}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Donate Nudge */}
              <Card className="border-[var(--oasis-200)] bg-[var(--oasis-50)]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[var(--ink)]">Support Our Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--ink-soft)] mb-4">
                    Help us create more meaningful connections between generations.
                  </p>
                  <Button
                    size="sm"
                    className="w-full bg-[var(--oasis-600)] hover:bg-[var(--oasis-800)] text-white focus-ring"
                  >
                    Donate Now
                  </Button>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-[var(--sand-200)]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[var(--ink)]">Stay Updated</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--ink-soft)] mb-4">
                    Get notified about upcoming events and new projects.
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-[var(--date-500)] text-[var(--date-500)] hover:bg-[var(--date-500)] hover:text-white focus-ring bg-transparent"
                  >
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
