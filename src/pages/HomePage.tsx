import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage="home" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Welcome to Thach's Apps</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover productivity and entertainment apps designed to enhance your daily life
            </p>
          </section>
          
          <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <img 
                  src="/ios-icon.png" 
                  alt="Time Jar Logo" 
                  className="mx-auto mb-6 bg-blue-100 rounded-3xl w-24 h-24 object-cover" 
                />
                <h3 className="text-2xl font-bold mb-4">Time Jar</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  Master your time and maximize your focus with deep work session tracking.
                </p>
                <Button asChild>
                  <Link to="/apps/time-jar">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <img 
                  src="/ios-icon-dark.png" 
                  alt="Questions Game Logo" 
                  className="mx-auto mb-6 bg-yellow-100 rounded-3xl w-24 h-24 object-cover" 
                />
                <h3 className="text-2xl font-bold mb-4">Questions Game App</h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  Challenge your mind with engaging trivia and question-based games.
                </p>
                <Button asChild>
                  <Link to="/apps/questions-game">Learn More</Link>
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