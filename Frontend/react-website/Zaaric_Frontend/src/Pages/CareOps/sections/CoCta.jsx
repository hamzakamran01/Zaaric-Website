import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Check, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/index.js';
import { CTA } from '../data/content.js';

const EMPTY = {
  name: '', property: '', rooms: '', properties: '1', email: '', note: '',
};

const CoCta = ({ formRef }) => {
  const [form, setForm] = useState(EMPTY);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSending(true);
    setError('');

    const message = [
      `Property: ${form.property}`,
      `Rooms: ${form.rooms}`,
      `Number of properties: ${form.properties}`,
      '',
      form.note || '(no note)',
    ].join('\n');

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CAREOPS_TEMPLATE_ID ||
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          package: 'CareOps — design partner',
          message,
          to_email: 'services@zaaric-ai.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setSending(false);
        setForm(EMPTY);
      })
      .catch(() => {
        setSending(false);
        setError(
          'That didn’t send. Email services@zaaric-ai.com directly and we’ll pick it up.'
        );
      });
  };

  return (
    <section className="co-section co-cta" id="careops-contact" ref={formRef}>
      <div className="co-shell">
        <div className="co-cta__grid">
          <header className="co-cta__copy co-anim">
            <p className="co-eyebrow">{CTA.eyebrow}</p>
            <h2 className="co-h2">{CTA.headline}</h2>
            <p className="co-lede">{CTA.lede}</p>
            <ul className="co-points">
              {CTA.bullets.map((b) => (
                <li key={b}>
                  <Check size={15} strokeWidth={2.4} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </header>

          <div className="co-cta__formwrap co-anim" style={{ '--co-d': '110ms' }}>
            {sent ? (
              <div className="co-cta__done" role="status">
                <CheckCircle2 size={30} strokeWidth={1.8} />
                <h3>Got it — thank you.</h3>
                <p>We’ll be in touch within one business day to set up the walkthrough.</p>
              </div>
            ) : (
              <form className="co-form" onSubmit={submit} noValidate={false}>
                <div className="co-form__row">
                  <label className="co-field">
                    <span className="co-field__label">Your name</span>
                    <input className="co-input" name="name" value={form.name}
                      onChange={change} required autoComplete="name" />
                  </label>
                  <label className="co-field">
                    <span className="co-field__label">Email</span>
                    <input className="co-input" type="email" name="email" value={form.email}
                      onChange={change} required autoComplete="email" />
                  </label>
                </div>

                <label className="co-field">
                  <span className="co-field__label">Property name</span>
                  <input className="co-input" name="property" value={form.property}
                    onChange={change} required />
                </label>

                <div className="co-form__row">
                  <label className="co-field">
                    <span className="co-field__label">Rooms</span>
                    <input className="co-input" name="rooms" value={form.rooms}
                      onChange={change} inputMode="numeric" placeholder="e.g. 42" required />
                  </label>
                  <label className="co-field">
                    <span className="co-field__label">Properties</span>
                    <select className="co-input" name="properties" value={form.properties} onChange={change}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3-5">3–5</option>
                      <option value="6+">6 or more</option>
                    </select>
                  </label>
                </div>

                <label className="co-field">
                  <span className="co-field__label">
                    Anything we should know? <span className="co-field__opt">optional</span>
                  </span>
                  <textarea className="co-input co-input--area" name="note" rows={3}
                    value={form.note} onChange={change}
                    placeholder="How inquiries reach you today, what you run for a PMS…" />
                </label>

                {error && <p className="co-form__error" role="alert">{error}</p>}

                <Button as="button" type="submit" variant="primary" size="lg"
                  disabled={sending}
                  iconRight={<Send size={16} strokeWidth={2.1} />}>
                  {sending ? 'Sending…' : 'Request a walkthrough'}
                </Button>

                <p className="co-form__note">{CTA.formNote}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoCta;
