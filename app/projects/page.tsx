"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, CheckCircle, Star, Users, Target, Award, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimationWrapper } from "@/app/components/animation-wrapper"

export default function StoriesImpactPage() {
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
              Finding the Oasis: Real Change, Real People
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed drop-shadow-md slide-in-top">
              We don't just count numbers; we strive for changes from the inside out. Our foundation is built on acceptance, respect, and the belief that everyone has the power to bring change within and around them.
            </p>
          </div>
        </section>

        {/* Visible Transformation Section */}
        <section className="py-20 bg-[#FEFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">
                When Transformation Takes Hold: Three Months Later
              </h2>
              <p className="text-xl text-[#00071B] max-w-3xl mx-auto slide-in-top">
                What changes we see in our participants after just three months of support and community connection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover-slide-up card-slide-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-[#FEFFFF]" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">Confidence & Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    Participants become more <strong className="text-[#1C3163]">confident</strong>, dreaming big, 
                    and trying to achieve their goals. They see possibilities where they once saw obstacles.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-top">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">Organizing & Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    They overcome skill challenges and become <strong className="text-[#1C3163]">confident in organizing</strong>. 
                    What once seemed impossible becomes achievable with community support.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-right">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-[#FEFFFF]" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">Self-Reliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    They take baby steps forward and become <strong className="text-[#1C3163]">self-reliant organizers</strong>. 
                    Independence grows through supported practice and community encouragement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* A Life Changed - Pradeep's Story */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">
                A Story of Unconditional Support: Pradeep's Journey
              </h2>
              <p className="text-xl text-[#00071B] max-w-3xl mx-auto slide-in-top">
                A real story of transformation through community support and unwavering commitment.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="slide-in-left">
                  <div className="bg-[#1C3163] p-8 rounded-2xl text-[#FEFFFF]">
                    <h3 className="font-serif text-2xl font-bold mb-6">The Situation (Before)</h3>
                    <div className="space-y-4 text-lg leading-relaxed">
                      <p>
                        Pradeep, a well-read, witty senior and active community member, began experiencing 
                        difficulty remembering essential tasks.
                      </p>
                      <p>
                        He stopped driving and needed assistance with basic necessities like cooked food. 
                        The challenges were mounting, and support was needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="slide-in-right">
                  <div className="bg-[#D6B585] p-8 rounded-2xl text-[#00071B]">
                    <h3 className="font-serif text-2xl font-bold mb-6">O&M's Action (The Support)</h3>
                    <div className="space-y-4 text-lg leading-relaxed">
                      <p>
                        As a community organizer, we were compelled to step in. We focused on restoring 
                        normalcy with basic needs until long-term solutions were available.
                      </p>
                      <p className="font-bold text-xl">
                        We raised funds and made <span className="text-[#1C3163]">SIX food deliveries</span> 
                        and provided necessary items.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Card className="bg-gradient-to-r from-[#1C3163] to-[#D6B585] border-0 hover-slide-up">
                  <CardContent className="p-8">
                    <div className="max-w-3xl mx-auto">
                      <h3 className="font-serif text-3xl font-bold text-[#FEFFFF] mb-6">
                        The Lesson
                      </h3>
                      <blockquote className="text-2xl text-[#FEFFFF] leading-relaxed font-medium">
                        "Accepting people the way they are, offering respect and love, and creating a platform has worked like a <strong>miracle</strong>."
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Measuring Progress and Success */}
        <section className="py-20 bg-[#00071B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#FEFFFF] mb-6 slide-in-top">
                How We Measure Success (Beyond the Numbers)
              </h2>
              <p className="text-xl text-[#D6B585] max-w-3xl mx-auto slide-in-top">
                We focus on the quality of transformation, not just quantity. Here are the five signs we look for.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="text-center hover-slide-up card-slide-left bg-[#1C3163] border-[#D6B585]">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#FEFFFF] text-lg">Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#FEFFFF] text-sm leading-relaxed">
                    Improvement in the quality of participation and effort in all activities.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-top bg-[#1C3163] border-[#D6B585]">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#FEFFFF] text-lg">Changes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#FEFFFF] text-sm leading-relaxed">
                    Visible personal transformations and growth in confidence and capability.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-top bg-[#1C3163] border-[#D6B585]">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#FEFFFF] text-lg">Enthusiasm</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#FEFFFF] text-sm leading-relaxed">
                    A noticeable increase in hope, excitement, and engagement with opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-top bg-[#1C3163] border-[#D6B585]">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#FEFFFF] text-lg">Self-Reliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#FEFFFF] text-sm leading-relaxed">
                    Participants becoming self-sufficient organizers and community leaders.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-right bg-[#1C3163] border-[#D6B585]">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#FEFFFF] text-lg">Confidence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#FEFFFF] text-sm leading-relaxed">
                    People feeling confident, dreaming big, and setting achievable goals.
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
              Be Part of the Story
            </h2>
            <p className="text-xl text-[#00071B] mb-8 max-w-3xl mx-auto slide-in-top">
              Join us in creating more transformation stories like Pradeep's. Your voice matters, and your support makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-bottom">
              <Button
                asChild
                size="lg"
                className="bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF] hover:text-[#00071B] shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-4 btn-hover hover-glow font-semibold"
              >
                <Link href="/communities">
                  Join a Group and Find Your Voice
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[#1C3163] text-[#1C3163] hover:bg-[#1C3163] hover:text-[#FEFFFF] shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-4 font-semibold"
              >
                <Link href="/contribute">
                  Support Our Work: Easy Donation
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-[#F8F9FA] border-t border-[#D6B585]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-bold text-[#1C3163] mb-6">
                Ready to Start Your Transformation Story?
              </h3>
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-[#00071B]">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#1C3163]" />
                  <span>Call us for support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#1C3163]" />
                  <span>Email us anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </AnimationWrapper>
  )
}