import resumeSchema from '@jsonresume/schema';
import fs from 'fs';

const file = fs.readFile('./resume.json')
const myResume = JSON.parse(file);


resumeSchema.validate(
    myResume,
  function (err, report) {
    if (err) {
      console.error("The resume was invalid:", err);
      return;
    }
    console.log("Resume validated successfully:", report);
  },
  function (err) {
    console.error("The resume was invalid:", err);
  }
);