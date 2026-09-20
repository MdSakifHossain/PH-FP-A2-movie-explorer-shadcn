import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FaHouse } from "react-icons/fa6"
import { Link } from "react-router"

const NotFound = () => {
  return (
    <Card className="mx-auto flex h-full w-full flex-1 items-center justify-center border text-center shadow-sm">
      <CardContent className="flex flex-col items-center justify-center space-y-6 p-8">
        <h1 className="text-6xl font-extrabold">404</h1>

        <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
          Page Not Found
        </p>

        <Link to={"/"}>
          <Button size="lg" className="">
            <FaHouse /> Back to Home Page
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}

export default NotFound
