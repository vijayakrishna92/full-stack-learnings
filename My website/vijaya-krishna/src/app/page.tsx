"use client";
import { useState, useRef } from "react";
import Image from "next/image"

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);
  const [inputText, setInputText] = useState(""); // track what user types
  const [submittedText, setSubmittedText] = useState(""); // text to display at top

  const inputRef = useRef<HTMLFormElement>(null);
  

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setSubmittedText(inputText);
    setInputText("");

  inputRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  

  return (
    <main className="home-body relative flex flex-col items-center p-25 min-h-screen">
      
{/*logo***************/}
      <button
        onClick={submitted ? () => window.location.reload() : undefined}
        className={`transition-all duration-1000  ${submitted ? "absolute top-4 left-4 cursor-pointer " : "mt-4"
          }`}
      >
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </button>


{/*text***************/}
      {!submitted && (
        <h1 className="text-4xl font-bold text-white text-center">
          Hey I'm VIJAYA KRISHNA
        </h1>
      )}
      {/* submitted text after submit */}
      {submitted && submittedText && (
        <h1 className="text-3xl font-semibold text-white text-center mt-4">
          {submittedText}
        </h1>
      )}

{/*hero*************/}

      <div className={`transition-all duration-1000 ${submitted ? "absolute top-4 right-4" : ""}`}
        style={{
          width: submitted ? "80px" : "240px",   // start big, shrink when submitted
          height: submitted ? "80px" : "240px",
        }} >
        <img src={"/hero.png"} alt="hero" className="w-full h-full object-cover" />
      </div>

{/*input***************/}

      <form ref={inputRef} onSubmit={handleSend} className={`relative w-full max-w-2xl transition-all duration-500 ${
          submitted ? "mt-auto mb-0 translate-y-12" : "mt-0"
        }`}>
        <input
          type="text"
          placeholder="Ask me something..."
          value={inputText} // controlled input
          onChange={(e) => setInputText(e.target.value)}
          className="w-full px-2 py-3 text-white placeholder-white rounded-2xl border border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-600 hover:text-emerald-600 text-2xl"
        >
          ➤
        </button>
      </form>
    </main>
  );
}
