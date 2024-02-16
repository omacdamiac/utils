
export const utils = () => {
  console.log("Test Utils");
};

export const formatDate = (date: Date) => {
  const tempDate = new Date(date).toLocaleString();
  return tempDate;
};