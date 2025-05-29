import Link from 'next/link';
import Image from 'next/image';

export default function Servicos() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Desenvolvimento de Sistemas Web Modernos
            </h1>
            <p className="text-xl mb-8">
              Soluções personalizadas para atender às necessidades específicas da sua organização.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 section-title">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sistemas de Gestão Empresarial</h3>
              <p className="text-gray-600">
                Desenvolvemos sistemas completos para gestão empresarial, incluindo controle de estoque, 
                financeiro, RH e muito mais, adaptados às necessidades específicas do seu negócio.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Aplicações Web Responsivas</h3>
              <p className="text-gray-600">
                Criamos aplicações web modernas e responsivas, garantindo uma experiência perfeita 
                em todos os dispositivos, desde desktops até smartphones.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrações com Sistemas Existentes</h3>
              <p className="text-gray-600">
                Realizamos integrações entre sistemas novos e existentes, garantindo a continuidade 
                dos processos e a preservação de dados importantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Tecnologias Utilizadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Frontend</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">R</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">React</h4>
                      <p className="text-sm text-gray-600">Biblioteca JavaScript para construção de interfaces</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">N</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Next.js</h4>
                      <p className="text-sm text-gray-600">Framework React para aplicações web modernas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">T</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Tailwind CSS</h4>
                      <p className="text-sm text-gray-600">Framework CSS utilitário para design rápido</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Backend</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">N</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Node.js</h4>
                      <p className="text-sm text-gray-600">Ambiente de execução JavaScript server-side</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold">.N</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">.NET Core</h4>
                      <p className="text-sm text-gray-600">Framework para desenvolvimento de aplicações</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-yellow-600 font-bold">Py</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Python</h4>
                      <p className="text-sm text-gray-600">Linguagem versátil para backend e análise de dados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Mobile</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">RN</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">React Native</h4>
                      <p className="text-sm text-gray-600">Framework para desenvolvimento mobile multiplataforma</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-cyan-600 font-bold">Fl</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Flutter</h4>
                      <p className="text-sm text-gray-600">SDK da Google para apps nativos multiplataforma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">Banco de Dados</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold">SQL</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">SQL Server</h4>
                      <p className="text-sm text-gray-600">Sistema de gerenciamento de banco de dados relacional</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">MongoDB</h4>
                      <p className="text-sm text-gray-600">Banco de dados NoSQL orientado a documentos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">PG</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">PostgreSQL</h4>
                      <p className="text-sm text-gray-600">Sistema de banco de dados relacional de código aberto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 section-title">Nossa Metodologia</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image 
                src="/images/logo.jpeg" 
                alt="VCorp Sistemas" 
                width={400} 
                height={400} 
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
            <div>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#00C2B8] text-white">
                      1
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Levantamento de Requisitos</h3>
                    <p className="mt-2 text-gray-600">
                      Entendemos profundamente as necessidades do seu negócio para desenvolver 
                      soluções que realmente atendam aos seus objetivos.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#00C2B8] text-white">
                      2
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Planejamento e Design</h3>
                    <p className="mt-2 text-gray-600">
                      Criamos protótipos e planejamos a arquitetura do sistema para garantir 
                      uma experiência de usuário intuitiva e eficiente.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#00C2B8] text-white">
                      3
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Desenvolvimento Ágil</h3>
                    <p className="mt-2 text-gray-600">
                      Utilizamos metodologias ágeis para entregar valor continuamente, 
                      permitindo ajustes e melhorias ao longo do processo.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-[#00C2B8] text-white">
                      4
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Testes e Implementação</h3>
                    <p className="mt-2 text-gray-600">
                      Realizamos testes rigorosos e implementamos o sistema com suporte 
                      completo para garantir uma transição tranquila.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para transformar sua ideia em realidade?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar a desenvolver 
            soluções web modernas para o seu negócio.
          </p>
          <Link href="/contato" className="btn-primary text-lg px-8 py-3">
            Solicite um Orçamento
          </Link>
        </div>
      </section>
    </div>
  );
}
