"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Button from "./Button";
import { useState } from "react";
import { validateEmail, validatePhone } from "@/lib/utils"; // Helper function

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  //const [selectedOption, setSelectedOption] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [honeypot, setHoneypot] = useState(""); // Hidden anti-spam field

  const handleChange = (e) => {
    //console.log("handleChange: " + e.target.value);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Indique o seu Nome";
    if (!formData.phone) {
      newErrors.phone = "Indique o seu contato";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Telefone inválido";
    }

    if (!formData.subject) newErrors.subject = "Indique qual o assunto";
    if (!formData.email) {
      newErrors.email = "Indique o seu Email";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.message.trim()) newErrors.message = "Escreva a sua mensagem";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot check
    if (honeypot) {
      console.log("Bot detected");
      return setSubmitStatus("success");
    }

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          subject: "",
          email: "",
          message: "",
        }); // Reset form
      } else {
        //throw new Error("Failed to send");
        throw new Error(await response.text());
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex flex-col gap-[20px] mb-[20px]">
        {/* Honeypot Field (hidden from humans) */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="absolute opacity-0 w-0 h-0"
          tabIndex="-1"
          autoComplete="off"
        />

        <Input
          type="text"
          placeholder="Nome"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${errors.name ? "border-red-500" : "border-gray-300"}`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
        <Input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${errors.email ? "border-red-500" : "border-gray-300"}`}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
        <div className="flex flex-col xl:flex-row gap-[20px]">
          <Input
            type="tel"
            placeholder="Telefone"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`${errors.phone ? "border-red-500" : "border-gray-300"}`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
          <Select
            value={formData.subject}
            onValueChange={(value) => {
              setFormData((prev) => ({ ...prev, subject: value }));
              if (errors.subject)
                setErrors((prev) => ({ ...prev, subject: "" }));
            }}
          >
            <SelectTrigger
              className={`w-full rounded-none h-[54px] text-secondary outline-none ${
                errors.subject ? "border-red-500" : ""
              }`}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
            >
              <SelectValue placeholder="Selecionar"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Selecione uma opção</SelectLabel>
                <SelectItem value="Hidraulica">Hidráulica</SelectItem>
                <SelectItem value="Pneumatica">Pneumática</SelectItem>
                <SelectItem value="Candidatura">Candidatura</SelectItem>
                <SelectItem value="Outro">Outro</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {/* textarea */}
        <Textarea
          className={`h-[180px] resize-none rounded-none ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Digite sua mensagem"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
        {/* btn */}
        <Button
          text={isSubmitting ? "A enviar..." : "Enviar mensagem"}
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        ></Button>
      </div>
      {/* Status Message */}
      {submitStatus === "success" && (
        <p className="mt-4 text-green-600">Mensagem enviada com sucesso!</p>
      )}
      {submitStatus === "error" && (
        <p className="mt-4 text-red-600">
          Falha ao enviar mensagem. Por favor tente novamente.
        </p>
      )}
    </form>
  );
};

export default Form;
