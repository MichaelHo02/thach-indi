import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import { Clock, Brain, ArrowRight, Star } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage="home" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <section className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge variant="secondary" className="mb-2">
                <Star className="w-3 h-3 mr-1" />
                Featured Apps
              </Badge>
            </div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Welcome to Thach's Apps
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover productivity and entertainment apps designed to enhance your daily life. 
              Built with passion, crafted for performance.
            </p>
          </section>

          <Separator className="my-12" />
          
          <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <img 
                    src="/ios-icon.png" 
                    alt="Time Jar Logo" 
                    className="w-24 h-24 mx-auto bg-blue-50 rounded-3xl object-cover shadow-md group-hover:shadow-lg transition-shadow" 
                  />
                  <div className="absolute -top-2 -right-2">
                    <Clock className="w-6 h-6 text-blue-500" />
                  </div>
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

            <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <img 
                    src="/ios-icon-dark.png" 
                    alt="Questions Game Logo" 
                    className="w-24 h-24 mx-auto bg-yellow-50 rounded-3xl object-cover shadow-md group-hover:shadow-lg transition-shadow" 
                  />
                  <div className="absolute -top-2 -right-2">
                    <Brain className="w-6 h-6 text-yellow-500" />
                  </div>
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
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}