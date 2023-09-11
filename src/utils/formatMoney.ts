export const formatMoney = (value: number): string => {
  if (value === null || value === undefined) {
    return "";
  }

  return value.toLocaleString("id-ID");
};
