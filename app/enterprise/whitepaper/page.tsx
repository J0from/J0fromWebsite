"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Download, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { sendWhitepaperLeadEmail } from "@/app/actions/email"

export default function WhitepaperLeadGenPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    company: "",
    industry: "",
    employeeCount: "",
    phone: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendWhitepaperLeadEmail(formData)

      if (result.success) {
        setIsSubmitted(true)
        setIsSubmitting(false)

        // Auto-download whitepaper after 2 seconds
        setTimeout(() => {
          // In production, this would be a real PDF file
          window.open("/whitepapers/compliance-guide.pdf", "_blank")
        }, 2000)
      } else {
        alert("There was an error submitting your request. Please try again or contact hello@jofrom.io")
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("[v0] Whitepaper form error:", error)
      alert("There was an error submitting your request. Please try again or contact hello@jofrom.io")
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-6">
        <Card className="max-w-2xl w-full text-center">
          <CardHeader className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <CardTitle className="text-3xl">Thank You!</CardTitle>
            <CardDescription className="text-lg">
              Your whitepaper download will begin shortly. We've also sent a copy to your email.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">What's Next?</h3>
              <ul className="text-left space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Our enterprise team will reach out within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Check your email for the whitepaper and additional resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Schedule a personalized demo to see Jo in action</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
              <Button asChild variant="gradient">
                <Link href="https://calendly.com/myj0/30min" target="_blank">
                  Schedule Demo
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/enterprise">Back to Enterprise</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-7xl mx-auto border-b border-slate-100 bg-white/80 backdrop-blur">
        <Link href="/" className="text-xl sm:text-2xl font-bold">
          <Logo size="md" />
        </Link>
        <Link href="/enterprise">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Download className="w-4 h-4" />
            Enterprise Resource
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">Download Whitepaper</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get our comprehensive guide on how Jo helps enterprises maintain compliance while scaling operations across
            highly regulated industries.
          </p>
        </div>

        <Card className="shadow-xl border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Get Instant Access</CardTitle>
            <CardDescription>Fill out the form below to download your free whitepaper</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: First Name, Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    placeholder="Doe"
                  />
                </div>
              </div>

              {/* Row 2: Business Email, Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Business Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john.doe@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              {/* Row 3: Job Title, Company Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title *</Label>
                  <Input
                    id="title"
                    required
                    value={formData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    placeholder="VP of Operations"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              {/* Row 4: Industry, Company Size */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry *</Label>
                  <Select required value={formData.industry} onValueChange={(value) => handleChange("industry", value)}>
                    <SelectTrigger id="industry" className="w-full">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="energy">Energy & Utilities</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="food">Food & Beverage</SelectItem>
                      <SelectItem value="finance">Financial Services</SelectItem>
                      <SelectItem value="pharma">Pharmaceuticals</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="employeeCount">Company Size (FTE) *</Label>
                  <Select
                    required
                    value={formData.employeeCount}
                    onValueChange={(value) => handleChange("employeeCount", value)}
                  >
                    <SelectTrigger id="employeeCount" className="w-full">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="501-1000">501-1,000 employees</SelectItem>
                      <SelectItem value="1001-5000">1,001-5,000 employees</SelectItem>
                      <SelectItem value="5000+">5,000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm text-slate-600">
                By submitting this form, you agree to receive marketing communications from Jo. You can unsubscribe at
                any time. View our{" "}
                <Link href="/privacy" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
                .
              </div>

              <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Download Whitepaper"}
                {!isSubmitting && <Download className="w-5 h-5 ml-2" />}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500 mb-4">Trusted by enterprises in highly regulated industries</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="text-lg font-semibold text-slate-600">Healthcare</div>
            <div className="text-lg font-semibold text-slate-600">Energy</div>
            <div className="text-lg font-semibold text-slate-600">Manufacturing</div>
            <div className="text-lg font-semibold text-slate-600">Food Safety</div>
          </div>
        </div>
      </div>
    </div>
  )
}
