"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Smartphone, CreditCard, ExternalLink, PieChart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import contributeContent from "../../../content/contribute.json"

export default function ContributePage() {
  const [mpesaLoading, setMpesaLoading] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const { toast } = useToast()

  const handleMpesaPayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setMpesaLoading(true)

    const formData = new FormData(e.currentTarget)
    const phone = formData.get("phone") as string
    const amount = selectedAmount || Number.parseInt(formData.get("amount") as string)

    try {
      const response = await fetch("/api/payments/mpesa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phone.replace(/\D/g, ""), // Remove non-digits
          amount,
          note: "Oasis & Mirage Donation",
        }),
      })

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "Payment initiated!",
          description: "Please check your phone for the M-Pesa prompt.",
        })
      } else {
        throw new Error(data.error || "Payment failed")
      }
    } catch (error) {
      toast({
        title: "Payment failed",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      })
    } finally {
      setMpesaLoading(false)
    }
  }

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
              {contributeContent.hero.title}
            </h1>
            <p className="text-lg text-[var(--ink-soft)] leading-relaxed sm:text-xl">
              {contributeContent.hero.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Options */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Donation Form */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="mpesa" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="mpesa" className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    M-Pesa
                  </TabsTrigger>
                  <TabsTrigger value="paypal" className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    PayPal
                  </TabsTrigger>
                  <TabsTrigger value="gofundme" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    GoFundMe
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="mpesa" className="space-y-6 mt-8">
                  <Card className="border-[var(--sand-200)]">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Smartphone className="h-5 w-5 text-[var(--oasis-600)]" />
                        M-Pesa Payment
                      </CardTitle>
                      <CardDescription>Pay securely using M-Pesa STK Push or Paybill</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleMpesaPayment} className="space-y-6">
                        {/* Amount Selection */}
                        <div className="space-y-3">
                          <Label>Select Amount (KES)</Label>
                          <div className="grid grid-cols-3 gap-3">
                            {contributeContent.donationTiers.map((tier) => (
                              <Button
                                key={tier.amount}
                                type="button"
                                variant={selectedAmount === tier.amount ? "default" : "outline"}
                                className={`${
                                  selectedAmount === tier.amount
                                    ? "bg-[var(--oasis-600)] text-white"
                                    : "border-[var(--sand-300)] hover:border-[var(--oasis-600)]"
                                } focus-ring`}
                                onClick={() => setSelectedAmount(tier.amount)}
                              >
                                {tier.amount} KES
                              </Button>
                            ))}
                          </div>
                          <div className="flex items-center gap-2">
                            <Label htmlFor="custom-amount">Custom amount:</Label>
                            <Input
                              id="custom-amount"
                              name="amount"
                              type="number"
                              min="1"
                              max="70000"
                              placeholder="Enter amount"
                              className="max-w-[150px] focus-ring"
                              onChange={() => setSelectedAmount(null)}
                            />
                          </div>
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-2">
                          <Label htmlFor="phone">M-Pesa Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="254712345678"
                            required
                            className="focus-ring"
                          />
                          <p className="text-xs text-[var(--ink-soft)]">
                            Enter your phone number in format: 254XXXXXXXXX
                          </p>
                        </div>

                        <Button
                          type="submit"
                          disabled={mpesaLoading}
                          className="w-full bg-[var(--oasis-600)] hover:bg-[var(--oasis-800)] text-white focus-ring"
                        >
                          {mpesaLoading ? "Processing..." : "Pay via STK Push"}
                        </Button>
                      </form>

                      {/* Manual Paybill Instructions */}
                      <div className="mt-6 pt-6 border-t border-[var(--sand-200)]">
                        <h4 className="font-semibold text-[var(--ink)] mb-3">Manual Paybill Instructions</h4>
                        <Accordion type="single" collapsible>
                          <AccordionItem value="paybill">
                            <AccordionTrigger className="text-sm">
                              Pay via Paybill (Alternative method)
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-2 text-sm text-[var(--ink-soft)]">
                                <p>
                                  <strong>Business Number:</strong> {contributeContent.mpesaInstructions.paybill}
                                </p>
                                <p>
                                  <strong>Account Number:</strong> {contributeContent.mpesaInstructions.accountNumber}
                                </p>
                                <div className="mt-3">
                                  <strong>Steps:</strong>
                                  <ol className="list-decimal list-inside space-y-1 mt-1">
                                    {contributeContent.mpesaInstructions.steps.map((step, index) => (
                                      <li key={index}>{step}</li>
                                    ))}
                                  </ol>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="paypal" className="space-y-6 mt-8">
                  <Card className="border-[var(--sand-200)]">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-[var(--date-500)]" />
                        PayPal Donation
                      </CardTitle>
                      <CardDescription>Secure payment with credit card or PayPal account</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Donation Type */}
                      <div className="space-y-3">
                        <Label>Donation Type</Label>
                        <Select defaultValue="one-time">
                          <SelectTrigger className="focus-ring">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="one-time">One-time</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Amount Selection */}
                      <div className="space-y-3">
                        <Label>Select Amount (USD)</Label>
                        <div className="grid grid-cols-3 gap-3">
                          {[10, 25, 50].map((amount) => (
                            <Button
                              key={amount}
                              type="button"
                              variant="outline"
                              className="border-[var(--sand-300)] hover:border-[var(--date-500)] focus-ring bg-transparent"
                            >
                              ${amount}
                            </Button>
                          ))}
                        </div>
                        <Input type="number" placeholder="Custom amount" className="focus-ring" />
                      </div>

                      {/* PayPal Button Placeholder */}
                      <div className="bg-[var(--sand-50)] border-2 border-dashed border-[var(--sand-300)] rounded-lg p-8 text-center">
                        <CreditCard className="h-12 w-12 text-[var(--sand-600)] mx-auto mb-4" />
                        <p className="text-[var(--ink-soft)] mb-4">PayPal Donate Button will be embedded here</p>
                        <p className="text-xs text-[var(--ink-soft)]">
                          Replace this placeholder with actual PayPal button code
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="gofundme" className="space-y-6 mt-8">
                  <Card className="border-[var(--sand-200)]">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <ExternalLink className="h-5 w-5 text-[var(--success)]" />
                        GoFundMe Campaign
                      </CardTitle>
                      <CardDescription>Donate through our GoFundMe campaign page</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {/* GoFundMe Embed Placeholder */}
                      <div className="bg-[var(--sand-50)] border-2 border-dashed border-[var(--sand-300)] rounded-lg p-8 text-center">
                        <ExternalLink className="h-12 w-12 text-[var(--sand-600)] mx-auto mb-4" />
                        <p className="text-[var(--ink-soft)] mb-4">GoFundMe embedded donation form will appear here</p>
                        <p className="text-xs text-[var(--ink-soft)] mb-4">
                          Replace this placeholder with actual GoFundMe embed code
                        </p>
                        <Button
                          variant="outline"
                          className="border-[var(--success)] text-[var(--success)] hover:bg-[var(--success)] hover:text-white focus-ring bg-transparent"
                        >
                          Visit GoFundMe Page
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Donation Tiers */}
              <Card className="border-[var(--oasis-200)] bg-[var(--oasis-50)]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[var(--ink)]">Donation Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contributeContent.donationTiers.map((tier) => (
                    <div key={tier.amount} className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[var(--ink)]">
                          {tier.amount} {tier.currency}
                        </span>
                        <span className="text-xs text-[var(--oasis-800)]">{tier.title}</span>
                      </div>
                      <p className="text-xs text-[var(--ink-soft)]">{tier.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Transparency */}
              <Card className="border-[var(--sand-200)]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-semibold text-[var(--ink)]">
                    <PieChart className="h-5 w-5" />
                    {contributeContent.transparency.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {contributeContent.transparency.breakdown.map((item) => (
                    <div key={item.category} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[var(--ink)]">{item.category}</span>
                        <span className="font-semibold text-[var(--oasis-600)]">{item.percentage}%</span>
                      </div>
                      <div className="w-full bg-[var(--sand-200)] rounded-full h-2">
                        <div
                          className="bg-[var(--oasis-600)] h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Receipts Info */}
              <Card className="border-[var(--sand-200)]">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-[var(--ink)]">Receipts & Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                    All donations receive email receipts. We protect your data and never share personal information with
                    third parties.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
