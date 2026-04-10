import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { DonatePage } from "./components/DonatePage";
import { RecipientsPage } from "./components/RecipientsPage";
import { Toaster } from "./components/ui/sonner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === "home" && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === "donate" && <DonatePage />}
      {currentPage === "recipients" && <RecipientsPage />}
      
      <Toaster />
      
      {/* Footer */}
      <footer className="bg-[#2d3e50] text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <p className="font-semibold">The Hui Bon Hoa Scholarship</p>
              <p className="text-sm text-gray-300">Empowering youth through education</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-300">© 2026 The Hui Bon Hoa Scholarship. All rights reserved.</p>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}