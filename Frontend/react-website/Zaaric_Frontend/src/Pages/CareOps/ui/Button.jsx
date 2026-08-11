import React from 'react';

/**
 * Renders a <span> by default. The mini-app frames are pictures, so their
 * "buttons" must not be focusable, and must not match Home's capture-phase
 * click handler (`button, [role="button"], .cta-btn, .cta-button, .apply`).
 * Pass as="button" only for the page's genuinely interactive CTAs.
 */
const Button = ({
  as: Tag = 'span',
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  className = '',
  children,
  ...rest
}) => (
  <Tag
    className={`co-btn co-btn--${variant} co-btn--${size} ${className}`}
    {...rest}
  >
    {icon}
    <span className="co-btn__label">{children}</span>
    {iconRight}
  </Tag>
);

export default Button;
