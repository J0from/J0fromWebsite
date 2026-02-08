"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Stethoscope,
  Factory,
  Zap,
  MapPin,
  Clock,
  Shield,
  ChevronRight,
  Users,
  CheckCircle2,
  Building2,
  Cog,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Certified healthcare professionals for hospitals, clinics, and field medical operations. From travel nurses to lab technicians, we place qualified staff where they're needed most.",
    image: "/images/hire-healthcare.jpg",
    icon: Stethoscope,
    roles: [
      "Travel Nurses",
      "Medical Technologists",
      "Radiology Techs",
      "Respiratory Therapists",
      "Lab Technicians",
      "Clinical Specialists",
    ],
    stat: "500+",
    statLabel: "Healthcare Professionals",
    color: "from-blue-600 to-blue-500",
  },
  {
    id: "production",
    title: "Manufacturing & Production",
    description:
      "Experienced production operators and manufacturing specialists for high-output, compliance-driven environments. Quality-focused workers for your production lines.",
    image: "/images/hire-production.jpg",
    icon: Factory,
    roles: [
      "Production Supervisors",
      "CNC Operators",
      "Quality Inspectors",
      "Assembly Technicians",
      "Process Engineers",
      "Maintenance Techs",
    ],
    stat: "350+",
    statLabel: "Production Workers",
    color: "from-slate-700 to-slate-600",
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    description:
      "Certified field workers for energy infrastructure, utilities, and large-scale deployment projects. Safety-first professionals for critical operations.",
    image: "/images/hire-energy.jpg",
    icon: Zap,
    roles: [
      "Lineworkers",
      "Solar Technicians",
      "Wind Turbine Techs",
      "Pipeline Engineers",
      "Safety Officers",
      "Field Coordinators",
    ],
    stat: "150+",
    statLabel: "Field Operators",
    color: "from-amber-600 to-amber-500",
  },
]

const benefits = [
  {
    icon: Clock,
    title: "48-Hour Deployment",
    description:
      "Workers onboarded and ready within 48 hours of assignment confirmation.",
  },
  {
    icon: Shield,
    title: "Compliance Verified",
    description:
      "All personnel pre-screened for certifications, background checks, and regulatory requirements.",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description:
      "Operational reach across all 50 states with local field teams and regional coordination.",
  },
  {
    icon: Cog,
    title: "Augmented by Jo",
    description:
      "Our AI platform handles scheduling, compliance tracking, and workforce optimization.",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Tell us about your workforce needs, timelines, and compliance requirements.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We build a staffing plan tailored to your industry, with the right mix of skills and certifications.",
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "Workers are mobilized to your site, credentialed and ready to contribute from day one.",
  },
  {
    step: "04",
    title: "Monitor",
    description:
      "Real-time performance tracking and optimization through our platform ensures quality.",
  },
]

export function HirePageClient() {
  const [activeIndustry, setActiveIndustry] = useState("healthcare")
  const activeData = industries.find((i) => i.id === activeIndustry) || industries[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex justify-between items-center py-4 sm:py-6 px-6 md:px-12 lg:px-24 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50">
        <div className="flex items-center">
          <Link href="/" className="text-xl sm:text-2xl md:text-3xl">
            <Logo width={24} height={24} />
          </Link>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="https://app.jofrom.io/auth">
            <Button
              variant="ghost"
              className="text-slate-900 hover:text-slate-700 text-sm sm:text-base px-3 sm:px-4"
            >
              Login
            </Button>
          </Link>
          <Link href="/company/contact">
            <Button
              variant="gradient"
              className="text-sm sm:text-base px-3 sm:px-6"
            >
              Request Workers
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hire-hero.jpg"
            alt="Workers on a modern facility floor"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-24 sm:py-32 md:py-40">
          <p className="text-sm sm:text-base font-semibold text-blue-400 uppercase tracking-wider mb-4">
            Staffing for Regulated Industries
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight text-balance">
            The workforce your
            <br />
            operation needs.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10 text-pretty">
            We place skilled workers in healthcare, manufacturing, and energy --
            highly regulated, thin-margin industries where the jobs are
            essential.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/company/contact">
              <Button
                variant="gradient"
                size="lg"
                className="text-base px-8 py-6 font-semibold"
              >
                Request Workers
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/solutions/consulting">
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8 py-6 font-semibold border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
              >
                Learn About Our Process
              </Button>
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-white/20">
            {[
              { value: "1,200+", label: "Active Workers" },
              { value: "48hr", label: "Average Deployment" },
              { value: "50", label: "States Covered" },
              { value: "99.2%", label: "Compliance Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 sm:py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Our Industries
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight text-balance">
            Specialized staffing where it matters.
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl text-pretty">
            We focus on three essential industries where compliance is
            non-negotiable and every role is critical.
          </p>

          {/* Industry Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {industries.map((ind) => {
              const Icon = ind.icon
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(ind.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all ${
                    activeIndustry === ind.id
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  <Icon size={16} />
                  {ind.title}
                </button>
              )
            })}
          </div>

          {/* Active Industry Detail */}
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="relative aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden">
              <Image
                src={activeData.image}
                alt={activeData.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="text-3xl font-bold text-white">
                  {activeData.stat}
                </div>
                <div className="text-sm text-slate-300">
                  {activeData.statLabel}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between bg-white rounded-2xl p-8 border border-slate-200">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {activeData.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {activeData.description}
                </p>

                <div className="mb-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                    Roles We Staff
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeData.roles.map((role) => (
                      <div
                        key={role}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-blue-600 flex-shrink-0"
                        />
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/company/contact" className="w-full">
                <Button
                  variant="gradient"
                  className="w-full py-6 text-base font-semibold"
                >
                  Request {activeData.title} Workers
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-24 bg-white px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight text-balance">
              From request to deployment.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className="relative p-6 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="text-5xl font-bold text-slate-200 mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                    <ChevronRight size={20} className="text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Why Jo from
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight text-balance">
              Built for regulated industries.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="flex gap-5 p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve Grid */}
      <section className="py-20 sm:py-24 bg-slate-900 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
              Sub-Sectors
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
              Deep expertise across sub-industries.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Stethoscope, label: "Hospitals" },
              { icon: Building2, label: "Clinics" },
              { icon: Users, label: "Home Health" },
              { icon: Shield, label: "Pharma" },
              { icon: Factory, label: "Automotive" },
              { icon: Cog, label: "Food Processing" },
              { icon: Factory, label: "Aerospace" },
              { icon: Factory, label: "Plastics" },
              { icon: Zap, label: "Solar" },
              { icon: Zap, label: "Wind" },
              { icon: Zap, label: "Oil & Gas" },
              { icon: Zap, label: "Utilities" },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-colors"
                >
                  <Icon size={18} className="text-blue-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-300">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight text-balance">
            Ready to staff your operation?
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto leading-relaxed text-pretty">
            Tell us what you need and we will match you with pre-vetted workers
            ready to deploy within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/company/contact">
              <Button
                variant="gradient"
                size="lg"
                className="text-base px-10 py-6 font-semibold"
              >
                Request Workers
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
            <Link href="/solutions/consulting">
              <Button
                variant="outline"
                size="lg"
                className="text-base px-10 py-6 font-semibold"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
