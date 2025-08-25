import "./Header.css";

function Header() {
  return (
    <header>
      <div className="heading-container">
        <h1>It's simple.</h1>
        <h2>
          Get points from clicking on an image, but don't click the same image
          any more than once!
        </h2>
      </div>
      <button>Restart</button>
    </header>
  );
}

export default Header;
