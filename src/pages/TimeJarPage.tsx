import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import { Download, Shield, Clock, BarChart3, Focus } from 'lucide-react'

export default function TimeJarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage="time-jar" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <section className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <img 
                src="/ios-icon.png" 
                alt="Time Jar Logo" 
                className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl object-cover shadow-lg"
              />
              <Badge className="absolute -top-2 -right-2 bg-green-500">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Live
                </div>
              </Badge>
            </div>
            
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                <Clock className="w-3 h-3 mr-1" />
                Productivity App
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Time Jar
              </h1>
              <p className="text-2xl font-medium text-muted-foreground mb-2">Master Your Time, Maximize Your Focus</p>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Track your progress, log deep work sessions, and unlock your full potential—because your time is priceless. 
              Perfect for professionals, students, and anyone who values productive time management.
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-sm">
                <Focus className="w-3 h-3 mr-1" />
                Deep Work Sessions
              </Badge>
              <Badge variant="outline" className="text-sm">
                <BarChart3 className="w-3 h-3 mr-1" />
                Progress Analytics  
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Shield className="w-3 h-3 mr-1" />
                Privacy First
              </Badge>
            </div>
            
            <Button asChild size="lg" className="mb-4">
              <a 
                href="https://apps.apple.com/app/time-jar/id6739752821"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download on App Store
              </a>
            </Button>
            <p className="text-sm text-muted-foreground">Free • iOS 14.0+</p>
          </section>

          <Separator className="my-12" />

          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">App Screenshots</h2>
              <p className="text-muted-foreground text-lg">Experience the beautiful, intuitive interface</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4">
                  <img 
                    src="/Frame 6.png" 
                    alt="Time tracking interface" 
                    className="w-full border border-border rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4">
                  <img 
                    src="/Frame 5.png" 
                    alt="Session management" 
                    className="w-full border border-border rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4">
                  <img 
                    src="/Frame 7.png" 
                    alt="Analytics dashboard" 
                    className="w-full border border-border rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
              <Card className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4">
                  <img 
                    src="/Frame 4.png" 
                    alt="Live activities" 
                    className="w-full border border-border rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator className="my-12" />

          <section className="text-center">
            <h3 className="text-2xl font-bold mb-4">Privacy & Security</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your data stays on your device. We don't collect, track, or share any personal information.
            </p>
            <Button asChild variant="outline">
              <Link to="/apps/time-jar/privacy.html" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Read Privacy Policy
              </Link>
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}