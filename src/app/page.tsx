import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Sistema de Gestão de Escalas e Permutas
              </h1>
              <p className="text-xl mb-8">
                Simplifique e automatize o gerenciamento de escalas com nossa solução completa. 
                Praticidade, controle e transparência para sua organização.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/sistema-escalas" className="btn-primary">
                  Conheça o Sistema
                </Link>
                <Link href="/contato" className="btn-outline">
                  Solicite uma Demo
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in delay-200">
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
              <div className="absolute -top-4 -right-4 bg-[#00C2B8] text-white p-4 rounded-full shadow-lg">
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

      {/* Praticidade Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 section-title">Praticidade em Primeiro Lugar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-white animate-fade-in">
              <div className="p-6">
                <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Criação com Um Clique</h3>
                <p className="text-gray-600">
                  Gere escalas completas com apenas um clique, alocando automaticamente funcionários em seus respectivos postos.
                </p>
              </div>
            </div>
            
            <div className="feature-card bg-white animate-fade-in delay-100">
              <div className="p-6">
                <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Permutas Simplificadas</h3>
                <p className="text-gray-600">
                  Sistema transparente para solicitação e aprovação de permutas, com rastreabilidade completa do processo.
                </p>
              </div>
            </div>
            
            <div className="feature-card bg-white animate-fade-in delay-200">
              <div className="p-6">
                <div className="w-16 h-16 bg-[#00C2B8] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Relatórios Dinâmicos</h3>
                <p className="text-gray-600">
                  Gere PDFs das escalas nos padrões institucionais com um clique, facilitando a distribuição e consulta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 section-title">Benefícios para sua Organização</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Image 
                src="/images/logo.jpeg" 
                alt="VCorp Sistemas" 
                width={400} 
                height={400} 
                className="rounded-lg shadow-xl mx-auto"
              />
            </div>
            <div className="space-y-6 animate-fade-in delay-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#00C2B8]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold">Redução de Tempo</h3>
                  <p className="text-gray-600">Diminuição drástica do tempo gasto na criação e ajuste de escalas.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#00C2B8]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold">Controle Centralizado</h3>
                  <p className="text-gray-600">Todas as informações de escalas e permutas em um único local.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#00C2B8]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold">Transparência</h3>
                  <p className="text-gray-600">Processos de permuta claros e rastreáveis para todos os envolvidos.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#00C2B8]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-semibold">Redução de Erros</h3>
                  <p className="text-gray-600">Minimização de falhas humanas comuns em processos manuais.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para otimizar sua gestão de escalas?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como o Sistema de Gestão de Escalas e Permutas pode transformar seus processos.
          </p>
          <Link href="/contato" className="btn-primary text-lg px-8 py-3">
            Solicite uma Demonstração
          </Link>
        </div>
      </section>

      {/* Serviços Adicionais */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 section-title">Desenvolvimento de Sistemas Web</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-semibold mb-4">Soluções Web Modernas</h3>
              <p className="text-gray-600 mb-6">
                Além do Sistema de Gestão de Escalas, a VCorp Sistemas oferece serviços completos de desenvolvimento de sistemas web modernos, 
                personalizados para atender às necessidades específicas da sua organização.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00C2B8] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Sistemas de gestão empresarial</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00C2B8] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Aplicações web responsivas</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00C2B8] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Integrações com sistemas existentes</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#00C2B8] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Soluções personalizadas para seu negócio</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/servicos" className="btn-outline">
                  Saiba Mais
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-inner animate-fade-in delay-100">
              <h3 className="text-2xl font-semibold mb-4">Tecnologias Modernas</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow-sm text-center">
                  <h4 className="font-semibold text-[#00C2B8]">Frontend</h4>
                  <p className="text-gray-600 text-sm">React, Next.js, Tailwind CSS</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm text-center">
                  <h4 className="font-semibold text-[#00C2B8]">Backend</h4>
                  <p className="text-gray-600 text-sm">Node.js, .NET Core, Python</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm text-center">
                  <h4 className="font-semibold text-[#00C2B8]">Mobile</h4>
                  <p className="text-gray-600 text-sm">React Native, Flutter</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm text-center">
                  <h4 className="font-semibold text-[#00C2B8]">Banco de Dados</h4>
                  <p className="text-gray-600 text-sm">SQL Server, MongoDB, PostgreSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Rápido */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
            <form className="contact-form bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Nome</label>
                  <input type="text" id="name" placeholder="Seu nome" />
                </div>
                <div>
                  <label htmlFor="company" className="block mb-2 font-medium">Empresa</label>
                  <input type="text" id="company" placeholder="Nome da empresa" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input type="email" id="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Telefone</label>
                  <input type="tel" id="phone" placeholder="(00) 00000-0000" />
                </div>
                <div>
                  <label htmlFor="location" className="block mb-2 font-medium">Localidade</label>
                  <input type="text" id="location" placeholder="Cidade/Estado" />
                </div>
                <div>
                  <label htmlFor="employees" className="block mb-2 font-medium">Quantidade de Funcionários</label>
                  <select id="employees">
                    <option value="">Selecione</option>
                    <option value="1-10">1-10</option>
                    <option value="11-50">11-50</option>
                    <option value="51-200">51-200</option>
                    <option value="201+">201+</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block mb-2 font-medium">Mensagem</label>
                  <textarea id="message" rows={4} placeholder="Como podemos ajudar?" className="w-full p-3 border border-gray-300 rounded-md"></textarea>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button type="submit" className="btn-primary px-8 py-3">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image 
                src="/images/logo.jpeg" 
                alt="VCorp Sistemas" 
                width={120} 
                height={120} 
                className="rounded-lg"
              />
              <p className="mt-4 text-gray-400">
                CNPJ: 28.988.813/0001-50
              </p>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <p className="mb-2">Telefone: (21) 99359-3760</p>
              <p className="mb-4">Email: endrigo.valente@gmail.com</p>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} VCorp Sistemas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
