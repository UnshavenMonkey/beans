export const getEnumValues = function <T>(
  Enum: Record<string, string | number>,
) {
  const allValues = Object.values(Enum);
  const numericValues = allValues.filter(
    (item): item is number => typeof item === "number",
  );
  const resultValues = numericValues.length ? numericValues : allValues;
  return resultValues as unknown as Array<T>;
};
