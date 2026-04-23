"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronDown, Clock, Globe, Mail, MessageSquare, User, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/client";
import { useStudio } from "@/context/StudioContext";
import { useRouter } from "next/navigation";

export default function AppointmentPage() {
  const { user, loading: authLoading } = useStudio();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [pendingWaUrl, setPendingWaUrl] = useState("");

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login"); // Adjust if your login route is different
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showWhatsAppModal) {
      timer = setTimeout(() => {
        setShowWhatsAppModal(false);
      }, 5500); // Closes after 5.5s
    }
    return () => clearTimeout(timer);
  }, [showWhatsAppModal]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    url: "",
    address: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service || !formData.date || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }
    
    setLoading(true);
    
    try {
      const { error } = await supabase.from('appointments').insert([{
        user_id: user?.id,
        name: formData.name,
        email: formData.email,
        phone: formData.url, // Re-using URL field or can be left empty since phone is required in schema, wait I'll add phone
        address: formData.address,
        service: formData.service,
        date: new Date(formData.date).toISOString(),
        message: formData.message || null
      }]);

      if (error) throw error;

      // Send Email Notification via Resend API
      try {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.url,
            address: formData.address,
            service: formData.service,
            date: formData.date,
            message: formData.message
          })
        });
      } catch (emailError) {
        console.error("Failed to send email notification", emailError);
        // Do not block the user if email notification fails
      }

      // Construct WhatsApp redirect
      const waNumber = "919294625866";
      const waText = `Hello Kryto Studio! I just booked an appointment on your website. Here are my details:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Address:* ${formData.address}\n*Service:* ${formData.service}\n*Message:* ${formData.message}`;
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;
      
      router.refresh();
      setPendingWaUrl(waUrl);
      setShowWhatsAppModal(true);
    } catch (err: any) {
      console.error(err);
      alert("There was an error booking your appointment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book an Appointment</h1>
          <p className="text-gray-400 max-w-lg mx-auto font-light">
            Ready to elevate your digital presence? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-2xl relative"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent rounded-3xl pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Full Name *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-500" />
                  </div>
                  <input 
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Email Address *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Mail size={18} className="text-gray-500" />
                  </div>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Service Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Service Type *</label>
                <div className="relative">
                  <select 
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white appearance-none focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                  >
                    <option value="" disabled className="text-gray-500">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Full Stack">Full Stack</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Video Editing">Video Editing</option>
                    <option value="Consultation">Consultation</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <ChevronDown size={18} className="text-gray-500" />
                  </div>
                </div>
              </div>

              {/* Preferred Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Preferred Date *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Calendar size={18} className="text-gray-500" />
                  </div>
                  <input 
                    type="date" 
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all [color-scheme:dark]"
                  />
                </div>
              </div>
            </div>

            {/* Phone Number - Replaced Current Website URL as Phone is REQUIRED in schema */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Phone Number *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Globe size={18} className="text-gray-500" />
                  </div>
                  <input 
                    type="tel"
                    name="url" // Using url state for phone
                    required
                    value={formData.url}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 ml-1">Full Address *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <MapPin size={18} className="text-gray-500" />
                  </div>
                  <input 
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="123 Street Name, City"
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Project Brief */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 ml-1">Project Brief</label>
              <div className="relative">
                <div className="absolute top-4 left-4 pointer-events-none">
                  <MessageSquare size={18} className="text-gray-500" />
                </div>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={loading}
              className="mt-4 w-full relative group bg-accent text-white font-semibold py-4 rounded-xl overflow-hidden transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-[#38bdf8] to-accent opacity-0 group-hover:opacity-100 transition-opacity z-0" />
              <span className="relative z-20 flex items-center justify-center gap-2">
                {loading ? "Processing..." : "Submit Booking"} <Clock size={18} />
              </span>
              
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-accent blur-xl opacity-20 group-hover:opacity-60 transition-opacity -z-10" />
            </button>
          </form>
        </motion.div>
      </div>

      {/* WhatsApp Confirmation Modal */}
      {showWhatsAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-[#0f0f0f] border border-white/10 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative"
          >
            <div className="w-16 h-16 bg-green-500/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Continue to WhatsApp?</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Your appointment has been successfully recorded. We will now redirect you to WhatsApp to send the details.
            </p>
            
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => {
                  setShowWhatsAppModal(false);
                  window.location.href = pendingWaUrl;
                }}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium py-3 rounded-xl transition-all flex justify-center items-center gap-2"
              >
                Continue to WhatsApp
              </button>
              <button 
                onClick={() => setShowWhatsAppModal(false)}
                className="w-full bg-white/5 hover:bg-white/10 text-gray-300 font-medium py-3 rounded-xl transition-all"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
