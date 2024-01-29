function Header(){
  return (
    <header>
      <nav className="nav">
        <img src="IMG/react-logo.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

function MainComponent(){
  return (
    <div>
      <h1 className="title">
        Reasons i'm exited to learn React
      </h1>
      <ol className="list">
        <li>It's usefull</li>
        <li>It's a hireable skill</li>
        <li>It's constantly maintained</li>
      </ol>
    </div>
  )
}

function Footer(){
 return (
  <footer className="footer">
    <small>©2024 Hristov development. All rights reserved.</small>
  </footer>
 )
}

function Page(){
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
    
  )
}

ReactDOM.render(
  <Page />,
  document.getElementById("root")
)