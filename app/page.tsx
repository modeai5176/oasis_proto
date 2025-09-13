"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Heart, Lightbulb, Calendar, Quote } from "lucide-react"
import { CamelIcon, ElephantIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimationWrapper } from "@/app/components/animation-wrapper"

export default function HomePage() {
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
                              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg slide-in-top" id="hero-heading">
                    From mirage to <span className="text-white">community</span>
                  </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-md slide-in-top">
              Creating spaces of refuge and renewal where communities find nourishment, belonging, and lasting well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-bottom">
              <Button
                asChild
                size="lg"
                className="bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF] shadow-xl hover:shadow-2xl transition-all text-base md:text-lg px-8 py-4 min-w-[180px] md:min-w-[200px] btn-hover hover-glow font-semibold focus:ring-4 focus:ring-[#1C3163]/30 focus:outline-none"
                aria-describedby="hero-heading"
              >
                <Link href="/communities">
                  Join the Community <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[#FEFFFF] text-[#FEFFFF] hover:bg-[#D6B585] hover:text-[#00071B] bg-white/10 backdrop-blur-sm shadow-xl text-base md:text-lg px-8 py-4 min-w-[180px] md:min-w-[200px] btn-hover hover-glow font-semibold focus:ring-4 focus:ring-white/30 focus:outline-none"
                aria-describedby="hero-heading"
              >
                <Link href="/contribute">Fuel a Circle Today</Link>
              </Button>
            </div>
          </div>
        </div>

      </section>

      {/* Mission Pillars */}
      <section className="py-12 md:py-20 bg-[#FEFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C3163] mb-4 slide-in-top">Our Mission</h2>
            <p className="text-lg md:text-xl text-[#00071B] max-w-3xl mx-auto px-4 md:px-0 slide-in-top">
              Three pillars guide our work in strengthening communities and fostering meaningful connections
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="border-[#1C3163] hover:shadow-xl transition-all duration-300 group overflow-hidden card-slide-left card-hover bg-[#FEFFFF] shadow-sm hover-slide-up">
              <div className="h-40 md:h-48 relative">
                <div className="absolute inset-0 bg-[#1C3163] flex items-center justify-center">
                  <Users className="h-12 w-12 md:h-16 md:w-16 text-[#FEFFFF]" />
                </div>
              </div>
              <CardHeader className="pb-2 px-4 md:px-6">
                <CardTitle className="text-[#1C3163] text-lg md:text-xl">Connection</CardTitle>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <CardDescription className="text-[#00071B] leading-relaxed text-sm md:text-base">
                  Fostering meaningful relationships and creating spaces of refuge and renewal where individuals come together to support one another.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-[#1C3163] hover:shadow-xl transition-all duration-300 group overflow-hidden card-slide-top card-hover bg-[#FEFFFF] shadow-sm hover-slide-up">
              <div className="h-40 md:h-48 relative">
                <div className="absolute inset-0 bg-[#D6B585] flex items-center justify-center">
                  <CamelIcon className="h-12 w-12 md:h-16 md:w-16 text-[#00071B]" />
                </div>
              </div>
              <CardHeader className="pb-2 px-4 md:px-6">
                <CardTitle className="text-[#1C3163] text-lg md:text-xl">Resilience</CardTitle>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <CardDescription className="text-[#00071B] leading-relaxed text-sm md:text-base">
                  Strengthening communities through collective wisdom and mutual support, helping people thrive in challenging conditions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-[#1C3163] hover:shadow-xl transition-all duration-300 group overflow-hidden card-slide-right card-hover bg-[#FEFFFF] shadow-sm hover-slide-up">
              <div className="h-40 md:h-48 relative">
                <div className="absolute inset-0 bg-[#1C3163] flex items-center justify-center">
                  <ElephantIcon className="h-12 w-12 md:h-16 md:w-16 text-[#FEFFFF]" />
                </div>
              </div>
              <CardHeader className="pb-2 px-4 md:px-6">
                <CardTitle className="text-[#1C3163] text-lg md:text-xl">Shared Growth</CardTitle>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <CardDescription className="text-[#00071B] leading-relaxed text-sm md:text-base">
                  Creating opportunities for individuals to access resources and transform challenges into opportunities for lasting well-being.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 md:py-16 bg-[#00071B] text-[#FEFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4 slide-in-top">Communities Reached</h2>
            <p className="text-[#D6B585] text-base md:text-lg px-4 md:px-0 slide-in-top">Real impact, real connections, real change</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center stagger-container">
            <div className="group stagger-item hover-slide-up">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform pulse-glow">500+</div>
              <div className="text-[#D6B585] text-sm md:text-base">Individuals Connected</div>
            </div>
            <div className="group stagger-item hover-slide-up">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform pulse-glow">25</div>
              <div className="text-[#D6B585] text-sm md:text-base">Communities Served</div>
            </div>
            <div className="group stagger-item hover-slide-up">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform pulse-glow">150</div>
              <div className="text-[#D6B585] text-sm md:text-base">Programs Delivered</div>
            </div>
            <div className="group stagger-item hover-slide-up">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform pulse-glow">$50K</div>
              <div className="text-[#D6B585] text-sm md:text-base">Community Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories & Quotes */}
      <section className="py-12 md:py-20 bg-[#FEFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C3163] mb-4 slide-in-top">Stories from Our Community</h2>
            <p className="text-lg md:text-xl text-[#00071B] px-4 md:px-0 slide-in-top">Voices that inspire and strengthen communities</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-[#1C3163] shadow-lg overflow-hidden card-slide-left card-hover bg-[#1C3163] hover-slide-up">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-40 md:h-48 relative">
                  <Image
                    src="/images/wisdom-circle.png"
                    alt="Senior sharing wisdom with younger community members"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={false}
                  />
                </div>
                <div className="md:w-2/3 p-4 md:p-6">
                  <Quote className="h-6 w-6 md:h-8 md:w-8 text-[#D6B585] mb-3 md:mb-4" />
                  <blockquote className="text-[#FEFFFF] text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                    "I thought my experiences didn't matter anymore. But in our community circle, I discovered that my
                    stories help others navigate their own challenges. We're not so different after all."
                  </blockquote>
                  <cite className="text-[#D6B585] font-medium text-sm md:text-base">— Margaret Chen, Community Circle Participant</cite>
                </div>
              </div>
            </Card>

            <Card className="border-[#1C3163] shadow-lg overflow-hidden card-slide-right card-hover bg-[#1C3163] hover-slide-up">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-40 md:h-48 relative">
                  <Image
                    src="/images/community-gathering.png"
                    alt="Intergenerational community gathering"
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={false}
                  />
                </div>
                <div className="md:w-2/3 p-4 md:p-6">
                  <Quote className="h-6 w-6 md:h-8 md:w-8 text-[#D6B585] mb-3 md:mb-4" />
                  <blockquote className="text-[#FEFFFF] text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                    "Learning from Mrs. Rodriguez about her journey from Mexico opened my eyes to resilience I never
                    knew existed. Now I volunteer to help others share their stories and build stronger connections."
                  </blockquote>
                  <cite className="text-[#D6B585] font-medium text-sm md:text-base">— Alex Thompson, Community Volunteer</cite>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Programs */}
      <section className="py-12 md:py-20 bg-[#FEFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3163] mb-4 slide-in-top">Our Core Programs</h2>
            <p className="text-lg md:text-xl text-[#00071B] max-w-3xl mx-auto px-4 md:px-0 slide-in-top">
              Discover how we're strengthening communities through innovative programs that create spaces of refuge and renewal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 stagger-container">
            <Card className="border-[#1C3163] hover:shadow-lg transition-shadow stagger-item card-hover bg-[#1C3163] hover-slide-up card-slide-left">
              <CardHeader className="px-4 md:px-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D6B585]/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-[#D6B585]" />
                </div>
                <CardTitle className="text-[#FEFFFF] text-lg md:text-xl">Community Circles</CardTitle>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <CardDescription className="text-[#FEFFFF] text-sm md:text-base">
                  Monthly gatherings where individuals share life experiences and support one another.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-[#1C3163] hover:shadow-lg transition-shadow stagger-item card-hover bg-[#1C3163] hover-slide-up card-slide-top">
              <CardHeader className="px-4 md:px-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FEFFFF]/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-[#FEFFFF]" />
                </div>
                <CardTitle className="text-[#FEFFFF] text-lg md:text-xl">Support Networks</CardTitle>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <CardDescription className="text-[#FEFFFF] text-sm md:text-base">
                  Connecting individuals with volunteers for companionship, errands, and community support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-[#1C3163] hover:shadow-lg transition-shadow stagger-item card-hover bg-[#1C3163] hover-slide-up card-slide-right">
              <CardHeader className="px-4 md:px-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D6B585]/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <Lightbulb className="h-5 w-5 md:h-6 md:w-6 text-[#D6B585]" />
                </div>
                <CardTitle className="text-[#FEFFFF] text-lg md:text-xl">Skills Exchange</CardTitle>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <CardDescription className="text-[#FEFFFF] text-sm md:text-base">
                  Pairing individuals' expertise and skills for mutual learning and growth.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-[#1C3163] hover:shadow-lg transition-shadow stagger-item card-hover bg-[#1C3163] hover-slide-up card-slide-top">
              <CardHeader className="px-4 md:px-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FEFFFF]/20 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <Calendar className="h-5 w-5 md:h-6 md:w-6 text-[#FEFFFF]" />
                </div>
                <CardTitle className="text-[#FEFFFF] text-lg md:text-xl">Community Events</CardTitle>
              </CardHeader>
              <CardContent className="px-4 md:px-6">
                <CardDescription className="text-[#FEFFFF] text-sm md:text-base">
                  Regular festivals, workshops, and celebrations that bring communities together.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-12 md:py-20 bg-[#00071B] relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#FEFFFF] mb-6 slide-in-top">Ready to Make a Difference?</h2>
          <p className="text-lg md:text-xl text-[#D6B585] mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4 md:px-0 slide-in-top">
            Join us in creating stronger communities where every individual has a voice and every story matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-bottom">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-[#1C3163] text-[#FEFFFF] hover:bg-[#1C3163]/90 shadow-xl text-lg px-6 py-4 font-semibold btn-hover hover-glow"
            >
              <Link href="/contribute">Donate Today</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[#FEFFFF] text-[#FEFFFF] hover:bg-[#D6B585] hover:text-[#00071B] bg-white/10 backdrop-blur-sm shadow-xl text-lg px-6 py-4 font-semibold btn-hover hover-glow"
            >
              <Link href="/communities">Find Your Community</Link>
            </Button>
          </div>
        </div>
        
        {/* Aesthetic Separator Line */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-px bg-gradient-to-r from-transparent via-[#D6B585]/30 to-transparent"></div>
          </div>
        </div>
      </section>
      </div>
    </AnimationWrapper>
  )
}
