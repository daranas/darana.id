import Navbar from './navbar'

export default function Layout(props) {
  return (
    <div className="layout layout-nav-side">
      <Navbar />
      <div className="main-container">
        <div className="container">
          <div className="row justify-content-center">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}