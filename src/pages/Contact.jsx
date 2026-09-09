import { useState } from 'react';

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <div className="page-intro">
        <p className="eyebrow">Client care</p>
        <h1 className="serif">Let’s talk.</h1>
        <p>
          Questions about an order, a piece, or just good design? We’d love to hear from you.
        </p>
      </div>

      <main className="container-wide section-space">
        <div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h2 className="section-title max-w-sm">We’re here to help.</h2>
            <p className="section-copy mt-6 max-w-sm text-sm">
              Our client care team is available Monday–Friday, 9am–5pm. We usually reply within one business day.
            </p>

            <div className="mt-10 space-y-5 border-t border-[var(--line)] pt-6 text-sm">
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[.16em] text-[var(--accent-dark)]">
                  Email
                </p>
                <p>hello@korahouse.example</p>
              </div>
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[.16em] text-[var(--accent-dark)]">
                  Visit
                </p>
                <p>
                  18 Mercer Street
                  <br />
                  New York, NY 10013
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--surface)] p-6 sm:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label>
                  <span className="form-label">Name *</span>
                  <input required className="form-input" placeholder="Your name" />
                </label>
                <label>
                  <span className="form-label">Phone</span>
                  <input className="form-input" placeholder="+1 000 000 0000" />
                </label>
              </div>

              <label className="block">
                <span className="form-label">Email *</span>
                <input required type="email" className="form-input" placeholder="you@example.com" />
              </label>

              <label className="block">
                <span className="form-label">Message *</span>
                <textarea required rows="6" className="form-input resize-none" placeholder="How can we help?" />
              </label>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button type="submit" className="button-primary">
                  {sent ? 'Message sent ✓' : 'Send message ↗'}
                </button>
                {sent && (
                  <p className="text-xs text-[var(--muted)]" role="status">
                    Thanks—we’ll be in touch shortly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
