import { ApplicantsType, ResultType } from "./some.test";

export const isEligible = (postalCodes: string[], applicants: ApplicantsType) => {
  const newArray: ResultType[] = [];
  Object.keys(applicants).forEach((item: string) => {
    let isEligible = postalCodes.some((postalCode: string) => postalCode === applicants[item].postalCode);

    newArray.push({
      name: applicants[item].name,
      isEligible,
    })
  });

  return newArray;
};