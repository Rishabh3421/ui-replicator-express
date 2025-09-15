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
import { Textarea } from "@/components/ui/textarea";
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

interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCountry?: string;
  defaultVisaType?: string | null;
}

const EnquiryForm = ({
  isOpen,
  onClose,
  defaultCountry,
  defaultVisaType,
}: EnquiryFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: defaultCountry || "",
    visaType: defaultVisaType || "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const countries = [
    "Canada",
    "Australia",
    "New Zealand",
    "USA",
    "United Kingdom",
    "France",
    "Japan",
    "Singapore",
    "Germany",
    "Italy",
  ];

  const visaTypes = ["Student", "Work", "PR", "Tourist", "Business", "Family"];

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

      // Submit to Supabase leads table
      const { error } = await supabase.from("leads").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          visa_type: formData.visaType,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your enquiry has been submitted. We'll get back to you soon!",
      });

      // Build WhatsApp message
      const waNumber = "919050519168"; // use country code in front of your number
      const msg = `Hello Easy World 👋
My name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}
Visa Type: ${formData.visaType}
Message: ${formData.message}`;
      const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;

      // Open WhatsApp chat in a new tab/window
      window.open(waUrl, "_blank");

      // Reset form and close
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: defaultCountry || "",
        visaType: defaultVisaType || "",
        message: "",
      });
      onClose();
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      toast({
        title: "Error",
        description: "Failed to submit enquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

 return (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent
      className="
        w-[92vw] max-w-[560px] md:max-w-[720px]
        p-0 rounded-2xl
        max-h-[88vh] overflow-y-auto
      "
    >
      <DialogHeader className="px-6 py-5 border-b">
        <DialogTitle className="text-lg md:text-xl">
          Apply for Visa Consultation
        </DialogTitle>
      </DialogHeader>

      <form onSubmit={handleSubmit} className="space-y-5 p-6 md:p-8">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your full name"
            required
            className="h-11 text-base"
          />
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter your email"
            required
            className="h-11 text-base"
          />
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Enter your phone number"
            required
            className="h-11 text-base"
          />
        </div>

        <div>
          <Label htmlFor="country">Preferred Country</Label>
          <Select
            value={formData.country}
            onValueChange={(value) => setFormData({ ...formData, country: value })}
          >
            <SelectTrigger className="h-11 text-base">
              <SelectValue placeholder="Select a country" />
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

        <div>
          <Label htmlFor="visaType">Visa Type</Label>
          <Select
            value={formData.visaType}
            onValueChange={(value) => setFormData({ ...formData, visaType: value })}
          >
            <SelectTrigger className="h-11 text-base">
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

        <div>
          <Label htmlFor="message">Message (Optional)</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your requirements..."
            className="min-h-[120px] text-base"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <Button type="button" variant="outline" onClick={onClose} className="flex-1 h-11">
            Cancel
          </Button>
          <Button type="submit" disabled={loading} className="flex-1 h-11">
            {loading ? "Submitting..." : "Submit Enquiry"}
          </Button>
        </div>
      </form>
    </DialogContent>
  </Dialog>
);

};

export default EnquiryForm;
