import "./relatorio.css";

export default function Relatorio() {
  return (
    <div className="relatorioApp">
      <div className="relatorioHeader">
        <img
          src="./src/assets/umbrella.png"
          alt="Umbrella"
          className="umbrellaLogo"
        />

        <div className="headerText">
          <h1>UMBRELLA CORPORATION</h1>
          <h2>DIVISÃO DE PESQUISA EM ARMAS BIOLÓGICAS</h2>
          <h3>RELATÓRIO CONFIDENCIAL — B.O.W.</h3>

          <div className="classificacao">
            CLASSIFICAÇÃO: ULTRA RESTRITO
            <br />
            ACESSO: AUTORIZADO SOMENTE PARA NÍVEL EXECUTIVO
          </div>
        </div>
      </div>

      <div className="relatorioBody">
        <h2>PROJETO: J-USTIN</h2>

        <p>
          <b>CLASSIFICAÇÃO:</b> Bio Organic Weapon — Variante Cognitiva
        </p>
        <p>
          <b>STATUS:</b> Estável
        </p>
        <p>
          <b>LOCAL DE LIBERAÇÃO DESIGNADO:</b> Tapera, Rio Grande do Sul -
          Brasil
        </p>
        <p>
          <b>DATA DE ATIVAÇÃO:</b> 17/03/2002
        </p>

        <h3>RESUMO DO PROJETO</h3>

        <p>
          A arma biológica J-USTIN foi criada como parte de um programa dedicado
          ao desenvolvimento de armas biológicas com alta capacidade cognitiva,
          incluindo reconhecimento de padrões, interpretação de estímulos
          visuais complexos e resolução de problemas de natureza lógica.
        </p>

        <p>
          Ao contrário da maioria das armas biológicas produzidas pela Umbrella
          Corporation, o experimento J-USTIN demonstra uma característica
          incomum: combinação rara de inteligência analítica, sensibilidade
          social e curiosidade constante.
        </p>

        <p>
          Essa combinação permite que o sujeito se adapte facilmente a ambientes
          humanos, interagindo com outras pessoas de maneira natural enquanto
          continua processando informações complexas ao seu redor.
        </p>

        <h3>Capacidades observadas</h3>

        <ul>
          <li>
            Demonstrar padrões fora do comum e habilidades excepcionais em
            videogames
          </li>
          <li>
            Resolver sistemas de lógica complexos com persistência incomum
          </li>
          <li>Detectar inconsistências em design e organização gráfica</li>
          <li>Criar conexões sociais profundas com indivíduos próximos</li>
        </ul>

        <h3>ANOMALIAS COMPORTAMENTAIS</h3>

        <p>
          A unidade J-USTIN apresenta duas características recorrentes que
          chamaram atenção dos pesquisadores:
        </p>

        <h4>Processo decisório altamente instável</h4>

        <p>
          J-USTIN demonstra dificuldade significativa em tomar decisões rápidas
          ou definitivas. Registros indicam episódios frequentes de análise
          prolongada antes de escolhas aparentemente simples.
        </p>

        <h4>Sistema de memória inconsistente</h4>

        <p>
          Outra característica observada é a tendência do sujeito a esquecer
          informações recentes, detalhes simples ou decisões tomadas
          anteriormente.
        </p>

        <p>
          Curiosamente, essa inconsistência não afeta sua capacidade de resolver
          problemas complexos.
        </p>

        <h3>INTERAÇÕES SOCIAIS</h3>

        <p>
          Observações indicam que a unidade J-USTIN frequentemente atua como
          ponto de apoio emocional para pessoas próximas.
        </p>

        <ul>
          <li>capacidade excepcional de ouvir os outros com atenção genuína</li>
          <li>paciência durante conversas longas</li>
          <li>interesse verdadeiro nas histórias e experiências de amigos</li>
        </ul>

        <p>
          O plano operacional prevê a liberação da unidade J-USTIN na região de
          Tapera, RS, para observação contínua em ambiente cotidiano.
        </p>

        <p>
          Durante o período de monitoramento, foi registrado contato frequente
          com MARIANA KREIN, envolvendo conversas prolongadas sobre jogos, latidos perturbadores para mulheres fictícias,
          ideias geniais e acontecimentos do cotidiano.
        </p>

        <p>
          Os pesquisadores notaram que essas conversas não são superficiais. O
          sujeito participa ativamente, escuta com cuidado e responde com
          interesse real, criando um ambiente de confiança raro entre indivíduos
          observados pela Umbrella Corporation. Essa característica levou os
          pesquisadores a registrar oficialmente a seguinte observação: A
          unidade J-USTIN demonstra forte capacidade de amizade e empatia, sendo
          visto extremamente bem por outros, e outros aparentam demonstrar
          preocupações genuínas com seu bem-estar.
        </p>

        <h4> OBSERVAÇÕES DOS PESQUISADORES</h4>

        <p>
          Entre todos os dados coletados durante o experimento, uma conclusão se
          destacou. Embora o sujeito seja tecnicamente classificado como uma
          arma biológica experimental, ele demonstra algo que dificilmente pode
          ser medido em relatórios científicos: Ele é um amigo extremamente
          importante para alguém. Alguém que gosta muito de conversar com ele
          sobre tudo. Alguém que aprecia o fato de que ele sempre escuta com
          atenção, e que ele tenta ajudar mesmo quando não sabe exatamente o que falar. 
          Alguém que confia nele e valoriza sua companhia. Mesmo que o
          sujeito às vezes seja indeciso demais, mesmo que ele esqueça algumas
          coisas pelo caminho, essas características nunca diminuíram o que
          realmente importa, nem o tornaram uma pessoa que usa essas características
          para se importar menos com os outros.
        </p>

        <h3>CHAVE DE ATIVAÇÃO</h3>

        <div className="codigoBox">
          CÓDIGO DE ATIVAÇÃO:
          <br />
          ABLABLUBLÁ SEU PRESENTE VOCÊ GANHARÁ (me manda essa mensagem no zap)
        </div>

        <div className="assinatura">
          Relatório final do experimento: Projeto concluído com sucesso.
          <br />
          <br />
          Mensagem adicional do pesquisador responsável:
          <br />
          <b>feliz aniver jus!! nao foi nada demais, mas espero que tenha gostado!! 🎉🎉🎉🎉</b>
        </div>
      </div>
    </div>
  );
}
