import { Link } from 'react-router-dom'

interface NavbarProps {
  currentPage?: string
}

export default function Navbar({ currentPage }: NavbarProps) {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold">
            Thach's Apps
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`hover:text-primary ${currentPage === 'home' ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              Home
            </Link>
            <Link 
              to="/apps/time-jar" 
              className={`hover:text-primary ${currentPage === 'time-jar' ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              Time Jar
            </Link>
            <Link 
              to="/apps/questions-game" 
              className={`hover:text-primary ${currentPage === 'questions-game' ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              Questions Game
            </Link>
            <a 
              href="https://www.linkedin.com/in/thach-ho" 
              className="text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}