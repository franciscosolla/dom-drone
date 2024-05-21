"use client";

import React, { useEffect, useRef } from "react";
import { ISendEmailState, sendEmail } from "@/app/actions/sendEmail";
import { useFormState, useFormStatus } from "react-dom";

const initialState: ISendEmailState = {
  status: "idle",
  message: "",
};

export const ContactForm: React.FC = () => {
  const ref = useRef<HTMLFormElement>(null);
  const [state, formAction] = useFormState(sendEmail, initialState);

  useEffect(() => {
    if (state.status === "success") {
      ref.current?.reset();
    }
  }, [state.status]);

  return (
    <form
      ref={ref}
      action={formAction}
      className="flex flex-col gap-4 px-4 pb-4"
    >
      <h1 className="font-bold text-2xl mb-2" id="contact">
        Contato
      </h1>
      <FormContent />
    </form>
  );
};

const FormContent: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <div className="flex flex-col gap-4 lg:flex-row">
        <label className="flex flex-col gap-1 flex-1">
          Nome
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            className="p-4 border-b-zinc-900 border-b-2"
            disabled={pending}
          />
        </label>
        <label className="flex flex-col gap-1 flex-1">
          Telefone
          <input
            type="tel"
            name="phone"
            required
            className="p-4 border-b-zinc-900 border-b-2"
            disabled={pending}
          />
        </label>
      </div>
      <label className="flex flex-col gap-1">
        E-mail
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          className="p-4 border-b-zinc-900 border-b-2"
          disabled={pending}
        />
      </label>
      <label className="flex flex-col gap-1">
        Mensagem
        <textarea
          name="message"
          required
          className="p-4 border-b-zinc-900 border-b-2"
          disabled={pending}
        />
      </label>
      <label className="flex flex-col gap-1">
        Como conheceu a Dom Drone?
        <input
          type="text"
          name="source"
          className="p-4 border-b-zinc-900 border-b-2"
          disabled={pending}
        />
      </label>
      <button
        type="submit"
        className="bg-zinc-900 text-zinc-200 rounded px-8 py-4 mt-4 hover:bg-zinc-950"
        disabled={pending}
      >
        Enviar
      </button>
    </>
  );
};
