import { motion } from "framer-motion";
import {
  Calendar,
  Search,
  ArrowRight,
  Send,
  Loader2,
  Lock,
  Clock,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Calendar, Search, Phone, ArrowRight, Send, Loader2, Lock, Clock } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import PageMeta from "@/components/PageMeta";
import AnimatedSection from "@/components/AnimatedSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EMAILJS_SERVICE_ID = "service_5hsjh49";
const EMAILJS_TEMPLATE_ID = "template_yjxm9uf";
const EMAILJS_PUBLIC_KEY = "mtxkCzzMBkOL_eAp8";
const CALENDLY_URL =
  import.meta.env.VITE_CALENDLY_URL || "https://calendly.com";

type ContactFormData = {
  name: string;
  company: string;
  website: string;
  email: string;
  helpWith: string;
  budget: string;
  notes: string;
};

const helpWithLabels: Record<string, string> = {
  cro: "CRO & Experimentation",
  analytics: "Analytics & Attribution",
  paid: "Performance Marketing",
  all: "All three",
  unsure: "Not sure yet",
};

const budgetLabels: Record<string, string> = {
  under5k: "Under $5k",
  "5k-15k": "$5k - $15k",
  "15k-50k": "$15k - $50k",
  over50k: "Over $50k",
  "prefer-not": "Prefer not to say",
};

