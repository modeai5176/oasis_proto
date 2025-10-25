"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { AnimationWrapper } from "@/app/components/animation-wrapper";
import { SiteBreadcrumb } from "@/components/breadcrumb";
import { breadcrumbConfigs } from "@/components/breadcrumb";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    agreeToCommunications: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      agreeToCommunications: checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <AnimationWrapper>
      <div className="min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="bg-[#00071B] border-b border-[#2D8C7E] shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <SiteBreadcrumb items={breadcrumbConfigs.contact} />
          </div>
        </div>
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
              className="object-cover w-full h-full transition-opacity duration-1000 ease-in-out"
              poster="/images/video-poster.jpg"
              style={{ objectFit: "cover" }}
              onEnded={(e) => {
                e.currentTarget.style.opacity = "0.8";
                setTimeout(() => {
                  e.currentTarget.currentTime = 0;
                  e.currentTarget.play();
                  e.currentTarget.style.opacity = "1";
                }, 100);
              }}
            >
              <source src="/desert.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#00071B]/40 to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Site Identity - MessageCircle Symbol */}
              <div className="mb-8 slide-in-top">
                <div className="w-24 h-24 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <MessageCircle className="h-12 w-12 text-[#1C3163]" />
                </div>
              </div>

              {/* Core Message */}
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg slide-in-top">
                Get in <span className="text-[#D6B585]">Touch</span>
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-md slide-in-top">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact-form" className="py-20 bg-[#FEFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">
                Send us a Message
              </h2>
              <p className="text-xl text-[#00071B] max-w-3xl mx-auto slide-in-top">
                We'd love to hear from you. Fill out the form below and we'll
                get back to you as soon as possible.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="hover-slide-up bg-[#FEFFFF] shadow-xl border-0">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="slide-in-left">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-[#1C3163] mb-2"
                        >
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="border-[#D6B585]/30 focus:border-[#1C3163] focus:ring-[#1C3163]/20"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="slide-in-right">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-[#1C3163] mb-2"
                        >
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="border-[#D6B585]/30 focus:border-[#1C3163] focus:ring-[#1C3163]/20"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    {/* Phone and Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="slide-in-left">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-[#1C3163] mb-2"
                        >
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="border-[#D6B585]/30 focus:border-[#1C3163] focus:ring-[#1C3163]/20"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="slide-in-right">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#1C3163] mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="border-[#D6B585]/30 focus:border-[#1C3163] focus:ring-[#1C3163]/20"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="slide-in-top">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#1C3163] mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-[#D6B585]/30 focus:border-[#1C3163] focus:ring-[#1C3163]/20 min-h-[120px]"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    {/* Agreement Checkbox */}
                    <div className="flex items-start gap-3 slide-in-bottom">
                      <Checkbox
                        id="agreeToCommunications"
                        checked={formData.agreeToCommunications}
                        onCheckedChange={handleCheckboxChange}
                        className="mt-1"
                      />
                      <label
                        htmlFor="agreeToCommunications"
                        className="text-sm text-[#00071B] leading-relaxed"
                      >
                        I agree to receive communications from Oasis & Mirage
                        regarding my inquiry and future updates.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="slide-in-bottom">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full !bg-[#1C3163] hover:!bg-[#1C3163] !text-[#FEFFFF] hover:!text-[#FEFFFF] shadow-xl hover:shadow-2xl transition-all btn-hover hover-glow font-semibold focus:ring-4 focus:ring-[#1C3163]/30 hover:scale-105"
                        style={{ backgroundColor: "#1C3163", color: "#FEFFFF" }}
                      >
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section id="contact-info" className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">
                Contact Information
              </h2>
              <p className="text-xl text-[#00071B] max-w-3xl mx-auto slide-in-top">
                Get in touch with us through any of these channels
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Phone */}
              <Card className="text-center hover-slide-up card-slide-left group hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-[#D6B585] transition-all duration-500">
                    <Phone className="h-8 w-8 text-[#FEFFFF] group-hover:text-[#00071B] group-hover:animate-pulse transition-all duration-300" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl group-hover:text-[#D6B585] transition-colors duration-300">
                    Phone
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] font-medium text-lg mb-2 group-hover:text-[#1C3163] transition-colors duration-300">
                    +91 **** ***5
                  </p>
                  <p className="text-sm text-[#6B7280] group-hover:text-[#00071B] transition-colors duration-300">
                    Available 24/7 for urgent inquiries
                  </p>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="text-center hover-slide-up card-slide-top group hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-[#1C3163] transition-all duration-500">
                    <Mail className="h-8 w-8 text-[#00071B] group-hover:text-[#FEFFFF] group-hover:animate-bounce transition-all duration-300" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl group-hover:text-[#D6B585] transition-colors duration-300">
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] font-medium text-sm mb-2 break-all group-hover:text-[#1C3163] transition-colors duration-300">
                    support@oasisandmirage.com
                  </p>
                  <p className="text-sm text-[#6B7280] group-hover:text-[#00071B] transition-colors duration-300">
                    We respond within 2 hours
                  </p>
                </CardContent>
              </Card>

              {/* Office Location */}
              <Card className="text-center hover-slide-up card-slide-top group hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#1C3163] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-[#D6B585] transition-all duration-500">
                    <MapPin className="h-8 w-8 text-[#FEFFFF] group-hover:text-[#00071B] group-hover:animate-pulse transition-all duration-300" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl group-hover:text-[#D6B585] transition-colors duration-300">
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] font-medium text-sm mb-2 group-hover:text-[#1C3163] transition-colors duration-300">
                    Address will be updated soon
                  </p>
                  <p className="text-sm text-[#6B7280] group-hover:text-[#00071B] transition-colors duration-300">
                    Serving the entire world
                  </p>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="text-center hover-slide-up card-slide-right group hover:shadow-2xl hover:scale-105 transition-all duration-500">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-[#1C3163] transition-all duration-500">
                    <Clock className="h-8 w-8 text-[#00071B] group-hover:text-[#FEFFFF] group-hover:animate-bounce transition-all duration-300" />
                  </div>
                  <CardTitle className="text-[#1C3163] text-xl group-hover:text-[#D6B585] transition-colors duration-300">
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#00071B] font-medium text-sm mb-1 group-hover:text-[#1C3163] transition-colors duration-300">
                    Mon-Sat: 9:00 AM - 7:00 PM
                  </p>
                  <p className="text-[#00071B] font-medium text-sm mb-2 group-hover:text-[#1C3163] transition-colors duration-300">
                    Sunday: By appointment
                  </p>
                  <p className="text-sm text-[#6B7280] group-hover:text-[#00071B] transition-colors duration-300">
                    Flexible scheduling available
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Actions Section */}
        <section className="py-20 bg-[#00071B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-[#FEFFFF] mb-6 slide-in-top">
                Quick Actions
              </h2>
              <p className="text-xl text-[#D6B585] max-w-3xl mx-auto slide-in-top">
                Connect with us instantly through these channels
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <Card className="bg-[#1C3163] border-[#D6B585] hover-slide-up card-slide-left group hover:shadow-2xl hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-[#FEFFFF] transition-all duration-500">
                      <Phone className="h-8 w-8 text-[#00071B] group-hover:text-[#1C3163] group-hover:animate-pulse transition-all duration-300" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#FEFFFF] mb-4 group-hover:text-[#D6B585] transition-colors duration-300">
                      Call Us Now
                    </h3>
                    <p className="text-[#FEFFFF] mb-6 group-hover:text-[#FEFFFF] transition-colors duration-300">
                      We’re here to help — reach out anytime.
                    </p>
                    <Button
                      size="lg"
                      className="bg-black hover:bg-black text-[#FEFFFF] hover:text-[#FEFFFF] shadow-xl hover:shadow-2xl transition-all btn-hover hover-glow font-semibold focus:ring-4 focus:ring-black/30 hover:scale-105"
                    >
                      <Phone className="h-5 w-5 mr-2" />
                      Call Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-[#1C3163] border-[#D6B585] hover-slide-up card-slide-right group hover:shadow-2xl hover:scale-105 transition-all duration-500">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[#D6B585] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-[#FEFFFF] transition-all duration-500">
                      <MessageCircle className="h-8 w-8 text-[#00071B] group-hover:text-[#1C3163] group-hover:animate-bounce transition-all duration-300" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#FEFFFF] mb-4 group-hover:text-[#D6B585] transition-colors duration-300">
                      WhatsApp Chat
                    </h3>
                    <p className="text-[#FEFFFF] mb-6 group-hover:text-[#FEFFFF] transition-colors duration-300">
                      Send us a message for quick responses
                    </p>
                    <Button
                      size="lg"
                      className="bg-[#25D366] hover:bg-[#128C7E] text-[#FEFFFF] shadow-xl hover:shadow-2xl transition-all btn-hover hover-glow font-semibold focus:ring-4 focus:ring-[#25D366]/30 hover:scale-105"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-[#FEFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-4xl font-bold text-[#1C3163] mb-6 slide-in-top">
              Ready to Connect?
            </h2>
            <p className="text-xl text-[#00071B] mb-8 max-w-3xl mx-auto slide-in-top">
              We're here to help you on your journey. Reach out to us and let's
              start the conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-bottom">
              <Button
                size="lg"
                className="bg-[#1C3163] hover:bg-[#1C3163]/90 text-[#FEFFFF] hover:text-[#FEFFFF] shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-4 btn-hover hover-glow font-semibold focus:ring-4 focus:ring-[#1C3163]/30 focus:outline-none hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Send a Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#1C3163] text-[#1C3163] hover:bg-[#1C3163] hover:text-[#FEFFFF] shadow-xl hover:shadow-2xl transition-all text-lg px-8 py-4 font-semibold hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("contact-info")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Contact Info
              </Button>
            </div>
          </div>
        </section>
      </div>
    </AnimationWrapper>
  );
}
