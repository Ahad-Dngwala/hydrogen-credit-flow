import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Factory, 
  Shield, 
  Users, 
  Building, 
  Eye, 
  Plus, 
  FileCheck, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap
} from "lucide-react";

export const StakeholderDashboard = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4">Multi-Stakeholder Platform</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Purpose-Built Interfaces for Every Role
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each stakeholder gets tailored tools and dashboards designed for their specific 
            responsibilities in the green hydrogen ecosystem.
          </p>
        </div>

        <Tabs defaultValue="producer" className="space-y-8">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl mx-auto">
            <TabsTrigger value="producer" className="flex items-center space-x-2">
              <Factory className="w-4 h-4" />
              <span className="hidden sm:inline">Producer</span>
            </TabsTrigger>
            <TabsTrigger value="auditor" className="flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span className="hidden sm:inline">Auditor</span>
            </TabsTrigger>
            <TabsTrigger value="regulator" className="flex items-center space-x-2">
              <Building className="w-4 h-4" />
              <span className="hidden sm:inline">Regulator</span>
            </TabsTrigger>
            <TabsTrigger value="buyer" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span className="hidden sm:inline">Buyer</span>
            </TabsTrigger>
            <TabsTrigger value="public" className="flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span className="hidden sm:inline">Public</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="producer" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Production Facilities</span>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-1" />
                      Add Facility
                    </Button>
                  </CardTitle>
                  <CardDescription>Manage your hydrogen production sites</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "Solar Wind H₂ Plant", status: "Active", capacity: "2,500 kg/day" },
                    { name: "Offshore Green Facility", status: "Maintenance", capacity: "1,800 kg/day" }
                  ].map((facility, index) => (
                    <div key={index} className="p-3 border rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{facility.name}</span>
                        <Badge variant={facility.status === "Active" ? "default" : "secondary"}>
                          {facility.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">{facility.capacity}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Credit Issuance</CardTitle>
                  <CardDescription>Request new hydrogen credits</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>This Month</span>
                      <span className="font-medium">4,250 kg H₂</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Pending Verification</span>
                      <span className="font-medium text-energy-amber">890 kg H₂</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Avg CO₂ Intensity</span>
                      <span className="font-medium text-hydrogen-green">0.18 kg/kg H₂</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    <FileCheck className="w-4 h-4 mr-2" />
                    Submit MRV Report
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Latest credit activity</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { type: "Issued", amount: "1,250 kg H₂", time: "2 hours ago", icon: CheckCircle, color: "text-hydrogen-green" },
                    { type: "Transfer", amount: "800 kg H₂", time: "1 day ago", icon: TrendingUp, color: "text-blockchain-blue" },
                    { type: "Pending", amount: "500 kg H₂", time: "2 days ago", icon: Clock, color: "text-energy-amber" }
                  ].map((tx, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <tx.icon className={`w-4 h-4 ${tx.color}`} />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{tx.type}</div>
                        <div className="text-xs text-muted-foreground">{tx.time}</div>
                      </div>
                      <div className="text-sm font-medium">{tx.amount}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="auditor" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-energy-amber" />
                    <span>Pending Reviews</span>
                  </CardTitle>
                  <CardDescription>MRV reports awaiting verification</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { facility: "Green Valley Production", amount: "3,200 kg H₂", priority: "High", submitted: "3 hours ago" },
                    { facility: "Coastal Wind H₂", amount: "1,890 kg H₂", priority: "Medium", submitted: "1 day ago" },
                    { facility: "Solar Wind H₂ Plant", amount: "2,450 kg H₂", priority: "Low", submitted: "2 days ago" }
                  ].map((review, index) => (
                    <div key={index} className="p-3 border rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{review.facility}</span>
                        <Badge variant={review.priority === "High" ? "destructive" : review.priority === "Medium" ? "default" : "secondary"}>
                          {review.priority}
                        </Badge>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{review.amount}</span>
                        <span>{review.submitted}</span>
                      </div>
                      <Button size="sm" className="w-full">Review Report</Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Verification Tools</CardTitle>
                  <CardDescription>Audit and compliance utilities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Zap className="w-4 h-4 mr-2" />
                    Energy Source Verification
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileCheck className="w-4 h-4 mr-2" />
                    Production Data Analysis
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Anomaly Detection
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="w-4 h-4 mr-2" />
                    Compliance Check
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="regulator" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Overview</CardTitle>
                  <CardDescription>Network-wide statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Total Facilities</span>
                      <div className="font-semibold text-lg">247</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Active Producers</span>
                      <div className="font-semibold text-lg">156</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Credits Issued YTD</span>
                      <div className="font-semibold text-lg">2.4M kg H₂</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Compliance Rate</span>
                      <div className="font-semibold text-lg text-hydrogen-green">99.2%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Activity</CardTitle>
                  <CardDescription>Trading and transfers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Daily Volume</span>
                    <span className="font-medium">15,840 kg H₂</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Active Transfers</span>
                    <span className="font-medium">23</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Avg Price</span>
                    <span className="font-medium">$4.50/kg H₂</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compliance Alerts</CardTitle>
                  <CardDescription>Issues requiring attention</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="p-2 bg-energy-amber/10 border border-energy-amber/20 rounded text-sm">
                    <div className="font-medium">Facility License Expiry</div>
                    <div className="text-muted-foreground">Ocean Breeze H₂ - 30 days</div>
                  </div>
                  <div className="p-2 bg-hydrogen-green/10 border border-hydrogen-green/20 rounded text-sm">
                    <div className="font-medium">All Systems Operational</div>
                    <div className="text-muted-foreground">No critical issues</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="buyer" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Available Credits</CardTitle>
                  <CardDescription>Purchase green hydrogen credits</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { producer: "Solar Wind H₂ Plant", amount: "1,500 kg H₂", intensity: "0.12 kg CO₂e", price: "$4.25/kg" },
                    { producer: "Green Valley Production", amount: "2,200 kg H₂", intensity: "0.18 kg CO₂e", price: "$4.10/kg" }
                  ].map((credit, index) => (
                    <div key={index} className="p-3 border rounded-lg space-y-2">
                      <div className="font-medium">{credit.producer}</div>
                      <div className="grid grid-cols-2 text-sm">
                        <div>
                          <span className="text-muted-foreground">Amount: </span>
                          <span>{credit.amount}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Price: </span>
                          <span>{credit.price}</span>
                        </div>
                      </div>
                      <div className="text-sm">
                        <span className="text-muted-foreground">CO₂ Intensity: </span>
                        <span className="text-hydrogen-green">{credit.intensity}/kg H₂</span>
                      </div>
                      <Button size="sm" className="w-full">Purchase Credits</Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>My Portfolio</CardTitle>
                  <CardDescription>Your credit holdings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Holdings</span>
                      <span className="font-medium">8,450 kg H₂</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Avg CO₂ Intensity</span>
                      <span className="font-medium text-hydrogen-green">0.15 kg/kg H₂</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Portfolio Value</span>
                      <span className="font-medium">$38,025</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Retire Credits
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="public" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Public Transparency Portal</CardTitle>
                <CardDescription>
                  Open access to aggregated system data and market information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-hydrogen-green">2.4M</div>
                    <div className="text-sm text-muted-foreground">kg H₂ Certified</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-blockchain-blue">247</div>
                    <div className="text-sm text-muted-foreground">Active Facilities</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-energy-amber">0.16</div>
                    <div className="text-sm text-muted-foreground">Avg CO₂ Intensity</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold">99.8%</div>
                    <div className="text-sm text-muted-foreground">System Uptime</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button>
                    <Eye className="w-4 h-4 mr-2" />
                    Explore Public Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};