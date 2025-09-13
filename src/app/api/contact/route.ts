import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, reason, message, honeypot } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Honeypot check (bot detection)
    if (honeypot) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Log the contact form submission (in production, send to email service)
    console.log("Contact form submission:", {
      name,
      email,
      reason,
      message,
      timestamp: new Date().toISOString(),
    })

    // In production, you would:
    // 1. Send email notification to admin
    // 2. Store in database
    // 3. Send confirmation email to user
    // 4. Integrate with CRM

    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
