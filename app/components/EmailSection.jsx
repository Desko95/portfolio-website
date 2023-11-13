"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };


  return (
    <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div class="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="jacob@google.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div class="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-gray-[#18191E] border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg  block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <div class="mb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {" "}
              Send message{" "}
            </button>
            {
              //if the email was submitted successfully, show a success message.
              setEmailSubmitted && (
                <p className="text-green-500 text-sm mt-2">
                  Email sent successfully!
                </p>
              )
            }
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;