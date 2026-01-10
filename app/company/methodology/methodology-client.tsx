import { v0, no, op, code, block, prefix } from "./someModule" // Assuming these variables are imported from a module
import { Card, CardContent } from "./Card" // Assuming Card and CardContent are imported from a module
import { Search, Layers, Rocket } from "./Icons" // Assuming Search, Layers, and Rocket are imported from a module

// Existing code block
const methodologyClient = {
  v0: v0,
  no: no,
  op: op,
  code: code,
  block: block,
  prefix: prefix,
}

// Additional code can be added here if necessary

// Gradient Divider
const GradientDivider = () => (
  <div className="py-8 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 shadow-lg"></div>
    </div>
  </div>
)

// Our Framework Section
const OurFrameworkSection = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">Our Framework</h2>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
        Fast Insight, Practical Plans, Real Operational Change
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Discovery */}
        <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full"></div>
          <CardContent className="p-8 relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Search className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">Step 1</span>
                <h3 className="text-xl font-bold text-gray-900">Discovery</h3>
              </div>
            </div>
            <p className="text-blue-700 font-semibold mb-3">Discover the problem</p>
            <p className="text-gray-600 leading-relaxed">
              We map your organization's structure, identify who owns each outcome, and pinpoint where work is breaking
              down or creating bottlenecks.
            </p>
          </CardContent>
        </Card>

        {/* Design */}
        <Card className="border-2 hover:border-purple-200 transition-all hover:shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-transparent rounded-bl-full"></div>
          <CardContent className="p-8 relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-sm font-medium text-purple-600 uppercase tracking-wide">Step 2</span>
                <h3 className="text-xl font-bold text-gray-900">Design</h3>
              </div>
            </div>
            <p className="text-purple-700 font-semibold mb-3">Design the fix</p>
            <p className="text-gray-600 leading-relaxed">
              We figure out which tasks humans must do and which machines can handle, creating a detailed plan that
              shows cost savings, reduces risk, and maintains compliance.
            </p>
          </CardContent>
        </Card>

        {/* Deploy */}
        <Card className="border-2 hover:border-green-200 transition-all hover:shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-100 to-transparent rounded-bl-full"></div>
          <CardContent className="p-8 relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-sm font-medium text-green-600 uppercase tracking-wide">Step 3</span>
                <h3 className="text-xl font-bold text-gray-900">Deploy</h3>
              </div>
            </div>
            <p className="text-green-700 font-semibold mb-3">Deploy the solution</p>
            <p className="text-gray-600 leading-relaxed">
              We put the solution into action with clear controls, live monitoring, and audit trails that prove
              everything is working correctly.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
)

// 8-Phase Decomposition Section
const EightPhaseDecompositionSection = () => {
  const phases = ["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5", "Phase 6", "Phase 7", "Phase 8"]
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">8-Phase Outcome Decomposition</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Every outcome follows a universal execution pattern that enables precise task allocation
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-lg">
                <CardContent className="p-4 text-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                    {index + 1}
                  </div>
                  <div className="text-base font-semibold text-gray-900">{phase}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-green-200 transition-all hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                H
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Human</h4>
              <p className="text-gray-600">Requires judgment, dexterity, or regulatory mandate</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-blue-200 transition-all hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                M
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Machine</h4>
              <p className="text-gray-600">Deterministic, high-volume, verifiable</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-purple-200 transition-all hover:shadow-xl">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                H+M
              </div>
              <h4 className="font-bold text-gray-900 mb-3 text-lg">Hybrid</h4>
              <p className="text-gray-600">Shared execution with defined handoff points</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Main Component
const MethodologyClient = () => (
  <>
    <GradientDivider />
    <OurFrameworkSection />
    <GradientDivider />
    <EightPhaseDecompositionSection />
    <GradientDivider />
  </>
)

export default MethodologyClient
