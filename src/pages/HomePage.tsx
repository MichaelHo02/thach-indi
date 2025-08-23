import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import { Magnetic } from '../components/ui/magnetic'
import { ShimmeringText } from '../components/ui/shimmering-text'
import { Clock, Brain, ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage="home" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <section className="text-center mb-16 relative">
            <motion.div 
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="secondary" className="mb-2 shadow-lg border-primary/20">
                <Sparkles className="w-3 h-3 mr-1" />
                Featured Apps
              </Badge>
            </motion.div>
            <motion.h1 
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ShimmeringText 
                text="Welcome to Thach's Apps"
                className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"
                duration={3}
                wave={true}
              />
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Discover productivity and entertainment apps designed to enhance your daily life. 
              Built with passion, crafted for performance.
            </motion.p>
          </section>

          <Separator className="my-12" />
          
          <motion.section 
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Magnetic strength={0.3} range={150}>
              <Card className="h-full group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-primary/10 hover:border-primary/30 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="/ios-icon.png" 
                      alt="Time Jar Logo" 
                      className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl object-cover shadow-lg group-hover:shadow-2xl transition-all duration-500" 
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute -top-2 -right-2"
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Clock className="w-6 h-6 text-blue-500 drop-shadow-md" />
                  </motion.div>
                </div>
                <CardTitle className="text-2xl">Time Jar</CardTitle>
                <Badge variant="outline" className="mx-auto w-fit">
                  Productivity
                </Badge>
              </CardHeader>
              <CardContent className="text-center flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  Master your time and maximize your focus with deep work session tracking. 
                  Perfect for professionals and students who value productive time management.
                </p>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Badge variant="secondary">Time Tracking</Badge>
                  <Badge variant="secondary">Focus Mode</Badge>
                  <Badge variant="secondary">iOS App</Badge>
                </div>
                <Button asChild className="group/button">
                  <Link to="/apps/time-jar" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
              </Card>
            </Magnetic>

            <Magnetic strength={0.3} range={150}>
              <Card className="h-full group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-primary/10 hover:border-primary/30 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src="/ios-icon-dark.png" 
                      alt="Questions Game Logo" 
                      className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-50 to-orange-100 rounded-3xl object-cover shadow-lg group-hover:shadow-2xl transition-all duration-500" 
                    />
                  </motion.div>
                  <motion.div 
                    className="absolute -top-2 -right-2"
                    whileHover={{ scale: 1.2, rotate: -180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Brain className="w-6 h-6 text-yellow-500 drop-shadow-md" />
                  </motion.div>
                </div>
                <CardTitle className="text-2xl">Questions Game</CardTitle>
                <Badge variant="outline" className="mx-auto w-fit">
                  Entertainment
                </Badge>
              </CardHeader>
              <CardContent className="text-center flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                  Challenge your mind with engaging trivia and question-based games. 
                  Test your knowledge across multiple categories and difficulty levels.
                </p>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <Badge variant="secondary">Trivia</Badge>
                  <Badge variant="secondary">Brain Training</Badge>
                  <Badge variant="secondary">Coming Soon</Badge>
                </div>
                <Button asChild className="group/button">
                  <Link to="/apps/questions-game" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
              </Card>
            </Magnetic>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  )
}