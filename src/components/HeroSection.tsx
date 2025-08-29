import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Shield, Zap, Users, ArrowRight, CheckCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-hero">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <Badge className="bg-white/20 text-white border-white/30 mb-6">
              Blockchain-Based Green Hydrogen Credits
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transparent <br />
              <span className="text-energy-amber">Green Hydrogen</span> <br />
              Credit System
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Revolutionizing renewable hydrogen certification with blockchain technology. 
              Ensure transparency, prevent fraud, and build trust in the green energy transition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-hydrogen-green hover:bg-white/90">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Shield, label: "Secure & Auditable" },
                { icon: Leaf, label: "100% Green Energy" },
                { icon: Zap, label: "Real-time Tracking" },
                { icon: Users, label: "Multi-stakeholder" }
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-white/90">
                  <feature.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-white/95 backdrop-blur shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-hydrogen-green" />
                  <span>Live System Status</span>
                </CardTitle>
                <CardDescription>
                  Real-time blockchain network performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Active Facilities</span>
                    <div className="font-semibold text-lg">247</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Credits Issued</span>
                    <div className="font-semibold text-lg">15,842 kg H₂</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Network Uptime</span>
                    <div className="font-semibold text-lg text-hydrogen-green">99.98%</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Avg CO₂ Intensity</span>
                    <div className="font-semibold text-lg">0.2 kg/kg H₂</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-blockchain-blue" />
                  <span>Recent Transactions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { facility: "Solar Wind H₂ Plant", amount: "2,450 kg H₂", status: "Verified" },
                  { facility: "Ocean Breeze Facility", amount: "1,890 kg H₂", status: "Pending" },
                  { facility: "Green Valley Production", amount: "3,200 kg H₂", status: "Verified" }
                ].map((tx, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-medium text-sm">{tx.facility}</div>
                      <div className="text-muted-foreground text-xs">{tx.amount}</div>
                    </div>
                    <Badge 
                      variant={tx.status === "Verified" ? "default" : "secondary"}
                      className={tx.status === "Verified" ? "bg-hydrogen-green" : ""}
                    >
                      {tx.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};