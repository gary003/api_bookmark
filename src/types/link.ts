enum LinkMedia2 {
  "photo",
  "video",
}

type LinkMedia = "photo" | "video"

type Link = {
  linkId: number
  linkType: LinkMedia
  URL: string
  title: string
  addDate: string
  publicationDate: string
  thumbnail: string
  height: number
  width: number
  duration: number
}

export { Link, LinkMedia, LinkMedia2 }
