import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
    Brain,
    Layers,
    GitBranch,
    Cloud,
    ShieldCheck,
    Lock,
} from 'lucide-react';
import './EnterpriseCapabilityWheel.css';

/* Clockwise from top — bright flat palette like reference */
const SEGMENTS = [
    { id: 'agentic', label: 'Agentic AI', detail: 'Autonomous reasoning & orchestration', color: '#FFD028', Icon: Brain },
    { id: 'security', label: 'Security', detail: 'Enterprise-grade protection', color: '#7AE048', Icon: ShieldCheck },
    { id: 'cloud', label: 'Cloud Infra', detail: 'Scalable, resilient architecture', color: '#42D4FF', Icon: Cloud },
    { id: 'fullstack', label: 'Full-Stack', detail: 'Production web & mobile platforms', color: '#3A8CFF', Icon: Layers },
    { id: 'compliance', label: 'Compliance', detail: 'HIPAA-ready regulated delivery', color: '#9B59FF', Icon: Lock },
    { id: 'automation', label: 'Automation', detail: 'Workflow engines at enterprise scale', color: '#FF5058', Icon: GitBranch },
];

const CX = 200;
const CY = 200;
const INNER_R = 90;
const OUTER_R = 150;
const MID_R = (INNER_R + OUTER_R) / 2;
const ARROW_EXT = 14; // How far the chevron point extends forward in degrees
const SEG_COUNT = SEGMENTS.length;
const SEG_ANGLE = 360 / SEG_COUNT;

function polar(cx, cy, r, deg) {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function pt(r, deg) {
    return polar(CX, CY, r, deg);
}

/**
 * Perfect circular interlocking segments matching the reference 7-piece wheel:
 * Inner and outer boundaries are true circular arcs.
 * Leading/trailing edges are V-shaped chevrons pointing clockwise.
 */
function chevronSegmentPath(startAngle, endAngle) {
    const a = startAngle;
    const b = endAngle;

    // Trailing edge (notch matching previous segment's tip)
    const p1a = pt(INNER_R, a);
    const p2a = pt(MID_R, a + ARROW_EXT);
    const p3a = pt(OUTER_R, a);

    // Leading edge (arrow tip extending forward)
    const p1b = pt(INNER_R, b);
    const p2b = pt(MID_R, b + ARROW_EXT);
    const p3b = pt(OUTER_R, b);

    // Sweep flag is 1 for clockwise arcs (outer), 0 for counter-clockwise (inner)
    const largeArc = (b - a) > 180 ? 1 : 0;

    return [
        `M ${p1a.x} ${p1a.y}`,
        `L ${p2a.x} ${p2a.y}`,
        `L ${p3a.x} ${p3a.y}`,
        `A ${OUTER_R} ${OUTER_R} 0 ${largeArc} 1 ${p3b.x} ${p3b.y}`,
        `L ${p2b.x} ${p2b.y}`,
        `L ${p1b.x} ${p1b.y}`,
        `A ${INNER_R} ${INNER_R} 0 ${largeArc} 0 ${p1a.x} ${p1a.y}`,
        'Z',
    ].join(' ');
}

function getNodePosition(index) {
    const mid = index * SEG_ANGLE + SEG_ANGLE / 2;
    const rad = ((mid - 90) * Math.PI) / 180;
    // Push the label cleanly outside the perfect circle
    const r = OUTER_R + 32;
    return {
        x: ((CX + r * Math.cos(rad)) / 400) * 100,
        y: ((CY + r * Math.sin(rad)) / 400) * 100,
    };
}

const EnterpriseCapabilityWheel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef(null);

    const cycleNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % SEG_COUNT);
    }, []);

    useEffect(() => {
        if (paused) return undefined;
        timerRef.current = setInterval(cycleNext, 2800);
        return () => clearInterval(timerRef.current);
    }, [paused, cycleNext]);

    const active = SEGMENTS[activeIndex];

    return (
        <div
            className="ecw-container"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="ecw-wheel-stage">
                <div className="ecw-wheel-wrap">
                    <svg
                        className="ecw-svg"
                        viewBox="0 0 400 400"
                        role="img"
                        aria-label="Zaaric enterprise capability wheel"
                    >
                        <defs>
                            <filter id="ecw-soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
                                <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#0f172a" floodOpacity="0.1" />
                            </filter>
                        </defs>

                        <g className="ecw-ring" filter="url(#ecw-soft-shadow)">
                            {SEGMENTS.map((seg, i) => {
                                const start = i * SEG_ANGLE;
                                const end = (i + 1) * SEG_ANGLE;
                                const isActive = i === activeIndex;
                                return (
                                    <path
                                        key={seg.id}
                                        d={chevronSegmentPath(start, end)}
                                        fill={seg.color}
                                        className={`ecw-segment ${isActive ? 'is-active' : ''}`}
                                        onMouseEnter={() => setActiveIndex(i)}
                                        onFocus={() => setActiveIndex(i)}
                                        tabIndex={0}
                                        role="button"
                                        aria-label={seg.label}
                                    />
                                );
                            })}
                        </g>

                        {/* Hollow center */}
                        <circle cx={CX} cy={CY} r={INNER_R - 11 - 6} fill="#f8fafc" />
                        <circle
                            cx={CX}
                            cy={CY}
                            r={54}
                            fill="#ffffff"
                            stroke={active.color}
                            strokeWidth="3"
                            className="ecw-center-disc"
                        />
                        <text x={CX} y={CY + 5} textAnchor="middle" className="ecw-center-title">
                            ZAARIC
                        </text>
                    </svg>

                    {SEGMENTS.map((seg, i) => {
                        const pos = getNodePosition(i);
                        const isActive = i === activeIndex;
                        const { Icon } = seg;
                        return (
                            <button
                                key={`node-${seg.id}`}
                                type="button"
                                className={`ecw-node ${isActive ? 'is-active' : ''}`}
                                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                                onMouseEnter={() => setActiveIndex(i)}
                                onClick={() => setActiveIndex(i)}
                                aria-label={seg.label}
                                aria-pressed={isActive}
                            >
                                <span className="ecw-node-icon" style={{ background: seg.color }}>
                                    <Icon size={15} strokeWidth={2.2} color="#fff" />
                                </span>
                                <span className="ecw-node-label">{seg.label}</span>
                            </button>
                        );
                    })}
                </div>

                <div className="ecw-chip ecw-chip-tl">
                    <span className="ecw-chip-dot" />
                    Live Production
                </div>
                <div className="ecw-chip ecw-chip-tr">HIPAA Ready</div>
                <div className="ecw-chip ecw-chip-bl">99.9% SLA</div>
                <div className="ecw-chip ecw-chip-br">US &amp; EU</div>
            </div>

            <div className="ecw-detail" key={active.id}>
                <div className="ecw-detail-accent" style={{ background: active.color }} />
                <div className="ecw-detail-body">
                    <active.Icon size={18} strokeWidth={2} color={active.color} />
                    <div>
                        <span className="ecw-detail-label">{active.label}</span>
                        <span className="ecw-detail-text">{active.detail}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnterpriseCapabilityWheel;
