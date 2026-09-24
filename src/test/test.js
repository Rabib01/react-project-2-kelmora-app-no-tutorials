import { faker, fakerEN_GB } from "@faker-js/faker";
import fs from "fs";

const randomSubjectSelector = function (...subjects) {
  //   function to create a randomNumber between 0 - 9 so that the teachers can have the subjects accordingly
  function randomNumberRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return subjects[randomNumberRange(0, 9)];
};

console.log(
  randomSubjectSelector(
    "Network Engineering",
    "Digital Logic Design",
    "Software Engineering",
    "Digital Logic Design",
    "Discreet Mathematics",
    "Theory Of Computation",
    "Computer Architecture",
    "Operating Systems",
    "Data Structure and Algorithms",
    "Microprocessors",
  ),
);

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
  course: randomSubjectSelector(
    "Network Engineering",
    "Digital Logic Design",
    "Software Engineering",
    "Digital Logic Design",
    "Discreet Mathematics",
    "Theory Of Computation",
    "Computer Architecture",
    "Operating Systems",
    "Data Structure and Algorithms",
    "Microprocessors",
  ),
  batchIds: faker.phone.imei(),
}));

export const teachers = Array.from({ length: 75 }, () => ({
  id: faker.string.uuid(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  photo: faker.image.url(),
  email: faker.internet.email(),
  phone: fakerEN_GB.phone.number({ style: "mobile" }),
  role: "student",
  school: faker.company.name(),
  course: randomSubjectSelector(
    "Network Engineering",
    "Digital Logic Design",
    "Software Engineering",
    "Digital Logic Design",
    "Discreet Mathematics",
    "Theory Of Computation",
    "Computer Architecture",
    "Operating Systems",
    "Data Structure and Algorithms",
    "Microprocessors",
  ),
  batchIds: faker.phone.imei(),
}));

// fs.writeFileSync("../data/students.json", JSON.stringify(teachers, null, 2)); -> Dangerous Script - creates a lot of studnet json data
