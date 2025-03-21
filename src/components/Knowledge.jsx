import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
import { SiApachecordova } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { SiMaterialdesign } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

function Knowledge() {
  return (
    <div className="bg-black rounded-lg mt-5 flex flex-col">
      <div className="text-white self-center mt-3 text-xl">Experiência</div>
      <div className="flex flex-wrap items-center justify-center gap-5 p-5 text-4xl text-white md:text-6xl">
        <FaReact />
        <RiJavascriptFill />
        <FaJava />
        <SiApachecordova />
        <RiTailwindCssFill />
        <FaBootstrap />
        <SiMaterialdesign />
        <SiVite />
        <FaGolang />
        <SiTypescript />
        <RiNextjsFill />
      </div>
      <div className="text-justify text-white text-lg md:text-3xl p-5 ">
        Possuo algum prévio conhecimento e experiência em{" "}
        <b className="text-green-400 ">
          React.js, Vite, JavaScript/Typescript, NextJS, Java, Golang, Apache
          Cordova, Tailwind CSS, Bootstrap e Material Design.
        </b>
        <br></br>
        <br></br>
        Entendo, entretanto, que o conhecimento é algo dinâmico. Me considero
        alguém versátil. Sei trocar de ferramentas e tecnologias conforme a
        necessidade do projeto. Não sei de tudo, mas o que eu não souber,
        buscarei aprender e farei a tarefa.
        <hr className="text-white my-2" />
        <div className="flex items-center justify-center gap-5 p-5 text-4xl md:text-6xl text-white">
          <FaHtml5 />
          <FaCss3 />
          <IoLogoVercel />
        </div>
        <div>
          Não são linguagens de programação, mas possuo experiência em{" "}
          <b className="text-green-400">
            HTML5, CSS e host de sites com Vercel.
          </b>
        </div>
        <hr className="text-white my-2" />
        <div
          className="flex items-center justify-center gap-5 p-5 text-4xl text-white md:text-6xl
        "
        >
          <FaGit />
          <FaGithub />
        </div>
        <div>
          São imprescindíveis os programas de controle de versão na programação
          moderna. Possuo conhecimento em{" "}
          <b className="text-green-400">
            Git, e uso o GitHub para meus projetos.
          </b>
        </div>
        <hr className="text-white my-2"></hr>
        <div
          className="flex items-center justify-center gap-5 p-5 text-4xl text-white md:text-6xl
        "
        >
          <FaNodeJs />
          <DiMongodb />
          <SiPostman />
        </div>
        <div>
          Tenho prévio e breve conhecimento em{" "}
          <b className="text-green-400">
            NodeJS, ExpressJS, MongoDB e REST API com Postman.
          </b>
        </div>
      </div>
    </div>
  );
}

export default Knowledge;
