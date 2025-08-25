import "./Footer.css";

function Footer({ score, bestScore }) {
  return (
    <footer>
      <div>Score: {score}</div>
      <div>Best Score: {bestScore}</div>
    </footer>
  );
}

export default Footer;
