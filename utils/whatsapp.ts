export const sendWhatsAppMessage = (message: string, phoneNumber: string = "919530802147") => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
};
