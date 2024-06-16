import Link from "next/link"



const Header = () =>{
    return(
        <header>
      <div>
        <Link href="/">
          <div className="text-4xl py-4 px-5 text-sky-400">My Blogs 👋</div>
        </Link>

        <p className="px-4 py-4">Welcome to my GSOC blogs</p>
      </div>
     </header>
    )
}

export default Header;