

export function Header() {
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <NavLi value="photoshop" />
          <NavLi value="illustrator" />
          <NavLi value="Figma" />
          <NavLi value="Node_Js" />
        </ul>
      </nav>
    </header>
  )



}
function NavLi(props) {
  return (
    <li className="header-nav-ul-il">
      <a href={'/#' + props.value} className={`header-nav-ul-il-a`}>
        {props.value}
      </a>
    </li >
  )
}






