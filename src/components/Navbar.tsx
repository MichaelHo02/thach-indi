import { Link } from 'react-router-dom'
import { Menu, Home, Clock, Gamepad2, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from './ui/navigation-menu'
import { Magnetic } from './ui/magnetic'
import { motion } from 'motion/react'

interface NavbarProps {
  currentPage?: string
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const NavLinks = ({ isMobile = false }) => {
    const linkClass = isMobile 
      ? "flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-all duration-200 group"
      : "relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-accent/50 flex items-center gap-2"

    return (
      <>
        <Magnetic strength={0.2} range={60}>
          <Link 
            to="/" 
            className={`${linkClass} ${
              currentPage === 'home' 
                ? 'text-primary bg-primary/10 font-medium' 
                : 'text-muted-foreground hover:text-primary'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Home className={`${isMobile ? 'h-5 w-5' : 'h-4 w-4'} transition-transform group-hover:scale-110`} />
            <span>Home</span>
            {currentPage === 'home' && !isMobile && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </Link>
        </Magnetic>

        <Magnetic strength={0.2} range={60}>
          <Link 
            to="/apps/time-jar" 
            className={`${linkClass} ${
              currentPage === 'time-jar' 
                ? 'text-primary bg-primary/10 font-medium' 
                : 'text-muted-foreground hover:text-primary'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Clock className={`${isMobile ? 'h-5 w-5' : 'h-4 w-4'} transition-transform group-hover:scale-110`} />
            <span>Time Jar</span>
            {currentPage === 'time-jar' && !isMobile && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </Link>
        </Magnetic>

        <Magnetic strength={0.2} range={60}>
          <Link 
            to="/apps/questions-game" 
            className={`${linkClass} ${
              currentPage === 'questions-game' 
                ? 'text-primary bg-primary/10 font-medium' 
                : 'text-muted-foreground hover:text-primary'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <Gamepad2 className={`${isMobile ? 'h-5 w-5' : 'h-4 w-4'} transition-transform group-hover:scale-110`} />
            <span>Questions Game</span>
            {!isMobile && (
              <Badge variant="secondary" className="text-xs ml-1">
                Soon
              </Badge>
            )}
            {currentPage === 'questions-game' && !isMobile && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </Link>
        </Magnetic>

        <Magnetic strength={0.2} range={60}>
          <a 
            href="https://www.linkedin.com/in/thach-ho" 
            className={`${linkClass} text-muted-foreground hover:text-primary`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            <ExternalLink className={`${isMobile ? 'h-5 w-5' : 'h-4 w-4'} transition-transform group-hover:scale-110`} />
            <span>Contact</span>
          </a>
        </Magnetic>
      </>
    )
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold hover:text-primary transition-colors">
            Thach's Apps
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center space-x-2">
              <NavigationMenuItem className="flex items-center space-x-2">
                <NavLinks isMobile={false} />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-6">
                <NavLinks isMobile={true} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}