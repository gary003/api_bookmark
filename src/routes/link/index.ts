import { Router, Request, Response } from "express"
import { Link } from "../../services/typeorm/entity/link"
import { deleteLinkById, getAllLinks, getLinkById, saveNewLink, updateLinkById } from "../../services/typeorm/fetchDB/link"

const linkRouter = Router()

linkRouter
  .route("/")
  .get(async (_: Request, res: Response) => {
    const results: Link[] | void = await getAllLinks().catch((err) => console.log(err))

    if (!results) return res.status(500).json(new Error("Impossible to retreive any link"))

    return res.status(200).json(results)
  })
  .post(async (req: Request, res: Response) => {
    const result: Link | void = await saveNewLink(req.body).catch((err) => console.log(err))

    if (!result) return res.status(500).json(new Error("Impossible to save the new link"))

    return res.status(200).json(result)
  })
  .put(async (req: Request, res: Response) => {
    const result = await updateLinkById(req.body).catch((err) => console.log(err))

    if (!result) return res.status(500).json(new Error("Impossible to update the link"))

    return res.status(200).json(result)
  })

linkRouter
  .route("/:linkId")
  .get(async (req: Request, res: Response) => {
    const result: Link | void = await getLinkById(Number(req.params.linkId)).catch((err) => console.log(err))

    if (!result) return res.status(500).json(new Error("Impossible to retreive any link"))

    return res.status(200).json(result)
  })
  .delete(async (req: Request, res: Response) => {
    const result = await deleteLinkById(Number(req.params.linkId)).catch((err) => console.log(err))

    if (!result) return res.status(500).json(new Error("Impossible to delete the link"))

    return res.status(200).json(result)
  })

export default linkRouter
