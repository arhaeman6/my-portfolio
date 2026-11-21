import { useState } from 'react';
import { motion } from 'motion/react';
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from 'lucide-react';
import { PROFILE } from '../data/portfolio';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (data: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (data.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).';
    }
    if (!EMAIL_PATTERN.test(data.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (data.subject.trim().length < 3) {
      nextErrors.subject = 'Please add a short subject for your message.';
    }
    if (data.message.trim().length < 10) {
      nextErrors.message = 'Please write a message of at least 10 characters.';
    }
    return nextErrors;
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setValues({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      setCopiedEmail(false);
    }
  };

  const mailtoHref = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    values.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    values.message ? `Hi Arha,\n\n${values.message}\n\n— ${values.name}` : ''
  )}`;

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-medium tracking-wider text-violet-300 mb-3">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance] max-w-2xl">
            Let&apos;s Build Something Amazing Together.
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-xl leading-relaxed">
            Open to Python development opportunities, AI &amp; Machine Learning collaborations, and
            meaningful software projects.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Direct Links Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0d1a]/75 p-6 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-400/25 flex items-center justify-center text-violet-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400">Email</p>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="mt-0.5 block text-sm sm:text-base font-medium text-white hover:text-violet-300 transition-colors break-all"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-slate-200 transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-300 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400">Location</p>
                  <p className="mt-0.5 text-sm sm:text-base font-medium text-white">
                    {PROFILE.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/[0.08] bg-[#0a0d1a]/75 p-5 flex items-center justify-between gap-4 hover:border-violet-400/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-200 group-hover:text-violet-300 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">GitHub</p>
                    <p className="text-xs text-slate-400">@arhaeman6</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/[0.08] bg-[#0a0d1a]/75 p-5 flex items-center justify-between gap-4 hover:border-blue-400/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-slate-200 group-hover:text-blue-300 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">LinkedIn</p>
                    <p className="text-xs text-slate-400">Arha Eman</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Validated Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0a0d1a]/80 backdrop-blur-xl p-6 sm:p-8">
              {submitted ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Message Ready &amp; Recorded
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-medium">{values.name}</span>. Your
                      inquiry has been validated. You can also send it directly via your email
                      client below.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={mailtoHref}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Open in Email Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-200 border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-slate-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={values.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Your name"
                        aria-invalid={Boolean(errors.name)}
                        className={`w-full rounded-xl border bg-[#060812] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                          errors.name
                            ? 'border-rose-400/70 focus:ring-rose-400/50'
                            : 'border-white/10 focus:border-violet-400/60 focus:ring-violet-400/30'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-300 flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-slate-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={values.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="you@example.com"
                        aria-invalid={Boolean(errors.email)}
                        className={`w-full rounded-xl border bg-[#060812] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                          errors.email
                            ? 'border-rose-400/70 focus:ring-rose-400/50'
                            : 'border-white/10 focus:border-violet-400/60 focus:ring-violet-400/30'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-300 flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-medium text-slate-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={values.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="Project collaboration or inquiry"
                      aria-invalid={Boolean(errors.subject)}
                      className={`w-full rounded-xl border bg-[#060812] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.subject
                          ? 'border-rose-400/70 focus:ring-rose-400/50'
                          : 'border-white/10 focus:border-violet-400/60 focus:ring-violet-400/30'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-rose-300 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={values.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell me about your idea, role, or project..."
                      aria-invalid={Boolean(errors.message)}
                      className={`w-full rounded-xl border bg-[#060812] px-4 py-3 text-sm text-white placeholder:text-slate-500 resize-y focus:outline-none focus:ring-2 transition-colors ${
                        errors.message
                          ? 'border-rose-400/70 focus:ring-rose-400/50'
                          : 'border-white/10 focus:border-violet-400/60 focus:ring-violet-400/30'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-300 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-slate-400">
                      Direct email:{' '}
                      <a
                        href={`mailto:${PROFILE.email}`}
                        className="text-slate-200 hover:text-violet-300 underline underline-offset-2"
                      >
                        {PROFILE.email}
                      </a>
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 shadow-[0_10px_28px_rgba(124,58,237,0.3)] transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
