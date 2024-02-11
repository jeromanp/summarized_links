import React from "react";

export default function Demo() {
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form className="relative lex justify-center items-center">
          <img
            src="/assets/link.svg"
            alt="Link Icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Ingresa la URL"
            value=""
            required
            className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer"
          />
          <button
            type="submit"
            className="hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mx-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400 peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            OK
          </button>
        </form>
        {/* Historial */}
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          
        </div>
      </div>
      {/* Resultado de Búsqueda */}
      <div className="my-10 max-w-full flex justify-center items-center">
        
      </div>
    </section>
  );
}
