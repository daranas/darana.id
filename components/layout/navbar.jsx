import Link from 'next/link'

export default function Navbar () {
  return (
    <div className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
      <Link href="/">
        <a className="navbar-brand">
          <img alt="Pipeline" src="/static/assets/images/logo.png" />
        </a>
      </Link>
      <div className="d-flex align-items-center">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse flex-column" id="navbar-collapse">
        <ul className="navbar-nav d-lg-block">
          <li className="nav-item">
            <Link href="/"><a className="nav-link">Resume</a></Link>
					</li>
          <li className="nav-item">
            <Link href="/portfolio"><a className="nav-link">Portfolios</a></Link>
					</li>
        </ul>
      </div>
    </div>
  )
}
