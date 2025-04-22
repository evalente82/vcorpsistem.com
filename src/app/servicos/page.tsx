export default function ServicosPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Nossos Serviços</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Desenvolvimento Web */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Desenvolvimento Web</h2>
          <p className="text-gray-600 mb-6">
            Desenvolvemos soluções web personalizadas e responsivas para atender às necessidades específicas do seu negócio.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Sites institucionais</li>
            <li>E-commerce</li>
            <li>Sistemas web</li>
            <li>Aplicações PWA</li>
            <li>Otimização para SEO</li>
          </ul>
        </div>

        {/* Consultoria em TI */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Consultoria em TI</h2>
          <p className="text-gray-600 mb-6">
            Oferecemos consultoria especializada para ajudar sua empresa a tomar as melhores decisões tecnológicas.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Análise de infraestrutura</li>
            <li>Planejamento estratégico</li>
            <li>Gestão de projetos</li>
            <li>Segurança da informação</li>
            <li>Transformação digital</li>
          </ul>
        </div>

        {/* Suporte Técnico */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Suporte Técnico</h2>
          <p className="text-gray-600 mb-6">
            Suporte técnico especializado para manter sua infraestrutura funcionando sem interrupções.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Manutenção preventiva</li>
            <li>Suporte remoto</li>
            <li>Backup e recuperação</li>
            <li>Monitoramento 24/7</li>
            <li>Resolução de problemas</li>
          </ul>
        </div>

        {/* Soluções em Cloud */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Soluções em Cloud</h2>
          <p className="text-gray-600 mb-6">
            Migração e gerenciamento de infraestrutura em nuvem para maior escalabilidade e segurança.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Migração para nuvem</li>
            <li>AWS e Azure</li>
            <li>Backup em nuvem</li>
            <li>Servidores virtuais</li>
            <li>Otimização de custos</li>
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Precisa de algum desses serviços?</h2>
        <a
          href="/contato"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Entre em Contato
        </a>
      </div>
    </div>
  );
}
