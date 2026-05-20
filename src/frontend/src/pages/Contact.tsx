import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitAppointment } from "@/hooks/useBackend";
import {
  ALL_SERVICE_TYPES,
  SERVICE_ICONS,
  SERVICE_LABELS,
} from "@/lib/serviceLabels";
import type { AppointmentInput } from "@/types";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Palette,
} from "lucide-react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";

type FormValues = {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  projectDescription: string;
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "studio@kryptostudio.com",
    href: "mailto:studio@kryptostudio.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available Worldwide",
    href: null,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Fri, 9:00 AM – 7:00 PM",
    href: null,
  },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Palette, label: "Behance", href: "https://behance.net" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

function ContactInfoSection() {
  return (
    <div className="flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
          Let's Work Together
        </p>
        <h1 className="font-display text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
          Get In <span className="text-primary">Touch</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
          Ready to transform your vision into reality? Reach out and let's
          create something extraordinary together.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        {contactDetails.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-center gap-4 group">
            <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-200">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="text-foreground font-medium hover:text-primary transition-colors duration-200 truncate block"
                >
                  {value}
                </a>
              ) : (
                <p className="text-foreground font-medium">{value}</p>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
          Follow Us
        </p>
        <div className="flex gap-3">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              data-ocid="contact.social_link"
              className="w-11 h-11 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </motion.div>

      <div className="hidden lg:block">
        <div className="w-48 h-1 bg-gradient-to-r from-primary via-accent to-transparent rounded-full" />
        <div className="mt-3 w-24 h-1 bg-gradient-to-r from-accent via-primary/40 to-transparent rounded-full" />
      </div>
    </div>
  );
}

export default function Contact() {
  const submitAppointment = useSubmitAppointment();
  const today = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  async function onSubmit(values: FormValues) {
    const dateTime = `${values.preferredDate}T${values.preferredTime}:00`;
    const input: AppointmentInput = {
      name: values.fullName,
      phone: values.phone,
      email: values.email,
      serviceType: values.serviceType as AppointmentInput["serviceType"],
      dateTime,
      projectDescription: values.projectDescription,
    };
    await submitAppointment.mutateAsync(input);
    reset();
  }

  return (
    <Layout>
      <section className="bg-card border-b border-border py-16 lg:py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ContactInfoSection />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl pointer-events-none" />
              <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-2xl">
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-4">
                    Book a Session
                  </span>
                  <h2 className="font-display text-3xl font-bold text-foreground">
                    Schedule a Consultation
                  </h2>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Fill in the details below and we'll confirm your appointment
                    shortly.
                  </p>
                </div>

                {submitAppointment.isSuccess && (
                  <motion.div
                    data-ocid="contact.success_state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-primary/10 border border-primary/30 mb-6"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Appointment Requested!
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your appointment request has been submitted! We'll
                        confirm shortly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitAppointment.isError && (
                  <motion.div
                    data-ocid="contact.error_state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-destructive/10 border border-destructive/30 mb-6"
                  >
                    <AlertCircle className="w-6 h-6 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Something went wrong
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {submitAppointment.error instanceof Error
                          ? submitAppointment.error.message
                          : "Please try again or contact us directly."}
                      </p>
                    </div>
                  </motion.div>
                )}

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="fullName"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="John Doe"
                        data-ocid="contact.full_name_input"
                        className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 placeholder:text-muted-foreground/50"
                        {...register("fullName", {
                          required: "Full name is required",
                        })}
                      />
                      {errors.fullName && (
                        <p
                          data-ocid="contact.full_name_field_error"
                          className="text-destructive text-xs mt-1"
                        >
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="phone"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Phone Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        data-ocid="contact.phone_input"
                        className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 placeholder:text-muted-foreground/50"
                        {...register("phone", {
                          required: "Phone number is required",
                          pattern: {
                            value: /^[+\d\s\-().]{7,20}$/,
                            message: "Enter a valid phone number",
                          },
                        })}
                      />
                      {errors.phone && (
                        <p
                          data-ocid="contact.phone_field_error"
                          className="text-destructive text-xs mt-1"
                        >
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      data-ocid="contact.email_input"
                      className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 placeholder:text-muted-foreground/50"
                      {...register("email", {
                        required: "Email address is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <p
                        data-ocid="contact.email_field_error"
                        className="text-destructive text-xs mt-1"
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="serviceType"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Service Type <span className="text-destructive">*</span>
                    </Label>
                    <div className="relative">
                      <select
                        id="serviceType"
                        data-ocid="contact.service_type_select"
                        className="w-full h-10 rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 appearance-none cursor-pointer"
                        defaultValue=""
                        {...register("serviceType", {
                          required: "Please select a service type",
                        })}
                      >
                        <option
                          value=""
                          disabled
                          className="text-muted-foreground"
                        >
                          Select a service...
                        </option>
                        {ALL_SERVICE_TYPES.map((type) => (
                          <option
                            key={String(type)}
                            value={String(type)}
                            className="bg-card text-foreground"
                          >
                            {SERVICE_ICONS[type]} {SERVICE_LABELS[type]}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.serviceType && (
                      <p
                        data-ocid="contact.service_type_field_error"
                        className="text-destructive text-xs mt-1"
                      >
                        {errors.serviceType.message}
                      </p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <Label
                        htmlFor="preferredDate"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Preferred Date{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        min={today}
                        data-ocid="contact.preferred_date_input"
                        className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 text-foreground [color-scheme:dark]"
                        {...register("preferredDate", {
                          required: "Please select a date",
                        })}
                      />
                      {errors.preferredDate && (
                        <p
                          data-ocid="contact.preferred_date_field_error"
                          className="text-destructive text-xs mt-1"
                        >
                          {errors.preferredDate.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label
                        htmlFor="preferredTime"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Preferred Time{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="preferredTime"
                        type="time"
                        data-ocid="contact.preferred_time_input"
                        className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 text-foreground [color-scheme:dark]"
                        {...register("preferredTime", {
                          required: "Please select a time",
                        })}
                      />
                      {errors.preferredTime && (
                        <p
                          data-ocid="contact.preferred_time_field_error"
                          className="text-destructive text-xs mt-1"
                        >
                          {errors.preferredTime.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label
                      htmlFor="projectDescription"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Project Description{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="projectDescription"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={4}
                      data-ocid="contact.project_description_textarea"
                      className="bg-background border-border focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-200 resize-none placeholder:text-muted-foreground/50"
                      {...register("projectDescription", {
                        required: "Project description is required",
                        minLength: {
                          value: 20,
                          message: "Please provide at least 20 characters",
                        },
                      })}
                    />
                    {errors.projectDescription && (
                      <p
                        data-ocid="contact.project_description_field_error"
                        className="text-destructive text-xs mt-1"
                      >
                        {errors.projectDescription.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || submitAppointment.isPending}
                    data-ocid="contact.submit_button"
                    className="w-full h-12 font-semibold text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting || submitAppointment.isPending ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      "Book Appointment"
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-background py-14">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: "50+", label: "Projects Delivered" },
              { stat: "24h", label: "Response Time" },
              { stat: "100%", label: "Client Satisfaction" },
            ].map(({ stat, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <span className="font-display text-4xl font-bold text-primary">
                  {stat}
                </span>
                <span className="text-muted-foreground text-sm">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
