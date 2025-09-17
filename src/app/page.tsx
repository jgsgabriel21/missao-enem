"use client";

import { CheckCircle, Clock, BookOpen, Target, Users, Gift, Shield, ArrowRight, Star, MessageCircle } from "lucide-react";

export default function MissaoEnemLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header/Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
              <Clock className="w-4 h-4" />
              ÚLTIMOS DIAS PARA O ENEM!
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
              Faltam poucos dias para o ENEM...
              <br />
              <span className="text-yellow-300">E você ainda não começou a estudar?</span>
            </h1>
            
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Não entre em pânico: com o <strong className="text-yellow-300">Missão ENEM</strong>, você vai saber exatamente o que estudar, como estudar e ainda ganhar tempo com um plano inteligente, direto ao ponto.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Target className="w-8 h-8 text-yellow-300 flex-shrink-0" />
                <span className="text-lg font-semibold">Foco nos assuntos que mais caem</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="w-8 h-8 text-yellow-300 flex-shrink-0" />
                <span className="text-lg font-semibold">Cronograma de emergência personalizado</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <BookOpen className="w-8 h-8 text-yellow-300 flex-shrink-0" />
                <span className="text-lg font-semibold">Resumos + questões para treinar rápido</span>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl">
              🎯 QUERO COMEÇAR AGORA
            </button>
          </div>
        </div>
      </section>

      {/* Seção: Conexão com a dor */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              😱 Você se identifica com alguma dessas situações?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
              <p className="text-lg text-gray-700 italic">
                "Fiquei enrolando o ano inteiro e agora bateu o desespero..."
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
              <p className="text-lg text-gray-700 italic">
                "Não sei por onde começar nem o que revisar primeiro"
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
              <p className="text-lg text-gray-700 italic">
                "Tô tentando estudar, mas me sinto perdido(a) e travado(a)"
              </p>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
              <p className="text-lg text-gray-700 italic">
                "Queria uma forma rápida de estudar só o que mais importa"
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-gray-700">
              👉 Se você respondeu <strong className="text-red-600">"sim"</strong> para qualquer uma delas, o <strong className="text-blue-600">Missão ENEM</strong> foi feito exatamente para você.
            </p>
          </div>
        </div>
      </section>

      {/* Seção: O que é o Missão ENEM */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              ✅ O que é o Missão ENEM?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Um plano de emergência <strong className="text-yellow-300">100% prático</strong> para você se preparar com o tempo que ainda tem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Cronograma personalizado</h3>
              <p className="text-blue-100">Baseado no tempo restante que você tem</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Assuntos que MAIS caem</h3>
              <p className="text-blue-100">Lista completa por matéria</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Resumos + mapas mentais</h3>
              <p className="text-blue-100">Para revisão rápida em PDF</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Questões selecionadas</h3>
              <p className="text-blue-100">Por tema com gabarito e explicações</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Simulados completos</h3>
              <p className="text-blue-100">+ guia de estratégia de prova</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Grupo exclusivo</h3>
              <p className="text-blue-100">WhatsApp/Telegram (opcional)</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-yellow-300 font-semibold">
              Tudo pronto pra usar, sem enrolação e direto ao ponto.
            </p>
          </div>
        </div>
      </section>

      {/* Seção: Como funciona */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              ⏱️ Como funciona?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl border-2 border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                30
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">30 dias</h3>
              <p className="text-gray-600">Preparação completa</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl border-2 border-yellow-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                15
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">15 dias</h3>
              <p className="text-gray-600">Foco intensivo</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl border-2 border-orange-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                7
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">7 dias</h3>
              <p className="text-gray-600">Revisão express</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-100 to-pink-100 rounded-xl border-2 border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">3 dias</h3>
              <p className="text-gray-600">Modo turbo! 🚀</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Escolha seu nível</h3>
              <p className="text-gray-600">Recebe um pacote completo com tudo que precisa estudar</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Segue o plano</h3>
              <p className="text-gray-600">Foca no que mais importa seguindo o cronograma</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-100 p-4 rounded-full mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Chega confiante</h3>
              <p className="text-gray-600">No ENEM com confiança e foco total</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Depoimentos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              📊 O que nossos alunos dizem
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-green-400">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg italic mb-4">
                "Achei que não ia conseguir, mas usei o plano de 15 dias e consegui tirar uma nota melhor do que imaginava!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-lg">M</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Maria</p>
                  <p className="text-gray-600 text-sm">18 anos</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-400">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg italic mb-4">
                "Valeu cada centavo. Tudo bem organizado e me deu um norte no meio do caos."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">J</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">João</p>
                  <p className="text-gray-600 text-sm">17 anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Bônus */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              🎁 Bônus Exclusivos
            </h2>
            <p className="text-xl text-purple-100">
              Ao adquirir o Missão ENEM, você também recebe:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <Gift className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Checklist da Véspera</h3>
              <p className="text-purple-100">O que revisar no dia anterior</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <Clock className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Treinamento Rápido</h3>
              <p className="text-purple-100">Como organizar o tempo na prova</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <BookOpen className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mini Guia de Redação</h3>
              <p className="text-purple-100">Estrutura + frases coringas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Preço e Garantia */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
            💰 Investimento
          </h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-8 border-2 border-blue-200">
            <div className="text-6xl font-bold text-blue-600 mb-4">R$ XX,XX</div>
            <p className="text-xl text-gray-700 mb-6">Tudo isso por apenas</p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Pagamento único</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Produto digital</span>
              </div>
            </div>
            
            <div className="bg-green-100 border border-green-300 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center gap-2 text-green-700">
                <Shield className="w-6 h-6" />
                <span className="font-semibold">Garantia incondicional de 7 dias</span>
              </div>
              <p className="text-green-600 text-sm mt-2">Se não gostar, seu dinheiro de volta.</p>
            </div>
            
            <p className="text-gray-600 mb-8">📦 Produto digital — acesso por e-mail em até 5 minutos.</p>
            
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl">
              🎯 SIM! Quero estudar com foco e confiança
              <ArrowRight className="w-6 h-6 inline-block ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              ❓ Perguntas Frequentes
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                → Funciona mesmo se eu não estudei nada o ano todo?
              </h3>
              <p className="text-gray-700">
                Sim! O plano é feito para quem está começando agora ou está perdido.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                → É curso, apostila ou o quê?
              </h3>
              <p className="text-gray-700">
                É um combo digital com cronograma, resumos, questões e estratégias – tudo enviado por e-mail e WhatsApp.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                → É atualizado para o ENEM 2025?
              </h3>
              <p className="text-gray-700">
                Sim. Todo conteúdo segue o modelo e temas atualizados do ENEM 2025.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                → Dá tempo mesmo?
              </h3>
              <p className="text-gray-700">
                Dá tempo de fazer o melhor com o tempo que você tem. O objetivo é te dar direção, foco e confiança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            🚀 Última Chance!
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Não deixe o tempo passar. Comece sua preparação AGORA e chegue confiante no ENEM!
          </p>
          
          <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-4 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl">
            👉 QUERO COMEÇAR AGORA
            <ArrowRight className="w-6 h-6 inline-block ml-2" />
          </button>
          
          <p className="text-red-100 text-sm mt-4">
            ⏰ Oferta por tempo limitado
          </p>
        </div>
      </section>
    </div>
  );
}