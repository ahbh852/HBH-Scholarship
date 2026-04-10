import { Card } from "./ui/card";
import { GraduationCap, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import jortaePhoto from "figma:asset/acb882c3f88a531b37c270ea50c4d15dc75f33c3.png";
import daviPhoto from "figma:asset/ac0dfa5727fae0c2d432cb5e4bd0ddcd0db8f3dd.png";
import nariratPhoto from "figma:asset/184e48a5c4b8bec9b07706f8fac337c6d9568e4a.png";
import rattanaPhoto from "figma:asset/61ca0cdd2b44cb5fb48de177d56063be9a6b4d39.png";
import rutrapeePhoto from "figma:asset/86e8f3b486d4fcf36d5a0c190af2e6f2c519f9a9.png";
import sininatPhoto from "figma:asset/ec94d288d2f38bd807937ea5df28e577978688e7.png";
import simonPhoto from "figma:asset/d879de26a96a769e52d3c62ada955dfb836b1fbf.png";
import ajimaPhoto from "figma:asset/9425a20e33c113ae7fe2c95e78caf0b3949c4a5e.png";

export function RecipientsPage() {
  const recipientsByYear = [
    {
      year: 2023,
      count: 1,
      students: [
        { 
          name: "Jortae", 
          university: "Mae Sot Technical College", 
          field: "Mechanical Engineering",
          photoUrl: jortaePhoto
        },
      ],
    },
    {
      year: 2024,
      count: 4,
      students: [
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
      ],
    },
    {
      year: 2025,
      count: 3,
      students: [
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
      ],
    },
  ];

  const totalScholars = recipientsByYear.reduce((sum, year) => sum + year.count, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e67e50] rounded-full mb-4">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-[#2d3e50] mb-3">HBH Scholars</h1>
          
          <div className="inline-flex items-center gap-2 bg-[#2d3e50] text-white px-6 py-3 rounded-lg">
            <Award className="h-5 w-5" />
            <span className="text-lg font-semibold">{totalScholars} Students Supported</span>
          </div>
        </div>

        {/* Recipients by Year */}
        <div className="space-y-8">
          {recipientsByYear.reverse().map((yearData) => (
            <div key={yearData.year}>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-3xl font-bold text-[#2d3e50]">{yearData.year}</h2>
              </div>
              
              <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-3">
                {yearData.students.map((student, index) => (
                  <Card 
                    key={index} 
                    className="p-3 shadow-md hover:shadow-lg transition-shadow bg-[#2d3e50]"
                  >
                    {student.photoUrl && (
                      <div>
                        <ImageWithFallback
                          src={student.photoUrl}
                          alt={`${student.name} headshot`}
                          className="w-full h-40 object-contain rounded-lg"
                        />
                      </div>
                    )}
                    <div className="text-center -mt-1">
                      <h3 className="text-base font-bold text-white mb-1">
                        {student.name}
                      </h3>
                      <div className="space-y-1 text-xs text-gray-200">
                        <p>{student.university}</p>
                        <p>
                          <span className="font-medium">Field:</span>{" "}
                          {student.field}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        
      </div>
    </div>
  );
}