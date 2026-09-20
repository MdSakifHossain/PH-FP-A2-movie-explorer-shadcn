import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaPlay } from "react-icons/fa6"
import { Link } from "react-router"

export default function Home() {
  return (
    <Card className="mx-auto flex h-full w-full flex-1 items-center justify-center border text-center shadow-sm">
      <CardContent className="flex flex-col items-center justify-center space-y-6 p-8">
        <h1 className="text-6xl font-extrabold">Discover Movies</h1>

        <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
          Explore and discover your favorite movies from around the world.
        </p>

        <Link to={"/shows"}>
          <Button size="lg" className="">
            <FaPlay /> Explore Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
