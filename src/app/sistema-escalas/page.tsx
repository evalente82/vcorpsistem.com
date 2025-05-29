import Link from 'next/link';
import Image from 'next/image';

export default function SistemaEscalas() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sistema de Gestão de Escalas e Permutas
            </h1>
            <p className="text-xl mb-8">
              Uma solução completa para simplificar e automatizar o gerenciamento de escalas de trabalho, 
              oferecendo praticidade, controle e transparência para sua organização.
            </p>
          </div>
        </div>
      </section>

      {/* Visão Geral */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-title">Visão Geral do Sistema</h2>
              <p className="text-lg mb-6">
                O Sistema de Gestão de Escalas e Permutas foi desenvolvido para otimizar a gestão operacional 
                de equipes, com foco especial em organizações que trabalham com turnos e escalas.
              </p>
              <p className="text-lg mb-6">
                Nossa plataforma oferece uma solução completa para criar, gerenciar e ajustar escalas de trabalho, 
                além de facilitar o processo de permutas entre funcionários, tudo com máxima transparência e controle.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#00C2B8] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Acesso Seguro</h3>
                    <p className="text-gray-600">Login protegido e individualizado para cada usuário</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#00C2B8] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Criação Simplificada</h3>
                    <p className="text-gray-600">Gere escalas completas com apenas um clique</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#00C2B8] rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Gestão de Permutas</h3>
                    <p className="text-gray-600">Processo transparente e rastreável de solicitações</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-inner">
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
              <div className="mt-8 bg-white p-6 rounded-lg shadow-xl">
                <h4 className="font-semibold text-gray-800 mb-4">Geração de Escala com Um Clique</h4>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Escala: Maio/2025</p>
                    <p className="text-sm text-gray-600">Departamento: Defesa Civil</p>
                  </div>
                  <button className="bg-[#00C2B8] text-white px-4 py-2 rounded-lg">
                    Gerar Escala
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Principais Funcionalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Gerenciamento de Departamentos</h3>
              <p className="text-gray-600 text-center">
                Cadastre e gerencie os diferentes departamentos da sua instituição, organizando a estrutura hierárquica e funcional.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Gerenciamento de Funcionários</h3>
              <p className="text-gray-600 text-center">
                Mantenha um cadastro centralizado de todos os funcionários com informações detalhadas para montagem das escalas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Criação de Escalas</h3>
              <p className="text-gray-600 text-center">
                Gere escalas completas com apenas um clique, alocando automaticamente funcionários em seus respectivos postos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Gestão de Permutas</h3>
              <p className="text-gray-600 text-center">
                Sistema transparente para solicitação e aprovação de permutas, com rastreabilidade completa do processo.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Relatórios Dinâmicos</h3>
              <p className="text-gray-600 text-center">
                Gere PDFs das escalas nos padrões institucionais com um clique, facilitando a distribuição e consulta.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Aplicativo Mobile</h3>
              <p className="text-gray-600 text-center">
                Acesso via dispositivos móveis para visualização de escalas e gerenciamento de permutas pelos funcionários.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 section-title">O Sistema em Ação</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center">Screenshot: Tela de Gestão de Escalas</p>
              </div>
              <h3 className="text-xl font-semibold mt-4">Gestão de Escalas</h3>
              <p className="text-gray-600">
                Interface intuitiva para criação e gerenciamento de escalas, com visualização clara e organizada.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center">Screenshot: Tela de Permutas</p>
              </div>
              <h3 className="text-xl font-semibold mt-4">Gestão de Permutas</h3>
              <p className="text-gray-600">
                Sistema transparente para solicitação e aprovação de permutas entre funcionários.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center">Screenshot: Aplicativo Mobile</p>
              </div>
              <h3 className="text-xl font-semibold mt-4">Aplicativo Mobile</h3>
              <p className="text-gray-600">
                Acesso via dispositivos móveis para visualização de escalas e gerenciamento de permutas.
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 text-center">Screenshot: Relatórios em PDF</p>
              </div>
              <h3 className="text-xl font-semibold mt-4">Relatórios em PDF</h3>
              <p className="text-gray-600">
                Geração de relatórios em PDF com layout profissional e personalizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefícios para sua Organização</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Redução de Tempo</h3>
              <p className="text-gray-600 text-center">
                Diminuição drástica do tempo gasto na criação e ajuste de escalas, liberando sua equipe para tarefas mais estratégicas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Controle Centralizado</h3>
              <p className="text-gray-600 text-center">
                Todas as informações de escalas e permutas em um único local, facilitando o acesso e a gestão.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Transparência</h3>
              <p className="text-gray-600 text-center">
                Processos de permuta claros e rastreáveis, aumentando a confiança e satisfação dos funcionários.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Redução de Erros</h3>
              <p className="text-gray-600 text-center">
                Minimização de falhas humanas comuns em processos manuais, garantindo maior precisão nas escalas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Otimização de Recursos</h3>
              <p className="text-gray-600 text-center">
                Melhor alocação do efetivo e gestão do tempo dos líderes, aumentando a produtividade geral.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Tomada de Decisão</h3>
              <p className="text-gray-600 text-center">
                Dados organizados para análises e relatórios, facilitando decisões estratégicas baseadas em informações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para transformar a gestão de escalas da sua organização?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como o Sistema de Gestão de Escalas e Permutas pode otimizar seus processos.
          </p>
          <Link href="/contato" className="btn-primary text-lg px-8 py-3">
            Solicite uma Demonstração
          </Link>
        </div>
      </section>
    </div>
  );
}
