export default function Navbar() {
  return (
    <header>
      <nav className="flex flex-col gap-3">
        <a href="/" className="flex flex-col">
          <span>Calvin Williams</span>
          <span className="text-grey">Web Developer</span>
        </a>
        <ul className="flex gap-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
