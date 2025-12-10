import { UserRole } from "@prisma/client";
import express from "express";
import auth from "../../middlewares/auth";
import { AppointmentController } from "./appointment.controller";

const router = express.Router();

router.get(
  "/my-appointments",
  auth(UserRole.PATIENT, UserRole.DOCTOR, UserRole.ADMIN),
  AppointmentController.createAppointment
);

router.post(
  "/",
  auth(UserRole.PATIENT, UserRole.ADMIN),
  AppointmentController.createAppointment
);

router.patch(
  "/status/:id",
  auth(UserRole.ADMIN, UserRole.DOCTOR),
  AppointmentController.createAppointment
);

export const AppointmentRoutes = router;
