import Navbar from './navbar'

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  )
}