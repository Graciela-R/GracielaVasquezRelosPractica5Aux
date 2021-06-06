import { Router, Request, Response } from "express";
import {userC} from "./Controllers/UserController"; 
const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(
    '<h1 style="margin: 80px 80px 0px 80px">' +
      "Assignment 5, server running" +
      "</h1>" 
  );
});
router.get("/usuario", userC.user);
router.post("/newuser"),userC.newuser;
export default router;
