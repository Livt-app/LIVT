import { useState } from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface TermsAndConditionsProps {
  onBack: () => void;
}

export function TermsAndConditions({ onBack }: TermsAndConditionsProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">
      {/* Ultra Dark Background Effects - Matching Onboarding */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/3 rounded-full blur-3xl float-animation" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/2 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/1 to-transparent rounded-full" />
      </div>

      {/* Header */}
      <div className="pt-12 pb-8 px-4 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-white/5 rounded-full transition-colors glassmorphism hover-lift flex items-center"
          >
            <ChevronLeft size={24} className="text-luxury-primary mr-2" />
            <span className="text-luxury-primary font-semibold">Back</span>
          </button>
          <div className="text-center flex-1">
            <h1 className="text-xl font-bold livt-logo">LIVT</h1>
          </div>
          <div className="w-20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 relative z-10 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}
          <div className="text-center space-y-6 counter-animate mb-8">
            <h2 className="text-4xl font-bold text-luxury-primary livt-glow-subtle">Terms & Conditions</h2>
            <p className="text-luxury-secondary">Last updated: January 2025</p>
          </div>

          {/* Terms Content */}
          <div className="space-y-6">
            {/* Agreement Section */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">1. Agreement to Terms</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>
                  By accessing and using LIVT ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                <p>
                  LIVT is a fitness platform that connects athletes, trainers, and fitness enthusiasts through personalized training programs, 
                  performance tracking, and community features.
                </p>
              </div>
            </div>

            {/* Use License */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">2. Use License</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>
                  Permission is granted to temporarily access LIVT for personal, non-commercial transitory viewing only. 
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>attempt to decompile or reverse engineer any software contained on LIVT</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </div>

            {/* User Accounts */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">3. User Accounts</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                  You are responsible for safeguarding the password and for maintaining the confidentiality of your account.
                </p>
                <p>
                  You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware 
                  of any breach of security or unauthorized use of your account.
                </p>
              </div>
            </div>

            {/* Content and Conduct */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">4. Content and Conduct</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>
                  Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, 
                  videos, or other material. You are responsible for the content that you post to the Service.
                </p>
                <p>By posting content to LIVT, you represent and warrant that:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The content is yours (you own it) or you have the right to use it</li>
                  <li>The content does not violate, infringe or misappropriate the rights of any third party</li>
                  <li>The content is not harmful, offensive, or promotes illegal activities</li>
                  <li>The content complies with fitness and health safety guidelines</li>
                </ul>
              </div>
            </div>

            {/* Health and Fitness Disclaimer */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">5. Health and Fitness Disclaimer</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p className="font-semibold text-data-amber">
                  IMPORTANT: Consult your physician before beginning any exercise program.
                </p>
                <p>
                  The fitness programs, workouts, and nutritional information provided on LIVT are for educational and entertainment purposes only 
                  and are not intended as a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <p>
                  You acknowledge that participating in any fitness program involves risk of injury. You assume full responsibility for any risks, 
                  injuries or damages, known or unknown, which you might incur as a result of participating in the program.
                </p>
              </div>
            </div>

            {/* Creator Terms */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">6. Creator Terms</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>
                  If you are a fitness creator or trainer using LIVT to monetize your content, additional terms apply:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You must have appropriate certifications and qualifications to provide fitness guidance</li>
                  <li>You are responsible for the safety and effectiveness of your programs</li>
                  <li>LIVT takes a commission on earnings as outlined in the Creator Agreement</li>
                  <li>You retain ownership of your content but grant LIVT license to display and distribute it</li>
                </ul>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.7s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">7. Payment Terms</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>
                  Paid subscriptions, training programs, and other premium features are billed in advance on a recurring basis. 
                  You will be charged the subscription fee at the beginning of each billing period.
                </p>
                <p>
                  Refunds are handled on a case-by-case basis. Contact our support team within 7 days of purchase for refund requests.
                </p>
              </div>
            </div>

            {/* Privacy and Data */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">8. Privacy and Data</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, 
                  to understand our practices.
                </p>
                <p>
                  We collect fitness data, usage patterns, and personal information to provide and improve our services. 
                  This data may be used to personalize your experience and provide insights.
                </p>
              </div>
            </div>

            {/* Termination */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.9s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">9. Termination</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>
                  We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, 
                  including without limitation if you breach the Terms.
                </p>
                <p>
                  Upon termination, your right to use the Service will cease immediately. If you wish to terminate your account, 
                  you may simply discontinue using the Service.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '1.0s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">10. Changes to Terms</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                  If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
                </p>
                <p>
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service 
                  after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '1.1s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">11. Contact Information</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
                <div className="bg-white/5 p-4 rounded-xl glassmorphism">
                  <p><strong>Email:</strong> legal@livt.fit</p>
                  <p><strong>Address:</strong> LIVT Legal Department</p>
                  <p>123 Fitness Ave, Suite 100</p>
                  <p>Athletic City, AC 12345</p>
                </div>
              </div>
            </div>

            {/* Acceptance Button */}
            <div className="text-center pt-8">
              <Button
                onClick={onBack}
                className="glow-button px-12 py-4 text-lg font-semibold rounded-xl hover-lift scale-in"
              >
                I Understand
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}