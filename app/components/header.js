export default function Header () {
  return (
    <header className="text-center px-5 py-4">
      <div>
        <h3 className="float-md-left mb-0">Karlbergs-Bro</h3>
        <nav className="nav nav-masthead justify-content-center float-md-right">
          <a className="nav-link active" aria-current="page" href="#">Om oss</a>
          <a className="nav-link" href="#">Lotter</a>
          <a className="nav-link" href="#">Intresseanmälan</a>
        </nav>
      </div>
    </header>
  )
}
