"use client";

import Button from "@/components/Button";

export default function Form() {
  return (
    <form
      className="flex flex-col gap-2"
      method="POST"
      id="form"
      name="contact"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="flex flex-col gap-2">
        <label htmlFor="contact">Contact (email or phone):</label>
        <input type="text" id="contact" name="contact" required />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" className="h-[100px]" required />
      </div>
      <Button text="Submit" />
    </form>
  );
}
