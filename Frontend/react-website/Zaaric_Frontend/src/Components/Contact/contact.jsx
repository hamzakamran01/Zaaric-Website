import React, { useState, useMemo, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import {
    Mail,
    User,
    MessageSquare,
    Send,
    Calendar,
    Clock,
    CheckCircle2,
    Sparkles,
    Phone,
    MapPin,
    ArrowRight,
    Globe
} from "lucide-react";
import './contact.css';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [scheduleCall, setScheduleCall] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [useCustomTime, setUseCustomTime] = useState(false);
    const [customTime, setCustomTime] = useState("");
    const [customTimezone, setCustomTimezone] = useState("");
    const sectionRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        packageType: "Custom",
        message: ""
    });

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

        const elements = document.querySelectorAll(".contact-animate");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Generate next 14 weekdays
    const availableDates = useMemo(() => {
        const dates = [];
        const today = new Date();
        let count = 0;
        let currentDate = new Date(today);
        currentDate.setDate(currentDate.getDate() + 1);

        while (count < 14) {
            const dayOfWeek = currentDate.getDay();
            if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                dates.push(new Date(currentDate));
                count++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    }, []);

    const timeSlots = [
        { value: "09:00", label: "9:00 AM" },
        { value: "10:00", label: "10:00 AM" },
        { value: "11:00", label: "11:00 AM" },
        { value: "14:00", label: "2:00 PM" },
        { value: "15:00", label: "3:00 PM" },
        { value: "16:00", label: "4:00 PM" },
        { value: "17:00", label: "5:00 PM" }
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        let fullMessage = formData.message;
        if (scheduleCall && selectedDate) {
            if (useCustomTime && customTime && customTimezone) {
                fullMessage += `\n\n📅 Requested Call Schedule:\nDate: ${formatDate(selectedDate)}\nCustom Time: ${customTime}\nTimezone: ${customTimezone}`;
            } else if (selectedTime) {
                const timeLabel = timeSlots.find(t => t.value === selectedTime)?.label || selectedTime;
                fullMessage += `\n\n📅 Requested Call Schedule:\nDate: ${formatDate(selectedDate)}\nTime: ${timeLabel} (GMT+5)`;
            }
        }

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: formData.name,
                from_email: formData.email,
                package: formData.packageType,
                message: fullMessage,
                to_email: "services@zaaric.com"
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setIsSubmitted(true);
                setIsSubmitting(false);
                setFormData({ name: "", email: "", packageType: "Custom", message: "" });
                setScheduleCall(false);
                setSelectedDate(null);
                setSelectedTime(null);
                setUseCustomTime(false);
                setCustomTime("");
                setCustomTimezone("");
            })
            .catch(() => {
                setIsSubmitting(false);
                alert("Failed to send message. Please try again or contact us directly at services@zaaric.com");
            });
    };

    const services = [
        { value: "Agentic AI Solutions", label: "Agentic AI Solutions" },
        { value: "AI Automation", label: "AI Automation" },
        { value: "Custom Web Solution", label: "Custom Web Solution" },
        { value: "Idea to Tech Product", label: "Idea to Tech Product" },
        { value: "Business Consultation", label: "Business Consultation in Tech" },
        { value: "Job Application", label: "Apply for a Position" }
    ];

    return (
        <section className="contact-section" id="contact" ref={sectionRef}>
            {/* Ambient Background Orbs */}
            <div className="contact-orb orb-left"></div>
            <div className="contact-orb orb-right"></div>

            <div className="contact-container">
                {/* Section Header */}
                <div className="contact-header contact-animate">
                    <span className="contact-badge">
                        <Sparkles size={14} />
                        Let's Connect
                    </span>
                    <h2 className="contact-title">
                        Get in <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="contact-subtitle">
                        Ready to transform your business with enterprise AI? We'd love to hear from you.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="contact-grid">
                    {/* Left - Contact Info */}
                    <div className="contact-info-card contact-animate">
                        <div className="info-card-glow"></div>

                        <div className="info-header">
                            <h3>Contact Information</h3>
                            <p>Reach out to us for enterprise solutions</p>
                        </div>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon">
                                    <Mail size={22} />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Email Us</span>
                                    <a href="mailto:services@zaaric-ai.com" className="info-value">services@zaaric-ai.com</a>
                                </div>
                            </div>

                            <div className="info-item hide-mobile">
                                <div className="info-icon">
                                    <Phone size={22} />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Call Us</span>
                                    <span className="info-value">Available on Request</span>
                                </div>
                            </div>

                            <div className="info-item hide-mobile">
                                <div className="info-icon">
                                    <MapPin size={22} />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Location</span>
                                    <span className="info-value">Global Remote Team</span>
                                </div>
                            </div>

                            <div className="info-item hide-mobile">
                                <div className="info-icon">
                                    <Globe size={22} />
                                </div>
                                <div className="info-content">
                                    <span className="info-label">Timezone</span>
                                    <span className="info-value">GMT+5 (Pakistan)</span>
                                </div>
                            </div>
                        </div>

                        {/* Response Time Badge */}
                        <div className="response-badge">
                            <Clock size={16} />
                            <span>Average response time: <strong>Under 24 hours</strong></span>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="contact-form-card contact-animate">
                        <div className="form-card-glow"></div>

                        {isSubmitted ? (
                            <div className="success-state">
                                <div className="success-icon">
                                    <CheckCircle2 size={64} />
                                </div>
                                <h3>Message Sent Successfully!</h3>
                                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                <button
                                    className="send-another-btn"
                                    onClick={() => setIsSubmitted(false)}
                                >
                                    Send Another Message
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="enterprise-form">
                                {/* Two Column Row */}
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">
                                            <User size={16} />
                                            Your Name <span className="required">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">
                                            <Mail size={16} />
                                            Email Address <span className="required">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@company.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="form-input"
                                        />
                                    </div>
                                </div>

                                {/* Service Select */}
                                <div className="form-group">
                                    <label className="form-label">
                                        <Sparkles size={16} />
                                        Service Required <span className="required">*</span>
                                    </label>
                                    <select
                                        name="packageType"
                                        value={formData.packageType}
                                        onChange={handleChange}
                                        required
                                        className="form-select"
                                    >
                                        <option value="Custom" disabled>Choose a service</option>
                                        {services.map((service) => (
                                            <option key={service.value} value={service.value}>
                                                {service.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div className="form-group">
                                    <label className="form-label">
                                        <MessageSquare size={16} />
                                        Project Details <span className="required">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Tell us about your project, goals, and timeline..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="form-textarea"
                                        rows={4}
                                    />
                                </div>

                                {/* Schedule Call Toggle */}
                                <div className="schedule-section">
                                    <div
                                        className={`schedule-toggle-enterprise ${scheduleCall ? 'active' : ''}`}
                                        onClick={() => setScheduleCall(!scheduleCall)}
                                    >
                                        <div className="toggle-switch">
                                            <div className="toggle-thumb-enterprise"></div>
                                        </div>
                                        <div className="toggle-content">
                                            <Calendar size={18} />
                                            <span>Schedule a Discovery Call</span>
                                        </div>
                                    </div>

                                    {scheduleCall && (
                                        <div className="schedule-picker-enterprise">
                                            <div className="picker-section">
                                                <div className="picker-label">
                                                    <Calendar size={16} />
                                                    Select a Date
                                                </div>
                                                <div className="date-grid-enterprise">
                                                    {availableDates.slice(0, 7).map((date, index) => (
                                                        <div
                                                            key={index}
                                                            className={`date-chip ${selectedDate?.toDateString() === date.toDateString() ? 'selected' : ''}`}
                                                            onClick={() => setSelectedDate(date)}
                                                        >
                                                            <span className="chip-day">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                                                            <span className="chip-date">{date.getDate()}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {selectedDate && (
                                                <div className="picker-section">
                                                    <div className="picker-label">
                                                        <Clock size={16} />
                                                        Select Time (GMT+5)
                                                    </div>
                                                    <div className="time-grid-enterprise">
                                                        {timeSlots.map((slot, index) => (
                                                            <div
                                                                key={index}
                                                                className={`time-chip ${selectedTime === slot.value && !useCustomTime ? 'selected' : ''}`}
                                                                onClick={() => {
                                                                    setSelectedTime(slot.value);
                                                                    setUseCustomTime(false);
                                                                }}
                                                            >
                                                                {slot.label}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Custom Time Option */}
                                                    <div className="custom-time-enterprise">
                                                        <div
                                                            className={`custom-option ${useCustomTime ? 'active' : ''}`}
                                                            onClick={() => {
                                                                setUseCustomTime(!useCustomTime);
                                                                if (!useCustomTime) setSelectedTime(null);
                                                            }}
                                                        >
                                                            <div className="custom-dot"></div>
                                                            <span>Prefer a different time?</span>
                                                        </div>

                                                        {useCustomTime && (
                                                            <div className="custom-inputs">
                                                                <input
                                                                    type="text"
                                                                    className="custom-input"
                                                                    placeholder="e.g., 3:30 PM"
                                                                    value={customTime}
                                                                    onChange={(e) => setCustomTime(e.target.value)}
                                                                />
                                                                <select
                                                                    className="custom-select"
                                                                    value={customTimezone}
                                                                    onChange={(e) => setCustomTimezone(e.target.value)}
                                                                >
                                                                    <option value="">Timezone</option>
                                                                    <option value="UTC-08:00">UTC-08 (Pacific)</option>
                                                                    <option value="UTC-05:00">UTC-05 (Eastern)</option>
                                                                    <option value="UTC+00:00">UTC+00 (London)</option>
                                                                    <option value="UTC+01:00">UTC+01 (Paris)</option>
                                                                    <option value="UTC+05:30">UTC+05:30 (Mumbai)</option>
                                                                    <option value="UTC+08:00">UTC+08 (Singapore)</option>
                                                                </select>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            {selectedDate && (selectedTime || (useCustomTime && customTime && customTimezone)) && (
                                                <div className="schedule-confirm">
                                                    <CheckCircle2 size={18} />
                                                    <span>
                                                        Call scheduled for <strong>{formatDate(selectedDate)}</strong> at{' '}
                                                        <strong>
                                                            {useCustomTime ? `${customTime} (${customTimezone})` : timeSlots.find(t => t.value === selectedTime)?.label}
                                                        </strong>
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className={`submit-btn-enterprise ${isSubmitting ? 'submitting' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="spinner"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            {scheduleCall && selectedDate && selectedTime ? 'Send & Schedule Call' : 'Send Message'}
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
