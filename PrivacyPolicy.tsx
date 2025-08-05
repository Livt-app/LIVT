import { useState } from 'react';
import { ChevronLeft, ArrowRight, Shield, Eye, Lock, Database } from 'lucide-react';
import { Button } from './ui/button';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
            <div className="flex items-center justify-center space-x-3">
              <Shield className="text-luxury-primary" size={32} />
              <h2 className="text-4xl font-bold text-luxury-primary livt-glow-subtle">Privacy Policy</h2>
            </div>
            <p className="text-luxury-secondary">Last updated: January 2025</p>
            <p className="text-luxury-secondary max-w-2xl mx-auto">
              Your privacy is important to us. This privacy policy explains how LIVT collects, uses, and protects your information.
            </p>
          </div>

          {/* Privacy Content */}
          <div className="space-y-6">
            {/* Information We Collect */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Database className="text-luxury-primary" size={24} />
                <h3 className="text-2xl font-bold text-luxury-primary">1. Information We Collect</h3>
              </div>
              <div className="space-y-4 text-luxury-secondary">
                <h4 className="text-lg font-semibold text-luxury-primary">Personal Information</h4>
                <p>
                  When you create an account, we collect information such as your name, email address, date of birth, 
                  and profile information to personalize your fitness experience.
                </p>
                
                <h4 className="text-lg font-semibold text-luxury-primary">Fitness and Health Data</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Workout data (exercises, sets, reps, weights, duration)</li>
                  <li>Performance metrics (heart rate, calories burned, distance)</li>
                  <li>Body measurements and fitness goals</li>
                  <li>Sleep and recovery data (if connected to wearable devices)</li>
                  <li>Nutrition and hydration tracking</li>
                </ul>

                <h4 className="text-lg font-semibold text-luxury-primary">Usage Information</h4>
                <p>
                  We collect information about how you use LIVT, including features accessed, time spent in the app, 
                  and interactions with content and other users.
                </p>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="text-luxury-primary" size={24} />
                <h3 className="text-2xl font-bold text-luxury-primary">2. How We Use Your Information</h3>
              </div>
              <div className="space-y-4 text-luxury-secondary">
                <h4 className="text-lg font-semibold text-luxury-primary">Service Provision</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Create and maintain your account</li>
                  <li>Provide personalized workout and nutrition recommendations</li>
                  <li>Track your fitness progress and achievements</li>
                  <li>Enable social features and community interactions</li>
                  <li>Process payments for premium features and creator content</li>
                </ul>

                <h4 className="text-lg font-semibold text-luxury-primary">AI and Personalization</h4>
                <p>
                  We use your fitness data to train our AI systems to provide better workout recommendations, 
                  form analysis, and personalized coaching insights. This data is anonymized and aggregated.
                </p>

                <h4 className="text-lg font-semibold text-luxury-primary">Communication</h4>
                <p>
                  We may send you notifications about your workouts, achievements, community updates, 
                  and important service announcements. You can control these preferences in your settings.
                </p>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">3. Data Sharing and Disclosure</h3>
              <div className="space-y-4 text-luxury-secondary">
                <h4 className="text-lg font-semibold text-luxury-primary">With Your Consent</h4>
                <p>
                  We share your information when you explicitly choose to do so, such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Sharing workout achievements with the community</li>
                  <li>Connecting with trainers or workout partners</li>
                  <li>Participating in challenges or leaderboards</li>
                </ul>

                <h4 className="text-lg font-semibold text-luxury-primary">Service Providers</h4>
                <p>
                  We work with trusted third-party services to provide LIVT functionality:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment processors (Stripe) for subscription and creator payments</li>
                  <li>Cloud storage providers (AWS) for data storage and backup</li>
                  <li>Analytics services to improve app performance</li>
                  <li>Wearable device integrations (Apple Health, Google Fit, WHOOP)</li>
                </ul>

                <div className="bg-data-amber/10 border border-data-amber/20 p-4 rounded-xl">
                  <p className="text-data-amber font-semibold">Important:</p>
                  <p>We never sell your personal data to third parties for advertising or marketing purposes.</p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-3 mb-4">
                <Lock className="text-luxury-primary" size={24} />
                <h3 className="text-2xl font-bold text-luxury-primary">4. Data Security</h3>
              </div>
              <div className="space-y-4 text-luxury-secondary">
                <p>
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>End-to-end encryption for sensitive data transmission</li>
                  <li>Secure servers with regular security audits</li>
                  <li>Multi-factor authentication options</li>
                  <li>Regular data backups and recovery procedures</li>
                  <li>Staff access controls and security training</li>
                </ul>

                <div className="bg-data-green/10 border border-data-green/20 p-4 rounded-xl">
                  <p className="text-data-green font-semibold">Health Data Protection:</p>
                  <p>
                    Your fitness and health data is treated with extra care and stored using HIPAA-level security standards, 
                    even though LIVT is not a healthcare provider.
                  </p>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.5s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">5. Your Privacy Rights</h3>
              <div className="space-y-4 text-luxury-secondary">
                <h4 className="text-lg font-semibold text-luxury-primary">Access and Control</h4>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access all personal data we have about you</li>
                  <li>Correct or update your information</li>
                  <li>Delete your account and associated data</li>
                  <li>Export your fitness data</li>
                  <li>Control data sharing and privacy settings</li>
                </ul>

                <h4 className="text-lg font-semibold text-luxury-primary">Regional Privacy Laws</h4>
                <p>
                  If you're in the EU (GDPR), California (CCPA), or other regions with specific privacy laws, 
                  you have additional rights including data portability and the right to object to processing.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">6. Data Retention</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>We retain your information for as long as necessary to provide our services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Account Information:</strong> Until you delete your account</li>
                  <li><strong>Workout Data:</strong> Stored indefinitely to track long-term progress</li>
                  <li><strong>Usage Analytics:</strong> Aggregated data may be retained permanently</li>
                  <li><strong>Payment Information:</strong> Retained as required by financial regulations</li>
                </ul>
                
                <p>
                  When you delete your account, we remove your personal information within 30 days, 
                  except where required by law to retain certain records.
                </p>
              </div>
            </div>

            {/* Third-Party Integrations */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.7s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">7. Third-Party Integrations</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>LIVT integrates with various fitness and health platforms:</p>
                
                <h4 className="text-lg font-semibold text-luxury-primary">Wearable Devices</h4>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Apple Watch and HealthKit</li>
                  <li>Google Fit and Android Health</li>
                  <li>WHOOP, Fitbit, Garmin devices</li>
                  <li>Heart rate monitors and fitness trackers</li>
                </ul>

                <p>
                  When you connect these services, they may share data according to their own privacy policies. 
                  You can disconnect these integrations at any time in your account settings.
                </p>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">8. Cookies and Tracking</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Keep you logged in to your account</li>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze app performance and usage patterns</li>
                  <li>Provide personalized content recommendations</li>
                </ul>

                <p>
                  You can control cookie settings in your browser, but some features may not work properly if disabled.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '0.9s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">9. Children's Privacy</h3>
              <div className="space-y-4 text-luxury-secondary">
                <div className="bg-data-red/10 border border-data-red/20 p-4 rounded-xl">
                  <p className="text-data-red font-semibold">Age Requirement:</p>
                  <p>
                    LIVT is not intended for children under 13 years of age. We do not knowingly collect 
                    personal information from children under 13.
                  </p>
                </div>
                <p>
                  If you are between 13 and 18 years old, you may only use LIVT with parental consent. 
                  If we discover we have collected information from a child under 13, we will delete it immediately.
                </p>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '1.0s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">10. Changes to This Policy</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes by:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Posting the new policy on this page</li>
                  <li>Sending you an email notification</li>
                  <li>Providing an in-app notification</li>
                </ul>
                <p>
                  Changes become effective immediately upon posting. Your continued use of LIVT after any changes 
                  constitutes acceptance of the new privacy policy.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="onboarding-card p-6 slide-in" style={{ animationDelay: '1.1s' }}>
              <h3 className="text-2xl font-bold text-luxury-primary mb-4">11. Contact Us</h3>
              <div className="space-y-4 text-luxury-secondary">
                <p>If you have questions about this privacy policy or your data, please contact us:</p>
                <div className="bg-white/5 p-4 rounded-xl glassmorphism">
                  <p><strong>Email:</strong> privacy@livt.fit</p>
                  <p><strong>Data Protection Officer:</strong> dpo@livt.fit</p>
                  <p><strong>Address:</strong> LIVT Privacy Team</p>
                  <p>123 Fitness Ave, Suite 100</p>
                  <p>Athletic City, AC 12345</p>
                </div>
                <p>
                  We will respond to privacy-related inquiries within 30 days and will work with you to resolve any concerns.
                </p>
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