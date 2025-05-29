module.exports = function validateInput({ name, email, message }) {
  if (!name || !email || !message) return "Tous les champs requis doivent être remplis.";
  if (!email.includes('@')) return "Email invalide.";
  return null;
};
