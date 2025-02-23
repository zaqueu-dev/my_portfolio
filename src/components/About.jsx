function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <img src="me.jpg" className="object-cover rounded-lg w-67" />
      <div className="text-2xl font-bold">Zaqueu Nilton de Souza Paiva</div>
      <div className="text-lg text-gray-500 text-center font-light leading-7 text-justify md:text-2xl md:px-40 md:my-10">
        Opa! Me chamo Zaqueu. Sou desenvolvedor front-end e designer em
        constante desenvolvimento. Sou também estudante de{" "}
        <b>Ciência da Computação</b> da UERN, no campi de Mossoró. Sou
        apaixonado por tecnologia, design e música. Meu objetivo é{" "}
        <b>
          trabalhar em projetos desafiadores e que possam impactar a vida das
          pessoas de forma positiva.
        </b>
      </div>
    </div>
  );
}

export default About;
