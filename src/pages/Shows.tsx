// @ts-nocheck
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import axios from "axios"
import { SearchIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { FaCalendar, FaClock, FaStar } from "react-icons/fa6"
import { LuCircleX } from "react-icons/lu"
import { useLoaderData, useSearchParams } from "react-router"

export async function loader({ request }) {
  const url = new URL(request.url)
  const query = url.searchParams.get("q")

  if (!query) {
    const { data: shows } = await axios.get("https://api.tvmaze.com/shows")
    return shows
  }

  const { data: showsList } = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
  )
  return showsList.map((show) => show.show)
}

export default function Shows() {
  const shows = useLoaderData()
  const [searchParams, setSearchParams] = useSearchParams()
  const [input, setInput] = useState(searchParams.get("q") || "")
  const [selectedShow, setSelectedShow] = useState(null)
  const [dialogueOpen, setDialogueOpen] = useState(false)

  const hanldleDetailsClick = (show) => {
    setSelectedShow(show)
    setDialogueOpen(true)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input) {
        setSearchParams({ q: input })
      } else {
        setSearchParams({})
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [input, setSearchParams])

  return (
    <div className="flex w-full flex-col gap-12">
      <Field className="mx-auto max-w-xl">
        <InputGroup>
          <InputGroupInput
            id="inline-start-input"
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <InputGroupAddon align="inline-start">
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>

          <InputGroupButton size={"icon-sm"} onClick={() => setInput("")}>
            {input && <LuCircleX className="size-4" />}
          </InputGroupButton>
        </InputGroup>
      </Field>

      <Dialog open={dialogueOpen} onOpenChange={setDialogueOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="text-2xl font-light">
              {selectedShow?.name}
            </DialogTitle>
            {/* <DialogDescription>{selectedShow?.summary}</DialogDescription> */}
          </DialogHeader>

          <div className="flex flex-col gap-3">
            <img
              src={
                selectedShow?.image?.original ||
                "https://placehold.co/210x295?text=No+Image"
              }
              alt=""
            />
            <p>Genre: {selectedShow?.genres?.join(", ")}</p>
            <p>Rating: {selectedShow?.rating?.average}</p>
            <p>Average Runtime: {selectedShow?.averageRuntime} Min</p>
            <p>Released Year: {selectedShow?.premiered.slice(0, 4)}</p>
            <p>Language: {selectedShow?.language}</p>
            <a
              href={selectedShow?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              Seel More
            </a>
          </div>

          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {shows.map((show) => (
          <Card
            className="group relative mx-auto flex w-full max-w-sm flex-col pt-0 transition-transform duration-200 ease-out hover:-translate-y-3"
            key={show.id}
          >
            <div className="bg-black">
              <img
                src={
                  show.image?.medium ||
                  "https://placehold.co/210x295?text=No+Image"
                }
                alt="Event cover"
                className="w-full object-cover transition-opacity duration-200 group-hover:opacity-50"
                onClick={() => hanldleDetailsClick(show)}
              />
            </div>
            <CardHeader className="flex-1">
              <CardTitle
                className="font-bold sm:text-xl md:text-2xl"
                onClick={() => hanldleDetailsClick(show)}
              >
                {show.name}
              </CardTitle>
              <CardDescription className="grid grid-cols-2 gap-2">
                <p className="flex items-center gap-2">
                  <FaStar className="size-4" /> {show.rating.average}
                </p>
                <p className="flex items-center gap-2">
                  <FaClock className="size-4" /> {show.averageRuntime} min
                </p>
                <p className="flex items-center gap-2">
                  <FaCalendar className="size-4" />{" "}
                  {show.premiered?.slice(0, 4)}
                </p>
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                onClick={() => hanldleDetailsClick(show)}
                className="w-full"
              >
                See Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
