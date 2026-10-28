// Today's date as YYYY-MM-DD in the visitor's local timezone.
export const todayStr = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const phonePattern = /^[+\d][\d\s\-()]{6,}$/;
