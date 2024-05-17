import express, { Router } from "express";
import {
  basicDetailsFormPageController,
  basicDetailsFormPostController,
  getAllBasicDetailsController,
} from "../controllers/basicDetaIlsFormController";

const router: Router = express.Router();

router
  .route("/")
  .get(basicDetailsFormPageController)
  .post(basicDetailsFormPostController);

router.route("/all").get(getAllBasicDetailsController);
export default router;
