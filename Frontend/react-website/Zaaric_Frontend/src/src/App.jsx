import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/navbar.jsx";
import Home from "../Pages/Home/home.jsx";
import LoadingPage from "../Components/Loading/loading.jsx";
import { HelmetProvider, Helmet } from "react-helmet-async";
import './App.css';


// Automatically scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Small delay ensures everything is rendered before scrolling
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);

      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [loading]);


  return (
    <div className="App">
      <BrowserRouter>
        <HelmetProvider>
          <Helmet>
            {/* Primary Meta Tags */}
            <title>Zaaric | Enterprise AI Solutions & Agentic Systems</title>
            <meta name="title" content="Zaaric | Enterprise AI Solutions & Agentic Systems" />
            <meta
              name="description"
              content="Zaaric revolutionizes enterprises with cutting-edge Agentic AI solutions, bespoke software development, and digital transformation strategies. Partner with us to define your digital excellence."
            />
            <meta
              name="keywords"
              content="Zaaric, Zaaric AI, Agentic AI, Enterprise AI, AI Agents, Software Development, Digital Transformation, Tech Agency, Business Automation, Hamza Kamran, Umair Khan Shinwari"
            />
            <meta name="author" content="Zaaric Team" />
            <link rel="canonical" href="https://zaaric-ai.com/" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://zaaric-ai.com/" />
            <meta property="og:title" content="Zaaric | Enterprise AI Solutions & Agentic Systems" />
            <meta
              property="og:description"
              content="Zaaric revolutionizes enterprises with cutting-edge Agentic AI solutions, bespoke software development, and digital transformation strategies. Partner with us to define your digital excellence."
            />
            <meta property="og:image" content="https://zaaric-ai.com/Assets/new_favicon.jpeg" />
            <meta property="og:site_name" content="Zaaric" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://zaaric-ai.com/" />
            <meta property="twitter:title" content="Zaaric | Enterprise AI Solutions & Agentic Systems" />
            <meta
              property="twitter:description"
              content="Zaaric revolutionizes enterprises with cutting-edge Agentic AI solutions, bespoke software development, and digital transformation strategies. Partner with us to define your digital excellence."
            />
            <meta property="twitter:image" content="https://zaaric-ai.com/Assets/new_favicon.jpeg" />

            {/* Structured Data (JSON-LD) - Enterprise Knowledge Graph */}
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@graph": [
                    {
                      "@type": "Organization",
                      "@id": "https://zaaric-ai.com/#organization",
                      "name": "Zaaric",
                      "url": "https://zaaric-ai.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://zaaric-ai.com/Assets/new_favicon.jpeg",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://www.linkedin.com/company/zaaric",
                        "https://twitter.com/zaaric",
                        "https://www.instagram.com/zaaric.official",
                        "https://github.com/zaaric"
                      ],
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+92-300-1234567",
                        "contactType": "customer service",
                        "areaServed": ["US", "PK", "AE", "GB"],
                        "availableLanguage": ["English", "Urdu"]
                      }
                    },
                    {
                      "@type": "ProfessionalService",
                      "@id": "https://zaaric-ai.com/#service",
                      "name": "Zaaric Enterprise AI & MVP Solutions",
                      "url": "https://zaaric-ai.com",
                      "image": "https://zaaric-ai.com/Assets/hero_main_dashboard_8k.png",
                      "description": "Zaaric specializes in Enterprise Agentic AI for SMEs and Rapid MVP Development, transforming ideas into scalable, investor-ready products.",
                      "priceRange": "$$$",
                      "address": {
                        "@type": "PostalAddress",
                        "addressCountry": "PK"
                      },
                      "areaServed": [
                        { "@type": "Country", "name": "United States" },
                        { "@type": "Country", "name": "United Kingdom" },
                        { "@type": "Country", "name": "United Arab Emirates" },
                        { "@type": "Country", "name": "Pakistan" }
                      ],
                      "knowsAbout": ["Artificial Intelligence", "Agentic Systems", "MVP Development", "SaaS Architecture", "Enterprise Automation"],
                      "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Premium AI & Development Services",
                        "itemListElement": [
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Enterprise Agentic AI for SMEs",
                              "description": "Revolutionize your SME operations with custom Agentic AI ecosystems. We build autonomous agents that automate complex workflows, reduce operational costs by 30%+, and drive 24/7 productivity."
                            }
                          },
                          {
                            "@type": "Offer",
                            "itemOffered": {
                              "@type": "Service",
                              "name": "Rapid MVP Development",
                              "description": "Accelerate your time-to-market with our rapid MVP development framework. From concept to launch in weeks, we build scalable, investor-ready products that validate your ideas and secure growth."
                            }
                          }
                        ]
                      }
                    },
                    {
                      "@type": "WebSite",
                      "@id": "https://zaaric-ai.com/#website",
                      "url": "https://zaaric-ai.com",
                      "name": "Zaaric",
                      "publisher": { "@id": "https://zaaric-ai.com/#organization" },
                      "inLanguage": "en-US"
                    },
                    {
                      "@type": "Person",
                      "@id": "https://zaaric-ai.com/#hamza",
                      "name": "Hamza Kamran",
                      "jobTitle": "Founder & CEO",
                      "image": "https://zaaric-ai.com/Assets/CEO.png",
                      "url": "https://zaaric-ai.com",
                      "worksFor": { "@id": "https://zaaric-ai.com/#organization" },
                      "sameAs": ["https://www.linkedin.com/in/hamza-kamran"]
                    },
                    {
                      "@type": "Person",
                      "@id": "https://zaaric.com/#umair",
                      "name": "Umair Khan Shinwari",
                      "jobTitle": "Co-Founder & CTO",
                      "image": "https://zaaric.com/Assets/CTO.png",
                      "url": "https://zaaric.com",
                      "worksFor": { "@id": "https://zaaric.com/#organization" },
                      "sameAs": ["https://www.linkedin.com/in/umair-khan-shinwari"]
                    }
                  ]
                }
              `}
            </script>
          </Helmet>

          {loading ? (
            <LoadingPage setLoading={setLoading} />
          ) : (
            <div className="main-content">
              <ScrollToTop />
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                {/* Add more routes here */}
              </Routes>
            </div>
          )}
        </HelmetProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
