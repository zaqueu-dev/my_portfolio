import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="p-4 flex flex-col text-center">
      <div className="text-2xl">Social</div>
      <div className="p-4 flex flex-col items-center rounded-lg">
        <div className="flex flex items-center bg-white w-50 m-2">
          <IoLogoWhatsapp className="text-2xl text-green-400 mr-5" />
          (84) 9 9145-8984
        </div>

        <div className="flex items-center w-50 m-2">
          <FaGithub className="text-2xl mr-5" />
          zaqueu-dev
        </div>
        <button
          className="bg-green-400 text-white p-5 rounded-lg m-2 shadow-lg text-xl"
          onClick={() => window.open("https://wa.me/5584991458984", "_blank")}
        >
          Me mande uma mensagem
        </button>
      </div>
    </div>
  );
}

export default Contact;
