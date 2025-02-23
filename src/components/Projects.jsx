function Projects() {
  return (
    <div className="my-2 bg-gray-800 text-white flex flex-col items-center p-4 rounded-lg">
      <div className="text-2xl"> Meus Projetos </div>
      <br />

      <div className="flex flex-col my-5">
        <hr className="text-white" />
        <div className="self-center font-bold text-xl m-2">Suap Notas</div>
        <div className="my-2 text-justify">
          Para este projeto, fiz uso de Javascript, HTML, CSS e Apache Cordova
          para criar um aplicativo que calcula quanto os alunos precisavam tirar
          para serem aprovados.
        </div>
        <div className="flex flex-col gap-2">
          <img src="suapnotas1.png" />
          <img src="suapnotas2.png" />
          <img src="suapnotas3.png" />
          <img src="suapnotas4.png" />
        </div>
      </div>

      <div className="flex flex-col my-5">
        <hr className="text-white" />
        <div className="self-center font-bold text-xl m-2">Catálogo</div>
        <div className="my-2 text-justify">
          Para este projeto, fiz uso de React e Tailwind para fazer um catálogo
          para uma empresa de produtos responsivo e elegante, com suporte a
          ferramentas de filtro. O projeto foi hospedado no Vercel.
        </div>
        <div className="flex flex-col gap-2">
          <img src="emi.png" />
        </div>
      </div>

      <div className="flex flex-col my-5">
        <hr className="text-white" />
        <div className="self-center font-bold text-xl m-2">
          React-Tailwind Template
        </div>
        <div className="my-2 text-justify">
          Para este projeto, fiz uso de React e Tailwind para criar um template
          responsivo e elegante, base para qualquer projeto de site ou
          aplicativo. Decidi disponibilizar pois me ajudou a começar projetos
          subsequentes de uma maneira mais enxuta, sem os arquivos de
          configuração padrão do react, e com o <b>BrowserRouter</b> já
          configurado.
        </div>
        <div className="flex flex-col gap-2">
          <img src="template1.png" />
          <img src="template2.png" />
          <img src="template3.png" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
