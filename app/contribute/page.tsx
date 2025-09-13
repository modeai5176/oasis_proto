"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, CreditCard, Smartphone, Globe, Users, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimationWrapper } from "@/app/components/animation-wrapper"

export default function ContributePage() {
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
            Fuel a Circle Today
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed drop-shadow-md slide-in-top">
            Your support helps us create meaningful connections and build stronger communities through spaces of refuge and renewal
          </p>
          <Button asChild size="lg" className="bg-[#1C3163] hover:bg-[#D6B585] text-[#FEFFFF] shadow-xl text-lg px-6 py-4">
            <Link href="#donate">
              Donate Now <Heart className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-[#FEFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">Your Impact</h2>
            <p className="text-xl text-[#00071B] max-w-3xl mx-auto slide-in-top">
              See how your contribution directly supports community connection and building stronger communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-[#1C3163] text-center bg-[#1C3163] hover-slide-up">
              <CardHeader>
                <div className="w-16 h-16 bg-[#D6B585]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#D6B585]" />
                </div>
                <CardTitle className="text-[#FEFFFF]">$25</CardTitle>
                <CardDescription className="text-[#FEFFFF]">
                  Supports one individual's participation in monthly community circles
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#1C3163] text-center bg-[#1C3163] hover-slide-up">
              <CardHeader>
                <div className="w-16 h-16 bg-[#FEFFFF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-[#FEFFFF]" />
                </div>
                <CardTitle className="text-[#FEFFFF]">$75</CardTitle>
                <CardDescription className="text-[#FEFFFF]">
                  Funds a complete community workshop for 20 participants
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-[#1C3163] text-center bg-[#1C3163] hover-slide-up">
              <CardHeader>
                <div className="w-16 h-16 bg-[#D6B585]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#D6B585]" />
                </div>
                <CardTitle className="text-[#FEFFFF]">$150</CardTitle>
                <CardDescription className="text-[#FEFFFF]">
                  Launches a new community circle with training and resources for lasting impact
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Options */}
      <section id="donate" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Choose Your Way to Give</h2>
            <p className="text-xl text-gray-600">Multiple convenient options to support our mission</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* PayPal */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow text-center flex flex-col h-full">
              <CardHeader className="text-center flex-shrink-0">
                <div className="w-16 h-16 bg-[#1C3163]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-[#1C3163]" />
                </div>
                <CardTitle className="text-gray-900 text-xl mb-2">PayPal</CardTitle>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  Secure online donations with credit card or PayPal account
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow space-y-4 text-center">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <Button variant="outline" className="border-[#1C3163] text-[#1C3163] hover:bg-[#1C3163]/10 bg-transparent py-2">
                    $25
                  </Button>
                  <Button variant="outline" className="border-[#1C3163] text-[#1C3163] hover:bg-[#1C3163]/10 bg-transparent py-2">
                    $50
                  </Button>
                  <Button variant="outline" className="border-[#1C3163] text-[#1C3163] hover:bg-[#1C3163]/10 bg-transparent py-2">
                    $75
                  </Button>
                  <Button variant="outline" className="border-[#1C3163] text-[#1C3163] hover:bg-[#1C3163]/10 bg-transparent py-2">
                    $100
                  </Button>
                </div>
                <div className="mt-auto space-y-3">
                  <Button className="w-full bg-[#1C3163] hover:bg-[#1C3163]/90 text-white py-3">Donate with PayPal</Button>
                  <p className="text-xs text-gray-500">Secure payment processing • Tax-deductible</p>
                </div>
              </CardContent>
            </Card>

            {/* M-Pesa */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow text-center flex flex-col h-full">
              <CardHeader className="text-center flex-shrink-0">
                <div className="w-16 h-16 bg-[#1C3163]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-[#1C3163]" />
                </div>
                <CardTitle className="text-gray-900 text-xl mb-2">M-Pesa</CardTitle>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  Mobile money transfer for supporters in Kenya and East Africa
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow space-y-4 text-center">
                <div className="bg-[#1C3163]/10 p-4 rounded-lg text-center mb-4">
                  <p className="text-sm text-[#1C3163] font-medium mb-2">Send to:</p>
                  <p className="text-lg font-bold text-[#1C3163]">Paybill: 247247</p>
                  <p className="text-sm text-[#1C3163]">Account: OASIS2024</p>
                </div>
                <div className="mt-auto space-y-3">
                  <Button className="w-full bg-[#1C3163] hover:bg-[#1C3163]/90 text-white py-3">Send via M-Pesa</Button>
                  <p className="text-xs text-gray-500">
                    Available in Kenya, Tanzania, Uganda • Instant transfer
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* GoFundMe */}
            <Card className="border-gray-200 hover:shadow-lg transition-shadow text-center flex flex-col h-full">
              <CardHeader className="text-center flex-shrink-0">
                <div className="w-16 h-16 bg-[#D6B585]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-[#D6B585]" />
                </div>
                <CardTitle className="text-gray-900 text-xl mb-2">GoFundMe</CardTitle>
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  Join our community fundraising campaign and share with friends
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow space-y-4 text-center">
                <div className="bg-[#D6B585]/10 p-4 rounded-lg text-center mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-[#D6B585]">Goal Progress</span>
                    <span className="text-sm font-medium text-[#D6B585]">68%</span>
                  </div>
                  <div className="w-full bg-[#D6B585]/20 rounded-full h-2">
                    <div className="bg-[#D6B585] h-2 rounded-full" style={{ width: "68%" }}></div>
                  </div>
                  <p className="text-xs text-[#D6B585] mt-2">$34,000 raised of $50,000 goal</p>
                </div>
                <div className="mt-auto space-y-3">
                  <Button className="w-full bg-[#D6B585] hover:bg-[#D6B585]/90 text-[#00071B] py-3">Donate on GoFundMe</Button>
                  <p className="text-xs text-gray-500">Social sharing • Community updates • Global reach</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Other Ways to Help</h2>
            <p className="text-xl text-gray-600">
              Your time and skills are just as valuable as financial contributions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-[#1C3163] text-center bg-[#1C3163] hover-slide-up">
              <CardHeader>
                <div className="w-12 h-12 bg-[#D6B585]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-[#D6B585]" />
                </div>
                <CardTitle className="text-[#FEFFFF]">Volunteer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#FEFFFF] mb-4">
                  Help facilitate community circles, assist with events, or provide transportation for community members.
                </CardDescription>
                <Button variant="outline" className="border-[#D6B585] text-[#D6B585] hover:bg-[#D6B585]/10 bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#1C3163] text-center bg-[#1C3163] hover-slide-up">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FEFFFF]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-[#FEFFFF]" />
                </div>
                <CardTitle className="text-[#FEFFFF]">Spread the Word</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#FEFFFF] mb-4">
                  Share our mission on social media, tell friends and family, or write about us in your community.
                </CardDescription>
                <Button
                  variant="outline"
                  className="border-[#FEFFFF] text-[#FEFFFF] hover:bg-[#FEFFFF]/10 bg-transparent"
                >
                  Share Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#1C3163] text-center bg-[#1C3163] hover-slide-up">
              <CardHeader>
                <div className="w-12 h-12 bg-[#D6B585]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-[#D6B585]" />
                </div>
                <CardTitle className="text-[#FEFFFF]">Corporate Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#FEFFFF] mb-4">
                  Partner with us for employee volunteer programs or sponsor community events.
                </CardDescription>
                <Button variant="outline" className="border-[#D6B585] text-[#D6B585] hover:bg-[#D6B585]/10 bg-transparent">
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[#1C3163] text-center bg-[#1C3163] hover-slide-up">
              <CardHeader>
                <div className="w-12 h-12 bg-[#FEFFFF]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-[#FEFFFF]" />
                </div>
                <CardTitle className="text-[#FEFFFF]">Professional Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#FEFFFF] mb-4">
                  Donate your expertise in marketing, design, legal, or other professional services.
                </CardDescription>
                <Button
                  variant="outline"
                  className="border-[#FEFFFF] text-[#FEFFFF] hover:bg-[#FEFFFF]/10 bg-transparent"
                >
                  Offer Skills
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-20 bg-section-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Financial Transparency</h2>
            <p className="text-xl text-gray-600">
              We believe in complete transparency about how your donations are used
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-[#1C3163] bg-[#1C3163]">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-[#FEFFFF]">How We Use Your Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-[#FEFFFF] mb-4">Program Expenses (75%)</h3>
                    <ul className="space-y-2 text-[#FEFFFF]">
                      <li>• Community facilitator training</li>
                      <li>• Event materials and venues</li>
                      <li>• Transportation assistance for seniors</li>
                      <li>• Technology and communication tools</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#FEFFFF] mb-4">Operations (25%)</h3>
                    <ul className="space-y-2 text-[#FEFFFF]">
                      <li>• Staff salaries and benefits</li>
                      <li>• Office rent and utilities</li>
                      <li>• Insurance and legal compliance</li>
                      <li>• Fundraising and marketing</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-[#D6B585] text-center">
                  <p className="text-sm text-[#D6B585]">
                    <strong>Tax ID:</strong> 12-3456789 •<strong> Charity Navigator Rating:</strong> 4 Stars •
                    <strong> Annual Reports:</strong> Available upon request
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#00071B] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold text-[#FEFFFF] mb-6">Every Contribution Matters</h2>
          <p className="text-xl text-[#D6B585] mb-8 max-w-2xl mx-auto">
            Whether it's $5 or $500, your support helps us create meaningful connections that last a lifetime.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-[#1C3163] text-[#FEFFFF] hover:bg-[#D6B585] hover:text-[#00071B] shadow-xl text-lg px-6 py-4 font-semibold"
          >
            <Link href="#donate">Make Your Donation Today</Link>
          </Button>
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
