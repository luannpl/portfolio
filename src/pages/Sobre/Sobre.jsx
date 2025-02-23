import styles from "./Sobre.module.css";
import imagem from "./images/perfil.jpeg";
import html from "./images/icon-html.svg";
import css from "./images/icon-css.svg";
import js from "./images/icon-js.svg";
import react from "./images/icon-react.svg";
import node from "./images/icon-node.svg";
import sql from "./images/icon-sql.svg";

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={imagem} alt="Foto de perfil" className={styles.avatar} />
        <div className={styles.textos}>
          <h2>Sobre</h2>
          <p>
            Sou <span>Paulo Luan</span> <br />
            <strong>Dev Full Stack</strong>
          </p>
          <p>
            Atualmente estou no quarto semestre de Análise e Desenvolvimento de
            Sistemas(Ads)
            <br /> na Universidade de Fortaleza(Unifor).
          </p>
          <p>
            Além de estar estagiando como desenvolvedor na gerência de TI do
            Sistema FIEC
          </p>
          <p>
            Sou apaixonado por tecnologia e curioso em tudo que pode ser feito
            através dela
          </p>
        </div>
      </div>

      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <img src={html} alt="icone do html" />
          <img src={css} alt="icone do css" />
          <img src={js} alt="icone do js" />
          <img src={react} alt="icone do react" />
          <img src={node} alt="icone do node" />
          <img src={sql} alt="icone do sql" />
        </div>
      </div>
    </section>
  );
}
export default Sobre;
