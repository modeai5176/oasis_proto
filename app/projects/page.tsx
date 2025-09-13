"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimationWrapper } from "@/app/components/animation-wrapper"

export default function ProjectsPage() {
  return (
    <AnimationWrapper>
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="object-cover w-full h-full"
            poster="/images/video-poster.jpg"
          >
            <source src="/desert.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#00071B]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg slide-in-top">
            Projects & Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed drop-shadow-md slide-in-top">
            Join meaningful initiatives that bring communities together and create lasting positive impact
          </p>
          <Button asChild size="lg" className="bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF] hover:text-[#00071B] shadow-xl text-lg px-6 py-4">
            <Link href="#upcoming">
              View Upcoming Events <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className="py-20 bg-[#FEFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">Upcoming Events</h2>
            <p className="text-xl text-[#00071B] max-w-3xl mx-auto slide-in-top">
              Join us for these special gatherings designed to strengthen community bonds
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-[#1C3163] hover:shadow-lg transition-shadow overflow-hidden bg-[#FEFFFF] hover-slide-up">
              <div className="h-48 relative">
                <Image src="/images/wisdom-circle.png" alt="Storytelling workshop" fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#1C3163] text-[#FEFFFF]">This Weekend</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-[#1C3163] mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>March 15, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>2:00 PM - 5:00 PM</span>
                  </div>
                </div>
                <CardTitle className="text-[#1C3163]">Storytelling Workshop</CardTitle>
                <CardDescription className="text-[#00071B]">
                  Learn the art of sharing personal stories in a supportive environment. Community members will share techniques
                  for meaningful storytelling while participants practice active listening.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-[#1C3163] mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Downtown Community Center</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>20 spots available</span>
                  </div>
                </div>
                <Button className="w-full bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF] hover:text-[#00071B]">Register Now</Button>
              </CardContent>
            </Card>

            <Card className="border-[#1C3163] hover:shadow-lg transition-shadow overflow-hidden bg-[#FEFFFF] hover-slide-up">
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-[#D6B585] flex items-center justify-center">
                  <span className="text-[#00071B] font-bold text-xl">Community Garden</span>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#D6B585] text-[#00071B]">Next Week</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-[#1C3163] mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>March 22, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                </div>
                <CardTitle className="text-[#1C3163]">Community Garden Day</CardTitle>
                <CardDescription className="text-[#00071B]">
                  Join us for a hands-on gardening experience where community members share traditional growing wisdom while
                  volunteers provide physical assistance and build connections.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-[#1C3163] mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Riverside Community Garden</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>15 spots available</span>
                  </div>
                </div>
                <Button className="w-full bg-[#D6B585] hover:bg-[#1C3163] text-[#00071B] hover:text-[#FEFFFF]">Register Now</Button>
              </CardContent>
            </Card>

            <Card className="border-[#1C3163] hover:shadow-lg transition-shadow overflow-hidden bg-[#FEFFFF] hover-slide-up">
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-[#1C3163] flex items-center justify-center">
                  <span className="text-[#FEFFFF] font-bold text-xl">Tech Skills</span>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#1C3163] text-[#FEFFFF]">Monthly</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-[#1C3163] mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>March 29, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>1:00 PM - 4:00 PM</span>
                  </div>
                </div>
                <CardTitle className="text-[#1C3163]">Tech Skills Exchange</CardTitle>
                <CardDescription className="text-[#00071B]">
                  Community members learn smartphone and computer skills from tech-savvy volunteers, while sharing life skills and
                  professional expertise in return.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-[#1C3163] mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Public Library - Tech Center</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>12 spots available</span>
                  </div>
                </div>
                <Button className="w-full bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF] hover:text-[#00071B]">Register Now</Button>
              </CardContent>
            </Card>

            <Card className="border-[#1C3163] hover:shadow-lg transition-shadow overflow-hidden bg-[#FEFFFF] hover-slide-up">
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-[#D6B585] flex items-center justify-center">
                  <span className="text-[#00071B] font-bold text-xl">Cultural Night</span>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#D6B585] text-[#00071B]">Special Event</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-[#1C3163] mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>April 5, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>6:00 PM - 9:00 PM</span>
                  </div>
                </div>
                <CardTitle className="text-[#1C3163]">Heritage & Culture Night</CardTitle>
                <CardDescription className="text-[#00071B]">
                  A celebration of diverse cultural backgrounds featuring traditional foods, music, and stories shared
                  across communities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-[#1C3163] mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Westside Cultural Center</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>50 spots available</span>
                  </div>
                </div>
                <Button className="w-full bg-[#D6B585] hover:bg-[#1C3163] text-[#00071B] hover:text-[#FEFFFF]">Register Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-20 bg-[#00071B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-[#FEFFFF] mb-6">Ongoing Projects</h2>
            <p className="text-xl text-[#D6B585]">Long-term initiatives creating lasting impact in our communities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-[#1C3163] bg-[#FEFFFF]">
              <CardHeader>
                <div className="w-12 h-12 bg-[#1C3163]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#1C3163]" />
                </div>
                <CardTitle className="text-[#1C3163]">Wisdom Archive Project</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#00071B] mb-4">
                  Recording and preserving life stories from community members to create a digital archive for future
                  generations.
                </CardDescription>
                <div className="text-sm text-[#1C3163] mb-4">
                  <strong>Progress:</strong> 127 stories collected
                </div>
                <Button
                  variant="outline"
                  className="w-full border-[#1C3163] text-[#1C3163] hover:bg-[#1C3163]/10 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#1C3163] bg-[#FEFFFF]">
              <CardHeader>
                <div className="w-12 h-12 bg-[#D6B585]/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#D6B585]" />
                </div>
                <CardTitle className="text-[#1C3163]">Neighborhood Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#00071B] mb-4">
                  Pairing isolated individuals with volunteer "neighbors" for regular check-ins, errands, and companionship.
                </CardDescription>
                <div className="text-sm text-[#1C3163] mb-4">
                  <strong>Active Pairs:</strong> 89 connections
                </div>
                <Button
                  variant="outline"
                  className="w-full border-[#D6B585] text-[#D6B585] hover:bg-[#D6B585]/10 bg-transparent"
                >
                  Volunteer
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#1C3163] bg-[#FEFFFF]">
              <CardHeader>
                <div className="w-12 h-12 bg-[#1C3163]/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-[#1C3163]" />
                </div>
                <CardTitle className="text-[#1C3163]">Skills Mentorship Program</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#00071B] mb-4">
                  Connecting experienced professionals with community members for career guidance and skill development.
                </CardDescription>
                <div className="text-sm text-[#1C3163] mb-4">
                  <strong>Active Mentorships:</strong> 34 pairs
                </div>
                <Button
                  variant="outline"
                  className="w-full border-[#1C3163] text-[#1C3163] hover:bg-[#1C3163]/10 bg-transparent"
                >
                  Join Program
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-20 bg-[#FEFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6">Ready to Get Involved?</h2>
          <p className="text-xl text-[#00071B] mb-8 max-w-2xl mx-auto">
            Whether you want to volunteer, participate, or support our work, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-[#1C3163] text-[#FEFFFF] hover:bg-[#D6B585] hover:text-[#00071B] shadow-xl text-lg px-6 py-4"
            >
              <Link href="/contribute">Support Our Work</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#1C3163] text-[#1C3163] hover:bg-[#D6B585] hover:text-[#00071B] bg-transparent shadow-xl text-lg px-6 py-4"
            >
              <Link href="/communities">Join a Community</Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </AnimationWrapper>
  )
}
