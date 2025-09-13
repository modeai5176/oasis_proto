"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

interface ContactDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      reason: formData.get("reason"),
      message: formData.get("message"),
      honeypot: formData.get("honeypot"), // Bot detection
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        })
        onOpenChange(false)
        ;(e.target as HTMLFormElement).reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field for bot detection */}
          <input type="text" name="honeypot" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" required className="focus-ring" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required className="focus-ring" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reason">Reason for contact</Label>
            <Select name="reason">
              <SelectTrigger className="focus-ring">
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="volunteer">Volunteer</SelectItem>
                <SelectItem value="start-circle">Start a Circle</SelectItem>
                <SelectItem value="partnerships">Partnerships</SelectItem>
                <SelectItem value="media">Media</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" name="message" required rows={4} className="focus-ring" />
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="focus-ring">
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-[var(--oasis-600)] hover:bg-[var(--oasis-800)] text-white focus-ring"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
