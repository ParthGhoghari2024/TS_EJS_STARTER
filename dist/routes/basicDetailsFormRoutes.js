"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const basicDetaIlsFormController_1 = require("../controllers/basicDetaIlsFormController");
const router = express_1.default.Router();
router
    .route("/")
    .get(basicDetaIlsFormController_1.basicDetailsFormPageController)
    .post(basicDetaIlsFormController_1.basicDetailsFormPostController);
router.route("/all").get(basicDetaIlsFormController_1.getAllBasicDetailsController);
exports.default = router;
