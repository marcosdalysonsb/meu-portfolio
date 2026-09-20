"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./forca.module.css";

const categorias = [
  {
    nome: "ANIMAIS",
    palavras: [
      "CACHORRO",
      "GATO",
      "ELEFANTE",
      "GIRAFA",
      "COELHO",
      "MACACO",
      "TARTARUGA",
      "CAVALO",
      "PAPAGAIO",
      "BORBOLETA",
    ],
  },
  {
    nome: "OBJETOS",
    palavras: [
      "CADEIRA",
      "TESOURA",
      "ESPELHO",
      "MOCHILA",
      "TRAVESSEIRO",
      "TELEFONE",
      "GELADEIRA",
      "RELOGIO",
      "CARTEIRA",
      "GUARDA CHUVA",
    ],
  },
  {
    nome: "COMIDAS",
    palavras: [
      "PIZZA",
      "LASANHA",
      "HAMBURGUER",
      "COXINHA",
      "PASTEL",
      "TAPIOCA",
      "CUSCUZ",
      "FEIJOADA",
      "BRIGADEIRO",
      "MACARRAO",
    ],
  },
];

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const MAX_ERROS = 6;

function sortearPartida() {
  const categoria =
    categorias[Math.floor(Math.random() * categorias.length)];

  const palavra =
    categoria.palavras[
      Math.floor(Math.random() * categoria.palavras.length)
    ];

  return {
    categoria: categoria.nome,
    palavra: palavra,
  };
}

export default function Forca() {
  const [partida, setPartida] = useState(sortearPartida);
  const [letrasUsadas, setLetrasUsadas] = useState([]);

  const palavra = partida.palavra;

  const letrasCorretas = letrasUsadas.filter((letra) =>
    palavra.includes(letra)
  );

  const letrasErradas = letrasUsadas.filter(
    (letra) => !palavra.includes(letra)
  );

  const erros = letrasErradas.length;

  const tentativasRestantes = MAX_ERROS - erros;

  const venceu = palavra
    .split("")
    .filter((letra) => letra !== " ")
    .every((letra) => letrasUsadas.includes(letra));

  const perdeu = erros >= MAX_ERROS;

  const jogoFinalizado = venceu || perdeu;

  function escolherLetra(letra) {
  if (jogoFinalizado) {
    return;
  }

  setLetrasUsadas((atual) => {
    if (atual.includes(letra)) {
      return atual;
    }

    return [...atual, letra];
  });
}

  function iniciarNovoJogo() {
    setPartida(sortearPartida());
    setLetrasUsadas([]);
  }

  function mostrarPalavra() {
    return palavra.split("").map((letra, index) => {
      if (letra === " ") {
        return (
          <span key={index} className={styles.espaco}>
            &nbsp;
          </span>
        );
      }

      const revelada =
        letrasUsadas.includes(letra) || perdeu;

      return (
        <span
          key={`${letra}-${index}`}
          className={styles.letraPalavra}
        >
          {revelada ? letra : "_"}
        </span>
      );
    });
  }

  return (
    <main className={styles.pagina}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.logo}>
            MD
          </Link>

          <Link href="/" className={styles.voltar}>
            ← Voltar ao portfólio
          </Link>
        </div>
      </header>

      <section className={styles.conteudo}>
        <div className={styles.tituloArea}>
          <span className={styles.etiqueta}>
            DESAFIO DE PALAVRAS
          </span>

          <h1>
            Jogo da <span>Forca</span>
          </h1>

          <p>
            Descubra a palavra antes que suas tentativas acabem.
          </p>
        </div>

        <div className={styles.tema}>
          <span>TEMA</span>
          <strong>{partida.categoria}</strong>
        </div>

        <div className={styles.jogo}>
          <div className={styles.painelForca}>
            <div className={styles.tentativas}>
              <p>TENTATIVAS RESTANTES</p>

              <strong>{tentativasRestantes}</strong>

              <span>de {MAX_ERROS}</span>
            </div>

            <div className={styles.desenho}>
              <div className={styles.baseForca} />
              <div className={styles.colunaForca} />
              <div className={styles.topoForca} />
              <div className={styles.cordaForca} />

              {erros >= 1 && (
                <div className={styles.cabeca} />
              )}

              {erros >= 2 && (
                <div className={styles.corpo} />
              )}

              {erros >= 3 && (
                <div className={styles.bracoEsquerdo} />
              )}

              {erros >= 4 && (
                <div className={styles.bracoDireito} />
              )}

              {erros >= 5 && (
                <div className={styles.pernaEsquerda} />
              )}

              {erros >= 6 && (
                <div className={styles.pernaDireita} />
              )}
            </div>
          </div>

          <div className={styles.painelJogo}>
            <div className={styles.palavra}>
              {mostrarPalavra()}
            </div>

            {!jogoFinalizado && (
              <p className={styles.instrucao}>
                Escolha uma letra:
              </p>
            )}

            {venceu && (
              <div
                className={`${styles.resultado} ${styles.vitoria}`}
              >
                <span>✓</span>

                <div>
                  <strong>Parabéns!</strong>
                  <p>
                    Você descobriu a palavra.
                  </p>
                </div>
              </div>
            )}

            {perdeu && (
              <div
                className={`${styles.resultado} ${styles.derrota}`}
              >
                <span>×</span>

                <div>
                  <strong>Fim de jogo!</strong>
                  <p>
                    A palavra era <b>{palavra}</b>.
                  </p>
                </div>
              </div>
            )}

            <div className={styles.teclado}>
              {alfabeto.map((letra) => {
                const usada = letrasUsadas.includes(letra);
                const correta =
                  usada && palavra.includes(letra);
                const errada =
                  usada && !palavra.includes(letra);

                let classe = styles.tecla;

                if (correta) {
                  classe += ` ${styles.teclaCorreta}`;
                }

                if (errada) {
                  classe += ` ${styles.teclaErrada}`;
                }

                return (
                  <button
                    key={letra}
                    type="button"
                    className={classe}
                    onClick={() => escolherLetra(letra)}
                    disabled={usada || jogoFinalizado}
                  >
                    {letra}
                  </button>
                );
              })}
            </div>

            <div className={styles.usadas}>
              <div className={styles.grupoLetras}>
                <p>LETRAS CORRETAS</p>

                <div className={styles.listaLetras}>
                  {letrasCorretas.length === 0 ? (
                    <span className={styles.nenhuma}>
                      Nenhuma
                    </span>
                  ) : (
                    letrasCorretas.map((letra) => (
                      <span
                        key={letra}
                        className={styles.letraCorreta}
                      >
                        {letra}
                      </span>
                    ))
                  )}
                </div>
              </div>

              <div className={styles.grupoLetras}>
                <p>LETRAS ERRADAS</p>

                <div className={styles.listaLetras}>
                  {letrasErradas.length === 0 ? (
                    <span className={styles.nenhuma}>
                      Nenhuma
                    </span>
                  ) : (
                    letrasErradas.map((letra) => (
                      <span
                        key={letra}
                        className={styles.letraErrada}
                      >
                        {letra}
                      </span>
                    ))
                  )}
                </div>
              </div>
            </div>

            {jogoFinalizado && (
              <button
                type="button"
                className={styles.novoJogo}
                onClick={iniciarNovoJogo}
              >
                Nova palavra
              </button>
            )}
          </div>
        </div>

        <div className={styles.informacao}>
          <span>💡</span>

          <p>
            O tema funciona como a dica. Descubra a palavra
            usando as letras disponíveis.
          </p>
        </div>
      </section>
    </main>
  );
}
