export const sendWhatsAppMessage = (message: string, phoneNumber: string = "919368662818") => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
};
