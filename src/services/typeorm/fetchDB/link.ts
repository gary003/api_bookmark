import { Link } from "../entity/link"
import { connectionTypeORM } from "../connectionFile"
import { DateTime } from "luxon"

export const getAllLinks = async () => {
  const connection = await connectionTypeORM().catch((err) => console.error(err))

  if (!connection || !connection.isConnected) throw new Error("Not Connected to database")

  const LinkRepository = connection.getRepository(Link)

  const results: Link[] | void = await LinkRepository.find().catch((err) => console.error(err))

  await connection.close().catch((err) => console.log(err))

  if (!results) throw new Error("Impossible to retreive any link")

  return results
}

export const saveNewLink = async (link: Link) => {
  const connection = await connectionTypeORM().catch((err) => console.error(err))

  if (!connection || !connection.isConnected) throw new Error("Not Connected to database")

  if (!["photo", "video"].includes(link.linkType)) throw new Error("Error - type of link unknown.")

  const newLink = new Link()
  newLink.linkType = link.linkType
  newLink.title = link.title
  newLink.URL = link.URL
  newLink.addDate = DateTime.now().toSQL()
  newLink.publicationDate = ""
  newLink.thumbnail = link.thumbnail
  newLink.height = link.height
  newLink.width = link.width
  newLink.duration = link.duration

  const LinkRepository = connection.getRepository(Link)

  const result: Link | void = await LinkRepository.save(newLink).catch((err) => console.error(err))

  await connection.close().catch((err) => console.log(err))

  if (!result) throw new Error("Impossible to save the new link")

  return result
}

export const getLinkById = async (linkId: number) => {
  const connection = await connectionTypeORM().catch((err) => console.error(err))

  if (!connection || !connection.isConnected) throw new Error("Not Connected to database")

  const LinkRepository = connection.getRepository(Link)

  const result: Link | void = await LinkRepository.findOne({ linkId: linkId }).catch((err) => console.error(err))

  await connection.close().catch((err) => console.log(err))

  if (!result) throw new Error("Impossible to retreive that link with that ID")

  return result
}

export const deleteLinkById = async (linkId: number) => {
  const connection = await connectionTypeORM().catch((err) => console.error(err))

  if (!connection || !connection.isConnected) throw new Error("Not Connected to database")

  const LinkRepository = connection.getRepository(Link)

  const linkToDelete: Link | void = await LinkRepository.findOne({ linkId: linkId }).catch((err) => console.error(err))

  if (!linkToDelete) throw new Error("Impossible to found the requested link to delete")

  await LinkRepository.delete(linkToDelete)

  const result: Link | void = await LinkRepository.save(linkToDelete).catch((err) => console.log(err))

  await connection.close().catch((err) => console.log(err))

  if (!result) throw new Error("Impossible to update delete_at for that link")

  return result
}
