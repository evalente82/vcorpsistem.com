export default function SistemaEscalasPage() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-600">
          Sistema de Escalas e Permutas
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
          A solução definitiva para gestão de escalas de trabalho, desenvolvida para simplificar
          e otimizar o gerenciamento de turnos em qualquer segmento.
        </p>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefícios do Sistema
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              <h3 className="text-xl font-semibold mb-4">Economia de Tempo</h3>
              <p className="text-gray-600">
                Automatize a criação e gestão de escalas, reduzindo drasticamente o tempo gasto com planejamento manual.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexibilidade Total</h3>
              <p className="text-gray-600">
                Suporte a diversos tipos de escalas: 12x36, 12x60, 24x72 e outros formatos personalizáveis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Gestão Simplificada</h3>
              <p className="text-gray-600">
                Interface intuitiva que permite gerenciar trocas e permutas com poucos cliques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recursos Principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-green-600"
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
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Criação Automática de Escalas</h3>
                  <p className="text-gray-600">
                    Gere escalas automaticamente considerando regras e restrições específicas do seu negócio.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-green-600"
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
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Gestão de Permutas</h3>
                  <p className="text-gray-600">
                    Sistema inteligente para solicitação e aprovação de trocas de turno entre colaboradores.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-green-600"
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
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Relatórios Detalhados</h3>
                  <p className="text-gray-600">
                    Acompanhe métricas importantes com relatórios personalizáveis e dashboards em tempo real.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-6">Preview do Sistema</h3>
                <div className="border-b pb-4">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium">Escala Semanal</h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Ativa
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm font-medium">Turno A</p>
                      <p className="text-xs text-gray-600">6 colaboradores</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <p className="text-sm font-medium">Turno B</p>
                      <p className="text-xs text-gray-600">8 colaboradores</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <h4 className="font-medium mb-4">Permutas Pendentes</h4>
                  <div className="space-y-3">
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-yellow-800">João → Maria</p>
                        <span className="text-xs text-yellow-600">25/04</span>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-yellow-800">Pedro → Ana</p>
                        <span className="text-xs text-yellow-600">26/04</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para otimizar suas escalas?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Agende uma demonstração gratuita e descubra como nosso sistema pode
            transformar a gestão de escalas da sua empresa.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contato"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Agende uma Demo
            </a>
            <a
              href="#"
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Ver Planos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
