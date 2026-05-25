import { Router } from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken, changePassword, getUser, updateAccount } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();
//secured routes
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/change-password").post(verifyJWT, changePassword);
router.route("/current-user").get(verifyJWT, getUser);
router.route("/update-account").patch(verifyJWT, updateAccount);
export default router;
//# sourceMappingURL=user.routes.js.map