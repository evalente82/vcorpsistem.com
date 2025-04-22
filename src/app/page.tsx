export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-600">
          VCorp Soluções em Tecnologia
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12">
          Transformando ideias em soluções digitais
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/contato"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Fale Conosco
          </a>
          <a
            href="/servicos"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Nossos Serviços
          </a>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Desenvolvimento Web</h3>
              <p className="text-gray-600">
                Criamos sites e aplicações web modernas e responsivas para sua empresa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Consultoria em TI</h3>
              <p className="text-gray-600">
                Oferecemos soluções estratégicas para otimizar seus processos tecnológicos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Suporte Técnico</h3>
              <p className="text-gray-600">
                Suporte especializado para manter sua infraestrutura funcionando perfeitamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sistema de Escalas - Produto em Destaque */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm mb-4">
                Produto em Destaque
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sistema de Escalas e Permutas
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                Simplifique a gestão de escalas de trabalho com nossa solução intuitiva e completa.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Ideal para escalas 12x36, 12x60 e outros formatos
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Gerenciamento simplificado de trocas e permutas
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Interface intuitiva e fácil de usar
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-blue-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Relatórios e dashboards em tempo real
                </li>
              </ul>
              <div className="flex gap-4">
                <a
                  href="/sistema-escalas"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  Saiba Mais
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="/contato"
                  className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Agende uma Demo
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Turno A</h4>
                      <p className="text-sm text-gray-600">12h às 00h</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Ativo
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Turno B</h4>
                      <p className="text-sm text-gray-600">00h às 12h</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Próximo
                    </span>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm text-gray-600 mb-2">Permuta Disponível:</p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                      <p className="text-sm text-yellow-800">Turno A → Turno B</p>
                      <p className="text-xs text-yellow-600">Data: 25/04/2025</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a VCorp?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
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
              <h3 className="text-xl font-semibold mb-2">Experiência Comprovada</h3>
              <p className="text-gray-600">
                Anos de experiência entregando soluções de qualidade para nossos clientes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
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
              <h3 className="text-xl font-semibold mb-2">Tecnologia de Ponta</h3>
              <p className="text-gray-600">
                Utilizamos as mais recentes tecnologias para desenvolver soluções modernas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
