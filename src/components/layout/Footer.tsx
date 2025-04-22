import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações da Empresa */}
          <div>
            <h3 className="text-xl font-bold mb-4">VCorp</h3>
            <p className="text-gray-300">
              Soluções em tecnologia para sua empresa crescer.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-300 hover:text-white">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-300 hover:text-white">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-300 hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contato@vcorp.com.br</li>
              <li>Telefone: (11) 1234-5678</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} VCorp. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
