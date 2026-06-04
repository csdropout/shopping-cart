import styles from "./home.module.css";
import { Link } from "react-router";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1>Best Imitations</h1>
        <p>
          Welcome to Best Imitations where we curate a wide range of products
          just like the real ones! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quam possimus minus fugiat similique modi laudantium
          reprehenderit harum est veniam distinctio optio, consequatur
          molestiae. Ullam dolorum blanditiis sequi ipsam unde at.
        </p>
        <button className={styles.underlineButton}>
          <Link to="shop">View collection</Link>
        </button>
      </div>
      <Newsletter />
    </div>
  );
}

function Newsletter() {
  return (
    <div className={styles.newsletterContainer}>
      <h2>Stay updated!</h2>
      <div className={styles.newsletterField}>
        <input type="email" placeholder="Email" />
        <button>&gt;</button>
      </div>
    </div>
  );
}

export default Home;
