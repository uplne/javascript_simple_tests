import { ApplicantsType, ResultType, ReasonsType } from "./some.test";

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

export const filterIneligibleApplicants = (postalCodes: string[], applicants: ApplicantsType) => {
  return Object.keys(applicants).filter((key: string) => !postalCodes.includes(applicants[key].postalCode))
    .map((key: string) => ({
      name: applicants[key].name,
      isEligible: false,
      reason: ReasonsType.postalCodeError,
    }));
};