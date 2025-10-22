"use client"

import Image from "next/image"
import { Users, Heart, Target, Award, Globe, Star, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimationWrapper } from "@/app/components/animation-wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
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
              Our Mission & Vision
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-md slide-in-top">
              Where are we going, and how do we measure success?
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-[#FEFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">
                Our Vision: The 2-3 Year Picture
              </h2>
              <p className="text-xl text-[#00071B] max-w-3xl mx-auto slide-in-top">
                We envision a global village where intergenerational connections flourish, 
                integrity is never compromised, and every voice is heard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover-slide-up card-slide-left">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-[#FEFFFF]" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">Global Village</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    Building connections across cultures, generations, and communities worldwide, 
                    creating a network of support and understanding.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-top">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-[#00071B]" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">Intergenerational Connection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    Bridging the gap between generations, sharing wisdom, and creating 
                    spaces where all ages learn from and support each other.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover-slide-up card-slide-right">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-[#FEFFFF]" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl">No Compromise on Integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] leading-relaxed">
                    Maintaining the highest standards of trust, respect, and ethical conduct 
                    in everything we do, without exception.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">
                How We Measure Success
              </h2>
              <p className="text-xl text-[#00071B] max-w-3xl mx-auto slide-in-top">
                We focus on changes "from the inside out" - helping participants become confident, 
                dream big, and achieve their goals.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="slide-in-left">
                <h3 className="font-serif text-3xl font-bold text-[#1C3163] mb-6">
                  Visible Changes We See
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#1C3163] mt-1 flex-shrink-0" />
                    <p className="text-[#00071B] text-lg">Homemakers and seniors becoming confident in organizing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#1C3163] mt-1 flex-shrink-0" />
                    <p className="text-[#00071B] text-lg">Overcoming skill challenges and becoming self-reliant</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#1C3163] mt-1 flex-shrink-0" />
                    <p className="text-[#00071B] text-lg">Participants becoming confident organizers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#1C3163] mt-1 flex-shrink-0" />
                    <p className="text-[#00071B] text-lg">Dreaming big and setting achievable goals</p>
                  </div>
                </div>
              </div>

              <div className="slide-in-right">
                <div className="bg-[#1C3163] p-8 rounded-2xl text-[#FEFFFF]">
                  <h4 className="font-serif text-2xl font-bold mb-4">Progress Signs</h4>
                  <p className="text-lg leading-relaxed mb-6">
                    We measure success not by numbers, but by the quality of changes, 
                    the enthusiasm of participants, and the lasting impact on their lives.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-[#D6B585]" />
                      <span>Quality of transformation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-[#D6B585]" />
                      <span>Sustained enthusiasm</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-[#D6B585]" />
                      <span>Lasting positive impact</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Story Section */}
        <section className="py-20 bg-[#00071B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#FEFFFF] mb-6 slide-in-top">
                Real Impact: Pradeep Berry's Story
              </h2>
              <p className="text-xl text-[#D6B585] max-w-3xl mx-auto slide-in-top">
                A senior community member whose life was transformed through our support
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-[#1C3163] border-[#D6B585] hover-slide-up">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-10 w-10 text-[#00071B]" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#FEFFFF] mb-4">
                      From Struggle to Strength
                    </h3>
                  </div>
                  
                  <div className="space-y-4 text-[#FEFFFF] text-lg leading-relaxed">
                    <p>
                      Pradeep Berry, a senior community member, came to us facing significant challenges. 
                      Through our comprehensive support system, we provided assistance until long-term 
                      solutions were available.
                    </p>
                    <p>
                      Today, Pradeep has become a confident organizer and active participant in our community, 
                      demonstrating the transformative power of sustained support and belief in one's potential.
                    </p>
                    <p className="text-[#D6B585] font-semibold text-center">
                      "The miracle is accepting them the way they are, offering respect and love."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-[#FEFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">
              Ready to Be Part of Our Mission?
            </h2>
            <p className="text-xl text-[#00071B] mb-8 max-w-3xl mx-auto slide-in-top">
              Join us in creating a world where every voice matters and every dream has the support to flourish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-bottom">
              <Button
                asChild
                size="lg"
                className="bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF] hover:text-[#00071B] shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-4 btn-hover hover-glow font-semibold"
              >
                <Link href="/communities">
                  Join a Group Today
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
                  Support Our Mission
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </AnimationWrapper>
  )
}