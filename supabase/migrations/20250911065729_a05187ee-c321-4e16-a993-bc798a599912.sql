-- Update countries with flag images and more detailed data
UPDATE public.countries SET 
  hero_image = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  top_colleges = '[
    {"name": "University of Toronto", "city": "Toronto", "rank": 1, "description": "Top research university"},
    {"name": "McGill University", "city": "Montreal", "rank": 2, "description": "Prestigious bilingual university"},
    {"name": "University of British Columbia", "city": "Vancouver", "rank": 3, "description": "Beautiful campus, excellent programs"},
    {"name": "University of Alberta", "city": "Edmonton", "rank": 4, "description": "Strong in engineering and sciences"},
    {"name": "McMaster University", "city": "Hamilton", "rank": 5, "description": "Medical and health sciences leader"},
    {"name": "University of Waterloo", "city": "Waterloo", "rank": 6, "description": "Technology and innovation hub"}
  ]'::jsonb,
  best_places = '[
    {"name": "Toronto", "city": "Ontario", "description": "Multicultural hub with endless opportunities"},
    {"name": "Vancouver", "city": "British Columbia", "description": "Beautiful coastal city with mild climate"},
    {"name": "Montreal", "city": "Quebec", "description": "European charm with vibrant culture"},
    {"name": "Calgary", "city": "Alberta", "description": "Gateway to the Rockies, oil industry center"},
    {"name": "Ottawa", "city": "Ontario", "description": "Capital city with government opportunities"},
    {"name": "Quebec City", "city": "Quebec", "description": "Historic city with French culture"}
  ]'::jsonb
WHERE slug = 'canada';

UPDATE public.countries SET 
  hero_image = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  top_colleges = '[
    {"name": "University of Melbourne", "city": "Melbourne", "rank": 1, "description": "Australia top university"},
    {"name": "Australian National University", "city": "Canberra", "rank": 2, "description": "Leading research institution"},
    {"name": "University of Sydney", "city": "Sydney", "rank": 3, "description": "Oldest university in Australia"},
    {"name": "University of Queensland", "city": "Brisbane", "rank": 4, "description": "Strong in research and innovation"},
    {"name": "Monash University", "city": "Melbourne", "rank": 5, "description": "Global university with modern facilities"},
    {"name": "University of Western Australia", "city": "Perth", "rank": 6, "description": "Beautiful campus, excellent programs"}
  ]'::jsonb,
  best_places = '[
    {"name": "Sydney", "city": "New South Wales", "description": "Harbor city with iconic landmarks"},
    {"name": "Melbourne", "city": "Victoria", "description": "Cultural capital with great coffee"},
    {"name": "Brisbane", "city": "Queensland", "description": "Sunny climate, close to beaches"},
    {"name": "Perth", "city": "Western Australia", "description": "Modern city with great lifestyle"},
    {"name": "Adelaide", "city": "South Australia", "description": "Wine region with affordable living"},
    {"name": "Gold Coast", "city": "Queensland", "description": "Beaches and entertainment"}
  ]'::jsonb
WHERE slug = 'australia';

UPDATE public.countries SET 
  hero_image = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
  top_colleges = '[
    {"name": "University of Auckland", "city": "Auckland", "rank": 1, "description": "New Zealand largest university"},
    {"name": "University of Otago", "city": "Dunedin", "rank": 2, "description": "Oldest university in New Zealand"},
    {"name": "Victoria University of Wellington", "city": "Wellington", "rank": 3, "description": "Capital city university"},
    {"name": "University of Canterbury", "city": "Christchurch", "rank": 4, "description": "Strong engineering programs"},
    {"name": "Massey University", "city": "Palmerston North", "rank": 5, "description": "Excellence in agriculture and veterinary"},
    {"name": "Auckland University of Technology", "city": "Auckland", "rank": 6, "description": "Modern, practical education"}
  ]'::jsonb,
  best_places = '[
    {"name": "Auckland", "city": "North Island", "description": "Largest city with diverse opportunities"},
    {"name": "Wellington", "city": "North Island", "description": "Capital city, government and arts hub"},
    {"name": "Christchurch", "city": "South Island", "description": "Garden city with English heritage"},
    {"name": "Hamilton", "city": "North Island", "description": "University town with rural charm"},
    {"name": "Dunedin", "city": "South Island", "description": "Student city with Scottish heritage"},
    {"name": "Tauranga", "city": "North Island", "description": "Beautiful bay city"}
  ]'::jsonb
WHERE slug = 'new-zealand';

UPDATE public.countries SET 
  hero_image = 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&h=600&fit=crop',
  top_colleges = '[
    {"name": "Harvard University", "city": "Cambridge", "rank": 1, "description": "Ivy League, world prestigious"},
    {"name": "Stanford University", "city": "Stanford", "rank": 2, "description": "Silicon Valley innovation hub"},
    {"name": "Massachusetts Institute of Technology", "city": "Cambridge", "rank": 3, "description": "Technology and engineering leader"},
    {"name": "University of California, Berkeley", "city": "Berkeley", "rank": 4, "description": "Public research powerhouse"},
    {"name": "Yale University", "city": "New Haven", "rank": 5, "description": "Historic Ivy League institution"},
    {"name": "Princeton University", "city": "Princeton", "rank": 6, "description": "Elite liberal arts education"}
  ]'::jsonb,
  best_places = '[
    {"name": "New York City", "city": "New York", "description": "The city that never sleeps"},
    {"name": "Los Angeles", "city": "California", "description": "Entertainment capital of the world"},
    {"name": "San Francisco", "city": "California", "description": "Tech hub with stunning views"},
    {"name": "Boston", "city": "Massachusetts", "description": "Historic city, education center"},
    {"name": "Chicago", "city": "Illinois", "description": "Architecture and cultural center"},
    {"name": "Seattle", "city": "Washington", "description": "Tech companies and coffee culture"}
  ]'::jsonb
WHERE slug = 'usa';

UPDATE public.countries SET 
  hero_image = 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=600&fit=crop',
  top_colleges = '[
    {"name": "University of Oxford", "city": "Oxford", "rank": 1, "description": "World oldest English-speaking university"},
    {"name": "University of Cambridge", "city": "Cambridge", "rank": 2, "description": "Historic excellence in education"},
    {"name": "Imperial College London", "city": "London", "rank": 3, "description": "Science, technology, medicine focus"},
    {"name": "London School of Economics", "city": "London", "rank": 4, "description": "Social sciences leader"},
    {"name": "University College London", "city": "London", "rank": 5, "description": "First university to admit all students"},
    {"name": "University of Edinburgh", "city": "Edinburgh", "rank": 6, "description": "Scotland premier university"}
  ]'::jsonb,
  best_places = '[
    {"name": "London", "city": "England", "description": "Global financial and cultural center"},
    {"name": "Edinburgh", "city": "Scotland", "description": "Historic capital with festivals"},
    {"name": "Manchester", "city": "England", "description": "Industrial heritage, music scene"},
    {"name": "Birmingham", "city": "England", "description": "UK second largest city"},
    {"name": "Glasgow", "city": "Scotland", "description": "Cultural hub with friendly people"},
    {"name": "Bristol", "city": "England", "description": "Creative city with maritime history"}
  ]'::jsonb
WHERE slug = 'uk';