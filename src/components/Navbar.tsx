import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from './ui/navigation-menu'

interface NavbarProps {
  currentPage?: string
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const NavLinks = () => (
    <>
      <Link 
        to="/" 
        className={`transition-colors hover:text-primary ${
          currentPage === 'home' ? 'text-primary font-medium' : 'text-muted-foreground'
        }`}
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link 
        to="/apps/time-jar" 
        className={`transition-colors hover:text-primary ${
          currentPage === 'time-jar' ? 'text-primary font-medium' : 'text-muted-foreground'
        }`}
        onClick={() => setIsOpen(false)}
      >
        Time Jar
      </Link>
      <Link 
        to="/apps/questions-game" 
        className={`transition-colors hover:text-primary ${
          currentPage === 'questions-game' ? 'text-primary font-medium' : 'text-muted-foreground'
        }`}
        onClick={() => setIsOpen(false)}
      >
        Questions Game
      </Link>
      <a 
        href="https://www.linkedin.com/in/thach-ho" 
        className="text-muted-foreground hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </a>
    </>
  )

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-2xl font-bold hover:text-primary transition-colors">
            Thach's Apps
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-6">
              <NavigationMenuItem>
                <NavLinks />
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
              <div className="flex flex-col space-y-6 mt-6">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}