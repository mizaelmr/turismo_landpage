// pages/em-desenvolvimento.tsx
import Head from 'next/head';

export default function EmDesenvolvimento() {
  return (
    <>
      <Head>
        <title>Página em Desenvolvimento</title>
      </Head>

      <main className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            🚧 Página em Desenvolvimento
          </h1>
          <p className="text-gray-600">
            Estamos trabalhando nesta funcionalidade. Em breve, novidades por aqui!
          </p>
        </div>
      </main>
    </>
  );
}
