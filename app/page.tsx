"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Heart, Lightbulb, Calendar, Quote, Shield, CheckCircle, Phone, Mail } from "lucide-react"
import { CamelIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimationWrapper } from "@/app/components/animation-wrapper"

export default function HomePage() {
  return (
    <AnimationWrapper>
      <div className="min-h-screen">
        {/* Hero Section - The Oasis & Mirage Banner */}
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

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Site Identity - Camel Symbol */}
              <div className="mb-8 slide-in-top">
                <div className="w-24 h-24 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <CamelIcon className="h-12 w-12 text-[#1C3163]" />
                </div>
              </div>

              {/* Core Message */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg slide-in-top">
                From Dreaming to Doing: <span className="text-[#D6B585]">Find Your Oasis</span>
              </h1>
              
              {/* Tagline */}
              <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-md slide-in-top">
                Possibilities, hopes, vision, and collaboration. Your voice matters.
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-bottom">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF] shadow-xl hover:shadow-2xl transition-all text-base md:text-lg px-8 py-4 min-w-[200px] btn-hover hover-glow font-semibold focus:ring-4 focus:ring-[#1C3163]/30 focus:outline-none"
                >
                  <Link href="/about">
                    Explore Our Mission
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#FEFFFF] text-[#FEFFFF] hover:bg-[#D6B585] hover:text-[#00071B] shadow-xl hover:shadow-2xl transition-all text-base md:text-lg px-8 py-4 min-w-[200px] font-semibold focus:ring-4 focus:ring-[#FEFFFF]/30 focus:outline-none"
                >
                  <Link href="/communities">
                    Join a Group Today
                    <Users className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story & Symbol Section */}
        <section className="py-20 bg-[#FEFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="slide-in-left">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3163] mb-6">
                  What is Oasis & Mirage?
                </h2>
                <div className="space-y-4 text-[#00071B] text-lg leading-relaxed">
                  <p>
                    <strong className="text-[#1C3163]">Oasis</strong> is the place you are now - your current reality with resources and challenges, where you stand today with both opportunities and obstacles.
                  </p>
                  <p>
                    <strong className="text-[#D6B585]">Mirage</strong> is the possibility you chase - your dreams, hopes, and the vision of what could be. It's the future you're reaching toward.
                  </p>
                  <p className="text-[#1C3163] font-semibold">
                    Together, they represent the journey from where you are to where you want to be.
                  </p>
                </div>
              </div>
              <div className="slide-in-right">
                <div className="bg-gradient-to-br from-[#1C3163]/10 to-[#D6B585]/10 p-8 rounded-2xl">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-6">
                      <CamelIcon className="h-16 w-16 text-[#FEFFFF]" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#1C3163] mb-4">
                      The Ship of the Desert: Our Symbol
                    </h3>
                    <p className="text-[#00071B] text-lg leading-relaxed">
                      The camel represents <strong className="text-[#1C3163]">endurance</strong>, <strong className="text-[#1C3163]">resilience</strong>, and <strong className="text-[#1C3163]">resourcefulness</strong>. 
                      It carries truth and hope across life's deserts, just as we help you navigate your journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems We Solve Section */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">
                Facing Challenges Together
              </h2>
              <p className="text-xl text-[#00071B] max-w-3xl mx-auto slide-in-top">
                We understand the struggles you face. Here's how we help you overcome them.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover-slide-up card-slide-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-[#FEFFFF]" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">Acceptance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    It's difficult to accept yourself and your current situation. We make it a safe place to begin your journey, 
                    where you're welcomed exactly as you are.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-top">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">Transformation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    Change is difficult but necessary for growth and betterment. We provide the support and tools you need 
                    to transform challenges into opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-right">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#FEFFFF]" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    Finding the right help and resources can be overwhelming. We guide you to where to look and 
                    how to access the support you need.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="py-20 bg-[#FEFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">
                A Community for Everyone
              </h2>
              <p className="text-xl text-[#00071B] max-w-3xl mx-auto slide-in-top">
                We welcome all who seek connection, growth, and support in their journey.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="hover-slide-up card-slide-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-2xl text-center">Homemakers & Seniors</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-[#00071B] text-lg leading-relaxed">
                    Creating hope and possibilities for those who have given so much to others. 
                    We help you feel good about yourself and discover your own potential for leadership and growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-slide-up card-slide-right">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#FEFFFF]" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-2xl text-center">Global Village Citizens</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-[#00071B] text-lg leading-relaxed">
                    Proud of your culture, ethnicity, and diversity. We celebrate intergenerational connections 
                    and the rich tapestry of experiences that make our community stronger.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Power is the Ability to Act Section */}
        <section className="py-20 bg-[#00071B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#FEFFFF] mb-8 slide-in-top">
                Power is the Ability to Act
              </h2>
              
              <div className="bg-[#1C3163]/20 p-8 rounded-2xl mb-8 slide-in-top">
                <blockquote className="text-xl md:text-2xl text-[#FEFFFF] leading-relaxed mb-6">
                  "Your desire to do something... shows that you have the power and ability to bring change."
                </blockquote>
              </div>

              <div className="space-y-6 text-[#D6B585] text-lg leading-relaxed mb-8 slide-in-top">
                <p>• Be whatever you want to be, exhale, and be a leader by learning to organize with us.</p>
                <p>• Know that you have a voice and that you can be heard.</p>
                <p>• This is for you, your family, and our community.</p>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF] hover:text-[#00071B] shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-4 btn-hover hover-glow font-semibold focus:ring-4 focus:ring-[#1C3163]/30 focus:outline-none slide-in-bottom"
              >
                <Link href="/communities">
                  See How to Join a Group
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust and Integrity Footer */}
        <section className="py-16 bg-[#FEFFFF] border-t border-[#D6B585]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center slide-in-left">
                <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[#FEFFFF]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C3163] mb-4">Integrity Promise</h3>
                <p className="text-[#00071B] leading-relaxed">
                  We are committed to <strong>INTEGRITY</strong>, trust, and participant privacy. 
                  Your journey with us is sacred and protected.
                </p>
              </div>

              <div className="text-center slide-in-top">
                <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-[#00071B]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C3163] mb-4">Easy Donation</h3>
                <p className="text-[#00071B] leading-relaxed mb-4">
                  Support our mission with a simple, secure donation process.
                </p>
                <Button
                  asChild
                  className="bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF] hover:text-[#00071B]"
                >
                  <Link href="/contribute">
                    Support Oasis & Mirage
                  </Link>
                </Button>
              </div>

              <div className="text-center slide-in-right">
                <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-[#FEFFFF]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C3163] mb-4">Accessibility</h3>
                <p className="text-[#00071B] leading-relaxed">
                  Our website is designed for easy access and navigation, especially for those 
                  who are not technically experienced.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#D6B585]/20 text-center">
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