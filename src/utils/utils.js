export const isValuePresent = value =>
  value !== null &&
  value !== undefined &&
  value !== "" &&
  !(typeof value === "number" && Number.isNaN(value));