const buildEmailTemplateParams = (data: ContactFormData) => {
  const helpWithLabel = helpWithLabels[data.helpWith] ?? data.helpWith;
  const budgetLabel =
    budgetLabels[data.budget] ?? (data.budget || "Not provided");
  const notes = data.notes.trim() || "Not provided";

  return {
    from_name: data.name,
    from_email: data.email,
    reply_to: data.email,
    company: data.company,
    website: data.website,
    help_with: helpWithLabel,
    budget: budgetLabel,
    notes,
    subject: `New Revenue Teardown request from ${data.company}`,
    message: [
      "New Revenue Teardown request",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company}`,
      `Website: ${data.website}`,
      `Help needed: ${helpWithLabel}`,
      `Monthly budget: ${budgetLabel}`,
      "",
      `Notes: ${notes}`,
    ].join("\n"),
  };
};

const contactCards = [
  {
    icon: Calendar,
    title: "Book a call",
    body: "30 minutes on Zoom. We review your site in advance so we come prepared with specific observations.",
    buttonText: "Book on Calendly",
    href: CALENDLY_URL,
    external: true,
    iconClass: "bg-primary/10 text-primary",
  },
  {
    icon: Search,
    title: "Request a Revenue Teardown",
    body: "Drop your URL below. We will send you a written findings report within 5 business days. No call required.",
    buttonText: "Fill in the form below",
    href: "#audit-form",
    external: false,
    iconClass: "bg-primary/10 text-primary",
  },
  {
    icon: Phone,
    title: "Call us directly",
    body: "Prefer to talk? Give us a call during US business hours. We are happy to answer questions.",
    buttonText: "+1 346 485 4645",
    href: "tel:+13464854645",
    external: true,
    iconClass: "bg-primary/10 text-primary",
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    website: "",
    email: "",
    helpWith: "",
    budget: "",
    notes: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const templateParams = buildEmailTemplateParams(formData);
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document
      .getElementById("audit-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      document
        .getElementById("audit-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  // FAQ structured data for Contact page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you require long-term contracts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work on 3-month initial engagements. After that it is month-to-month with 30 days notice to cancel.",
        },
      },
      {
        "@type": "Question",
        name: "Where is your team based?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We are based in India, serving US and Canadian B2B companies. All communication is in English during US business hours.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can we get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Revenue Teardown audit takes 3 to 5 business days. Paid engagements kick off within one week of agreement.",
        },
      },
      {
        "@type": "Question",
        name: "What does the Revenue Teardown include?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A written audit of your GA4 tracking setup, landing pages, or ad account — delivered within 5 business days with a prioritized list of fixes. No call required.",
        },
      },
    ],
  };

  return (
    <main className="bg-background">
      <PageMeta
        title="Request a Revenue Teardown — Revium Labs"
        description="Request a free Revenue Teardown — we audit your tracking, landing pages, or ad account and deliver written findings within 5 business days. No commitment required."
        keywords="B2B marketing audit, free CRO audit, GA4 audit, marketing agency contact, revenue teardown"
        structuredData={faqSchema}
      />
      {/* ───── HERO ───── */}
      <section className="bg-dark pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="container mx-auto px-5 md:px-6 text-center">
          <motion.h1
            className="font-display text-[28px] leading-[1.15] sm:text-4xl md:text-6xl font-extrabold text-white max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Request your Revenue Teardown.
          </motion.h1>
          <motion.p
            className="mt-4 md:mt-6 text-base md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Book a call or request a free Revenue Teardown. We will review your
            site before any call so the conversation starts with specifics — not
            introductions.
          </motion.p>
        </div>
      </section>

      {/* ───── CONTACT OPTIONS ───── */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-5 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {contactCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col h-full">
                  <div
                    className={`w-12 md:w-14 h-12 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-6 ${card.iconClass}`}
                  >
                    <card.icon className="w-5 md:w-6 h-5 md:h-6" />
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                    {card.body}
                  </p>
                  {card.external ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 md:mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:underline min-h-[44px]"
                    >
                      {card.buttonText} <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href={card.href}
                      onClick={scrollToForm}
                      className="mt-4 md:mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:underline cursor-pointer min-h-[44px]"
                    >
                      {card.buttonText} <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ───── AUDIT FORM ───── */}
      <section className="bg-muted py-12 md:py-24">
        <div className="container mx-auto px-5 md:px-6 max-w-2xl">
          <AnimatedSection className="text-center mb-8 md:mb-12">
            <h2 className="font-display text-[26px] leading-tight md:text-4xl font-extrabold text-foreground">
              Request your free audit.
            </h2>
            <p className="mt-3 md:mt-4 text-sm md:text-lg text-muted-foreground leading-relaxed">
              Tell us a little about your business and we will get back to you
              within one business day.
            </p>
          </AnimatedSection>

          {submitted ? (
            <AnimatedSection>
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-10 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Thank you
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Thank you — we have received your request and will be in touch
                  within one business day.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <AnimatedSection>
              {error && (
                <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 mb-5 text-center text-sm text-destructive">
                  Something went wrong. Please email us directly at{" "}
                  <a
                    href="mailto:hello@reviumlabs.co"
                    className="underline font-semibold"
                  >
                    hello@reviumlabs.co
                  </a>
                </div>
              )}
              <form
                id="audit-form"
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-border bg-card p-8 md:p-10"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Your name *
                    </label>
                    <Input
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Company name *
                    </label>
                    <Input
                      required
                      maxLength={100}
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Website URL *
                  </label>
                  <Input
                    required
                    type="url"
                    maxLength={255}
                    placeholder="https://yoursite.com"
                    value={formData.website}
                    onChange={(e) => handleChange("website", e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Work email *
                  </label>
                  <Input
                    required
                    type="email"
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      What do you want help with? *
                    </label>
                    <Select
                      required
                      value={formData.helpWith}
                      onValueChange={(v) => handleChange("helpWith", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cro">
                          CRO &amp; Experimentation
                        </SelectItem>
                        <SelectItem value="analytics">
                          Analytics &amp; Attribution
                        </SelectItem>
                        <SelectItem value="paid">
                          Performance Marketing
                        </SelectItem>
                        <SelectItem value="all">All three</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">
                      Monthly marketing budget
                    </label>
                    <Select
                      value={formData.budget}
                      onValueChange={(v) => handleChange("budget", v)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under5k">Under $5k</SelectItem>
                        <SelectItem value="5k-15k">$5k – $15k</SelectItem>
                        <SelectItem value="15k-50k">$15k – $50k</SelectItem>
                        <SelectItem value="over50k">Over $50k</SelectItem>
                        <SelectItem value="prefer-not">
                          Prefer not to say
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Anything else we should know?
                  </label>
                  <Textarea
                    maxLength={1000}
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => handleChange("notes", e.target.value)}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 md:h-12 text-base font-semibold min-h-[52px]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    "Send my audit request"
                  )}
                </Button>

                <div className="mt-6 space-y-3">
                  <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Lock className="w-4 h-4 shrink-0" /> Your information is
                    never shared with third parties
                  </p>
                  <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 shrink-0" /> We respond within one
                    business day
                  </p>
                  <p className="flex items-center gap-2.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 shrink-0" /> No commitment
                    required to get your free audit
                  </p>
                </div>
              </form>
            </AnimatedSection>
          )}
        </div>
      </section>
    </main>
  );
};

export default Contact;
