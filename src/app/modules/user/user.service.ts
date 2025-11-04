import bcrypt from "bcryptjs";
import { Request } from "express";
// import { fileUploader } from "../../helper/fileUploader";
import { prisma } from "../../shared/prisma";

const createPatient = async (req: Request) => {
  // if (req.file) {
  //   const uploadResult = await fileUploader.uploadToCloudinary(req.file);
  //   req.body.patient.profilePhoto = uploadResult?.secure_url;
  // }

  console.log("req ", req.body);

  const hashPassword = await bcrypt.hash(req.body.password, 10);

  const result = await prisma.$transaction(async (tnx) => {
    await tnx.user.create({
      data: {
        email: req.body.email,
        // email: req.body.patient.email,
        password: hashPassword,
      },
    });

    return await tnx.patient.create({
      data: {
        name: req.body.name,
        email: req.body.email,
      },
      // data: req.body.patient,
    });
  });

  return result;
};

export const UserService = {
  createPatient,
};
