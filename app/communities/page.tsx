"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Users, Calendar, ArrowRight, Heart, CheckCircle, MessageCircle, Video, Phone } from "lucide-react"
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
              Join a Group Today
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed drop-shadow-md slide-in-top">
              What is a group, and how do I join? Find your community and start your journey.
            </p>
            <Button asChild size="lg" className="bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF] shadow-xl text-lg px-6 py-4 slide-in-bottom">
              <Link href="#how-it-works">
                Learn How to Join <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Group Model Section */}
        <section className="py-20 bg-[#FEFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">
                What is a Group?
              </h2>
              <p className="text-xl text-[#00071B] max-w-3xl mx-auto slide-in-top">
                A typical meeting includes Zoom, WhatsApp, and in-person monthly gatherings with welcoming icebreakers and community agreements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover-slide-up card-slide-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Video className="h-8 w-8 text-[#FEFFFF]" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">Zoom Meetings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    Regular online gatherings where you can connect with others from the comfort of your home, 
                    no matter where you are.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-top">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">WhatsApp Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    Stay connected through our WhatsApp groups where you can share updates, 
                    ask questions, and support each other daily.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-right">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#FEFFFF]" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">In-Person Monthly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    Monthly face-to-face meetings where we build deeper connections and 
                    create lasting friendships in your local community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Journey Section */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">
                The Simple Journey to Join
              </h2>
              <p className="text-xl text-[#00071B] max-w-3xl mx-auto slide-in-top">
                Join by word of mouth, receive follow-up about activities, and learn as you work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover-slide-up card-slide-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#FEFFFF] font-bold text-xl">1</span>
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">Word of Mouth</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    Join through personal connections and recommendations from friends, 
                    family, or community members who are already part of our groups.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-top">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#00071B] font-bold text-xl">2</span>
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">Follow-up & Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    Receive personalized follow-up about upcoming activities and opportunities 
                    that match your interests and availability.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-right">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#FEFFFF] font-bold text-xl">3</span>
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">Train as You Work</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    Learn leadership and organizational skills through hands-on experience, 
                    growing your confidence as you contribute to the community.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* The Leaders Section */}
        <section className="py-20 bg-[#FEFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">
                How Our Groups Work
              </h2>
              <p className="text-xl text-[#00071B] max-w-3xl mx-auto slide-in-top">
                I facilitate, seasoned participants lead specific topics, creating a supportive learning environment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="slide-in-left">
                <h3 className="font-serif text-3xl font-bold text-[#1C3163] mb-6">
                  Facilitation Model
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#1C3163] mt-1 flex-shrink-0" />
                    <p className="text-[#00071B] text-lg">I facilitate the overall group dynamics and ensure everyone feels welcome</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#1C3163] mt-1 flex-shrink-0" />
                    <p className="text-[#00071B] text-lg">Seasoned participants lead specific topics based on their expertise</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#1C3163] mt-1 flex-shrink-0" />
                    <p className="text-[#00071B] text-lg">Everyone has the opportunity to share and learn from others</p>
                  </div>
                </div>
              </div>

              <div className="slide-in-right">
                <div className="bg-[#1C3163] p-8 rounded-2xl text-[#FEFFFF]">
                  <h4 className="font-serif text-2xl font-bold mb-4">Welcoming Icebreaker</h4>
                  <p className="text-lg leading-relaxed mb-6">
                    Every meeting begins with a warm welcome and an icebreaker activity 
                    designed to help everyone feel comfortable and connected.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-[#D6B585]" />
                      <span>Community agreement on respect and support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-[#D6B585]" />
                      <span>Safe space for sharing and learning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Heart className="h-5 w-5 text-[#D6B585]" />
                      <span>Encouragement for everyone to participate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Five Thriving Elements Section */}
        <section className="py-20 bg-[#00071B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#FEFFFF] mb-6 slide-in-top">
                Five Thriving Elements
              </h2>
              <p className="text-xl text-[#D6B585] max-w-3xl mx-auto slide-in-top">
                Our core values that create a thriving community environment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <Card className="text-center hover-slide-up card-slide-left bg-[#1C3163] border-[#D6B585]">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#FEFFFF] text-lg">Acceptance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#FEFFFF] text-sm leading-relaxed">
                    Welcoming everyone exactly as they are, without judgment or expectation.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-top bg-[#1C3163] border-[#D6B585]">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#FEFFFF] text-lg">Respect & Love</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#FEFFFF] text-sm leading-relaxed">
                    Treating each other with dignity and care in all our interactions.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-top bg-[#1C3163] border-[#D6B585]">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#FEFFFF] text-lg">Giving Hope</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#FEFFFF] text-sm leading-relaxed">
                    Inspiring optimism and possibility for the future.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-top bg-[#1C3163] border-[#D6B585]">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#FEFFFF] text-lg">Building Confidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#FEFFFF] text-sm leading-relaxed">
                    Helping each other develop skills and self-assurance.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-right bg-[#1C3163] border-[#D6B585]">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#FEFFFF] text-lg">Celebrating Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#FEFFFF] text-sm leading-relaxed">
                    Acknowledging and celebrating each other's achievements and growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-[#FEFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">
              Ready to Join a Group?
            </h2>
            <p className="text-xl text-[#00071B] mb-8 max-w-3xl mx-auto slide-in-top">
              Start your journey today and discover the power of community support and connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-bottom">
              <Button
                asChild
                size="lg"
                className="bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF] hover:text-[#00071B] shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-4 btn-hover hover-glow font-semibold"
              >
                <Link href="#contact">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#1C3163] text-[#1C3163] hover:bg-[#1C3163] hover:text-[#FEFFFF] shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-4 font-semibold"
              >
                <Link href="#contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </AnimationWrapper>
  )
}