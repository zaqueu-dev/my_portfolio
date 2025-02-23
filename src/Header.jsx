import { useEffect, useState } from "react";
import { GrAd } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

function Header(p) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
          Design autoral. Feito com Tailwind e React. MIT Licence, 2025.
          <a
            href="https://github.com/zaqueu-dev/my_portfolio.git"
            className="text-blue-900 flex items-center justify-center gap-2 text-xl"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> Código-fonte
          </a>
          {/* This line can be deleted as one will. This is for my portfolio purposes only*/}
        </div>
        <div className="px-5 mb-7">{p.children}</div> {/* children */}
        <div className="fixed bottom-0 left-0 h-4 w-full overflow-hidden bg-slate-200">
          <div
            className="flex h-4 bg-green-400"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Header;
