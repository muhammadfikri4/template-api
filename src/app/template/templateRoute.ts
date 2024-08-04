import { Router } from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { VerifyToken } from "../../middleware/verifyToken";
import { CatchWrapper } from "../../utils/CatchWrapper";
import { imageSchema } from "../global/imageRequest";
import { upload } from "./templateConfig";
import { createAcaraController, deleteAcaraController, getAcaraController, getDetailAcaraController, updateAcaraController } from "./templateController";
import { createAcaraSchema } from "./templateRequest";

const route = Router()

route.post("/", VerifyToken, CatchWrapper(upload.single("image")), validateRequest(createAcaraSchema, imageSchema), CatchWrapper(createAcaraController))
route.get("/", CatchWrapper(getAcaraController))
route.delete("/:id", VerifyToken, CatchWrapper(deleteAcaraController))
route.put("/:id", VerifyToken, CatchWrapper(upload.single("image")), updateAcaraController)
route.get("/:id", CatchWrapper(getDetailAcaraController))

export default route