import { Link } from "react-router"
import { Button } from "../ui/button"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-3 sm:py-4 md:py-6">
      <h2 className="flex items-center gap-2.5 text-xl font-bold sm:text-3xl md:text-4xl">
        <img
          src="/vite.svg"
          alt="Logo"
          className="hidden size-8 sm:inline sm:size-10 md:size-12"
        />
        <Link to={"/"}>Moive Explorer</Link>
      </h2>

      <Link to={"/shows"}>
        <Button size={"default"}>Shows</Button>
      </Link>
    </nav>
  )
}

export default Navbar
