import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import { Magnetic } from '../components/ui/magnetic'
import { ShimmeringText } from '../components/ui/shimmering-text'
import { Download, Shield, Clock, BarChart3, Focus } from 'lucide-react'
import { motion } from 'motion/react'

export default function TimeJarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage="time-jar" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <section className="text-center mb-12 md:mb-16">
            <motion.div 
              className="relative inline-block mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Magnetic strength={0.4} range={100}>
                <motion.img 
                  src="/thach-indi/apps/time-jar/icon.png" 
                  alt="Time Jar Logo" 
                  className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-50 via-blue-100 to-purple-50 rounded-3xl object-cover shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
              </Magnetic>
            </motion.div>
            
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-2 mb-4 flex-wrap">
                <Badge variant="secondary" className="shadow-lg border-primary/20">
                  <Clock className="w-3 h-3 mr-1" />
                  Productivity App
                </Badge>
                <Badge className="bg-green-500 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    Live
                  </div>
                </Badge>
              </div>
              <motion.h1 
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <ShimmeringText 
                  text="Time Jar"
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 bg-clip-text text-transparent"
                  duration={2.5}
                  wave={true}
                />
              </motion.h1>
              <motion.p 
                className="text-xl sm:text-2xl font-medium text-muted-foreground mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Master Your Time, Maximize Your Focus
              </motion.p>
            </motion.div>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed px-4">
              Track your progress, log deep work sessions, and unlock your full potential—because your time is priceless. 
              Perfect for professionals, students, and anyone who values productive time management.
            </p>
            
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-8 flex-wrap px-4">
              <Badge variant="outline" className="text-xs sm:text-sm">
                <Focus className="w-3 h-3 mr-1" />
                Deep Work Sessions
              </Badge>
              <Badge variant="outline" className="text-xs sm:text-sm">
                <BarChart3 className="w-3 h-3 mr-1" />
                Progress Analytics  
              </Badge>
              <Badge variant="outline" className="text-xs sm:text-sm">
                <Shield className="w-3 h-3 mr-1" />
                Privacy First
              </Badge>
            </div>
            
            <Magnetic strength={0.2} range={80}>
              <Button asChild size="lg" className="mb-4 shadow-lg hover:shadow-2xl transition-all duration-300">
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
            </Magnetic>
            <p className="text-sm text-muted-foreground">Free • iOS 14.0+</p>
          </section>

          <Separator className="my-12" />

          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">App Screenshots</h2>
              <p className="text-muted-foreground text-lg">Experience the beautiful, intuitive interface</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              <Magnetic strength={0.3} range={120}>
                <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-4">
                    <img 
                      src="/thach-indi/apps/time-jar/screenshots/session-tracking.png" 
                      alt="Time tracking interface" 
                      className="w-full border border-border rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </CardContent>
                </Card>
              </Magnetic>
              <Magnetic strength={0.3} range={120}>
                <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-4">
                    <img 
                      src="/thach-indi/apps/time-jar/screenshots/session-management.png" 
                      alt="Session management" 
                      className="w-full border border-border rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </CardContent>
                </Card>
              </Magnetic>
              <Magnetic strength={0.3} range={120}>
                <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-4">
                    <img 
                      src="/thach-indi/apps/time-jar/screenshots/analytics-dashboard.png" 
                      alt="Analytics dashboard" 
                      className="w-full border border-border rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </CardContent>
                </Card>
              </Magnetic>
              <Magnetic strength={0.3} range={120}>
                <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-4">
                    <img 
                      src="/thach-indi/apps/time-jar/screenshots/live-activities.png" 
                      alt="Live activities" 
                      className="w-full border border-border rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </CardContent>
                </Card>
              </Magnetic>
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