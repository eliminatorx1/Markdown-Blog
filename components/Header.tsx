import Link from "next/link"



const Header = () =>{
    return(
        <header>
      <div >
        <Link href="/">
          <div className="text-xl">Anuj's Blog</div>
        </Link>

        <p>Welcome to my GSOC blog</p>
      </div>
     </header>
    )
}

export default Header;