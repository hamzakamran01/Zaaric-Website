import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/navbar.jsx";
import Home from "../Pages/Home/home.jsx";
import LoadingPage from "../Components/Loading/loading.jsx";
import { HelmetProvider, Helmet } from "react-helmet-async";
import './App.css';

// Product pages are lazy so the homepage bundle is unaffected by them.
const CareOps = lazy(() => import("../Pages/CareOps/CareOps.jsx"));


// Automatically scroll to top on route change.
// Skipped when the navigation is carrying a deep-link target, otherwise a
// cross-route section link gets yanked back to the top before it can scroll.
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo || location.hash) return;
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Small delay ensures everything is rendered before scrolling.
      // Guarded so a direct landing on /page#section keeps its anchor.
      if (!window.location.hash) {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100);
      }

      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [loading]);


  return (
    <div className="App">
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <HelmetProvider>
          {/* Site-wide tags only. Page-scoped tags — title, description,
              canonical, OG/Twitter — belong to each route, so that /careops
              does not inherit the homepage's canonical URL. */}
          <Helmet>
            <meta name="author" content="Zaaric Team" />
            <meta property="og:site_name" content="Zaaric" />

            {/* Structured Data (JSON-LD) - Organization & WebSite */}
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
                      "@type": "WebSite",
                      "@id": "https://zaaric-ai.com/#website",
                      "url": "https://zaaric-ai.com",
                      "name": "Zaaric",
                      "publisher": { "@id": "https://zaaric-ai.com/#organization" },
                      "inLanguage": "en-US"
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
              <Suspense fallback={<div className="route-fallback" />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/careops" element={<CareOps />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </Suspense>
            </div>
          )}
        </HelmetProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
