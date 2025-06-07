"use client";
import React, { useState } from "react";

const EmailForm = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/contato.leonfagundes@gmail.com", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (response.ok) {
        setIsSent(true);
        form.reset();
      } else {
        alert("Houve um erro ao enviar. Tente novamente.");
      }
    });
  };

  return isSent ? (
    <p className="text-green-500 text-sm mt-2">
      Email enviado com sucesso! Obrigado pelo contato.
    </p>
  ) : (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input type="hidden" name="_captcha" value="false" />
      <div className="mb-6">
        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
          Seu email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="lucasdasilva@gmail.com"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
          Assunto
        </label>
        <input
          name="_subject"
          type="text"
          id="subject"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Projeto para o cliente referente a..."
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
          Mensagem
        </label>
        <textarea
          name="message"
          id="message"
          required
          className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Vamos falar sobre..."
        />
      </div>
      <button
        type="submit"
        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
      >
        Enviar mensagem
      </button>
    </form>
  );
};

export default EmailForm;
