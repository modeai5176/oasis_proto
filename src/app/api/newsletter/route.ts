import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Basic validation
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Log the newsletter subscription (in production, add to email service)
    console.log("Newsletter subscription:", {
      email,
      timestamp: new Date().toISOString(),
    })

    // In production, you would:
    // 1. Add to email marketing service (Mailchimp, ConvertKit, etc.)
    // 2. Store in database
    // 3. Send welcome email

    return NextResponse.json({ message: "Successfully subscribed to newsletter" }, { status: 200 })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
