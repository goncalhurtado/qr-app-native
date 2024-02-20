export const createMailLink = (data) => {
  const array = data.message.split(" ");
  const message = array.join("%20");
  const result = `mailto:${data.email}?subject=${data.subject}&body=${message}`;
  return result;
};
