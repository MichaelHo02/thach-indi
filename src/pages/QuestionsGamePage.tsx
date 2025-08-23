import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Separator } from '../components/ui/separator'
import { Magnetic } from '../components/ui/magnetic'
import { ShimmeringText } from '../components/ui/shimmering-text'
import { Download, Shield, Gamepad2, Brain, Target } from 'lucide-react'
import { motion } from 'motion/react'

export default function QuestionsGamePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage="questions-game" />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <section className="text-center mb-16">
            <motion.div
              className="relative inline-block mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Magnetic strength={0.4} range={100}>
                <motion.img
                  src="/thach-indi/apps/questions-game/icon.png"
                  alt="Questions Game Logo"
                  className="w-32 h-32 mx-auto bg-gradient-to-br from-orange-50 via-yellow-100 to-amber-50 rounded-3xl object-cover shadow-2xl"
                  whileHover={{ scale: 1.1, rotate: -5 }}
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
              <Badge variant="secondary" className="mb-4 shadow-lg border-primary/20">
                <Gamepad2 className="w-3 h-3 mr-1" />
                Entertainment App
              </Badge>
              <Badge className="ml-2 bg-orange-500 text-xs">
                Coming Soon
              </Badge>
              <motion.h1
                className="text-5xl font-bold mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <ShimmeringText
                  text="Questions Game"
                  className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 bg-clip-text text-transparent"
                  duration={2.5}
                  wave={true}
                />
              </motion.h1>
              <motion.p
                className="text-2xl font-medium text-muted-foreground mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Spark Meaningful Conversations
              </motion.p>
            </motion.div>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              Spark meaningful conversations and deepen your connections with our digital conversation card library. Whether with a partner, family, or friends, each prompt is designed to inspire curiosity, laughter, and authentic connection.
            </motion.p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <Badge variant="outline" className="text-sm">
                <Brain className="w-3 h-3 mr-1" />
                Conversation Cards
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Target className="w-3 h-3 mr-1" />
                Meaningful Connections
              </Badge>
            </div>

            <Magnetic strength={0.2} range={80}>
              <Button size="lg" className="mb-4 shadow-lg hover:shadow-2xl transition-all duration-300" disabled>
                <Download className="w-5 h-5 mr-2" />
                Coming Soon to App Store
              </Button>
            </Magnetic>
            <p className="text-sm text-muted-foreground">Free • iOS 14.0+ • Coming Soon</p>
          </section>

          <Separator className="my-12" />

          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">App Screenshots</h2>
              <p className="text-muted-foreground text-lg">Get a preview of the conversation starter experience</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Magnetic strength={0.3} range={120}>
                <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-4">
                    <img
                      src="/thach-indi/apps/questions-game/screenshots/screenshot1.png"
                      alt="Conversation card interface"
                      className="w-full border border-border rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </CardContent>
                </Card>
              </Magnetic>
              <Magnetic strength={0.3} range={120}>
                <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-4">
                    <img
                      src="/thach-indi/apps/questions-game/screenshots/screenshot2.png"
                      alt="Conversation categories"
                      className="w-full border border-border rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </CardContent>
                </Card>
              </Magnetic>
              <Magnetic strength={0.3} range={120}>
                <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-4">
                    <img
                      src="/thach-indi/apps/questions-game/screenshots/screenshot3.png"
                      alt="Connection moments"
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
              <Link to="/apps/questions-game/privacy.html" className="flex items-center gap-2">
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