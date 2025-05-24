const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center ">
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/soundwave.png"
              width={40}
              height={40}
              alt="music wave"
            />
          </a>

          
        </h1>
        <h1 className="text-3xl font-light">SoundWave</h1>

        <button>
          <span className="material-symbols-rounded">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
