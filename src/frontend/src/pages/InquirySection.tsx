import { useInquiry } from "@/hooks/useInquiry";
import type { InquiryFormData } from "@/types";
import {
  AlertCircle,
  CheckCircle,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const contactDetails = [
  {
    Icon: Mail,
    label: "Email",
    value: "info@abodeproperties.in",
    href: "mailto:info@abodeproperties.in",
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    Icon: MapPin,
    label: "Address",
    value: "Vijay Nagar, Indore MP",
    href: null,
  },
];

const propertyTypes = ["Residential", "Commercial", "Retail", "Investment"];

const emptyForm: InquiryFormData = {
  fullName: "",
  email: "",
  phone: "",
  propertyType: "",
  message: "",
};

type FormErrors = Partial<Record<keyof InquiryFormData, string>>;

function validateForm(data: InquiryFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.fullName.trim()) errors.fullName = "Full name is required.";
  if (!data.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email.";
  }
  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  if (!data.propertyType)
    errors.propertyType = "Please select a property type.";
  if (!data.message.trim()) errors.message = "Message is required.";
  return errors;
}

const inputBase =
  "w-full bg-transparent border-0 border-b px-0 py-3 text-sm font-body focus:outline-none transition-colors duration-300 placeholder:text-[#B7A89A]/50";

