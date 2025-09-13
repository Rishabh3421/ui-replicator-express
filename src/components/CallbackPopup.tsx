import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { X } from "lucide-react";

interface CallbackPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallbackPopup = ({ isOpen, onClose }: CallbackPopupProps) => {
  const [formData, setFormData] = useState({
    englishLevel: "",
    name: "",
    email: "",
    country: "",
    phoneCountryCode: "+91",
    phone: "",
    education: "",
    visaType: "",
    countryToImmigrate: "",
  });
  const [loading, setLoading] = useState(false);

  const englishLevels = [
    "Basic",
    "Intermediate", 
    "Advanced",
    "Fluent",
    "Native"
  ];

  const countries = [
    "India",
    "Pakistan",
    "Bangladesh",
    "Nepal", 
    "Sri Lanka",
    "Other"
  ];

  const educationLevels = [
    "High School",
    "Diploma", 
    "Bachelor's Degree",
    "Master's Degree",
    "PhD",
    "Other"
  ];

  const visaTypes = [
    "Student Visa",
    "Work Visa", 
    "PR/Immigration",
    "Tourist Visa",
    "Business Visa",
    "Family Visa"
  ];

  const destinationCountries = [
    "Canada",
    "Australia", 
    "New Zealand",
    "USA",
    "United Kingdom",
    "Germany",
    "France",
    "Japan",
    "Singapore",
    "Other"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.phone) {
        toast({
          title: "Validation Error", 
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }

      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Validation Error",
          description: "Please enter a valid email address",
          variant: "destructive",
        });
        return;
      }

      // Submit to Supabase leads table with comprehensive callback data
      const { error } = await supabase.from("leads").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: `${formData.phoneCountryCode} ${formData.phone}`,
          country: formData.countryToImmigrate,
          visa_type: formData.visaType,
          message: `CALLBACK REQUEST
English Level: ${formData.englishLevel}
Origin Country: ${formData.country}
Education: ${formData.education}
Form Type: callback`
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your callback request has been submitted. We'll call you back soon!",
      });

      // Build WhatsApp message
      const waNumber = "919050519168";
      const msg = `Hello Easy World 👋
Call Back Request:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phoneCountryCode} ${formData.phone}
English Level: ${formData.englishLevel}
Country: ${formData.country}
Education: ${formData.education}
Visa Type: ${formData.visaType}
Country to Immigrate: ${formData.countryToImmigrate}`;
      
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, "_blank");

      // Reset form and close
      setFormData({
        englishLevel: "",
        name: "",
        email: "",
        country: "",
        phoneCountryCode: "+91",
        phone: "",
        education: "",
        visaType: "",
        countryToImmigrate: "",
      });
      onClose();
    } catch (error) {
      console.error("Error submitting callback request:", error);
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between text-lg font-bold">
            <div className="flex items-center gap-2">
              <img
                src="/lovable-uploads/0c5eb42a-7f1b-4596-acd8-a8b530e8e3ff.png"
                alt="Easy World"
                className="h-8 w-8"
              />
              <span>Easy World Educational Consultant</span>
            </div>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="englishLevel">What is your English level? *</Label>
            <Select
              value={formData.englishLevel}
              onValueChange={(value) =>
                setFormData({ ...formData, englishLevel: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select English level" />
              </SelectTrigger>
              <SelectContent>
                {englishLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <Label htmlFor="country">Country *</Label>
            <Select
              value={formData.country}
              onValueChange={(value) =>
                setFormData({ ...formData, country: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <div className="w-24">
              <Label>Code</Label>
              <Select
                value={formData.phoneCountryCode}
                onValueChange={(value) =>
                  setFormData({ ...formData, phoneCountryCode: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">IND (+91)</SelectItem>
                  <SelectItem value="+1">USA (+1)</SelectItem>
                  <SelectItem value="+44">UK (+44)</SelectItem>
                  <SelectItem value="+61">AUS (+61)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="Phone number"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="education">Education *</Label>
            <Select
              value={formData.education}
              onValueChange={(value) =>
                setFormData({ ...formData, education: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select education level" />
              </SelectTrigger>
              <SelectContent>
                {educationLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <Label htmlFor="visaType">Visa Type *</Label>
              <Select
                value={formData.visaType}
                onValueChange={(value) =>
                  setFormData({ ...formData, visaType: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select visa type" />
                </SelectTrigger>
                <SelectContent>
                  {visaTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="countryToImmigrate">Country to immigrate *</Label>
            <Select
              value={formData.countryToImmigrate}
              onValueChange={(value) =>
                setFormData({ ...formData, countryToImmigrate: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select destination country" />
              </SelectTrigger>
              <SelectContent>
                {destinationCountries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-accent hover:bg-accent-dark text-accent-foreground"
            >
              {loading ? "SUBMITTING..." : "REQUEST A CALL BACK"}
            </Button>
          </div>

          <div className="flex justify-center pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-8"
            >
              CLOSE
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CallbackPopup;