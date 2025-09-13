"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Users, Calendar, Mail } from "lucide-react"
import communitiesContent from "../../../content/communities.json"

export default function CommunitiesPage() {
  const [regionFilter, setRegionFilter] = useState("All")
  const [typeFilter, setTypeFilter] = useState("All")
  const [selectedCommunity, setSelectedCommunity] = useState<any>(null)

  const filteredCommunities = communitiesContent.communities.filter((community) => {
    const regionMatch = regionFilter === "All" || community.region === regionFilter
    const typeMatch = typeFilter === "All" || community.type === typeFilter
    return regionMatch && typeMatch
  })

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
              {communitiesContent.hero.title}
            </h1>
            <p className="text-lg text-[var(--ink-soft)] leading-relaxed sm:text-xl">
              {communitiesContent.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-[var(--card)] border-b border-[var(--sand-200)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="space-y-2">
                <Label htmlFor="region-filter">Region</Label>
                <Select value={regionFilter} onValueChange={setRegionFilter}>
                  <SelectTrigger id="region-filter" className="w-[180px] focus-ring">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {communitiesContent.regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="type-filter">Type</Label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger id="type-filter" className="w-[180px] focus-ring">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {communitiesContent.types.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="text-sm text-[var(--ink-soft)]">{filteredCommunities.length} communities found</div>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCommunities.map((community, index) => (
              <motion.div
                key={community.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-[var(--sand-200)] hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-[var(--oasis-100)] text-[var(--oasis-800)]">
                        {community.type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {community.region}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-[var(--ink)]">{community.title}</CardTitle>
                    <CardDescription className="flex items-center text-[var(--ink-soft)]">
                      <MapPin className="h-4 w-4 mr-1" />
                      {community.city}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-[var(--ink-soft)]">
                        <Calendar className="h-4 w-4 mr-2" />
                        {community.meetingCadence}
                      </div>
                      <div className="flex items-center text-[var(--ink-soft)]">
                        <Users className="h-4 w-4 mr-2" />
                        {community.memberCount} members
                      </div>
                      <div className="flex items-center text-[var(--ink-soft)]">
                        <Mail className="h-4 w-4 mr-2" />
                        {community.leadContact}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {community.tags.map((tag: string) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="w-full bg-[var(--date-500)] hover:opacity-90 text-white focus-ring"
                          onClick={() => setSelectedCommunity(community)}
                        >
                          Request to Join
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>{community.title}</DialogTitle>
                          <DialogDescription>{community.description}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <strong>Next Meeting:</strong>
                              <br />
                              {new Date(community.nextMeeting).toLocaleDateString()}
                            </div>
                            <div>
                              <strong>Members:</strong>
                              <br />
                              {community.memberCount} people
                            </div>
                          </div>
                          <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="join-name">Name</Label>
                                <Input id="join-name" required className="focus-ring" />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="join-email">Email</Label>
                                <Input id="join-email" type="email" required className="focus-ring" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="join-message">Why do you want to join?</Label>
                              <Textarea id="join-message" rows={3} className="focus-ring" />
                            </div>
                            <Button
                              type="submit"
                              className="w-full bg-[var(--oasis-600)] hover:bg-[var(--oasis-800)] text-white focus-ring"
                            >
                              Send Request
                            </Button>
                          </form>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Start a Circle CTA */}
      <section id="start" className="bg-[var(--sand-100)] py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-display text-3xl font-bold text-[var(--ink)] sm:text-4xl mb-6">
              Start Your Own Community Circle
            </h2>
            <p className="text-lg text-[var(--ink-soft)] leading-relaxed mb-8">
              Don't see a community in your area? We'll help you start one. Get training, resources, and ongoing
              support.
            </p>
            <Button size="lg" className="bg-[var(--oasis-600)] hover:bg-[var(--oasis-800)] text-white focus-ring">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
