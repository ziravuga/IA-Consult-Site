/*
  # Create Website Content Tables

  ## Overview
  This migration creates all necessary tables to store the website content including services, projects, prototypes, blog articles, contact submissions, and newsletter subscriptions.

  ## New Tables

  ### 1. `services`
  Stores all service offerings displayed on the website
  - `id` (uuid, primary key)
  - `icon_name` (text) - Lucide icon name
  - `title` (jsonb) - Multilingual title {fr, en}
  - `description` (jsonb) - Multilingual description {fr, en}
  - `features` (jsonb) - Array of feature translations
  - `display_order` (integer) - Order of display
  - `is_active` (boolean) - Visibility toggle
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 2. `projects`
  Stores project realizations and case studies
  - `id` (uuid, primary key)
  - `title` (text)
  - `category` (text)
  - `description` (text)
  - `results` (jsonb) - Array of result metrics
  - `image_url` (text)
  - `tags` (jsonb) - Array of technology tags
  - `display_order` (integer)
  - `is_featured` (boolean)
  - `is_active` (boolean)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 3. `prototypes`
  Stores interactive prototypes and demos
  - `id` (uuid, primary key)
  - `slug` (text, unique)
  - `title` (text)
  - `category` (text)
  - `description` (text)
  - `icon_name` (text)
  - `features` (jsonb) - Array of features
  - `technologies` (jsonb) - Array of tech stack
  - `demo_url` (text)
  - `image_url` (text)
  - `display_order` (integer)
  - `is_active` (boolean)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 4. `blog_articles`
  Stores blog posts and articles
  - `id` (uuid, primary key)
  - `slug` (text, unique)
  - `title` (text)
  - `excerpt` (text)
  - `content` (text) - Full article content
  - `author` (text)
  - `published_date` (date)
  - `read_time` (text)
  - `category` (text)
  - `image_url` (text)
  - `tags` (jsonb) - Array of tags
  - `is_featured` (boolean)
  - `is_published` (boolean)
  - `views_count` (integer)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)

  ### 5. `contact_submissions`
  Stores contact form submissions
  - `id` (uuid, primary key)
  - `name` (text)
  - `email` (text)
  - `company` (text)
  - `subject` (text)
  - `message` (text)
  - `status` (text) - pending, read, responded, archived
  - `ip_address` (text)
  - `user_agent` (text)
  - `created_at` (timestamptz)

  ### 6. `newsletter_subscriptions`
  Stores newsletter email subscriptions
  - `id` (uuid, primary key)
  - `email` (text, unique)
  - `status` (text) - active, unsubscribed
  - `source` (text) - Where they subscribed from
  - `subscribed_at` (timestamptz)
  - `unsubscribed_at` (timestamptz)

  ## Security
  - RLS enabled on all tables
  - Public read access for content tables (services, projects, prototypes, blog_articles)
  - Authenticated access only for submission tables
  - Insert policies for contact forms and newsletter subscriptions
*/

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  icon_name text NOT NULL,
  title jsonb NOT NULL DEFAULT '{}',
  description jsonb NOT NULL DEFAULT '{}',
  features jsonb NOT NULL DEFAULT '[]',
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  results jsonb NOT NULL DEFAULT '[]',
  image_url text NOT NULL,
  tags jsonb NOT NULL DEFAULT '[]',
  display_order integer DEFAULT 0,
  is_featured boolean DEFAULT false,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create prototypes table
CREATE TABLE IF NOT EXISTS prototypes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  category text NOT NULL,
  description text NOT NULL,
  icon_name text NOT NULL,
  features jsonb NOT NULL DEFAULT '[]',
  technologies jsonb NOT NULL DEFAULT '[]',
  demo_url text DEFAULT '',
  image_url text NOT NULL,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create blog_articles table
CREATE TABLE IF NOT EXISTS blog_articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  excerpt text NOT NULL,
  content text DEFAULT '',
  author text NOT NULL,
  published_date date DEFAULT CURRENT_DATE,
  read_time text NOT NULL,
  category text NOT NULL,
  image_url text NOT NULL,
  tags jsonb NOT NULL DEFAULT '[]',
  is_featured boolean DEFAULT false,
  is_published boolean DEFAULT true,
  views_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending',
  ip_address text DEFAULT '',
  user_agent text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text DEFAULT 'active',
  source text DEFAULT 'website',
  subscribed_at timestamptz DEFAULT now(),
  unsubscribed_at timestamptz
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_services_active ON services(is_active, display_order);
CREATE INDEX IF NOT EXISTS idx_projects_active ON projects(is_active, display_order);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(is_featured, is_active);
CREATE INDEX IF NOT EXISTS idx_prototypes_active ON prototypes(is_active, display_order);
CREATE INDEX IF NOT EXISTS idx_prototypes_slug ON prototypes(slug);
CREATE INDEX IF NOT EXISTS idx_blog_published ON blog_articles(is_published, published_date DESC);
CREATE INDEX IF NOT EXISTS idx_blog_slug ON blog_articles(slug);
CREATE INDEX IF NOT EXISTS idx_blog_category ON blog_articles(category);
CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_submissions(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscriptions(status);

-- Enable Row Level Security
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE prototypes ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- RLS Policies for services (public read, authenticated write)
CREATE POLICY "Anyone can view active services"
  ON services FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert services"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update services"
  ON services FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete services"
  ON services FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for projects (public read, authenticated write)
CREATE POLICY "Anyone can view active projects"
  ON projects FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert projects"
  ON projects FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update projects"
  ON projects FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete projects"
  ON projects FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for prototypes (public read, authenticated write)
CREATE POLICY "Anyone can view active prototypes"
  ON prototypes FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can insert prototypes"
  ON prototypes FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update prototypes"
  ON prototypes FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete prototypes"
  ON prototypes FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for blog_articles (public read, authenticated write)
CREATE POLICY "Anyone can view published articles"
  ON blog_articles FOR SELECT
  USING (is_published = true);

CREATE POLICY "Authenticated users can view all articles"
  ON blog_articles FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert articles"
  ON blog_articles FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update articles"
  ON blog_articles FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete articles"
  ON blog_articles FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for contact_submissions (anyone can insert, authenticated can read/update)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- RLS Policies for newsletter_subscriptions (anyone can subscribe, authenticated can manage)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update their subscription"
  ON newsletter_subscriptions FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view subscriptions"
  ON newsletter_subscriptions FOR SELECT
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON services
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_prototypes_updated_at
  BEFORE UPDATE ON prototypes
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_blog_articles_updated_at
  BEFORE UPDATE ON blog_articles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();