export default function SobrePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Sobre a VCorp</h1>

      {/* História da Empresa */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Nossa História</h2>
        <p className="text-gray-600 mb-4">
          A VCorp nasceu da paixão por tecnologia e da vontade de transformar o mercado de TI no Brasil. 
          Desde nossa fundação, temos nos dedicado a oferecer soluções tecnológicas inovadoras e de alta qualidade 
          para empresas de todos os portes.
        </p>
        <p className="text-gray-600">
          Com anos de experiência no mercado, construímos uma reputação sólida baseada em resultados 
          consistentes e relacionamentos duradouros com nossos clientes.
        </p>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Missão</h3>
          <p className="text-gray-600">
            Fornecer soluções tecnológicas inovadoras que impulsionem o sucesso e o crescimento de nossos clientes.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Visão</h3>
          <p className="text-gray-600">
            Ser reconhecida como referência em soluções tecnológicas, contribuindo para a transformação digital das empresas.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Valores</h3>
          <ul className="text-gray-600 space-y-2">
            <li>• Inovação constante</li>
            <li>• Excelência em atendimento</li>
            <li>• Compromisso com resultados</li>
            <li>• Ética e transparência</li>
          </ul>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Nossos Diferenciais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Equipe Especializada</h3>
              <p className="text-gray-600">
                Nossa equipe é formada por profissionais altamente qualificados e certificados nas principais tecnologias do mercado.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tecnologia de Ponta</h3>
              <p className="text-gray-600">
                Utilizamos as mais recentes tecnologias e melhores práticas do mercado para desenvolver soluções robustas e escaláveis.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Suporte Personalizado</h3>
              <p className="text-gray-600">
                Oferecemos atendimento personalizado e suporte contínuo para garantir o sucesso de nossos clientes.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Segurança e Confiabilidade</h3>
              <p className="text-gray-600">
                Priorizamos a segurança dos dados e a confiabilidade de nossas soluções em todos os projetos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Pronto para transformar seu negócio?</h2>
        <a
          href="/contato"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Entre em Contato
        </a>
      </section>
    </div>
  );
}
