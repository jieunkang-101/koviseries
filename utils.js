export const trimText = (text = "", limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

export const formatDate = (date) => {
  const theDate = new Date(date);
  return theDate.toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
};

export const trimDate = (date) => {
  const theDate = new Date(date);
  return theDate.getFullYear();
}

export const formatNumber = (number) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'USD' }).format(number)
}