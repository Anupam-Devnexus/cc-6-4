import React, { useEffect, useRef } from "react";

export default function BrickIntro({ isOpen, onClose, item }) {
  const modalRef = useRef(null);

  // Focus the modal on open for accessibility
  useEffect(() => {
    if (isOpen) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-labelledby="brick-title"
      tabIndex={-1}
      ref={modalRef}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
    >
      <article
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative animate-fadeIn focus:outline-none"
      >
        <header className="flex items-center justify-between w-full mb-6">
          <h2
            id="brick-title"
            className="text-xl font-extrabold text-[var(--var-red-col)]"
          >
            Specifications - {item?.title || item?.name || "Item"}
          </h2>

          <button
            type="button"
            className="py-1 px-2 cursor-pointer border border-gray-300 rounded-full hover:bg-gray-100 hover:text-[var(--var-red-col)] transition-all duration-300"
            onClick={onClose}
            aria-label="Close specifications modal"
          >
            ✕
          </button>
        </header>

        <dl className="space-y-4 text-gray-700">
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <dt className="font-semibold">Size:</dt>
            <dd>{item?.size || "N/A"}</dd>
          </div>

          <div className="flex justify-between border-b border-gray-200 pb-2">
            <dt className="font-semibold">Shape:</dt>
            <dd>{item?.shape || "N/A"}</dd>
          </div>

          <div className="flex justify-between border-b border-gray-200 pb-2">
            <dt className="font-semibold">Color:</dt>
            <dd>{item?.color || "N/A"}</dd>
          </div>

          <div className="flex justify-between border-b border-gray-200 pb-2">
            <dt className="font-semibold">Supply Capacity:</dt>
            <dd>{item?.supplyAbility || "N/A"} per month</dd>
          </div>

          <div className="flex justify-between pb-2">
            <dt className="font-semibold">Minimum Order:</dt>
            <dd>{item?.minimumOrder || "N/A"}</dd>
          </div>
        </dl>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="mt-6 w-full text-center cursor-pointer text-white bg-[var(--var-red-col)] px-4 py-2 rounded-md font-bold hover:bg-[var(--var-red-col)]/90 transition-colors duration-200"
        >
          Close
        </button>
      </article>
    </section>
  );
}
