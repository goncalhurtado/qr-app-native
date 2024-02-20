export const validationUrl = (input, setError) => {
  const { url } = input;
  const regex =
    /^(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w-.,@?^=%&:/~+#]*[\w-@?^=%&/~+#])?/;

  if (url === "" || url === null) {
    setError({
      boolean: true,
      message: "Debes ingresar una url",
    });
    return false;
  }

  if (!url.match(regex)) {
    setError({ boolean: true, message: "Introduce una url valida" });
    return false;
  }
  return true;
};

export const validationWhatsapp = (input, setError) => {
  console.log(input);
  const { number, message } = input;
  const regex = /^\d{1,15}$/;

  if (number === "" || number === null) {
    setError({
      boolean: true,
      type: "number",
      message: "Debes ingresar un número de Whatsapp",
    });
    return false;
  }

  if (!number.match(regex)) {
    setError({
      boolean: true,
      type: "number",
      message: "Introduce un número válido",
    });
    return false;
  }

  if (message === "") {
    setError({
      boolean: true,
      type: "message",
      message: "Debes ingresar un mensaje",
    });
    return false;
  }
  return true;
};

export const validationEmail = (input, setError) => {
  const { email, subject, message } = input;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  //email
  if (email === "" || email === null) {
    setError({
      boolean: true,
      type: "email",
      message: "Debes ingresar un email",
    });
    return false;
  }

  if (!email.match(regex)) {
    setError({
      boolean: true,
      type: "email",
      message: "Introduce un email valido",
    });
    return false;
  }

  //subject

  if (subject === "" || subject === null) {
    setError({
      boolean: true,
      type: "subject",
      message: "Debes introducir un asunto",
    });
    return false;
  }

  //message

  if (message === "" || message === null) {
    setError({
      boolean: true,
      type: "message",
      message: "Debes introducir un mensaje",
    });
    console.log("error");
    return false;
  }
  return true;
};