export default function InquirySection() {
  const [form, setForm] = useState<InquiryFormData>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof InquiryFormData, boolean>>
  >({});

  const { submitInquiry, isLoading, isSuccess, isError, error } = useInquiry();

  const handleChange = (field: keyof InquiryFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const newErrors = validateForm({ ...form, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
    }
  };

  const handleBlur = (field: keyof InquiryFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validateForm(form);
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.fromEntries(
      Object.keys(emptyForm).map((k) => [k, true]),
    ) as Record<keyof InquiryFormData, boolean>;
    setTouched(allTouched);
    const newErrors = validateForm(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    submitInquiry(form);
  };

  return (
    <section
      id="contact"
      data-ocid="inquiry.section"
      style={{ backgroundColor: "#F7F6F2" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p
              className="text-xs uppercase tracking-widest font-body mb-4"
              style={{ color: "#B7A89A" }}
            >
              Contact Us
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-thin leading-tight mb-8"
              style={{ color: "#1C1C1C" }}
            >
              Let Us Find Your Perfect Space.
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-12"
              style={{ color: "#555555" }}
            >
              Reach out to our team for a personalised consultation. We are
              committed to making your property journey seamless and
              transparent.
            </p>

            <div className="space-y-6">
              {contactDetails.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-full"
                    style={{ border: "1px solid #D9D4CC" }}
                  >
                    <Icon size={16} style={{ color: "#B7A89A" }} />
                  </div>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest font-body mb-0.5"
                      style={{ color: "#B7A89A" }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-body text-sm transition-colors duration-300 hover:underline"
                        style={{ color: "#1C1C1C" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        className="font-body text-sm"
                        style={{ color: "#1C1C1C" }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            {isSuccess ? (
              <div
                className="flex flex-col items-center justify-center py-20 text-center gap-4"
                data-ocid="inquiry.success_state"
              >
                <CheckCircle size={40} style={{ color: "#4ade80" }} />
                <p
                  className="font-display text-2xl font-thin"
                  style={{ color: "#1C1C1C" }}
                >
                  Thank you!
                </p>
                <p className="font-body text-sm" style={{ color: "#555555" }}>
                  We will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate data-ocid="inquiry.form">
                <div className="space-y-8">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs uppercase tracking-widest font-body mb-1"
                      style={{ color: "#555555" }}
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      onBlur={() => handleBlur("fullName")}
                      className={inputBase}
                      style={{
                        color: "#1C1C1C",
                        borderBottomColor: errors.fullName
                          ? "#ef4444"
                          : touched.fullName
                            ? "#B7A89A"
                            : "#D9D4CC",
                      }}
                      data-ocid="inquiry.input"
                    />
                    {errors.fullName && (
                      <p
                        className="mt-1 text-xs font-body"
                        style={{ color: "#ef4444" }}
                        data-ocid="inquiry.field_error"
                      >
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-widest font-body mb-1"
                      style={{ color: "#555555" }}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      className={inputBase}
                      style={{
                        color: "#1C1C1C",
                        borderBottomColor: errors.email
                          ? "#ef4444"
                          : touched.email
                            ? "#B7A89A"
                            : "#D9D4CC",
                      }}
                      data-ocid="inquiry.input"
                    />
                    {errors.email && (
                      <p
                        className="mt-1 text-xs font-body"
                        style={{ color: "#ef4444" }}
                        data-ocid="inquiry.field_error"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-widest font-body mb-1"
                      style={{ color: "#555555" }}
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onBlur={() => handleBlur("phone")}
                      className={inputBase}
                      style={{
                        color: "#1C1C1C",
                        borderBottomColor: errors.phone
                          ? "#ef4444"
                          : touched.phone
                            ? "#B7A89A"
                            : "#D9D4CC",
                      }}
                      data-ocid="inquiry.input"
                    />
                    {errors.phone && (
                      <p
                        className="mt-1 text-xs font-body"
                        style={{ color: "#ef4444" }}
                        data-ocid="inquiry.field_error"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Property Type */}
                  <div>
                    <label
                      htmlFor="propertyType"
                      className="block text-xs uppercase tracking-widest font-body mb-1"
                      style={{ color: "#555555" }}
                    >
                      Property Type
                    </label>
                    <select
                      id="propertyType"
                      value={form.propertyType}
                      onChange={(e) =>
                        handleChange("propertyType", e.target.value)
                      }
                      onBlur={() => handleBlur("propertyType")}
                      className={`${inputBase} appearance-none cursor-pointer`}
                      style={{
                        color: form.propertyType
                          ? "#1C1C1C"
                          : "rgba(183, 168, 154, 0.5)",
                        borderBottomColor: errors.propertyType
                          ? "#ef4444"
                          : touched.propertyType
                            ? "#B7A89A"
                            : "#D9D4CC",
                        backgroundColor: "transparent",
                      }}
                      data-ocid="inquiry.select"
                    >
                      <option value="" disabled style={{ color: "#B7A89A" }}>
                        Select property type
                      </option>
                      {propertyTypes.map((t) => (
                        <option
                          key={t}
                          value={t}
                          style={{
                            color: "#1C1C1C",
                            backgroundColor: "#F7F6F2",
                          }}
                        >
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.propertyType && (
                      <p
                        className="mt-1 text-xs font-body"
                        style={{ color: "#ef4444" }}
                        data-ocid="inquiry.field_error"
                      >
                        {errors.propertyType}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-widest font-body mb-1"
                      style={{ color: "#555555" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us what you are looking for..."
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onBlur={() => handleBlur("message")}
                      className={`${inputBase} resize-none`}
                      style={{
                        color: "#1C1C1C",
                        borderBottomColor: errors.message
                          ? "#ef4444"
                          : touched.message
                            ? "#B7A89A"
                            : "#D9D4CC",
                      }}
                      data-ocid="inquiry.textarea"
                    />
                    {errors.message && (
                      <p
                        className="mt-1 text-xs font-body"
                        style={{ color: "#ef4444" }}
                        data-ocid="inquiry.field_error"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Error state */}
                  {isError && (
                    <div
                      className="flex items-center gap-2 py-2"
                      data-ocid="inquiry.error_state"
                    >
                      <AlertCircle
                        size={16}
                        style={{ color: "#ef4444", flexShrink: 0 }}
                      />
                      <p
                        className="text-sm font-body"
                        style={{ color: "#ef4444" }}
                      >
                        {error instanceof Error
                          ? error.message
                          : "Something went wrong. Please try again."}
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 text-sm tracking-widest uppercase font-body transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: "#1C1C1C",
                      color: "#F7F6F2",
                    }}
                    onMouseEnter={(e) => {
                      if (!isLoading)
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.backgroundColor = "#8A7867";
                    }}
                    onMouseLeave={(e) => {
                      (
                        e.currentTarget as HTMLButtonElement
                      ).style.backgroundColor = "#1C1C1C";
                    }}
                    data-ocid="inquiry.submit_button"
                  >
                    {isLoading && (
                      <Loader2 size={16} className="animate-spin" />
                    )}
                    {isLoading ? "Sending..." : "Send Inquiry"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
