import React from "react";
import { GrAd } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

function Header(p) {
  return (
    <>
      <div>
        <div className="w-full h-15 flex items-center justify-between box-border">
          <div className="flex items-center justify-between w-full h-full pl-5 py-10">
            <div className="flex flex-col items-center hover:cursor-pointer">
              <GrAd className="text-4xl" />
            </div>
            <div className="bg-black text-white h-15 w-70  flex items-center justify-center rounded-bl-full pl-7 font-bold">
              Zaqueu Nilton de Souza Paiva
            </div>
          </div>
        </div>
        <div className="text-xs flex-col flex items-center justify-center text-gray-500 p-5">
          Autoral design. Made with Tailwind and React. MIT Licence. 2025.
          <a
            href="https://github.com/zaqueu-dev/my_portfolio.git"
            className="text-blue-500 flex items-center justify-center gap-2 text-xl"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> Código-fonte
          </a>
          {/* you can delete this line. this is for my portfolio purposes */}
        </div>
        <div className="px-5 py-6">{p.children}</div>
      </div>
    </>
  );
}

export default Header;
