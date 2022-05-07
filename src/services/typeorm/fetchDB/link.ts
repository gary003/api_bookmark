import { Link } from "../entity/link"
import { connectionTypeORM } from "../connectionFile"
import { DateTime } from "luxon"
import { DeleteResult } from "typeorm"

export const getAllLinks = async (): Promise<Link[]> => {
  const connection = await connectionTypeORM().catch((err) => console.error(err))

  if (!connection || !connection.isConnected) throw new Error("Not Connected to database")

  const LinkRepository = connection.getRepository(Link)

  const results: Link[] | void = await LinkRepository.find().catch((err) => console.error(err))

  await connection.close().catch((err) => console.log(err))

  if (!results) throw new Error("Impossible to retreive any link")

  return results
}

export const saveNewLink = async (link: Link): Promise<Link> => {
  const connection = await connectionTypeORM().catch((err) => console.error(err))

  if (!connection || !connection.isConnected) throw new Error("Not Connected to database")

  if (!["photo", "video"].includes(link.linkType)) throw new Error("Error - type of link unknown.")

  const newLink: Link = new Link()
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

export const getLinkById = async (linkId: number): Promise<Link> => {
  const connection = await connectionTypeORM().catch((err) => console.error(err))

  if (!connection || !connection.isConnected) throw new Error("Not Connected to database")

  const LinkRepository = connection.getRepository(Link)

  const result: Link | void = await LinkRepository.findOne({ linkId: linkId }).catch((err) => console.error(err))

  await connection.close().catch((err) => console.log(err))

  if (!result) throw new Error("Impossible to retreive that link with that ID")

  return result
}

export const updateLinkById = async (updatateData: Link): Promise<Link> => {
  const { linkId, ...valuesToUpdate } = updatateData

  if (!linkId || !valuesToUpdate) throw new Error("Error - invalid data for update")
  if ("linkType" in valuesToUpdate && !["photo", "video"].includes(valuesToUpdate.linkType)) throw new Error("Error - type of link unknown.")

  const connection = await connectionTypeORM().catch((err) => console.error(err))

  if (!connection || !connection.isConnected) throw new Error("Not Connected to database")

  const LinkRepository = connection.getRepository(Link)

  const linkToUpdate: Link | void = await LinkRepository.findOne({ linkId }).catch((err) => console.error(err))

  if (!linkToUpdate) throw new Error("Impossible to found the requested link to update")

  await LinkRepository.merge(linkToUpdate, { ...valuesToUpdate })

  const result = await LinkRepository.save(linkToUpdate).catch((err) => console.log(err))

  await connection.close().catch((err) => console.log(err))

  if (!result) throw new Error("Impossible to update the values for that link")

  return result
}

export const deleteLinkById = async (linkId: number): Promise<DeleteResult> => {
  const connection = await connectionTypeORM().catch((err) => console.error(err))

  if (!connection || !connection.isConnected) throw new Error("Not Connected to database")

  const LinkRepository = connection.getRepository(Link)

  const result: DeleteResult = await LinkRepository.delete(linkId)

  await connection.close().catch((err) => console.log(err))

  if (!result) throw new Error("Impossible to delete that link")

  return result
}
