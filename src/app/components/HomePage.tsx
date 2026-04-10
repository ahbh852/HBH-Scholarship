import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Video, User } from "lucide-react";
import Slider from "react-slick";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FUNDRAISING_CONFIG } from "../config/fundraising";
import photo1 from "figma:asset/9515b0536c2a274660cabf7346b47efe028c5f34.png";
import photo2 from "figma:asset/5832a387e4439abc873fc90aa0c0f564003e2b28.png";
import photo3 from "figma:asset/52285e3ff400ba58185192f187125e91ed9da851.png";
import photo4 from "figma:asset/3892f51d3035974e9ae57f341ef94d5ba5eea86e.png";
import photo5 from "figma:asset/d10338e725b11870cd685fd1a6c8245de574a1c9.png";
import photo6 from "figma:asset/ab6326901281f71f9ca97afa3496c8b2c3a05b80.png";
import photo7 from "figma:asset/045a84521a67bd90378bb31fdb226294b3b9819a.png";
import photo8 from "figma:asset/f1e28cc9c5f804d782acb54aae5280c7a20fced5.png";
import photo9 from "figma:asset/bc8b4bef25f29bb03405b7af1cbd27ec20ed8c50.png";
import photo10 from "figma:asset/0ef3a5cfa2aa07542726c55e2b4f4d061fda7b9e.png";
import jortaePhoto from "figma:asset/acb882c3f88a531b37c270ea50c4d15dc75f33c3.png";
import daviPhoto from "figma:asset/ac0dfa5727fae0c2d432cb5e4bd0ddcd0db8f3dd.png";
import nariratPhoto from "figma:asset/184e48a5c4b8bec9b07706f8fac337c6d9568e4a.png";
import rattanaPhoto from "figma:asset/61ca0cdd2b44cb5fb48de177d56063be9a6b4d39.png";
import rutrapeePhoto from "figma:asset/86e8f3b486d4fcf36d5a0c190af2e6f2c519f9a9.png";
import sininatPhoto from "figma:asset/ec94d288d2f38bd807937ea5df28e577978688e7.png";
import simonPhoto from "figma:asset/d879de26a96a769e52d3c62ada955dfb836b1fbf.png";
import ajimaPhoto from "figma:asset/9425a20e33c113ae7fe2c95e78caf0b3949c4a5e.png";
import recipient1 from "figma:asset/da51f975410305f76625c76c93ae14236ba30b74.png";
import recipient2 from "figma:asset/346602b7ae731c28a1f6d6254106f5710f5e11d7.png";
import recipient3 from "figma:asset/7941ac28f2d28050445f4acd5a918772a5751379.png";
import recipient4 from "figma:asset/91efaa6b2484336c190efd606dc795d7cc62efc7.png";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  // Get fundraising data from config (single source of truth)
  const { fundraisingGoal, currentAmount } = FUNDRAISING_CONFIG;
  const progressPercentage = (currentAmount / fundraisingGoal) * 100;

  // Slideshow settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    pauseOnHover: false,
    arrows: false,
  };

  // Photo gallery images
  const galleryImages = [
    {
      src: photo1,
      caption: "Community gathering at our partner school"
    },
    {
      src: photo2,
      caption: "Joyful moments on the playground"
    },
    {
      src: photo3,
      caption: "Building lasting relationships with students"
    },
    {
      src: photo4,
      caption: "The beautiful Thai-Burmese border landscape"
    },
    {
      src: photo5,
      caption: "Student assembly in the mountain community"
    },
    {
      src: photo6,
      caption: "Inside the classroom where dreams begin"
    },
    {
      src: photo7,
      caption: "Celebrating together with our scholarship students"
    },
    {
      src: photo8,
      caption: "Learning with joy and laughter"
    },
    {
      src: photo9,
      caption: "Active playtime at our partner school"
    },
    {
      src: photo10,
      caption: "Our community family - students, teachers, and volunteers together"
    }
  ];

  // 2026 Scholars data
  const scholars2026 = [
    { 
      name: "Jortae", 
      university: "Mae Sot Technical College", 
      field: "Mechanical Engineering",
      photoUrl: jortaePhoto
    },
    { 
      name: "Narirat", 
      university: "Rajamangala University of Technology", 
      field: "Education",
      photoUrl: nariratPhoto
    },
    { 
      name: "Rattana", 
      university: "Rajamangala University of Technology", 
      field: "Marketing",
      photoUrl: rattanaPhoto
    },
    { 
      name: "Davi", 
      university: "Mae Sot Technical College", 
      field: "Mechanical Engineering",
      photoUrl: daviPhoto
    },
    { 
      name: "Rutrapee", 
      university: "Nursing School", 
      field: "Nursing",
      photoUrl: rutrapeePhoto
    },
    { 
      name: "Ajima", 
      university: "Mae Sot Technical College", 
      field: "Education",
      photoUrl: ajimaPhoto
    },
    { 
      name: "Sininat", 
      university: "Mae Sot Technical College", 
      field: "Education",
      photoUrl: sininatPhoto
    },
    { 
      name: "Simon", 
      university: "Mae Sot Technical College", 
      field: "Mechanical Engineering",
      photoUrl: simonPhoto
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Slideshow */}
      <section className="relative h-[600px] overflow-hidden">
        <Slider {...sliderSettings}>
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    The Hui Bon Hoa Scholarship
                  </h1>
                  <p className="text-xl sm:text-2xl mb-8 text-gray-100 drop-shadow-md">
                    Empowering youth through education
                  </p>
                  <Button 
                    onClick={() => onNavigate("donate")}
                    className="bg-[#e67e50] hover:bg-white text-white hover:text-[#2d3e50] px-8 py-6 text-lg shadow-xl transition-colors"
                    size="lg"
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Mission Section */}
      <section className="bg-[#2d3e50] px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Our Mission & Vision</h2>
          <p className="text-white text-[20px] text-justify mb-8">We empower youth from marginalized communities in Southeast Asia through access to higher education and the opportunities that follow, so they can build brighter futures for themselves, their families, and their communities. We envision a world where every young person's roadmap isn't filled with dead ends, but milestones, hope, and purpose. </p>
          
          {/* Mission Video */}
          <div className="overflow-hidden shadow-md rounded-lg">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/mrQeVXo5Q-8"
                title="Hui Bon Hoa Scholarship Mission Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Scholars Section - Combined with Progress Bar */}
      <section className="bg-[#e67e50] px-[32px] pt-[32px] pb-[64px]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mx-[0px] mt-[0px] mb-[20px]">2026 Scholarship Recipients</h2>
          
          {/* Placeholder Scholar Avatars */}
          <div className="grid grid-cols-2 md:flex md:justify-center gap-6 md:gap-26 mb-12 max-w-md md:max-w-none mx-auto">
            <div className="flex flex-col items-center">
              <img 
                src={recipient3} 
                alt="2026 Scholarship Recipient" 
                className="w-32 h-32 md:w-48 md:h-48 object-cover mb-3"
                style={{ objectPosition: 'center 20%' }}
              />
              <p className="text-white font-medium text-base md:text-lg">Pansikorn</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src={recipient4} 
                alt="2026 Scholarship Recipient" 
                className="w-32 h-32 md:w-48 md:h-48 object-cover mb-3"
              />
              <p className="text-white font-medium text-base md:text-lg">Rinda</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src={recipient1} 
                alt="2026 Scholarship Recipient" 
                className="w-32 h-32 md:w-48 md:h-48 object-cover mb-3"
              />
              <p className="text-white font-medium text-base md:text-lg">Chalalai</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src={recipient2} 
                alt="2026 Scholarship Recipient" 
                className="w-32 h-32 md:w-48 md:h-48 object-cover mb-3"
              />
              <p className="text-white font-medium text-base md:text-lg">Farung</p>
            </div>
          </div>
          
          {/* Recipients Video */}
          <div className="overflow-hidden shadow-md rounded-lg mb-12">
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/z0nB19SE7OA"
                title="Hui Bon Hoa Scholarship Recipients Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* 2026 Fundraising Progress */}
          <div className="mb-0 rounded-full px-4 md:px-8 py-6">
            <div className="mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 text-center md:text-left">2026 Hui Bon Hoa Scholarship Fund</h3>
              
              <div className="flex justify-center md:justify-end mb-3">
                <div className="text-center md:text-right">
                  <span className="text-3xl md:text-2xl font-bold text-white block">
                    ${currentAmount.toLocaleString()}
                  </span>
                  <span className="text-base md:text-sm text-white">
                    of ${fundraisingGoal.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
            
            <Progress 
              value={progressPercentage} 
              className="h-3 mb-2 border-2 border-white rounded-full"
            />
            
            <p className="text-xs text-white/90 text-center md:text-left">
              {Math.round(progressPercentage)}% funded • {fundraisingGoal - currentAmount > 0 ? `$${(fundraisingGoal - currentAmount).toLocaleString()} to go` : 'Goal reached!'}
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#2d3e50] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Support a Scholar Today!</h2>
          <p className="text-xl mb-8 text-gray-100">
            No admin costs. No platform fees. No deductions.
            <br />
            Every dollar goes directly towards a scholar's tuition.
          </p>
          <Button 
            onClick={() => onNavigate("donate")}
            className="bg-[#e67e50] hover:bg-[#d66e40] text-white px-8 py-6 text-lg"
            size="lg"
          >Donate Now</Button>
        </div>
      </section>
    </div>
  );
}