"use client";
import { useState, useRef } from "react";
import Image from "next/image"
import TextareaAutosize from 'react-textarea-autosize';

export default function HomePage() {

  {/* input */}
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
    <main className="home-body relative flex flex-col items-center p-20 min-h-screen">
      
{/*logo***************/}
      <button
        onClick={submitted ? () => window.location.reload() : undefined}
        className={`transition-all duration-1000  ${submitted ? "absolute top-4 left-4 cursor-pointer " : "mt-4"
          }`}
      >
        <Image src="/logo.png" alt="Logo" width={70} height={50} />
      </button>


{/*text***************/}
      {!submitted && (
        <h1 className="text-5xl font-bold text-white text-center">
          Hey I'm VIJAYA KRISHNA
        </h1>
      )}
      {/* submitted text after submit */}
      {submitted && submittedText && (
        <h1 className="text-3xl font-semibold text-white mt-4 ml-[30%] max-w-[60%] break-words ">
          {submittedText}
        </h1>
      )}

{/*hero*************/}

      <div className={`transition-all duration-1000 ${submitted ? "absolute top-4 right-4" : ""}`}
        style={{
          width: submitted ? "80px" : "260px",   // start big, shrink when submitted
          height: submitted ? "80px" : "260px",
        }} >
        <img src={"/hero.png"} alt="hero" className="w-full h-full object-cover" />
      </div>

{/*input***************/}

      <form ref={inputRef} onSubmit={handleSend} className={`relative w-full max-w-2xl transition-all duration-500 ${
          submitted ? "mt-auto mb-0 translate-y-12" : "mt-0"
        }`}>
        <TextareaAutosize
          
          placeholder="Ask me something..."
          value={inputText} // controlled input
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInputText(e.target.value)}
          minRows={1}     
          maxRows={3} 
          wrap="soft"
          className="w-full px-2 py-3 pr-10  text-white placeholder-white rounded-2xl border border-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-100 resize-none"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-[64%] text-emerald-100 hover:text-emerald-600 text-3xl cursor-pointer"
        >
          ➤
        </button>
      </form>
    </main>
  );
}
