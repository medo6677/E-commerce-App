export const getPasswordStrength = (password: string) => {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const levels = [
    { label: "", width: "0%", color: "bg-muted" },
    { label: "Weak", width: "25%", color: "bg-red-500" },
    { label: "Fair", width: "50%", color: "bg-orange-500" },
    { label: "Good", width: "75%", color: "bg-yellow-500" },
    { label: "Strong", width: "100%", color: "bg-green-500" },
  ];

  return levels[score];
};