export const UTCtoIST = (date) => {
  return (new Date(new Date(date).toLocaleString("en-US", {timeZone: 'Asia/Kolkata'}))).getHours()+':'+(new Date(new Date(date).toLocaleString("en-US", {timeZone: 'Asia/Kolkata'}))).getMinutes();
};

