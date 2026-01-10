"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Shield,
  Users,
  Cog,
  BarChart3,
  GitBranch,
  Lock,
  FileCheck,
  Layers,
  Target,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

function Building2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  )
}

export function MethodologyPageClient() {
  const principles = [
    {
      icon: Layers,
      title: "Structure Precedes Execution",
      description: "Labor cannot be optimized until it is structurally defined.",
    },
    {
      icon: Lock,
      title: "Accountability is Not Transferable",
      description: "Execution can move; ownership does not.",
    },
    {
      icon: Shield,
      title: "Constraints are First-Class Inputs",
      description: "Regulation, safety, audit, and risk define the feasible solution space.",
    },
    {
      icon: FileCheck,
      title: "Explainability is Mandatory",
      description: "Every allocation decision must be traceable and auditable.",
    },
  ]

  const layers = [
    {
      number: "1",
      title: "Organization",
      subtitle: "What the company does",
      description: "Define operating boundaries, scale classification, and constraints",
      icon: Building2,
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "2",
      title: "Strata",
      subtitle: "Three-dimensional labor framework",
      description: "Map authority (vertical), function (horizontal), and scale (breadth/depth)",
      icon: GitBranch,
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "3",
      title: "Role",
      subtitle: "Outcomes to be delivered",
      description: "Define accountability and what must remain human-owned",
      icon: Target,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      number: "4",
      title: "Task",
      subtitle: "How outcomes are achieved",
      description: "Decompose work into execution units and allocate to human or machine",
      icon: Cog,
      color: "from-cyan-500 to-cyan-600",
    },
  ]

  const phases = ["Initiate", "Acquire", "Configure", "Validate", "Process", "Observe", "Adjust", "Complete"]

  const outputs = [
    { icon: BarChart3, text: "End-to-end labor execution map" },
    { icon: Users, text: "Human + machine capacity plan" },
    { icon: Shield, text: "Compliance-safe augmentation roadmap" },
    { icon: FileCheck, text: "Audit-ready evidence trail" },
    { icon: Zap, text: "Cost savings and risk mitigation analysis" },
    { icon: Target, text: "Cross-functional impact analysis" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 sm:p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-foreground flex items-center">
          <span className="md:hidden">Jo from</span>
          <span className="hidden md:inline">J</span>
          <div className="relative mx-1">
            <Image src="/qubit.png" alt="Qubit" width={16} height={16} className="sm:w-5 sm:h-5 brightness-0" />
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 mix-blend-normal opacity-100"
              style={{
                maskImage: `url('/qubit.png')`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
                WebkitMaskImage: `url('/qubit.png')`,
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
              }}
            ></div>
          </div>
        </Link>
        <Link href="/">
          <Button variant="ghost" className="gap-1 sm:gap-2 text-sm sm:text-base px-2 sm:px-4">
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Back
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 blur-3xl"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            Patented Methodology
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            LABOR MAP<sup className="text-2xl">™</sup>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl">
            Precision Labor Engineering for Regulated Operations
          </p>

          <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">
            A systematic framework for allocating work between humans and machines— without breaking compliance,
            control, or accountability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-red-500 hover:bg-red-600 text-white h-12 px-8 text-base font-semibold">
              <Link href="https://calendly.com/myj0/30min" target="_blank" rel="noopener noreferrer">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white/10 h-12 px-8 text-base font-semibold bg-transparent"
            >
              <Link href="/company/about">View Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-slate-900 text-white">The Challenge</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Built for Regulated Industries</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-slate-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Constrained Labor Supply</h3>
                <p className="text-slate-600">Not enough people to do all the work that needs to be done.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">High Cost of Failure</h3>
                <p className="text-slate-600">Mistakes create significant financial, legal, or safety consequences.</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Regulatory Oversight</h3>
                <p className="text-slate-600">Operations must satisfy external compliance requirements and audits.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <CardContent className="p-8 text-center">
              <p className="text-xl font-semibold text-slate-900 mb-2">Labor Map solves this.</p>
              <p className="text-lg text-slate-700">
                It engineers labor systems that deliver reliable outcomes at scale—not simply substitute machines for
                humans.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">Foundation</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Design Principles</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The system is governed by invariants that ensure compliance, accountability, and explainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="border-2 border-slate-200 hover:border-blue-300 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <principle.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{principle.title}</h3>
                      <p className="text-slate-600">{principle.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Four Layers */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white text-slate-900">System Architecture</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Four Ordered Layers</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Labor Map operates through a hierarchical structure where each layer constrains the layer below.
            </p>
          </div>

          <div className="space-y-6">
            {layers.map((layer, index) => (
              <Card key={index} className="border-2 border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-all">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${layer.color} rounded-xl flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white`}
                    >
                      {layer.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">{layer.title}</h3>
                      <p className="text-slate-400 mb-3">{layer.subtitle}</p>
                      <p className="text-slate-300">{layer.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Hierarchy Diagram */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-slate-900 text-white">The Framework</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Hierarchical Structure</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each layer constrains the layer below — ensuring compliance flows from top to bottom
            </p>
          </div>

          {/* Desktop: 2x2 Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Layer 1: Organization */}
            <Card className="border-4 border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <CardContent className="p-8 pt-20">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Organization</h3>
                <p className="text-slate-700 font-semibold mb-3">What the company does</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Operating boundaries</li>
                  <li>• Scale classification</li>
                  <li>• Regulatory constraints</li>
                  <li>• Risk thresholds</li>
                </ul>
                <div className="mt-4 pt-4 border-t-2 border-blue-300">
                  <Badge className="bg-red-600 text-white">NEVER autonomous</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Layer 2: Strata */}
            <Card className="border-4 border-purple-600 bg-gradient-to-br from-purple-50 to-purple-100 relative overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <CardContent className="p-8 pt-20">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Strata</h3>
                <p className="text-slate-700 font-semibold mb-3">3D labor framework</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Vertical: Authority</li>
                  <li>• Horizontal: Function</li>
                  <li>• Scalar: Breadth/Depth</li>
                  <li>• Structural positions</li>
                </ul>
                <div className="mt-4 pt-4 border-t-2 border-purple-300">
                  <Badge className="bg-orange-600 text-white">NEVER autonomous</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Layer 3: Role */}
            <Card className="border-4 border-indigo-600 bg-gradient-to-br from-indigo-50 to-indigo-100 relative overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <CardContent className="p-8 pt-20">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Role</h3>
                <p className="text-slate-700 font-semibold mb-3">Outcomes to deliver</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Outcome ownership</li>
                  <li>• Accountability boundaries</li>
                  <li>• Human requirements</li>
                  <li>• Non-transferable duties</li>
                </ul>
                <div className="mt-4 pt-4 border-t-2 border-indigo-300">
                  <Badge className="bg-yellow-600 text-white">STAYS HUMAN</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Layer 4: Task */}
            <Card className="border-4 border-green-600 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
              <div className="absolute top-4 left-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                4
              </div>
              <CardContent className="p-8 pt-20">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Task</h3>
                <p className="text-slate-700 font-semibold mb-3">How work gets done</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Execution units</li>
                  <li>• 8-phase decomposition</li>
                  <li>• Human/Jo allocation</li>
                  <li>• Hybrid workflows</li>
                </ul>
                <div className="mt-4 pt-4 border-t-2 border-green-300">
                  <Badge className="bg-green-600 text-white">Jo can help HERE</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Mobile: Stacked */}
          <div className="md:hidden space-y-4">
            <Card className="border-4 border-blue-600 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Organization</h3>
                    <p className="text-sm text-slate-700">What the company does</p>
                  </div>
                </div>
                <Badge className="bg-red-600 text-white mb-2">NEVER autonomous</Badge>
                <p className="text-sm text-slate-600">Operating boundaries, scale, constraints</p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
            </div>

            <Card className="border-4 border-purple-600 bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Strata</h3>
                    <p className="text-sm text-slate-700">3D labor framework</p>
                  </div>
                </div>
                <Badge className="bg-orange-600 text-white mb-2">NEVER autonomous</Badge>
                <p className="text-sm text-slate-600">Authority, function, breadth/depth</p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
            </div>

            <Card className="border-4 border-indigo-600 bg-gradient-to-br from-indigo-50 to-indigo-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Role</h3>
                    <p className="text-sm text-slate-700">Outcomes to deliver</p>
                  </div>
                </div>
                <Badge className="bg-yellow-600 text-white mb-2">STAYS HUMAN</Badge>
                <p className="text-sm text-slate-600">Accountability and ownership</p>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <ArrowRight className="w-6 h-6 text-slate-400 rotate-90" />
            </div>

            <Card className="border-4 border-green-600 bg-gradient-to-br from-green-50 to-green-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Task</h3>
                    <p className="text-sm text-slate-700">How work gets done</p>
                  </div>
                </div>
                <Badge className="bg-green-600 text-white mb-2">Jo can help HERE</Badge>
                <p className="text-sm text-slate-600">Execution and allocation</p>
              </CardContent>
            </Card>
          </div>

          {/* Key Insight */}
          <Card className="mt-8 border-2 border-blue-600 bg-gradient-to-r from-blue-600 to-purple-600">
            <CardContent className="p-6 text-center text-white">
              <p className="text-xl font-bold mb-2">The Key to Compliance</p>
              <p className="text-lg">
                Constraints flow downward. Accountability stays at Role. Execution flexibility exists only at Task.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 8-Phase Decomposition */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              Universal Pattern
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">8-Phase Outcome Decomposition</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every outcome follows a universal execution pattern that enables precise task allocation.
            </p>
          </div>

          <Card className="border-2 border-slate-200 p-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {phases.map((phase, index) => (
                  <div key={index} className="relative">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-600 rounded-lg p-4 text-center">
                      <div className="text-sm font-bold text-blue-600 mb-1">{index + 1}</div>
                      <div className="text-base font-semibold text-slate-900">{phase}</div>
                    </div>
                    {index < phases.length - 1 && (
                      <div className="hidden sm:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  H
                </div>
                <h4 className="font-bold text-slate-900 mb-2">HUMAN</h4>
                <p className="text-sm text-slate-600">Requires judgment, dexterity, or regulatory mandate</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  M
                </div>
                <h4 className="font-bold text-slate-900 mb-2">MACHINE</h4>
                <p className="text-sm text-slate-600">Deterministic, high-volume, verifiable</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold">
                  H+M
                </div>
                <h4 className="font-bold text-slate-900 mb-2">HYBRID</h4>
                <p className="text-sm text-slate-600">Shared execution with defined handoff points</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Autonomy-Risk Relationship */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-orange-600 to-red-600 text-white border-0">
              The Core Challenge
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">The Autonomy-Risk Problem</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Why traditional approaches to intelligent systems fail in regulated environments
            </p>
          </div>

          {/* The Problem */}
          <Card className="border-2 border-red-200 bg-red-50 mb-8">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Paradox</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="bg-white rounded-lg p-6 border-2 border-red-200">
                    <h4 className="font-bold text-red-600 mb-2">More Autonomy = More Risk</h4>
                    <p className="text-slate-700">Give Jo freedom to adapt and it can make unpredictable mistakes</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border-2 border-red-200">
                    <h4 className="font-bold text-red-600 mb-2">More Control = Less Flexibility</h4>
                    <p className="text-slate-700">
                      Lock down every decision and you lose the benefits of intelligent automation
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-lg text-slate-700 font-semibold">
                  In regulated industries: Mistakes = Fines, Safety Issues, Lawsuits
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Governance Dilemma */}
          <Card className="border-2 border-slate-200 mb-8">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">The Governance Dilemma</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-lg p-6 text-center">
                  <Cog className="w-8 h-8 mx-auto mb-3 text-slate-600" />
                  <h4 className="font-bold text-slate-900 mb-2">Tools</h4>
                  <p className="text-sm text-slate-600">Predictable, you own them, no autonomy</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-6 text-center">
                  <Users className="w-8 h-8 mx-auto mb-3 text-slate-600" />
                  <h4 className="font-bold text-slate-900 mb-2">Employees</h4>
                  <p className="text-sm text-slate-600">Autonomous, you supervise them, accountable</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 text-center border-2 border-blue-600">
                  <Zap className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                  <h4 className="font-bold text-slate-900 mb-2">Jo (Machine Staff)</h4>
                  <p className="text-sm text-slate-700 font-semibold">Somewhere in between — THIS is the problem</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Labor Map's Solution */}
          <Card className="border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">How Labor Map Solves This</h3>

              <div className="bg-white rounded-lg p-6 mb-6 border-2 border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4 text-center">Labor Map&apos;s Safety Architecture</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border-2 border-red-200">
                    <div>
                      <span className="font-bold text-red-600">Layer 1: Organization</span>
                      <span className="text-slate-600 ml-4">Hard constraints</span>
                    </div>
                    <Badge className="bg-red-600 text-white">NEVER autonomous</Badge>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-slate-400 rotate-90" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border-2 border-orange-200">
                    <div>
                      <span className="font-bold text-orange-600">Layer 2: Strata</span>
                      <span className="text-slate-600 ml-4">Structure</span>
                    </div>
                    <Badge className="bg-orange-600 text-white">NEVER autonomous</Badge>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-slate-400 rotate-90" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border-2 border-yellow-300">
                    <div>
                      <span className="font-bold text-yellow-700">Layer 3: Role</span>
                      <span className="text-slate-600 ml-4">Accountability</span>
                    </div>
                    <Badge className="bg-yellow-600 text-white">STAYS HUMAN</Badge>
                  </div>
                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-slate-400 rotate-90" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-2 border-green-300">
                    <div>
                      <span className="font-bold text-green-700">Layer 4: Task</span>
                      <span className="text-slate-600 ml-4">Execution</span>
                    </div>
                    <Badge className="bg-green-600 text-white">Jo can help HERE</Badge>
                  </div>
                </div>
              </div>

              <div className="bg-blue-600 text-white rounded-lg p-6 text-center">
                <p className="text-xl font-bold mb-2">The Key Principle</p>
                <p className="text-2xl">&quot;Execution can move; ownership does not.&quot;</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Graduated Autonomy Framework */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              Smart Integration
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Graduated Autonomy Framework</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Match Jo&apos;s autonomy to risk level — never give blanket freedom
            </p>
          </div>

          <div className="space-y-4">
            <Card className="border-2 border-red-600">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-red-600 text-white">Critical Risk</Badge>
                      <span className="text-2xl font-bold text-slate-900">0% Autonomous</span>
                    </div>
                    <p className="text-slate-700 mb-2">Regulatory compliance, safety, legal liability</p>
                    <p className="text-sm text-slate-600">
                      <strong>Jo role:</strong> Observer only — LOG and ALERT humans
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="w-8 h-8 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-500">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-orange-500 text-white">High Risk</Badge>
                      <span className="text-2xl font-bold text-slate-900">10-20% Autonomous</span>
                    </div>
                    <p className="text-slate-700 mb-2">Quality control, approvals, financial decisions</p>
                    <p className="text-sm text-slate-600">
                      <strong>Jo role:</strong> Recommend — human reviews and approves
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-8 h-8 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-500">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-yellow-600 text-white">Medium Risk</Badge>
                      <span className="text-2xl font-bold text-slate-900">50-70% Autonomous</span>
                    </div>
                    <p className="text-slate-700 mb-2">Data processing, reporting, routine operations</p>
                    <p className="text-sm text-slate-600">
                      <strong>Jo role:</strong> Execute — human spot-checks and monitors
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-8 h-8 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-600">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className="bg-green-600 text-white">Low Risk</Badge>
                      <span className="text-2xl font-bold text-slate-900">90% Autonomous</span>
                    </div>
                    <p className="text-slate-700 mb-2">Scheduling, notifications, data logging</p>
                    <p className="text-sm text-slate-600">
                      <strong>Jo role:</strong> Handle it — human reviews logs periodically
                    </p>
                  </div>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Real Example */}
          <Card className="mt-12 border-2 border-blue-600 bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">Real Example: Food Processing Plant</h3>
              <p className="text-center text-slate-700 mb-6">
                Mission: &quot;Ensure product safety and quality for Batch #1247&quot;
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border-2 border-red-200">
                  <h4 className="font-bold text-red-600 mb-3">Zero Autonomy</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Final batch approval → Human (FDA)</li>
                    <li>• Allergen declaration → Human (liability)</li>
                    <li>• Safety override → Human (OSHA)</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-orange-200">
                  <h4 className="font-bold text-orange-600 mb-3">Low Autonomy</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Quality analysis → Jo analyzes, human approves</li>
                    <li>• Deviation investigation → Jo gathers, human decides</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-yellow-300">
                  <h4 className="font-bold text-yellow-700 mb-3">Medium Autonomy</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Temperature monitoring → Jo adjusts within range</li>
                    <li>• Inventory reordering → Jo orders if below threshold</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-green-300">
                  <h4 className="font-bold text-green-700 mb-3">High Autonomy</h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>• Data logging → Jo handles completely</li>
                    <li>• Report generation → Jo creates, human reviews periodically</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* System Outputs */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-slate-900 text-white">Deliverables</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">What You Get</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Labor Map produces a complete blueprint for human-machine collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outputs.map((output, index) => (
              <Card
                key={index}
                className="border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <output.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-base font-medium text-slate-900">{output.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Engineer Your Labor System?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join regulated companies using Labor Map to scale operations without breaking compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-red-500 hover:bg-red-600 text-white h-12 px-8 text-base font-semibold">
              <Link href="https://calendly.com/myj0/30min" target="_blank" rel="noopener noreferrer">
                Schedule Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-2 border-white text-white hover:bg-white/10 h-12 px-8 text-base font-semibold bg-transparent"
            >
              <Link href="/company/about">Download Whitepaper</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-12 px-4 sm:px-6 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-400 mb-4">
            Labor Map<sup>™</sup> is a patented methodology designed for highly regulated industries including food
            processing, manufacturing, healthcare, and financial services.
          </p>
          <p className="text-slate-500 text-sm">
            Patent-pending. © {new Date().getFullYear()} Jo Corporation. All rights reserved.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
