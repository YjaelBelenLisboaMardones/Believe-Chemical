import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendInquiry } from "../../services/contactService";
import "./InquiryForm.css";

export default function InquiryForm() {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setStatus("loading");
    try {
      await sendInquiry(data); // Llamada al servicio
      setStatus("success");
      reset(); // Limpia el formulario
    } catch (error) {
      console.error("Failed to send inquiry:", error);
      setStatus("error");
    }
  };

  return (
   <section className="inquiry-container">
      <h2>Send Inquiry</h2>
      <p className="inquiry-desc">Please leave your email to us and we will be in touch within 24 hours.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="inquiry-form">
        {/* Subject - Requerido */}
        <input 
          {...register("subject", { required: "Subject is required" })}
          placeholder="Subject*" 
          className={errors.subject ? "input-error" : ""}
        />

        {/* Company - Opcional */}
        <input {...register("company")} placeholder="Company" />

        {/* Email - Requerido + Regex Hardening */}
        <input 
          type="email"
          {...register("email", { 
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }
          })}
          placeholder="Email*" 
          className={errors.email ? "input-error" : ""}
        />

        <div className="row">
          {/* Name - Requerido */}
          <input 
            {...register("name", { required: "Name is required" })}
            placeholder="Name*" 
            className={errors.name ? "input-error" : ""}
          />
          {/* Tel/Whatsapp - Solo números (Hardening de tipo de dato) */}
          <input 
            {...register("phone", { 
              pattern: { value: /^[0-9+ ]+$/, message: "Invalid phone number" }
            })}
            placeholder="Tel / Whatsapp" 
          />
        </div>

        {/* Content - Área de texto requerida */}
        <textarea 
          {...register("content", { required: "Content is required" })}
          placeholder="Content*"
          className={errors.content ? "input-error" : ""}
        />

        <div className="form-footer">
          <button type="submit" disabled={status === "loading"} className="btn-submit">
            {status === "loading" ? "Sending..." : "Submit"}
          </button>
        </div>

        {/* Feedback al usuario */}
        {status === "success" && <p className="success-txt">Inquiry sent! We'll contact you soon.</p>}
        {status === "error" && <p className="error-txt">Error sending message. Please try again.</p>}
      </form>
    </section>
  );
}