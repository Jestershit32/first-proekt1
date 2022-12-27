

export function Header() {
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-nav-ul ui">
          <NavLi value="main" />
          <NavLi value="content" />
          <NavLi value="contacts" />
          <NavLi value="credits" />
        </ul>
      </nav>
    </header>
  )



}
function NavLi(props) {
  return (
    <li className="header-nav-ul-il">
      <a href={'/' + props.value} className={`header-nav-ul-il-a ${window.location.pathname === ('/' + props.value) ? 'header-nav-ul-il-a-active ' : '23423'}`}>
        {props.value}
      </a>
    </li >
  )
}






