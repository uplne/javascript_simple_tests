import { isEligible } from ".";

export type ApplicantType = {
  name: string,
  postalCode: string,
};

export type ApplicantsType = {
  [key: string]: ApplicantType,
};

export type ResultType = {
  name: string,
  isEligible: boolean,
};

const eligiblePostalCodes: string[] = ["12345", "67890", "24680", "13579"];
const applicants: ApplicantsType = {
  "1": { name: "Alice", postalCode: "12345" },
  "2": { name: "Bob", postalCode: "98765" },
  "3": { name: "Charlie", postalCode: "13579" },
  "4": { name: "Diana", postalCode: "11111" }
};
const result: ResultType[] = [
  { name: "Alice", isEligible: true },
  { name: "Bob", isEligible: false },
  { name: "Charlie", isEligible: true },
  { name: "Diana", isEligible: false }
];

/*
  Objective: Write a JavaScript function that takes an array of applicants
  and returns an array of objects with each applicant's name and a boolean isEligible indicating
  their membership eligibility based on the postal code.
*/

describe('Array.some()', () => {
  test('is eligible', () => {
    expect(isEligible(eligiblePostalCodes, applicants)).toStrictEqual(result);
  });
});