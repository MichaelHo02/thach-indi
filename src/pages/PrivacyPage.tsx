import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '../components/ui/button'

interface PrivacyPageProps {
  app: 'time-jar' | 'questions-game'
}

export default function PrivacyPage({ app }: PrivacyPageProps) {
  const isTimeJar = app === 'time-jar'
  const appName = isTimeJar ? 'Time Jar' : 'Questions Game'
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={app} />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <section className="text-center mb-12">
            <div className="mx-auto mb-6 bg-blue-100 rounded-3xl w-32 h-32 flex items-center justify-center">
              <img 
                src="/Author-Privacy.png" 
                alt="Privacy Logo" 
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy for {appName}</h1>
            <p className="text-muted-foreground">Last updated: Dec 23 2024</p>
          </section>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Data collection & Usage</h2>
              <p className="text-muted-foreground leading-relaxed">
                {appName} does not collect, track, or store any personal data from users. Your privacy is fully
                respected, and no information is shared with third parties or used for analytics or advertising.
              </p>
            </section>

            {isTimeJar && (
              <section>
                <h2 className="text-2xl font-bold mb-4">2. Use of Live Activity Feature</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Time Jar uses Apple's Live Activity feature to provide real-time updates about your logged
                  activities on the Lock Screen or in Dynamic Island. This functionality operates locally on your
                  device and does not involve the collection, storage, or sharing of any user data.
                </p>
              </section>
            )}

            <section>
              <h2 className="text-2xl font-bold mb-4">{isTimeJar ? '3' : '2'}. Permission & Access</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any permissions requested by {appName}, such as notifications, are strictly for enhancing the
                app's functionality. These permissions are essential for delivering features like reminders and
                progress updates. No data is saved, collected, or sent outside your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">{isTimeJar ? '4' : '3'}. Account & Personal Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                {appName} does not require an account or personal information to function. All app features are
                fully accessible without login or data sharing.
              </p>
            </section>
          </div>

          <div className="text-center mt-12">
            <Button asChild>
              <Link to={isTimeJar ? '/apps/time-jar' : '/apps/questions-game'}>
                Back to {appName}
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}