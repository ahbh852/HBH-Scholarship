import { Button } from "./ui/button";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="bg-[#2d3e50] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-20">
          <div className="flex gap-4">
            <Button
              variant={currentPage === "home" ? "secondary" : "ghost"}
              onClick={() => onNavigate("home")}
              className={currentPage === "home" ? "bg-white text-[#2d3e50] text-lg px-6 py-6" : "bg-[#e67e50] hover:bg-white text-white hover:text-[#2d3e50] transition-colors text-lg px-6 py-6"}
              size="lg"
            >
              Home
            </Button>
            <Button
              variant={currentPage === "donate" ? "secondary" : "ghost"}
              onClick={() => onNavigate("donate")}
              className={currentPage === "donate" ? "bg-white text-[#2d3e50] text-lg px-6 py-6" : "bg-[#e67e50] hover:bg-white text-white hover:text-[#2d3e50] transition-colors text-lg px-6 py-6"}
              size="lg"
            >
              Donate
            </Button>
            <Button
              variant={currentPage === "recipients" ? "secondary" : "ghost"}
              onClick={() => onNavigate("recipients")}
              className={currentPage === "recipients" ? "bg-white text-[#2d3e50] text-lg px-6 py-6" : "bg-[#e67e50] hover:bg-white text-white hover:text-[#2d3e50] transition-colors text-lg px-6 py-6"}
              size="lg"
            >Scholars</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}