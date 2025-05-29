import Link from 'next/link';
import Image from 'next/image';

export default function Contato() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl mb-8">
              Estamos prontos para ajudar sua organização a otimizar a gestão de escalas e desenvolver soluções web modernas.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 section-title">Fale Conosco</h2>
              <p className="text-lg mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível para 
                discutir como podemos atender às necessidades específicas da sua organização.
              </p>
              
              <div className="space-y-6 mt-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#00C2B8] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Telefone</h3>
                    <p className="text-gray-600">(21) 99359-3760</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#00C2B8] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Email</h3>
                    <p className="text-gray-600">endrigo.valente@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#00C2B8] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">CNPJ</h3>
                    <p className="text-gray-600">28.988.813/0001-50</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
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
        </div>
      </section>

      {/* Seção de Demonstração */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Solicite uma Demonstração</h2>
            <p className="text-lg mb-8">
              Quer ver o Sistema de Gestão de Escalas e Permutas em ação? Solicite uma demonstração 
              personalizada e descubra como podemos ajudar sua organização.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-xl font-semibold mb-2">Demo Personalizada</h3>
                  <p className="text-gray-600">
                    Nossa equipe irá apresentar o sistema adaptado às necessidades da sua organização.
                  </p>
                </div>
                <Link href="#form" className="btn-primary px-6 py-3">
                  Agendar Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Quanto tempo leva para implementar o sistema?</h3>
              <p className="text-gray-600">
                O tempo de implementação varia de acordo com a complexidade da organização, mas geralmente 
                conseguimos ter o sistema operacional em 2 a 4 semanas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">O sistema pode ser personalizado para nossas necessidades específicas?</h3>
              <p className="text-gray-600">
                Sim, o Sistema de Gestão de Escalas e Permutas foi projetado para ser altamente adaptável 
                às necessidades específicas de cada organização.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Oferecemos treinamento para os usuários?</h3>
              <p className="text-gray-600">
                Sim, fornecemos treinamento completo para todos os níveis de usuários, desde administradores 
                até funcionários que utilizarão o aplicativo mobile.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Como funciona o suporte técnico?</h3>
              <p className="text-gray-600">
                Oferecemos suporte técnico contínuo através de diversos canais, incluindo email, telefone 
                e sistema de tickets, garantindo respostas rápidas para qualquer questão.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
