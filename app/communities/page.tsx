"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimationWrapper } from "@/app/components/animation-wrapper"

export default function CommunitiesPage() {
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
            webkit-playsinline="true"
            x5-playsinline="true"
            x5-video-player-type="h5"
            x5-video-player-fullscreen="false"
            className="object-cover w-full h-full"
            poster="/images/video-poster.jpg"
            style={{ objectFit: 'cover' }}
          >
            <source src="/desert.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#00071B]/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg slide-in-top">
            Find Your Community
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed drop-shadow-md slide-in-top">
            Connect with neighbors, share stories, and build lasting relationships that strengthen communities
          </p>
          <Button asChild size="lg" className="bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF] shadow-xl text-lg px-6 py-4">
            <Link href="#communities">
              Explore Communities <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Communities Grid */}
      <section id="communities" className="py-20 bg-[#FEFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">Active Communities</h2>
            <p className="text-xl text-[#00071B] max-w-3xl mx-auto slide-in-top">
              Join one of our thriving communities or help us start a new one in your area to strengthen connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
            {/* Community Cards */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow overflow-hidden stagger-item card-hover hover-slide-up">
              <div className="h-48 relative">
                <Image
                  src="/images/community-gathering.png"
                  alt="Downtown community center"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-600 text-white">Active</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Downtown Community Center</span>
                </div>
                <CardTitle className="text-gray-900">Central City Circle</CardTitle>
                <CardDescription className="text-gray-600">
                  Our flagship community bringing together urban professionals and longtime residents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>45 members</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Weekly meetings</span>
                  </div>
                </div>
                <Button className="w-full bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF]">Join Community</Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow overflow-hidden stagger-item card-hover hover-slide-up">
              <div className="h-48 relative">
                <Image src="/images/wisdom-circle.png" alt="Riverside park gathering" fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#1C3163] text-white">Growing</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Riverside Park Pavilion</span>
                </div>
                <CardTitle className="text-gray-900">Riverside Community Circle</CardTitle>
                <CardDescription className="text-gray-600">
                  Outdoor gatherings focused on nature connection and environmental stewardship
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>28 members</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Bi-weekly</span>
                  </div>
                </div>
                <Button className="w-full bg-[#D6B585] hover:bg-[#1C3163] text-[#00071B]">Join Community</Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-[#1C3163] flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">Coming Soon</span>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#D6B585] text-[#00071B]">New</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Westside Cultural Center</span>
                </div>
                <CardTitle className="text-gray-900">Westside Heritage Circle</CardTitle>
                <CardDescription className="text-gray-600">
                  Celebrating cultural diversity and immigrant stories to strengthen community bonds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Forming</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>TBD</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-[#1C3163] text-[#1C3163] hover:bg-[#1C3163]/10 bg-transparent"
                >
                  Express Interest
                </Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow overflow-hidden stagger-item card-hover hover-slide-up">
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-[#D6B585] flex items-center justify-center">
                  <span className="text-[#00071B] font-bold text-lg">Virtual Community</span>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#1C3163] text-white">Online</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Online Platform</span>
                </div>
                <CardTitle className="text-gray-900">Digital Connections</CardTitle>
                <CardDescription className="text-gray-600">
                  Virtual wisdom sharing for those who prefer online interaction or have mobility challenges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>32 members</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Weekly</span>
                  </div>
                </div>
                <Button className="w-full bg-[#1C3163] hover:bg-[#1C3163]/90 text-white">Join Online</Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow overflow-hidden stagger-item card-hover hover-slide-up">
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-[#1C3163] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Suburban Hub</span>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#1C3163] text-white">Active</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Oakwood Community Center</span>
                </div>
                <CardTitle className="text-gray-900">Oakwood Family Circle</CardTitle>
                <CardDescription className="text-gray-600">
                  Family-focused community connecting individuals to build stronger family bonds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>38 members</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Monthly</span>
                  </div>
                </div>
                <Button className="w-full bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF]">Join Community</Button>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-shadow overflow-hidden stagger-item card-hover hover-slide-up">
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-[#D6B585] flex items-center justify-center">
                  <span className="text-[#00071B] font-bold text-lg">Start New</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-gray-900">Start Your Own Circle</CardTitle>
                <CardDescription className="text-gray-600">
                  Don't see a community in your area? We'll help you start one with our comprehensive support program
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600 mb-4">
                  <div>• Training and resources provided</div>
                  <div>• Ongoing mentorship support</div>
                  <div>• Connection to our network</div>
                </div>
                <Button className="w-full bg-[#D6B585] hover:bg-[#1C3163] text-[#00071B]">Start a Circle</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6 fade-in-up">How It Works</h2>
            <p className="text-xl text-gray-600 fade-in-up">Simple steps to join and participate in our communities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-container">
            <div className="text-center stagger-item">
              <div className="w-16 h-16 bg-[#1C3163]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#1C3163] font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Find Your Community</h3>
              <p className="text-gray-600">
                Browse our active communities or express interest in starting a new one in your area.
              </p>
            </div>

            <div className="text-center stagger-item">
                              <div className="w-16 h-16 bg-[#1C3163]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#1C3163] font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Attend a Gathering</h3>
              <p className="text-gray-600">
                Join us for a welcoming introduction session where you'll meet other members and learn about our
                approach.
              </p>
            </div>

            <div className="text-center stagger-item">
                              <div className="w-16 h-16 bg-[#D6B585]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-[#D6B585] font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Share & Connect</h3>
              <p className="text-gray-600">
                Participate in meaningful conversations, share your experiences, and build lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </AnimationWrapper>
  )
}
