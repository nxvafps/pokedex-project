function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Pokédex App</p>
        <p>
          Built with{" "}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
          >
            PokéAPI
          </a>
        </p>
        <p>
          <a
            href="https://github.com/nxvafps/pokedex-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
