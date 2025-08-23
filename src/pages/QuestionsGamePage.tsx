import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Trophy, Clock, HelpCircle } from 'lucide-react'

export default function QuestionsGamePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage="questions-game" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <section className="text-center mb-12">
            <img 
              src="/ios-icon-dark.png" 
              alt="Questions Game App Logo" 
              className="mx-auto mb-6 bg-yellow-100 rounded-3xl w-32 h-32 object-cover"
            />
            <h1 className="text-4xl font-bold mb-4">Questions Game App: Challenge Your Mind</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Engage in exciting trivia and brain-teasing questions that will test your knowledge and sharpen your thinking skills.
            </p>
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img 
                src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1731024000"
                alt="Download on the App Store"
                className="h-16 object-contain"
              />
            </a>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <HelpCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Diverse Question Categories</h4>
                  <p className="text-muted-foreground">
                    Explore questions across multiple topics including science, history, entertainment, sports, and more.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Score Tracking</h4>
                  <p className="text-muted-foreground">
                    Keep track of your performance with detailed scoring and progress analytics.
                  </p>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <Clock className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">Timed Challenges</h4>
                  <p className="text-muted-foreground">
                    Test your knowledge under pressure with exciting timed game modes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">How to Play</h2>
                <ol className="text-lg space-y-3">
                  <li>1. Choose your preferred question category</li>
                  <li>2. Select difficulty level (Easy, Medium, Hard)</li>
                  <li>3. Answer questions within the time limit</li>
                  <li>4. Earn points for correct answers</li>
                  <li>5. Challenge yourself to beat your high score</li>
                </ol>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-center mb-6">Game Stats</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <h4 className="text-2xl font-bold text-primary">1000+</h4>
                      <p className="text-muted-foreground">Questions</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-green-600">10+</h4>
                      <p className="text-muted-foreground">Categories</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-yellow-500">3</h4>
                      <p className="text-muted-foreground">Difficulty Levels</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="text-center">
            <Button asChild>
              <Link to="/apps/questions-game/privacy.html">Privacy Policy</Link>
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}