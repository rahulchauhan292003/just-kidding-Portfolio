import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <div className="h-28 bg-slate-800 ">
          <h1 className="text-2xl text-yellow-700 font-bold p-2 pl-5">Github Profile ...</h1>
          <a href="https://github.com/rahulchauhan292003" className="underline p-3 pl-6 text-orange-400">Clich here </a>
        </div>
        <div className="h-72 bg-slate-900  flex ">
          <div className="text-white p-14 from-neutral-400 text-5xl">
            <p>Let's start a </p>
            <p>Project together...</p>
          </div>
          <div className="  pl-24">
            <form className="p-4 gap-2 flex">
              <input type="text" placeholder="name" className="rounded" />{" "}
              <br />
              <input type="email" placeholder="email" className="rounded" />
            </form>
            <form className="p-4 ">
              <input
                type="text"
                placeholder="subject"
                className="w-96 rounded"
              />{" "}
              <br /> <br />
              <input
                type="text"
                placeholder="message"
                className="w-96 h-20 rounded p-1"
              />{" "}
              <br />
              <br />
              <button className="bg-orange-300 p-2 rounded hover:bg-orange-600">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="h-28 bg-slate-800 "></div>
      </div>
    </>
  );
};

export default Contact;
