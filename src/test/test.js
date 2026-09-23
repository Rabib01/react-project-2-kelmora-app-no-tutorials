import { faker, fakerEN_GB } from "@faker-js/faker";
import fs from "fs";

export const students = Array.from({ length: 359 }, () => ({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  photo: faker.image.url(),
  email: faker.internet.email(),
  phone: fakerEN_GB.phone.number({ style: "mobile" }),
  role: "student",
  dateOfBirth: faker.date.birthdate({ mode: "age", min: 18, max: 65 }),
  guardians: {
    fullName: faker.person.fullName(),
    phone: faker.phone.number(),
    relation: "father",
  },
  school: faker.company.name(),
  course: "physics",
  batchIds: faker.phone.imei(),
}));

fs.writeFileSync("../data/students.json", JSON.stringify(students, null, 2));
