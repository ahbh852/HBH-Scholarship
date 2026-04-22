import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { User } from "lucide-react";
import { toast } from "sonner";
import { FUNDRAISING_CONFIG } from "../config/fundraising";
import recipient1 from "figma:asset/da51f975410305f76625c76c93ae14236ba30b74.png";
import recipient2 from "figma:asset/346602b7ae731c28a1f6d6254106f5710f5e11d7.png";
import recipient3 from "figma:asset/7941ac28f2d28050445f4acd5a918772a5751379.png";
import recipient4 from "figma:asset/91efaa6b2484336c190efd606dc795d7cc62efc7.png";

export function DonatePage() {
  // Get fundraising data from config (single source of truth)
  const { fundraisingGoal, currentAmount } = FUNDRAISING_CONFIG;
  const progressPercentage = (currentAmount / fundraisingGoal) * 100;

  const copyToClipboard = (text: string, accountType: string) => {
    // Fallback method using textarea
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
      document.execCommand('copy');
      toast.success(`${accountType} details copied to clipboard!`);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const monzoBankDetails = `UK Monzo Account (for GBP)
Account Name: Alexandre Hoa
Sort Code: 04-00-04
Account Number: 30904958
IBAN: GB47MONZO4000430904958`;

  const hsbcBankDetails = `HK HSBC Account (for HKD or USD)
Account Name: Alexandre G.P. Hui Bon Hoa
Account Number: 834 043622 833
SWIFT Code: HSBCHKHHHKH
Bank Name: The Hongkong and Shanghai Banking Corporation Limited
Bank Branch: Park Lane`;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-[#2d3e50] mb-3">Support a Scholar</h1>
          <h2 className="text-xl text-gray-600">
            No admin costs. No platform fees. <br className="md:hidden" />No deductions.
            <br />
            Every dollar goes directly towards a scholar's tuition.
          </h2>
        </div>
      </div>

      {/* 2026 Recipients & Fundraising Section */}
      <section className="bg-[#e67e50] px-[32px] pt-[32px] pb-[64px] mb-8">
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
          <div className="overflow-hidden shadow-md rounded-lg mb-12 max-w-2xl mx-auto">
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
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 text-center whitespace-nowrap">2026 HBH Scholarship Fund</h3>
              
              <div className="flex justify-center mb-3">
                <div className="text-center">
                  <span className="text-3xl md:text-2xl font-bold text-white block">
                    £{currentAmount.toLocaleString()}
                  </span>
                  <span className="text-base md:text-sm text-white">
                    of £{fundraisingGoal.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
            
            <Progress 
              value={progressPercentage} 
              className="h-3 mb-2 border-2 border-white rounded-full"
            />
            
            
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bank Transfer Information */}
        <Card className="p-6 shadow-lg mb-8">
          <h2 className="text-2xl font-bold text-[#2d3e50] mb-2">Make a Donation via Bank Transfer</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-900"><strong>Instructions:</strong> Please complete a bank transfer to one of the accounts below. After you've made your donation, we appreciate you sending us an email or message with your transaction details so we can acknowledge your generous contribution. Thank you!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex flex-col">
              <h3 className="font-semibold text-[#2d3e50] mb-2">UK Monzo Account (for GBP)</h3>
              <div className="space-y-1 text-sm text-gray-700 flex-1">
                <p><span className="font-medium">Account Name:</span> Alexandre Hoa</p>
                <p><span className="font-medium">Sort Code:</span> 04-00-04</p>
                <p><span className="font-medium">Account Number:</span> 30904958</p>
                <p><span className="font-medium">IBAN:</span> GB47MONZO4000430904958</p>
              </div>
              <Button
                variant="outline"
                className="w-full mt-3 border-[#2d3e50] text-[#2d3e50] hover:bg-[#2d3e50] hover:text-white"
                onClick={() => copyToClipboard(monzoBankDetails, "Monzo")}
              >
                Copy Details
              </Button>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 flex flex-col">
              <h3 className="font-semibold text-[#2d3e50] mb-2">HK HSBC Account (for HKD or USD)</h3>
              <div className="space-y-1 text-sm text-gray-700 flex-1">
                <p><span className="font-medium">Account Name:</span> Alexandre G.P. Hui Bon Hoa</p>
                <p><span className="font-medium">Account Number:</span> 834 043622 833</p>
                <p><span className="font-medium">SWIFT Code:</span> HSBCHKHHHKH</p>
                <p><span className="font-medium">Bank Name:</span> The Hongkong and Shanghai Banking Corporation Limited</p>
                <p><span className="font-medium">Bank Branch:</span> Park Lane</p>
              </div>
              <Button
                variant="outline"
                className="w-full mt-3 border-[#2d3e50] text-[#2d3e50] hover:bg-[#2d3e50] hover:text-white"
                onClick={() => copyToClipboard(hsbcBankDetails, "HSBC")}
              >
                Copy Details
              </Button>
            </div>
          </div>

          {/* Why Bank Transfer */}
          <div className="bg-blue-50/60 border-2 border-blue-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-[#2d3e50] mb-0.5">Why Bank Transfer?</h3>
            <p className="text-[#2d3e50]">We know bank transfers aren't as convenient as clicking a button on a crowdfunding or payment platform. However, we use direct bank transfers to ensure <strong>100%</strong> of your donation reaches our scholars. Unlike platforms that charge fees (typically 2-3%), bank transfers allow us to maximize every dollar you give. We truly appreciate you taking the extra few minutes to make this possible.</p>
          </div>
        </Card>

        {/* Donation Tiers */}
        <Card className="p-8 shadow-lg mb-8 bg-white border-2 border-gray-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#2d3e50] mb-2">DONATION TIERS</h2>
            <div className="w-full h-1 bg-gradient-to-r from-[#e67e50] to-[#2d3e50] rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Tier 1 - Supporter */}
            <Card className="p-6 bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-[#e67e50] hover:shadow-xl transition-shadow">
              <div className="text-center mb-0">
                <div className="inline-block bg-white rounded-full px-5 py-3 mb-3 shadow-md">
                  <p className="text-xl font-bold text-gray-900 text-center whitespace-nowrap">£25+</p>
                </div>
                <h3 className="text-2xl font-bold text-[#e67e50]">Supporter</h3>
              </div>
              {/* Invisible spacer to match "including" text height */}
              <p className="text-sm font-semibold mt-1 mb-1 opacity-0">Placeholder</p>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="text-[#e67e50] mr-2 mt-1">+</span>
                  <span>Personal updates on the scholars' journey</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#e67e50] mr-2 mt-1">+</span>
                  <span>Appear on the final Donor Recognition List</span>
                </li>
              </ul>
            </Card>

            {/* Tier 2 - Advocate */}
            <Card className="p-6 bg-gradient-to-br from-pink-100 to-pink-50 border-2 border-pink-500 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
              </div>
              <div className="text-center mb-0">
                <div className="bg-white rounded-full px-5 py-3 mb-3 shadow-md mx-auto max-w-fit">
                  <p className="text-xl font-bold text-gray-900 text-center whitespace-nowrap">£100+</p>
                </div>
                <h3 className="text-2xl font-bold text-pink-600">Advocate</h3>
              </div>
              <p className="text-sm font-semibold text-pink-700 mt-1 mb-1">"Supporter" including:</p>
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2 mt-1">+</span>
                  <span>A signature handmade Thai bracelet from a scholar</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2 mt-1">+</span>
                  <span>Personalized video from a scholar</span>
                </li>
              </ul>
            </Card>

            {/* Tier 3 - Philanthropist */}
            <Card className="p-6 bg-gradient-to-br from-blue-900 to-blue-800 border-2 border-[#2d3e50] hover:shadow-xl transition-shadow text-white">
              <div className="text-center mb-0">
                <div className="inline-block bg-white rounded-full px-5 py-3 mb-3 shadow-md min-w-[120px]">
                  <p className="text-xl font-bold text-gray-900 text-center whitespace-nowrap">£500+</p>
                </div>
                <h3 className="text-2xl font-bold text-[#e67e50]">Philanthropist</h3>
              </div>
              <p className="text-sm font-semibold text-blue-200 mt-1 mb-1">"Advocate" including:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#e67e50] mr-2 mt-1">+</span>
                  <span>HBH Scholarship Water Bottle</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#e67e50] mr-2 mt-1">+</span>
                  <span>A seat on the admissions committee board</span>
                </li>
              </ul>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}