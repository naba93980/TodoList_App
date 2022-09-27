import React from "react";
export function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://www.google.com">
            {props.title}
          </a>
        </div>
      </nav>
    </>
  )
}

export default Header;
Header.defaultProps = {
  "title": "your_title",
}