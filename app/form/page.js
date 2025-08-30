"use client";

import { useState } from "react";
import Button from "@/components/Button";

export default function Form() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = () => {
    const input = document.getElementById("contact");
    const textarea = document.getElementById("message");
    
    if (input.value.trim() && textarea.value.trim()) {
      // Form is valid - show success message
      setShowSuccess(true);
      
      // Restore form after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        // Clear the form
        input.value = "";
        textarea.value = "";
      }, 3000);
    }
  };

  if (showSuccess) {
    return (
      <div className="flex flex-col items-center gap-4 py-8">
        <div className="text-green text-xl">✓ Message sent!</div>
        <div className="text-grey">Thanks for reaching out. I'll get back to you soon.</div>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-2"
      method="POST"
      action="/form"
      id="form"
      name="contact"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="flex flex-col gap-2 md:max-w-1/2">
        <label htmlFor="contact">Contact (email or phone):</label>
        <input type="text" id="contact" name="contact" required />
      </div>
      <div className="flex flex-col gap-2 md:max-w-1/2">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" className="h-[100px]" required />
      </div>
      <Button text="Submit" />
    </form>
  );
}
