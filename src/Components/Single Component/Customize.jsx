import React from "react";
import Button from "../Buttons/Button1";
import { useNavigate } from "react-router-dom";
export default function CustomizeSection() {
  const navigate  = useNavigate()
  return (
    <section className="flex flex-col items-center max-w-full mt-5 mb-5 mx-auto px-6 py-8 bg-[var(--var-gray-col)]/20 rounded-md shadow-sm gap-6 text-center">
      <h5 className="text-[var(--var-red-col)] font-bold text-3xl">Customize</h5>
      <p className="text-gray-800 leading-relaxed text-base sm:text-lg max-w-4xl">
        We want to make your build happen when you have a plan. We are here to help you realize your vision, whether you want
        to use a combination of some of our existing brick colors or create a completely new color scheme.
      </p>
      <button className="bg-[var(--var-red-col)] px-3 py-1 rounded-md text-white cursor-pointer" onClick={()=> navigate('/contact-us')}> Contact us </button>
    </section>
  );
}
