import bcrypt from "bcryptjs";
import Admin from "./models/Admin.js";

export default async function seedAdmin() {
  const exists = await Admin.findOne({
    username: process.env.ADMIN_USERNAME,
  });

  if (exists) {
    console.log("Admin already exists");
    return;
  }

  const hashed = await bcrypt.hash(
    process.env.ADMIN_PASSWORD,
    10
  );

  await Admin.create({
    username: process.env.ADMIN_USERNAME,
    password: hashed,
  });

  console.log("Admin Created");
}