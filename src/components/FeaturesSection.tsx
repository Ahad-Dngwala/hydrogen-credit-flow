import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Leaf, 
  Users, 
  BarChart3, 
  Lock, 
  Globe, 
  Zap, 
  FileCheck, 
  TrendingUp 
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Fraud Prevention",
      description: "Advanced blockchain protocols prevent double-counting and ensure credit authenticity with immutable audit trails.",
      color: "bg-hydrogen-green"
    },
    {
      icon: Leaf,
      title: "Green Energy Verification", 
      description: "Real-time integration with renewable energy sources and IoT sensors for accurate carbon intensity tracking.",
      color: "bg-energy-amber"
    },
    {
      icon: Users,
      title: "Multi-Stakeholder Platform",
      description: "Purpose-built interfaces for producers, auditors, regulators, and industrial buyers with role-based access control.",
      color: "bg-blockchain-blue"
    },
    {
      icon: BarChart3,
      title: "Comprehensive Analytics",
      description: "Advanced reporting and ML-powered anomaly detection for regulatory compliance and market transparency.",
      color: "bg-hydrogen-dark"
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Government-grade security with HSM key management, multi-sig controls, and comprehensive audit logging.",
      color: "bg-destructive"
    },
    {
      icon: Globe,
      title: "Interoperability",
      description: "Standards-compliant integration with existing registries and cross-border credit transfer capabilities.",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">System Features</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Complete Hydrogen Credit Lifecycle Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From production measurement to final retirement, our platform ensures transparency, 
            compliance, and trust throughout the entire green hydrogen value chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-0 shadow-card">
              <CardHeader>
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 bg-gradient-primary text-white">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <Zap className="w-6 h-6" />
                <span>Blockchain Architecture</span>
              </CardTitle>
              <CardDescription className="text-white/80 text-base">
                Built on a permissioned consortium blockchain with public transparency layers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <FileCheck className="w-4 h-4" />
                    <span>Smart Contracts</span>
                  </h4>
                  <p className="text-sm text-white/80">
                    Automated issuance, transfer, and retirement with built-in compliance checks
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Oracle Network</span>
                  </h4>
                  <p className="text-sm text-white/80">
                    Secure data feeds from IoT sensors, grid operators, and certification bodies
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance Standards</CardTitle>
              <CardDescription>
                Aligned with international frameworks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "ISO 14855 - Renewable Energy",
                "MRV Protocols",
                "W3C DID Standards", 
                "WCAG 2.2 AA Accessibility",
                "SOC 2 Type II"
              ].map((standard, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-hydrogen-green rounded-full"></div>
                  <span className="text-sm">{standard}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};