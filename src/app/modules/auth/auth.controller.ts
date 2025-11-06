import { Request, Response } from "express";
import config from "../../../config";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { AuthService } from "./auth.service";

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);
  const { accessToken, refreshToken, needPasswordChange } = result;

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,

    secure: config.node_env === "production",
    sameSite: config.node_env === "production" ? "none" : "lax",
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 90,

    secure: config.node_env === "production",
    sameSite: config.node_env === "production" ? "none" : "lax",
  });

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User loggedin successfully!",
    data: {
      needPasswordChange,
    },
  });
});

export const AuthController = {
  login,
};
