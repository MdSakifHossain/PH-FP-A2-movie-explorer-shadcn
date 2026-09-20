import Navbar from "@/components/mine/Navbar"
import { Card, CardContent } from "@/components/ui/card"
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6"
import { Link, Outlet } from "react-router"

const Root = () => {
  return (
    <main>
      <div className="flex min-h-svh flex-col justify-start pb-4 md:pb-8">
        <Navbar />

        <div className="flex w-full flex-1 flex-col items-start justify-start gap-2 border-primary px-4 sm:px-8 md:px-12">
          <Outlet />
        </div>
      </div>
      <footer className="mx-6 mb-6">
        <Card className="h-full">
          <CardContent>
            <div className="flex items-center justify-between border-b border-dashed py-6">
              <h2 className="flex items-center gap-2.5 text-xl font-bold sm:text-3xl md:text-4xl">
                <img
                  src="/vite.svg"
                  alt="Logo"
                  className="hidden size-8 sm:inline sm:size-10 md:size-12"
                />
                <Link to={"/"}>Moive Explorer</Link>
              </h2>

              <ul className="flex items-center justify-center gap-2.5">
                <li>
                  <Link to={"#"}>
                    <FaFacebook className="size-6" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaInstagram className="size-6" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaTiktok className="size-6" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <FaXTwitter className="size-6" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="py-6">
              <p className="text-center text-sm text-muted-foreground">
                ©{new Date().getFullYear()} Made with ❤️ for My Assignment.
              </p>
            </div>
          </CardContent>
        </Card>
      </footer>
    </main>
  )
}

export default Root
