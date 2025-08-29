import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Leaf, Github, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-hydrogen-green" />
              </div>
              <span className="font-bold text-xl">HydrogenChain</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Revolutionizing green hydrogen certification with blockchain transparency 
              and government-grade security.
            </p>
            <div className="flex space-x-2">
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-white/10">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-white/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-primary-foreground hover:bg-white/10">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Producer Dashboard</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Auditor Tools</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Regulator Portal</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Credit Marketplace</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Public Explorer</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">White Paper</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Compliance Guide</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Governance Charter</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Security Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-primary-foreground/80">
            © 2024 HydrogenChain. Built for HackOut'25. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
            <span>Powered by Blockchain Technology</span>
            <div className="w-2 h-2 bg-hydrogen-green rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};