import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Shield, Users, BarChart3, Settings, LogOut } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="border-b bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">HydrogenChain</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                <BarChart3 className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                <Shield className="w-4 h-4 mr-2" />
                Facilities
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                <Users className="w-4 h-4 mr-2" />
                Credits
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                Explorer
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-hydrogen-light text-hydrogen-dark">
              Producer
            </Badge>
            <Button variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};