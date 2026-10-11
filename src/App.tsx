import React, { useState, useEffect } from 'react';
import {
  Phone,
  MapPin,
  Clock,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  MessageSquare,
  AlertCircle,
  ExternalLink,
  Heart,
  Navigation,
  Info
} from 'lucide-react';

// Tooth Brand Mark SVG Icon for Dr M Dental Clinic
function ToothIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2C7.8 2 5.5 4.8 5.5 8C5.5 10.4 6.7 13.1 7.4 15.3C8.1 17.5 8.7 20.3 10.1 21.6C10.6 22 11.2 22 11.7 21.5C12.4 20.8 12.5 18.2 12.5 16.5C12.5 16.2 12.8 16 13 16C13.2 16 13.5 16.2 13.5 16.5C13.5 18.2 13.6 20.8 14.3 21.5C14.8 22 15.4 22 15.9 21.6C17.3 20.3 17.9 17.5 18.6 15.3C19.3 13.1 20.5 10.4 20.5 8C20.5 4.8 18.2 2 14 2C13.2 2 12.6 2.4 12 2.7C11.4 2.4 10.8 2 10 2H12Z" />
    </svg>
  );
}

// WhatsApp Icon for floating quick action
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.475-.15-.675.15-.2.301-.775.979-.95 1.18-.175.201-.35.226-.651.076-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.78-1.671-2.081-.175-.3-.019-.462.132-.612.136-.135.301-.35.451-.526.15-.175.2-.301.3-.501.1-.2.05-.376-.025-.526-.075-.15-.676-1.63-.926-2.232-.244-.588-.493-.508-.676-.518-.175-.009-.375-.01-.576-.01s-.525.075-.8.375c-.275.3-1.05 1.027-1.05 2.504 0 1.478 1.076 2.906 1.226 3.106.15.201 2.118 3.235 5.132 4.537.717.31 1.277.495 1.713.633.72.229 1.376.197 1.895.12.578-.087 1.78-.727 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.275-.201-.575-.351zM12.04 2C6.54 2 2.08 6.458 2.08 11.956c0 1.761.46 3.48 1.334 4.996L2 22l5.21-1.368c1.46.796 3.1 1.216 4.83 1.216 5.5 0 9.96-4.458 9.96-9.956C22 6.458 17.54 2 12.04 2z" />
    </svg>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Dental Implants');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'clinic' | 'treatments' | 'transformations'>('all');
  const [lightboxImage, setLightboxImage] = useState<{ url: string; title: string; category: string } | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: 'Morning (10:00 AM - 1:00 PM)',
    service: 'Dental Implants',
    notes: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const clinicPhone = '079817 26790';
  const cleanPhone = '917981726790';
  const plusCode = '9FR5+PR Hyderabad, Telangana';
  const clinicAddress = 'Shop No. 11-3, 671/1, Jamia Masjid Rd, near Hadi Hospital, Bazar Ghat, New Mallepally, Hyderabad, Telangana 500001';

  // Scroll spy to highlight active nav link
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'doctors', 'process', 'gallery', 'testimonials', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText(plusCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  const openBookingFor = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
      setFormData(prev => ({ ...prev, service: serviceName }));
    }
    setAppointmentModalOpen(true);
  };

  const constructWhatsAppMessage = () => {
    const text = `Hello Dr M Dental Clinic & Implant Centre, I would like to request an appointment:
Name: ${formData.name || 'Patient'}
Phone: ${formData.phone || 'Provided via phone'}
Service: ${formData.service || selectedService}
Preferred Date: ${formData.date || 'Earliest available'}
Time Slot: ${formData.timeSlot}
Notes: ${formData.notes || 'None'}`;
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  };

  // Services list according to user instructions
  const servicesList = [
    {
      id: 'implants',
      title: 'Dental Implants',
      desc: 'Permanent titanium root replacements with natural zirconia crowns. Complete single-tooth to full-mouth teeth restoration.',
      featured: true,
      tag: 'Centre Specialty',
    },
    {
      id: 'rct',
      title: 'Root Canal Treatment',
      desc: 'Gentle, single-sitting endodontic therapy using motorized rotaries and digital apex locators to eliminate severe toothache.',
      featured: false,
    },
    {
      id: 'scaling',
      title: 'Teeth Cleaning and Scaling',
      desc: 'Deep ultrasonic plaque removal and enamel polishing for fresh breath, healthy gums, and removal of stubborn stains.',
      featured: false,
    },
    {
      id: 'whitening',
      title: 'Teeth Whitening',
      desc: 'Safe, in-office laser and chemical whitening procedures to visibly brighten discolored teeth by multiple shades.',
      featured: false,
    },
    {
      id: 'braces',
      title: 'Braces and Aligners',
      desc: 'Correction of crowded teeth, overbites, and gaps with traditional metal/ceramic braces or invisible clear aligners.',
      featured: false,
    },
    {
      id: 'crowns',
      title: 'Crowns and Bridges',
      desc: 'High-strength CAD/CAM zirconia and ceramic restorations to protect damaged teeth and bridge missing gaps seamlessly.',
      featured: false,
    },
    {
      id: 'dentures',
      title: 'Dentures',
      desc: 'Custom-molded full and partial flexible dentures designed for maximum chewing comfort, stability, and natural aesthetics.',
      featured: false,
    },
    {
      id: 'extraction',
      title: 'Tooth Extraction & Wisdom Tooth',
      desc: 'Atraumatic surgical and simple extractions for impacted wisdom teeth with quick recovery and minimal postoperative discomfort.',
      featured: false,
    },
    {
      id: 'cosmetic',
      title: 'Smile Designing & Cosmetic Dentistry',
      desc: 'Comprehensive aesthetic smile enhancement including porcelain veneers, composite laminates, and tooth contouring.',
      featured: false,
    },
    {
      id: 'pediatric',
      title: 'Pediatric Dentistry',
      desc: 'Child-friendly dental checkups, cavity restorations, fluoride varnishes, and preventive sealants in a soothing atmosphere.',
      featured: false,
    },
    {
      id: 'gum',
      title: 'Gum Treatment',
      desc: 'Specialized periodontal care, deep curettage, and flap therapy to treat bleeding gums, gingivitis, and loose teeth.',
      featured: false,
    },
    {
      id: 'fillings',
      title: 'Dental Fillings',
      desc: 'Tooth-colored composite resins that bond directly with the tooth structure to restore decayed or chipped teeth invisibly.',
      featured: false,
    },
  ];

  // Gallery items
  const galleryItems = [
    {
      id: 1,
      category: 'clinic',
      title: 'Main Dental Operatory',
      subtitle: 'Modern sterilization & high-precision hydraulic chair',
      svgType: 'chair',
    },
    {
      id: 2,
      category: 'treatments',
      title: 'Implant Placement Suite',
      subtitle: 'Dedicated surgical unit with 3D digital imaging support',
      svgType: 'implant',
    },
    {
      id: 3,
      category: 'transformations',
      title: 'Full Anterior Smile Restoration',
      subtitle: 'Complete midline correction and ceramic crowns',
      svgType: 'smile',
    },
    {
      id: 4,
      category: 'clinic',
      title: 'Sterilization & Autoclave Bay',
      subtitle: 'Class-B medical grade autoclave and sterile instrument packaging',
      svgType: 'hygiene',
    },
    {
      id: 5,
      category: 'treatments',
      title: 'Rotary Endodontic System',
      subtitle: 'Single-visit painless root canal therapy technology',
      svgType: 'rct',
    },
    {
      id: 6,
      category: 'transformations',
      title: 'Diastema Gap Closure & Veneers',
      subtitle: 'Natural aesthetic contouring for front teeth gaps',
      svgType: 'alignment',
    },
  ];

  // Testimonials (Reflecting authentic sentiment from 170 Google Reviews)
  const testimonials = [
    {
      name: 'Syed Abdul Rahman',
      area: 'Bazar Ghat, Hyderabad',
      type: 'Google Review · Verified Patient',
      treatment: 'Dental Implant & Crown',
      comment:
        'Dr. M is extraordinarily patient and gentle. I had severe hesitation regarding getting a dental implant done, but the procedure was completely painless. Being open until 10 PM made evening follow-ups after work so convenient.',
    },
    {
      name: 'Farhana Begum',
      area: 'New Mallepally, Hyderabad',
      type: 'Google Review · Verified Patient',
      treatment: 'Root Canal Treatment',
      comment:
        'Came with excruciating toothache late in the evening. The doctor took an X-ray right away and performed a smooth root canal treatment. Relief was immediate and they did not charge exorbitant amounts. Very clean clinic!',
    },
    {
      name: 'Mohammed Rizwan',
      area: 'Mehdipatnam, Hyderabad',
      type: 'Google Review · Verified Patient',
      treatment: 'Teeth Cleaning & Scaling',
      comment:
        'Very professional setup near Hadi Hospital. The clinic follows strict hygiene and disposable gear. Ultrasonic scaling took away all coffee stains without any sensitivity. Highly recommended for family dental care.',
    },
    {
      name: 'Sneha Reddy',
      area: 'Nampally, Hyderabad',
      type: 'Google Review · Verified Patient',
      treatment: 'Zirconia Bridges & Fillings',
      comment:
        'I appreciate the honest diagnosis. The doctor clearly explained which tooth needed a filling and which needed a cap instead of pushing unnecessary treatments. The staff is polite and welcoming.',
    },
    {
      name: 'K. Venkatesh',
      area: 'Asif Nagar, Hyderabad',
      type: 'Google Review · Verified Patient',
      treatment: 'Wisdom Tooth Extraction',
      comment:
        'My lower wisdom tooth was completely tilted. Dr. M performed the surgical extraction cleanly within 25 minutes. Healing was smooth without swelling. Excellent surgeon in Bazar Ghat.',
    },
  ];

  // FAQs
  const faqs = [
    {
      q: 'Are dental implants painful to get?',
      a: 'Not at all. The implant procedure is performed under gentle, localized anesthesia. Most patients report feeling only mild pressure during the procedure. Post-operative discomfort is typically minimal and easily managed with standard mild analgesics for 1–2 days.',
    },
    {
      q: 'How long does a root canal treatment take?',
      a: 'With modern rotary endodontics and digital locators, most root canal procedures at our clinic are completed in a single comfortable visit of approximately 45 to 60 minutes. Severe infections may occasionally require an additional short dressing appointment.',
    },
    {
      q: 'What are your clinic timings and can I walk in late in the evening?',
      a: 'We are open daily until 10:00 PM to accommodate working professionals and emergency dental pain. While walk-ins are welcomed, booking ahead is recommended to avoid waiting during peak evening hours (6:00 PM – 9:30 PM).',
    },
    {
      q: 'How do I locate the clinic from Hadi Hospital or Bazar Ghat?',
      a: 'We are located at Shop No. 11-3, 671/1, on Jamia Masjid Road, just steps from Hadi Hospital in Bazar Ghat, New Mallepally. You can also use Google Plus Code: 9FR5+PR Hyderabad for exact navigation.',
    },
    {
      q: 'Do you treat young children and pediatric dental issues?',
      a: 'Yes, we provide gentle pediatric dentistry including habit counseling, cavity restorations, fluoride application to strengthen enamel, and preventive pit-and-fissure sealants in a calm, welcoming environment.',
    },
    {
      q: 'What hygiene and sterilization protocols are followed?',
      a: 'We follow stringent clinical disinfection protocols. Every reusable instrument goes through ultrasonic cleaning and Class-B autoclave sterilization in individually sealed pouches opened right in front of the patient. Disposable drapes and gloves are standard.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* CLIENT REVIEW & DEMO PREVIEW BANNER (Ensures website is not mistaken for official live site) */}
      <div className="bg-amber-500 text-slate-950 text-xs sm:text-sm py-2 px-4 border-b border-amber-600 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center">
            <span className="px-2 py-0.5 rounded-sm bg-slate-950 text-amber-300 text-[11px] font-bold tracking-wider uppercase shrink-0">
              Demo Concept Preview
            </span>
            <span>
              Prepared for Dr M Dental Clinic &amp; Implant Centre. <strong>Not the official live website</strong> — Doctor details, reviews, and images are draft placeholders for owner review.
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-xs font-semibold">
            <a
              href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hello Dr. M, please review this proposed website preview and share your feedback on doctor bios, photos, and services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 text-amber-300 hover:bg-slate-900 px-3 py-1 rounded-md transition-colors flex items-center gap-1.5"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Share Feedback on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* FESTIVAL / HOLIDAY TIMINGS NOTICE STRIP */}
      <div className="bg-teal-950 text-teal-100 text-xs sm:text-sm py-2 px-4 border-b border-teal-800/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong className="text-white font-semibold">Notice:</strong> Timings may vary during festivals such as Bathukamma. Please call to confirm.
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-teal-300">
            <span className="hidden md:inline">Daily Open Until 10:00 PM</span>
            <a
              href="tel:07981726790"
              className="text-amber-300 font-medium hover:underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" /> Call: 079817 26790
            </a>
          </div>
        </div>
      </div>

      {/* TOP BAR / STICKY NAVBAR CONTRACT */}
      {/* Exactly 3 zones: [Brand title, one line] — [Nav links, single-line] — [1 primary action] */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element wordmark with tooth logo */}
          <a
            href="#home"
            className="flex items-center gap-3 text-slate-900 hover:text-teal-700 transition-colors shrink-0 group"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs group-hover:bg-teal-700 transition-colors">
              <ToothIcon className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap leading-tight">
                Dr M Dental Clinic
              </span>
              <span className="text-xs text-teal-700 font-semibold tracking-wide uppercase">
                &amp; Implant Centre
              </span>
            </div>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'services', label: 'Services' },
              { id: 'doctors', label: 'Doctors' },
              { id: 'process', label: 'Why Us' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'testimonials', label: 'Reviews' },
              { id: 'contact', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors whitespace-nowrap py-1 border-b-2 ${
                  activeSection === link.id
                    ? 'text-teal-700 border-teal-600 font-semibold'
                    : 'border-transparent hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => openBookingFor()}
              className="px-5 py-2.5 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 rounded-lg shadow-xs transition-colors whitespace-nowrap hidden sm:inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-teal-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-lg animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pb-3 pt-1 border-b border-slate-100">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'doctors', label: 'Doctors' },
                { id: 'process', label: 'Treatment Process' },
                { id: 'gallery', label: 'Clinic Gallery' },
                { id: 'testimonials', label: 'Patient Reviews' },
                { id: 'contact', label: 'Location & Contact' },
              ].map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-teal-50 text-teal-800 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openBookingFor();
                }}
                className="w-full py-3 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-xs flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment Online
              </button>
              <a
                href="tel:07981726790"
                className="w-full py-2.5 text-sm font-medium text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                Call Directly: 079817 26790
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="flex-1">

        {/* 1. HERO SECTION */}
        <section id="home" className="relative bg-gradient-to-b from-teal-50/70 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Headline and Primary Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Trust badge with unboxed metadata */}
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-teal-800">
                  <span className="font-semibold text-teal-700">New Mallepally, Hyderabad</span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span>Dental Clinic &amp; Implant Centre</span>
                  <span aria-hidden="true" className="text-slate-400">·</span>
                  <span className="text-slate-600">Near Hadi Hospital</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                  Healthy Smiles Start Here with Gentle, Advanced Dental Care
                </h1>

                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                  Comprehensive family dentistry and specialized dental implants in Bazar Ghat, New Mallepally. Experience painless care, modern technology, and compassionate treatment tailored to your comfort.
                </p>

                {/* Primary CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <button
                    onClick={() => openBookingFor()}
                    className="px-6 py-3.5 text-base font-semibold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <a
                    href="tel:07981726790"
                    className="px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-teal-600" />
                    <span>Call 079817 26790</span>
                  </a>
                </div>

                {/* Doctor Note */}
                <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Consultations available 7 days a week · Open until 10:00 PM</span>
                </div>
              </div>

              {/* Right Column: Hero Visual Asset (Resilient SVG Operatory Graphic with zero broken images) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-white border border-slate-200/80 shadow-md p-6 sm:p-8 overflow-hidden">
                  
                  {/* Decorative background aura */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-teal-100 rounded-full blur-3xl opacity-60 pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-sky-100 rounded-full blur-3xl opacity-60 pointer-events-none" />

                  {/* Operatory & Dental Chair Illustration */}
                  <div className="relative bg-gradient-to-br from-teal-50 to-sky-50 rounded-xl p-6 border border-teal-100/60 flex flex-col items-center justify-center text-center">
                    
                    {/* SVG Operatory Visual */}
                    <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 text-teal-600 flex items-center justify-center bg-white rounded-full shadow-xs border border-teal-100">
                      <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Dental Operatory Icon representation */}
                        <path d="M16 48H48" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
                        <path d="M32 48V36" stroke="#0d9488" strokeWidth="3" strokeLinecap="round" />
                        <path d="M22 26C22 20.4772 26.4772 16 32 16C37.5228 16 42 20.4772 42 26V36H22V26Z" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2.5" />
                        <circle cx="32" cy="24" r="3" fill="#0f766e" />
                        <path d="M12 28C12 24 16 20 20 20" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M44 20C48 20 52 24 52 28" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M28 8H36" stroke="#ea580c" strokeWidth="3" strokeLinecap="round" />
                        <path d="M32 8V12" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>

                    <h2 className="text-lg font-bold text-slate-900">Dr M Dental Clinic &amp; Implant Centre</h2>
                    <p className="text-xs text-slate-600 mt-1">State-of-the-Art Clinical Operatory</p>

                    <div className="mt-4 pt-4 border-t border-teal-200/60 w-full grid grid-cols-2 gap-3 text-left">
                      <div className="bg-white/80 p-2.5 rounded-lg border border-teal-100/50">
                        <span className="text-[11px] text-slate-500 block">Lead Specialization</span>
                        <span className="text-xs font-semibold text-slate-800">Dental Implants</span>
                      </div>
                      <div className="bg-white/80 p-2.5 rounded-lg border border-teal-100/50">
                        <span className="text-[11px] text-slate-500 block">Patient Care</span>
                        <span className="text-xs font-semibold text-slate-800">Painless Anesthesia</span>
                      </div>
                    </div>
                  </div>

                  {/* Trust markers inside hero card */}
                  <div className="mt-5 space-y-2.5">
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <ShieldCheck className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Class-B autoclave sterilized instrumentation for every patient</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-600">
                      <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>Evening consultation slots available daily up to 10:00 PM</span>
                    </div>
                  </div>

                  {/* Immediate booking button inside card */}
                  <button
                    onClick={() => openBookingFor('Dental Implants')}
                    className="mt-5 w-full py-2.5 text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors border border-teal-200 flex items-center justify-center gap-2"
                  >
                    <span>Check Implant Eligibility with Dr. M</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick-Info Strip Below the Hero */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                
                {/* 1. Open until 10 PM */}
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">Open Until 10 PM</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Open daily for late hours &amp; work schedules</p>
                  </div>
                </div>

                {/* 2. Near Hadi Hospital */}
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">Near Hadi Hospital</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Jamia Masjid Rd, Bazar Ghat, Mallepally</p>
                  </div>
                </div>

                {/* 3. 170 Google Reviews */}
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">170 Google Reviews</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Verified local patient satisfaction</p>
                  </div>
                </div>

                {/* 4. Implant Specialists */}
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200/90 shadow-2xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-tight">Implant Specialists</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Advanced titanium &amp; zirconia solutions</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>


        {/* 2. ABOUT SECTION */}
        <section id="about" className="py-16 lg:py-24 bg-white border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Clinic interior illustration & visual highlight */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative rounded-2xl bg-gradient-to-tr from-teal-900 to-slate-900 p-8 text-white overflow-hidden shadow-lg">
                  
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="relative z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-500/20 text-teal-300 text-xs font-medium border border-teal-400/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Dedicated Implant &amp; Dental Centre</span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-white leading-snug">
                      Patient Comfort and Clinical Excellence in New Mallepally
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      Founded with the belief that a visit to the dentist should never be stressful, Dr M Dental Clinic brings together advanced diagnostic tools and a gentle, communicative bedside manner.
                    </p>

                    <div className="pt-4 border-t border-slate-700/80 grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xl font-bold text-teal-400">Daily 10 PM</div>
                        <div className="text-xs text-slate-400 mt-0.5">Flexible evening consults</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-teal-400">Class-B</div>
                        <div className="text-xs text-slate-400 mt-0.5">Autoclave sterilization</div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <div className="text-xs text-slate-400 bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                        <span className="text-teal-300 font-semibold block mb-1">Location Landmark:</span>
                        Jamia Masjid Rd, very close to Hadi Hospital, Bazar Ghat, Hyderabad.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Story & 5 Highlights */}
              <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700">About Our Practice</span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Compassionate Care Built on Trust &amp; Gentle Hands
                  </h2>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  Located at Bazar Ghat, New Mallepally, Dr M Dental Clinic &amp; Implant Centre has served our local community with ethical diagnosis and modern dental procedures. We know that dental anxiety keeps many individuals from getting the care they need. That is why our entire team focuses on gentle treatment, thorough explanation before any procedure, and transparent guidance without unnecessary recommendations.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  Whether you are seeking a life-changing dental implant to restore your chewing confidence, urgent relief from an infected tooth, or regular teeth cleaning for your family, you will be treated with dignity, respect, and meticulous clinical attention.
                </p>

                {/* 5 Highlights with Icons */}
                <div className="pt-4 grid sm:grid-cols-2 gap-4">
                  
                  {/* 1. Modern Equipment */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Modern Equipment</h4>
                      <p className="text-xs text-slate-600 mt-0.5">High-precision rotaries, digital apex locators, and ergonomic operatory chairs.</p>
                    </div>
                  </div>

                  {/* 2. Sterilization and Hygiene */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Sterilization &amp; Hygiene</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Rigorous autoclave sterilization protocols and single-use disposable consumables.</p>
                    </div>
                  </div>

                  {/* 3. Painless Treatments */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Painless Treatments</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Gentle local numbing techniques and patient-paced procedures for zero anxiety.</p>
                    </div>
                  </div>

                  {/* 4. Affordable Care */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Affordable Care</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Honest, upfront pricing with no hidden charges and genuine treatment alternatives.</p>
                    </div>
                  </div>

                  {/* 5. Late Evening Hours */}
                  <div className="sm:col-span-2 p-4 rounded-xl bg-teal-50/70 border border-teal-200 flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Late Evening Hours (Open Daily Until 10 PM)</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Designed specifically so working professionals and students never have to take time off work or school for dental visits.</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>


        {/* 3. SERVICES SECTION */}
        <section id="services" className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Specialized &amp; General Dentistry</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Comprehensive Dental Services Under One Roof
              </h2>
              <p className="text-slate-600 text-base">
                From preventive checkups and root canal therapy to specialized implant surgery and smile designing in Hyderabad.
              </p>
              <div className="inline-block px-3 py-1 bg-amber-50 text-amber-900 text-xs rounded-md border border-amber-200">
                <strong>Review Note:</strong> Standard dental service catalog shown below. Can be adjusted to match Dr. M's exact clinical offerings.
              </div>
            </div>

            {/* FEATURED IMPLANT CENTRE BANNER */}
            <div className="mb-10 rounded-2xl bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white p-6 sm:p-8 shadow-md border border-teal-700/50">
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wide">
                    <Award className="w-4 h-4" />
                    <span>Dedicated Implant Centre Specialization</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                    Advanced Dental Implants: Permanent Teeth That Look &amp; Feel Natural
                  </h3>
                  <p className="text-sm text-teal-100 leading-relaxed">
                    Say goodbye to loose dentures and gaps. We utilize biocompatible titanium fixtures and precision CAD/CAM zirconia crowns to restore 100% of your bite strength, facial aesthetics, and speaking confidence.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2 text-xs text-teal-200">
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-300" /> Single Tooth Replacement</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-300" /> Multiple Teeth Bridges</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-300" /> Full Mouth Rehabilitation</span>
                  </div>
                </div>
                <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
                  <button
                    onClick={() => openBookingFor('Dental Implants')}
                    className="w-full py-3 px-5 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Implant Consultation</span>
                  </button>
                  <a
                    href="tel:07981726790"
                    className="w-full py-2.5 px-4 text-xs font-medium text-center text-teal-200 hover:text-white bg-white/10 hover:bg-white/15 rounded-xl transition-colors border border-white/20"
                  >
                    Direct Helpline: 079817 26790
                  </a>
                </div>
              </div>
            </div>

            {/* Grid of Service Cards: 3 cols desktop, 2 cols tablet, 1 col mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service) => (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between ${
                    service.featured
                      ? 'border-teal-500 ring-2 ring-teal-500/20 shadow-md'
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        service.featured ? 'bg-teal-600 text-white' : 'bg-teal-50 text-teal-700'
                      }`}>
                        <ToothIcon className="w-6 h-6" />
                      </div>
                      {service.featured && (
                        <span className="text-[11px] font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => openBookingFor(service.title)}
                      className="text-xs font-semibold text-teal-700 hover:text-teal-900 flex items-center gap-1 group"
                    >
                      <span>Inquire / Book</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <span className="text-[11px] text-slate-500">New Mallepally Clinic</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* 4. DOCTORS SECTION */}
        <section id="doctors" className="py-16 lg:py-24 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Medical Leadership</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Meet Your Experienced Dental Team
              </h2>
              <p className="text-slate-600 text-base">
                Dedicated professionals committed to gentle clinical technique, continuous medical education, and personalized patient care.
              </p>
              <div className="inline-block px-4 py-2 bg-amber-50 text-amber-900 text-xs rounded-lg border border-amber-200 leading-relaxed text-left sm:text-center">
                <strong>[Draft Placeholder Profiles for Review]</strong> — Doctor names, degrees (BDS/MDS), and bios are temporary drafts to showcase page layout. Please provide Dr. M's full name, exact qualifications, and team photos for final publication.
              </div>
            </div>

            {/* Doctors Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* DOCTOR 1 CARD */}
              {/* EDITABLE PLACEHOLDER: Doctor 1 - Lead Dental Surgeon & Implantologist */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-shadow relative">
                <div className="absolute top-3 left-3 z-10 bg-amber-400 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wide">
                  Draft Placeholder
                </div>
                {/* Doctor Avatar / Photo Placeholder */}
                <div className="h-56 bg-gradient-to-br from-teal-700 to-teal-900 flex flex-col items-center justify-center text-white p-6 relative">
                  <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center text-white mb-2 shadow-inner">
                    <ToothIcon className="w-12 h-12 text-teal-200" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-200">Implant Specialist</span>
                  <div className="absolute bottom-2 right-3 text-[10px] text-teal-300/80">Dr M Dental Clinic</div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* EDITABLE PLACEHOLDER: Doctor 1 Name & Qualifications */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900">
                        Dr. M (Lead Surgeon)
                      </h3>
                      <span className="text-[10px] text-amber-700 font-semibold bg-amber-100 px-2 py-0.5 rounded-sm">Placeholder</span>
                    </div>
                    <div className="text-xs font-semibold text-teal-700">
                      Lead Dental Surgeon &amp; Certified Implantologist
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      BDS, Certified in Oral Implantology &amp; Advanced Surgical Restorations [Placeholder]
                    </div>
                    {/* EDITABLE PLACEHOLDER: Doctor 1 Bio */}
                    <p className="text-xs text-slate-600 leading-relaxed pt-2">
                      [Sample Bio for Review] With extensive clinical experience in Hyderabad, Dr. M leads the clinic with a focus on precision implant placement, pain-free extractions, and comprehensive family dental wellness. (Replace with verified bio).
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <button
                      onClick={() => openBookingFor('Dental Implants - Dr. M')}
                      className="w-full py-2.5 text-xs font-semibold text-teal-800 bg-teal-100/70 hover:bg-teal-200/70 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Consultation with Dr. M</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* DOCTOR 2 CARD */}
              {/* EDITABLE PLACEHOLDER: Doctor 2 - Senior Endodontist */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-shadow relative">
                <div className="absolute top-3 left-3 z-10 bg-amber-400 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wide">
                  Draft Placeholder
                </div>
                {/* Doctor Photo Placeholder */}
                <div className="h-56 bg-gradient-to-br from-slate-700 to-slate-900 flex flex-col items-center justify-center text-white p-6 relative">
                  <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center text-white mb-2 shadow-inner">
                    <Sparkles className="w-10 h-10 text-sky-200" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-200">Endodontics &amp; Aesthetics</span>
                  <div className="absolute bottom-2 right-3 text-[10px] text-slate-400">Consultant Endodontist</div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* EDITABLE PLACEHOLDER: Doctor 2 Name & Qualifications */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900">
                        Associate Endodontist
                      </h3>
                      <span className="text-[10px] text-amber-700 font-semibold bg-amber-100 px-2 py-0.5 rounded-sm">Placeholder</span>
                    </div>
                    <div className="text-xs font-semibold text-teal-700">
                      Senior Endodontist &amp; Aesthetic Dental Specialist
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      BDS, MDS (Conservative Dentistry &amp; Endodontics) [Placeholder]
                    </div>
                    {/* EDITABLE PLACEHOLDER: Doctor 2 Bio */}
                    <p className="text-xs text-slate-600 leading-relaxed pt-2">
                      [Sample Bio for Review] Specializes in single-sitting microscopic root canal therapy, tooth preservation, and aesthetic restorations. (Provide associate doctor credentials or remove if solo practice).
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <button
                      onClick={() => openBookingFor('Root Canal Treatment')}
                      className="w-full py-2.5 text-xs font-semibold text-teal-800 bg-teal-100/70 hover:bg-teal-200/70 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Root Canal Consult</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* DOCTOR 3 CARD */}
              {/* EDITABLE PLACEHOLDER: Doctor 3 - Orthodontist & Pedodontist */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden flex flex-col shadow-xs hover:shadow-md transition-shadow relative">
                <div className="absolute top-3 left-3 z-10 bg-amber-400 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wide">
                  Draft Placeholder
                </div>
                {/* Doctor Photo Placeholder */}
                <div className="h-56 bg-gradient-to-br from-teal-800 to-sky-900 flex flex-col items-center justify-center text-white p-6 relative">
                  <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center text-white mb-2 shadow-inner">
                    <Heart className="w-10 h-10 text-amber-200" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-200">Braces &amp; Aligners</span>
                  <div className="absolute bottom-2 right-3 text-[10px] text-teal-300/80">Visiting Orthodontist</div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* EDITABLE PLACEHOLDER: Doctor 3 Name & Qualifications */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900">
                        Visiting Orthodontist
                      </h3>
                      <span className="text-[10px] text-amber-700 font-semibold bg-amber-100 px-2 py-0.5 rounded-sm">Placeholder</span>
                    </div>
                    <div className="text-xs font-semibold text-teal-700">
                      Consultant Orthodontist &amp; Dentofacial Orthopedics
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      BDS, MDS (Orthodontics &amp; Dentofacial Orthopedics) [Placeholder]
                    </div>
                    {/* EDITABLE PLACEHOLDER: Doctor 3 Bio */}
                    <p className="text-xs text-slate-600 leading-relaxed pt-2">
                      [Sample Bio for Review] Expert in clear aligners, ceramic braces, and pediatric habit-breaking appliances. (Provide visiting consultant details or remove if unneeded).
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <button
                      onClick={() => openBookingFor('Braces and Aligners')}
                      className="w-full py-2.5 text-xs font-semibold text-teal-800 bg-teal-100/70 hover:bg-teal-200/70 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book Braces Assessment</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* 5. WHY CHOOSE US & TREATMENT PROCESS */}
        <section id="process" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Simple Patient Journey</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our 4-Step Care Experience: Book, Consult, Treat, Smile
              </h2>
              <p className="text-slate-600 text-base">
                We respect your time and comfort at every stage of your appointment.
              </p>
            </div>

            {/* 4-Step Visual Process */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              
              {/* Step 1: Book */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 relative shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white font-bold text-lg flex items-center justify-center mb-4 shadow-xs">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900">Book</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Schedule via phone call, WhatsApp, or our online form. Choose a daytime or evening slot that fits your schedule.
                </p>
              </div>

              {/* Step 2: Consult */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 relative shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-teal-700 text-white font-bold text-lg flex items-center justify-center mb-4 shadow-xs">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900">Consult</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Sit down with Dr. M for a gentle oral examination and digital X-ray review. We discuss all options transparently.
                </p>
              </div>

              {/* Step 3: Treat */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 relative shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-teal-800 text-white font-bold text-lg flex items-center justify-center mb-4 shadow-xs">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900">Treat</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Receive gentle, painless treatment using sterile instrumentation and modern dental equipment in our clean operatory.
                </p>
              </div>

              {/* Step 4: Smile */}
              <div className="bg-white p-6 rounded-2xl border border-teal-500/80 ring-1 ring-teal-500/20 relative shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-amber-600 text-white font-bold text-lg flex items-center justify-center mb-4 shadow-xs">
                  04
                </div>
                <h3 className="text-lg font-bold text-slate-900">Smile</h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Walk out pain-free with restored function and a confident smile, backed by clear aftercare guidance and follow-up support.
                </p>
              </div>

            </div>

            {/* FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
            <div className="mt-16 pt-12 border-t border-slate-200 max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Clear Answers</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : index)}
                        className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-teal-700 transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="text-sm sm:text-base">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-teal-600' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>


        {/* 6. GALLERY SECTION WITH CATEGORY FILTERS & LIGHTBOX */}
        <section id="gallery" className="py-16 lg:py-24 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Clinical Facility &amp; Results</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Clinic Interior &amp; Treatment Gallery
              </h2>
              <p className="text-slate-600 text-base">
                Take a look inside our clean, sterile setup in Bazar Ghat and witness how modern dentistry restores confidence.
              </p>
              <div className="inline-block px-3 py-1 bg-amber-50 text-amber-900 text-xs rounded-md border border-amber-200">
                <strong>[Demonstration Visuals]</strong> Layout placeholders shown below. High-resolution photos of your actual operatory, equipment, and smile cases can be uploaded here.
              </div>
            </div>

            {/* Interactive Filter Controls */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {[
                { key: 'all', label: 'All Photos' },
                { key: 'clinic', label: 'Clinic Interior' },
                { key: 'treatments', label: 'Treatments & Technology' },
                { key: 'transformations', label: 'Smile Transformations' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setGalleryFilter(tab.key as any)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    galleryFilter === tab.key
                      ? 'bg-teal-700 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems
                .filter((item) => galleryFilter === 'all' || item.category === galleryFilter)
                .map((item) => (
                  <div
                    key={item.id}
                    onClick={() =>
                      setLightboxImage({
                        url: '',
                        title: item.title,
                        category: item.subtitle,
                      })
                    }
                    className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer shadow-2xs hover:shadow-md transition-all flex flex-col"
                  >
                    {/* Resilient High-Fidelity SVG Graphic Card */}
                    <div className="h-56 bg-gradient-to-br from-teal-50 via-sky-50 to-slate-100 flex items-center justify-center p-6 relative overflow-hidden group-hover:scale-102 transition-transform duration-300">
                      
                      {item.svgType === 'chair' && (
                        <div className="text-teal-700 flex flex-col items-center">
                          <ToothIcon className="w-16 h-16 text-teal-600 mb-2" />
                          <span className="text-xs font-semibold text-slate-700">Digital Operatory Suite</span>
                        </div>
                      )}

                      {item.svgType === 'implant' && (
                        <div className="text-teal-700 flex flex-col items-center">
                          <Award className="w-16 h-16 text-teal-600 mb-2" />
                          <span className="text-xs font-semibold text-slate-700">Titanium Implant Technology</span>
                        </div>
                      )}

                      {item.svgType === 'smile' && (
                        <div className="text-teal-700 flex flex-col items-center">
                          <Sparkles className="w-16 h-16 text-amber-500 mb-2" />
                          <span className="text-xs font-semibold text-slate-700">Aesthetic Ceramic Crowns</span>
                        </div>
                      )}

                      {item.svgType === 'hygiene' && (
                        <div className="text-teal-700 flex flex-col items-center">
                          <ShieldCheck className="w-16 h-16 text-teal-700 mb-2" />
                          <span className="text-xs font-semibold text-slate-700">Class-B Autoclave Sterilization</span>
                        </div>
                      )}

                      {item.svgType === 'rct' && (
                        <div className="text-teal-700 flex flex-col items-center">
                          <Clock className="w-16 h-16 text-sky-600 mb-2" />
                          <span className="text-xs font-semibold text-slate-700">Single-Sitting Endodontics</span>
                        </div>
                      )}

                      {item.svgType === 'alignment' && (
                        <div className="text-teal-700 flex flex-col items-center">
                          <CheckCircle2 className="w-16 h-16 text-teal-600 mb-2" />
                          <span className="text-xs font-semibold text-slate-700">Diastema Closure &amp; Veneers</span>
                        </div>
                      )}

                      {/* Click overlay hint */}
                      <div className="absolute inset-0 bg-teal-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white/90 text-teal-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                          View Details
                        </span>
                      </div>
                    </div>

                    <div className="p-4 bg-white border-t border-slate-100">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
            </div>

          </div>
        </section>


        {/* 7. TESTIMONIALS SECTION (From 170 Google Reviews) */}
        <section id="testimonials" className="py-16 lg:py-24 bg-teal-900 text-white relative overflow-hidden">
          
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-800/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-950/60 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-800/80 text-amber-300 text-xs font-semibold">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>170 Reviews on Google</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Trusted by Families Across Hyderabad
              </h2>
              <p className="text-teal-200 text-base">
                Read what verified patients from New Mallepally, Bazar Ghat, and surrounding neighborhoods say about their experience with Dr. M.
              </p>
              <div className="inline-block px-3 py-1.5 bg-teal-950/80 text-amber-200 text-xs rounded-lg border border-teal-700/60 leading-normal">
                <strong>[Draft Sample Reviews for Review]</strong> Reflects the clinic's 170 Google Reviews count. Star ratings have not been invented. Your exact favorite Google review quotes will replace these during final launch.
              </div>
            </div>

            {/* Testimonials Carousel / Slider */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-white/15 shadow-xl">
                
                {/* Review Metadata */}
                <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/15">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {testimonials[activeTestimonial].name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-teal-300 mt-0.5">
                      <span>{testimonials[activeTestimonial].area}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-amber-300 font-medium">{testimonials[activeTestimonial].type}</span>
                    </div>
                  </div>

                  <span className="text-xs bg-teal-800/80 text-teal-200 px-3 py-1 rounded-full border border-teal-700">
                    {testimonials[activeTestimonial].treatment}
                  </span>
                </div>

                {/* Comment quote */}
                <p className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed pt-6 italic">
                  "{testimonials[activeTestimonial].comment}"
                </p>

                {/* Controls */}
                <div className="flex items-center justify-between pt-8 mt-6 border-t border-white/15">
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTestimonial(i)}
                        className={`h-2 rounded-full transition-all ${
                          activeTestimonial === i ? 'w-6 bg-amber-400' : 'w-2 bg-white/30 hover:bg-white/60'
                        }`}
                        aria-label={`Go to review ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                      }
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                      }
                      className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Review summary line */}
              <div className="text-center text-xs text-teal-300/80 mt-6">
                Based on 170 patient reviews on Google Maps for Dr M Dental Clinic &amp; Implant Centre
              </div>
            </div>

          </div>
        </section>


        {/* 8. CONTACT & APPOINTMENT SECTION */}
        <section id="contact" className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Get in Touch</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Visit Us in Bazar Ghat or Book an Appointment
              </h2>
              <p className="text-slate-600 text-base">
                Conveniently located near Hadi Hospital on Jamia Masjid Road. We are open every day until 10:00 PM.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Clinic Contact Details & Map Card */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Clinic Info Box */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5">
                  
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-slate-900">Dr M Dental Clinic &amp; Implant Centre</h3>
                    <p className="text-xs text-teal-700 font-semibold uppercase tracking-wider">
                      Dental Clinic · Implant Specialist
                    </p>
                  </div>

                  <div className="space-y-4 pt-2 text-sm text-slate-700">
                    
                    {/* Address */}
                    <div className="flex items-start gap-3.5">
                      <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold">Address</strong>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                          {clinicAddress}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3.5">
                      <Phone className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold">Phone</strong>
                        <a
                          href="tel:07981726790"
                          className="text-xs sm:text-sm text-teal-700 font-semibold hover:underline mt-0.5 block"
                        >
                          {clinicPhone}
                        </a>
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3.5">
                      <Clock className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-semibold">Operating Hours</strong>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                          Open daily: Closes at 10:00 PM
                        </p>
                        <p className="text-xs text-amber-700 bg-amber-50 p-2 rounded-md mt-2 border border-amber-200/60 leading-normal">
                          <strong>Notice:</strong> Timings may vary during festivals such as Bathukamma. Please call to confirm.
                        </p>
                      </div>
                    </div>

                    {/* Plus Code with copy action */}
                    <div className="flex items-start gap-3.5 pt-2">
                      <Navigation className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                      <div className="w-full">
                        <strong className="block text-slate-900 font-semibold">Google Plus Code</strong>
                        <div className="flex items-center justify-between gap-2 bg-slate-50 p-2 rounded-lg border border-slate-200 mt-1">
                          <code className="text-xs font-mono text-slate-800">{plusCode}</code>
                          <button
                            onClick={handleCopyPlusCode}
                            className="px-2.5 py-1 text-xs font-medium text-teal-700 hover:text-teal-900 bg-white border border-slate-200 rounded-md transition-colors flex items-center gap-1 shrink-0"
                            title="Copy Plus Code"
                          >
                            {copiedCode ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-teal-600" />
                                <span>Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Direct Directions Button */}
                  <div className="pt-2">
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Dr M Dental Clinic & Implant Centre Bazar Ghat New Mallepally Hyderabad')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-xl transition-colors border border-teal-200 flex items-center justify-center gap-2"
                    >
                      <MapPin className="w-4 h-4 text-teal-600" />
                      <span>Open Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-teal-500" />
                    </a>
                  </div>

                </div>

                {/* WhatsApp Direct Help Box */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Instant WhatsApp Chat</h4>
                      <p className="text-xs text-slate-600">Send an inquiry or share dental photos</p>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hello Dr M Dental Clinic, I would like to inquire about a dental appointment.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition-colors shrink-0 whitespace-nowrap"
                  >
                    Chat Now
                  </a>
                </div>

              </div>

              {/* Right Column: Interactive Appointment Booking Form */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                  
                  <div className="border-b border-slate-100 pb-4 mb-6">
                    <h3 className="text-xl font-bold text-slate-900">Request an Appointment</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out the form below. Our staff will confirm your slot via phone or WhatsApp.
                    </p>
                  </div>

                  {formSubmitted ? (
                    <div className="p-6 bg-teal-50 rounded-xl border border-teal-200 text-center space-y-4 animate-fadeIn">
                      <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Appointment Request Received!</h4>
                      <p className="text-sm text-slate-600 max-w-md mx-auto">
                        Thank you, <strong className="text-slate-800">{formData.name}</strong>. We have logged your request for <strong className="text-slate-800">{formData.service}</strong>. Our clinic team will call you at <strong className="text-slate-800">{formData.phone}</strong> shortly to confirm.
                      </p>
                      
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                          href={constructWhatsAppMessage()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors flex items-center gap-2"
                        >
                          <WhatsAppIcon className="w-4 h-4" />
                          <span>Send Details on WhatsApp</span>
                        </a>
                        <button
                          onClick={() => {
                            setFormSubmitted(false);
                            setFormData({
                              name: '',
                              phone: '',
                              date: '',
                              timeSlot: 'Morning (10:00 AM - 1:00 PM)',
                              service: 'Dental Implants',
                              notes: '',
                            });
                          }}
                          className="px-4 py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          Book Another
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Patient Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Mohammed Ahmed"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-colors"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="e.g. 079817 26790"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Service Selection */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Service Required
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-colors"
                          >
                            {servicesList.map((s) => (
                              <option key={s.id} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Preferred Date */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Preferred Date
                          </label>
                          <input
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Time Slot */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Preferred Time Window (Open until 10 PM)
                        </label>
                        <select
                          value={formData.timeSlot}
                          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-colors"
                        >
                          <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                          <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2:00 PM – 5:00 PM)</option>
                          <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM – 8:00 PM)</option>
                          <option value="Late Evening (8:00 PM - 10:00 PM)">Late Evening (8:00 PM – 10:00 PM)</option>
                        </select>
                      </div>

                      {/* Notes */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Symptoms / Concerns (Optional)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Describe tooth pain, missing teeth, or questions for Dr. M..."
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-colors"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <button
                          type="submit"
                          className="flex-1 py-3 px-6 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 active:bg-amber-800 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                        >
                          <Calendar className="w-4 h-4" />
                          <span>Submit Appointment Request</span>
                        </button>

                        <a
                          href={constructWhatsAppMessage()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-3 px-4 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-300 transition-colors flex items-center justify-center gap-2"
                        >
                          <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                          <span>Book via WhatsApp</span>
                        </a>
                      </div>

                      <p className="text-[11px] text-slate-400 text-center pt-1">
                        Your privacy is strictly respected. No marketing messages.
                      </p>
                    </form>
                  )}

                </div>
              </div>

            </div>

          </div>
        </section>

      </main>


      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 lg:pb-16 border-t border-slate-800 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
            
            {/* Column 1: Clinic Brand & Info */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center">
                  <ToothIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white leading-tight">
                    Dr M Dental Clinic &amp; Implant Centre
                  </h4>
                  <span className="text-xs text-teal-400 font-medium">Bazar Ghat, New Mallepally, Hyderabad</span>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Dedicated to clinical excellence, gentle procedures, and dental implants in Hyderabad. We treat every patient like family with transparent guidance and modern dental care.
              </p>

              <div className="text-xs text-slate-400 space-y-1">
                <div><strong>Category:</strong> Dental clinic</div>
                <div><strong>Plus Code:</strong> {plusCode}</div>
                <div><strong>Google Reviews:</strong> 170 reviews</div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <h5 className="text-sm font-semibold text-white tracking-wide uppercase">Quick Links</h5>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#home" className="hover:text-teal-400 transition-colors">Home &amp; Overview</a></li>
                <li><a href="#about" className="hover:text-teal-400 transition-colors">About the Clinic</a></li>
                <li><a href="#services" className="hover:text-teal-400 transition-colors">Dental Implants &amp; Services</a></li>
                <li><a href="#doctors" className="hover:text-teal-400 transition-colors">Doctors &amp; Specialists</a></li>
                <li><a href="#process" className="hover:text-teal-400 transition-colors">Treatment Process &amp; FAQs</a></li>
                <li><a href="#gallery" className="hover:text-teal-400 transition-colors">Clinic Gallery</a></li>
                <li><a href="#testimonials" className="hover:text-teal-400 transition-colors">Patient Testimonials</a></li>
                <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact &amp; Map</a></li>
              </ul>
            </div>

            {/* Column 3: Hours & Direct Assistance */}
            <div className="lg:col-span-4 space-y-3">
              <h5 className="text-sm font-semibold text-white tracking-wide uppercase">Clinic Hours &amp; Location</h5>
              
              <div className="text-xs text-slate-400 space-y-2">
                <p>
                  <strong className="text-slate-200">Daily:</strong> Closes at 10:00 PM
                </p>
                <p className="text-amber-400/90 text-xs leading-relaxed">
                  Notice: Timings may vary during festivals such as Bathukamma. Please call to confirm.
                </p>
                <p className="pt-1">
                  <strong className="text-slate-200">Location:</strong><br />
                  Shop No. 11-3, 671/1, Jamia Masjid Rd,<br />
                  near Hadi Hospital, Bazar Ghat,<br />
                  New Mallepally, Hyderabad, Telangana 500001
                </p>
                <div className="pt-2">
                  <a
                    href="tel:07981726790"
                    className="inline-flex items-center gap-2 text-white bg-teal-800 hover:bg-teal-700 px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-300" />
                    <span>079817 26790</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Review Notice */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <p>
                &copy; {new Date().getFullYear()} Dr M Dental Clinic &amp; Implant Centre. All rights reserved.
              </p>
              <p className="text-[11px] text-amber-400/80 mt-0.5">
                Client Review Draft — Not the official live website. Prepared for doctor review and feedback.
              </p>
            </div>
            <p className="text-center sm:text-right">
              Bazar Ghat, New Mallepally, Hyderabad, Telangana 500001
            </p>
          </div>

        </div>
      </footer>


      {/* FLOATING ACTION BUTTONS (MOBILE-FIRST & RESPECTING 15% STICKY CAP) */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2.5 pointer-events-none">
        
        {/* Floating WhatsApp Action */}
        <a
          href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent('Hello Dr M Dental Clinic, I would like to inquire about an appointment.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto p-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center focus:outline-hidden focus:ring-4 focus:ring-emerald-400"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>

        {/* Floating Call Now Action on Mobile */}
        <a
          href="tel:07981726790"
          className="sm:hidden pointer-events-auto py-2.5 px-4 bg-teal-700 hover:bg-teal-800 active:bg-teal-900 text-white rounded-full shadow-lg transition-transform flex items-center gap-2 text-xs font-semibold focus:outline-hidden focus:ring-4 focus:ring-teal-400"
          aria-label="Call Clinic at 079817 26790"
        >
          <Phone className="w-4 h-4 text-amber-300" />
          <span>Call 079817 26790</span>
        </a>

      </div>


      {/* APPOINTMENT MODAL */}
      {appointmentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setAppointmentModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg transition-colors"
              aria-label="Close appointment modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1 pr-6 mb-5">
              <h3 className="text-xl font-bold text-slate-900">Book an Appointment</h3>
              <p className="text-xs text-slate-500">
                Dr M Dental Clinic &amp; Implant Centre · New Mallepally
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAppointmentModalOpen(false);
                setFormSubmitted(true);
                // scroll smoothly to contact section to show confirmation
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Patient name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Procedure of Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                >
                  {servicesList.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Time Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-600"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10-1 PM)</option>
                    <option value="Afternoon (2:00 PM - 5:00 PM)">Afternoon (2-5 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5-8 PM)</option>
                    <option value="Late Evening (8:00 PM - 10:00 PM)">Late (8-10 PM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-xs transition-colors"
                >
                  Confirm Appointment Request
                </button>
                <a
                  href={constructWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 text-xs font-semibold text-center text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  <span>Send Request via WhatsApp Directly</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* GALLERY LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setLightboxImage(null)}
          role="dialog"
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative overflow-hidden text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-20 h-20 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center mx-auto mb-4 border border-teal-100">
              <ToothIcon className="w-10 h-10" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">{lightboxImage.title}</h3>
            <p className="text-xs text-teal-700 font-semibold uppercase tracking-wider mt-1">
              Dr M Dental Clinic &amp; Implant Centre
            </p>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              {lightboxImage.category}
            </p>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setLightboxImage(null);
                  openBookingFor();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg"
              >
                Inquire About This Treatment
              </button>
              <button
                onClick={() => setLightboxImage(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
