-- Create the services table
CREATE TABLE services (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    category TEXT NOT NULL,
    title TEXT NOT NULL,
    price_description TEXT NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Insert initial seed data
INSERT INTO services (category, title, price_description) VALUES
-- Stone Engraving & Photos
('Stone Engraving & Photos', 'Stone Engraving', '₹400/sq ft'),
('Stone Engraving & Photos', 'Single Photo up to shoulder', '₹1,500'),
('Stone Engraving & Photos', 'Full Photo', '₹3,000'),

-- Digital Printing
('Digital Printing', 'PVC (13x19)', '₹35 with cutting'),
('Digital Printing', 'Non-PVC (13x19)', '₹25 with cutting'),
('Digital Printing', 'Board (13x19)', '₹20 with cutting'),
('Digital Printing', 'Art Paper (13x19)', '₹15 with cutting'),
('Digital Printing', 'Colour Xerox (A4 Size)', '₹6'),
('Digital Printing', 'Colour Xerox (A3 Size)', '₹15'),
('Digital Printing', 'Black and White Xerox (A4 Size)', '90 Paisa'),
('Digital Printing', 'Blue Print', '₹1'),

-- Laser Cutting
('Laser Cutting', 'Wooden MDF', 'Price based on sqft and design'),
('Laser Cutting', 'Foam', 'Price based on sqft and design'),
('Laser Cutting', 'PVC Sheet / Drum Sheet', 'Price based on sqft and design'),
('Laser Cutting', 'Acrylic', 'Price based on sqft and design'),

-- Stickering & Vinyl
('Stickering & Vinyl', 'Radium Sticker', '₹80/sq ft'),
('Stickering & Vinyl', 'Signboards', '₹180/sq ft'),
('Stickering & Vinyl', 'Vinyl Printing', '₹65/sq ft (with design and pasting)'),
('Stickering & Vinyl', 'Black Film / Sun-Controlled Film', '₹75/sq ft');
