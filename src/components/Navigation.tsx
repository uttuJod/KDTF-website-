import { Button } from "../ui/button";

export const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AIRT</span>
            </div>
            <span className="text-2xl font-bold text-foreground">
              AIR<span className="text-red-600">T</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#events" className="text-foreground hover:text-red-600 transition-colors font-medium">
              Events
            </a>
            <a href="#news" className="text-foreground hover:text-red-600 transition-colors font-medium">
              News
            </a>
            <a href="#programs" className="text-foreground hover:text-red-600 transition-colors font-medium">
              Programs
            </a>
            <a href="#vision" className="text-foreground hover:text-red-600 transition-colors font-medium">
              Vision
            </a>
            <a href="#login" className="text-foreground hover:text-red-600 transition-colors font-medium">
              Login
            </a>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6">
              Donate
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
