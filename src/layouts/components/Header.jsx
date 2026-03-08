function Header({ children }) {
  return (
    <header className="mb-7.5 flex items-center justify-between rounded-xl bg-white px-6.25 py-3.75 shadow-[0px_2px_10px_rgba(0,0,0,0.05)]">
      {children}
    </header>
  );
}

export default Header;
