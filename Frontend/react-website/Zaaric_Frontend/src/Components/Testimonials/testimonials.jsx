import React, { useEffect, useState, forwardRef, useRef } from "react";
import "./testimonials.css";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        role: "CEO, Tech Innovations",
        text: "Zaaric transformed our digital presence with their cutting-edge solutions. Their AI expertise and attention to detail exceeded our expectations.",
        rating: 5,
        company: "Tech Innovations"
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Founder, Creative Studio",
        text: "Their team is incredibly talented and professional. They delivered beyond our expectations with enterprise-grade quality.",
        rating: 5,
        company: "Creative Studio"
    },
    {
        id: 3,
        name: "Michael Brown",
        role: "CTO, NextGen Solutions",
        text: "The best decision we made was partnering with Zaaric. Their expertise in AI automation is truly unmatched in the industry.",
        rating: 5,
        company: "NextGen Solutions"
    },
    {
        id: 4,
        name: "Emily Davis",
        role: "Marketing Head, Bright Ideas",
        text: "Zaaric's creativity and technical skills are truly exceptional. A game-changer for our business operations and growth.",
        rating: 5,
        company: "Bright Ideas"
    },
];

const TestimonialSection = forwardRef((props, ref) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                nextTestimonial();
            }
        }, 6000);

        return () => clearInterval(interval);
    }, [activeIndex, isAnimating]);

    const nextTestimonial = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const prevTestimonial = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const goToTestimonial = (index) => {
        if (isAnimating || index === activeIndex) return;
        setIsAnimating(true);
        setActiveIndex(index);
        setTimeout(() => setIsAnimating(false), 600);
    };

    // Intersection Observer for reveal animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.1 }
        );

        const cards = document.querySelectorAll(".testimonial-card-enterprise");
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="testimonials-section" ref={ref || sectionRef}>
            {/* Ambient Background Orbs */}
            <div className="testimonials-orb orb-left"></div>
            <div className="testimonials-orb orb-right"></div>

            <div className="testimonials-container">
                {/* Section Header */}
                <div className="testimonials-header">
                    <span className="testimonials-badge">
                        <Star size={14} />
                        Client Success Stories
                    </span>
                    <h2 className="testimonials-title">
                        What Our <span className="gradient-text">Clients</span> Say
                    </h2>
                    <p className="testimonials-subtitle">
                        Trusted by industry leaders worldwide for delivering enterprise-grade AI solutions
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className="testimonials-carousel">
                    {/* Navigation Arrows */}
                    <button
                        className="carousel-nav prev"
                        onClick={prevTestimonial}
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <div className="testimonials-track">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`testimonial-card-enterprise ${index === activeIndex ? "active" : ""}`}
                            >
                                {/* Quote Icon */}
                                <div className="quote-wrapper">
                                    <Quote className="quote-icon-enterprise" />
                                </div>

                                {/* Testimonial Content */}
                                <blockquote className="testimonial-text">
                                    "{testimonial.text}"
                                </blockquote>

                                {/* Rating Stars */}
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={18} className="star-icon" />
                                    ))}
                                </div>

                                {/* Author Info */}
                                <div className="testimonial-author-info">
                                    <div className="author-avatar">
                                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <div className="author-details">
                                        <h4 className="author-name">{testimonial.name}</h4>
                                    </div>
                                </div>

                                {/* Card Glow Effect */}
                                <div className="card-glow-effect"></div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="carousel-nav next"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="testimonials-pagination">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`pagination-dot ${index === activeIndex ? "active" : ""}`}
                            onClick={() => goToTestimonial(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
});

export default TestimonialSection;