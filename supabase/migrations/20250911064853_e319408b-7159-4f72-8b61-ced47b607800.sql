-- Create countries table
CREATE TABLE public.countries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  flag_emoji TEXT NOT NULL,
  hero_image TEXT,
  short_blurb TEXT NOT NULL,
  top_colleges JSONB DEFAULT '[]',
  best_places JSONB DEFAULT '[]',
  why_choose TEXT[] DEFAULT '{}',
  required_docs TEXT[] DEFAULT '{}',
  avg_processing_time TEXT,
  visa_types TEXT[] DEFAULT '{}',
  apply_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create leads table for enquiry forms
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  country TEXT,
  visa_type TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create engagement table for chatbot interactions
CREATE TABLE public.engagement (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event TEXT NOT NULL,
  country TEXT,
  visa_type TEXT,
  user_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.countries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.engagement ENABLE ROW LEVEL SECURITY;

-- Create policies for countries (public read)
CREATE POLICY "Countries are viewable by everyone" 
ON public.countries 
FOR SELECT 
USING (true);

-- Create policies for leads (public insert)
CREATE POLICY "Anyone can submit leads" 
ON public.leads 
FOR INSERT 
WITH CHECK (true);

-- Create policies for engagement (public insert)
CREATE POLICY "Anyone can log engagement" 
ON public.engagement 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_countries_updated_at
BEFORE UPDATE ON public.countries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample country data
INSERT INTO public.countries (slug, name, flag_emoji, short_blurb, why_choose, required_docs, avg_processing_time, visa_types) VALUES
('canada', 'Canada', '🇨🇦', 'Study, work and PR opportunities', 
 ARRAY['High-quality education system', 'Post-graduation work permits', 'Pathway to permanent residence', 'Multicultural society'],
 ARRAY['Academic Certificates', 'Aadhar Card', 'PAN Card', 'Passport', 'Family Documents', 'Financial Statements'],
 '6-10 weeks for student visa',
 ARRAY['Student', 'Work', 'PR', 'Tourist', 'Business']),

('australia', 'Australia', '🇦🇺', 'High-quality education & skilled migration',
 ARRAY['World-class universities', 'Strong job market', 'Excellent quality of life', 'Safe and welcoming environment'],
 ARRAY['Academic Certificates', 'IELTS/TOEFL', 'Passport', 'Health Insurance', 'Financial Proof'],
 '4-8 weeks for student visa',
 ARRAY['Student', 'Work', 'PR', 'Tourist', 'Business']),

('new-zealand', 'New Zealand', '🇳🇿', 'Student & work-friendly destination',
 ARRAY['Beautiful landscapes', 'Quality education', 'Work opportunities', 'Peaceful environment'],
 ARRAY['Academic Transcripts', 'English Proficiency', 'Passport', 'Medical Certificate'],
 '4-6 weeks for student visa',
 ARRAY['Student', 'Work', 'Tourist', 'Business']),

('usa', 'USA', '🇺🇸', 'Leading universities & career paths',
 ARRAY['Top-ranked universities', 'Innovation hub', 'Career opportunities', 'Cultural diversity'],
 ARRAY['Academic Records', 'TOEFL/IELTS', 'SAT/GRE scores', 'Financial Documents', 'Passport'],
 '2-4 weeks for student visa',
 ARRAY['Student', 'Work', 'Tourist', 'Business']),

('uk', 'United Kingdom', '🇬🇧', 'Affordable study & job prospects',
 ARRAY['Historic universities', 'Rich cultural heritage', 'Gateway to Europe', 'Strong alumni networks'],
 ARRAY['Academic Certificates', 'IELTS', 'Passport', 'Financial Statements', 'SOP'],
 '3-6 weeks for student visa',
 ARRAY['Student', 'Work', 'Tourist', 'Business']),

('france', 'France', '🇫🇷', 'Excellence in education and culture',
 ARRAY['Affordable education', 'Rich cultural experience', 'Central European location', 'Research opportunities'],
 ARRAY['Academic Transcripts', 'French/English Proficiency', 'Passport', 'Motivation Letter'],
 '4-8 weeks for student visa',
 ARRAY['Student', 'Work', 'Tourist']),

('japan', 'Japan', '🇯🇵', 'Technology and innovation hub',
 ARRAY['Advanced technology', 'Unique culture', 'Strong economy', 'Quality education'],
 ARRAY['Academic Records', 'Japanese/English Proficiency', 'Passport', 'Certificate of Eligibility'],
 '2-4 weeks for student visa',
 ARRAY['Student', 'Work', 'Tourist', 'Business']),

('singapore', 'Singapore', '🇸🇬', 'Gateway to Asia-Pacific',
 ARRAY['Strategic location', 'Multicultural environment', 'Strong economy', 'Quality institutions'],
 ARRAY['Academic Certificates', 'English Proficiency', 'Passport', 'Financial Proof'],
 '2-4 weeks for student visa',
 ARRAY['Student', 'Work', 'Tourist', 'Business']);

-- Add sample top colleges data
UPDATE public.countries SET top_colleges = '[
  {"name": "University of Toronto", "city": "Toronto", "rank": 1},
  {"name": "McGill University", "city": "Montreal", "rank": 2},
  {"name": "University of British Columbia", "city": "Vancouver", "rank": 3},
  {"name": "University of Alberta", "city": "Edmonton", "rank": 4},
  {"name": "McMaster University", "city": "Hamilton", "rank": 5},
  {"name": "University of Waterloo", "city": "Waterloo", "rank": 6}
]'::jsonb WHERE slug = 'canada';

UPDATE public.countries SET best_places = '[
  {"name": "Toronto", "city": "Ontario"},
  {"name": "Vancouver", "city": "British Columbia"},
  {"name": "Montreal", "city": "Quebec"},
  {"name": "Calgary", "city": "Alberta"},
  {"name": "Ottawa", "city": "Ontario"},
  {"name": "Quebec City", "city": "Quebec"}
]'::jsonb WHERE slug = 'canada';