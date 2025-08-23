import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '../components/ui/button'

export default function TimeJarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage="time-jar" />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <section className="text-center mb-12">
            <img 
              src="/ios-icon.png" 
              alt="Time Jar Logo" 
              className="mx-auto mb-6 bg-blue-100 rounded-3xl w-32 h-32 object-cover"
            />
            <h1 className="text-4xl font-bold mb-4">Time Jar: Master Your Time, Maximize Your Focus</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Track your progress, log deep work sessions, and unlock your full potential—because your time is priceless.
            </p>
            <a 
              href="https://apps.apple.com/app/time-jar/id6739752821"
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
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="space-y-4">
                <img 
                  src="/Frame 6.png" 
                  alt="Feature 1" 
                  className="w-full border-4 border-border rounded-3xl"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="/Frame 5.png" 
                  alt="Feature 2" 
                  className="w-full border-4 border-border rounded-3xl"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="/Frame 7.png" 
                  alt="Feature 3" 
                  className="w-full border-4 border-border rounded-3xl"
                />
              </div>
              <div className="space-y-4">
                <img 
                  src="/Frame 4.png" 
                  alt="Feature 4" 
                  className="w-full border-4 border-border rounded-3xl"
                />
              </div>
            </div>
          </section>

          <section className="text-center">
            <Button asChild>
              <Link to="/apps/time-jar/privacy.html">Privacy Policy</Link>
            </Button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}