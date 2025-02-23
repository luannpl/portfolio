import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <section className={styles.home}>
        <div>
          <p>
            Olá, sou <br />
            <span>Paulo Luan</span>
            <br />
            Dev Full Stack
          </p>
          <Link to="/sobre">
            <button>Saiba mais</button>
          </Link>
        </div>
        <figure>
          <img src="./figura-home.svg" alt="Imagem home" />
        </figure>
      </section>
    </>
  );
}

export default Home;
