export const getWindDirection = (degree) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round((degree % 360) / 45);
  return directions[index];
};

export const getVisibilityDescription = (visibility) => {
  switch (true) {
    case visibility >= 1000:
      return "Excellent";

    case visibility >= 500:
      return "Good";

    case visibility >= 100:
      return "Moderate";

    default:
      return "Poor";
  }
};

export const getCloudinessDescription = (cloudiness) => {
  const cloudy = cloudiness >= 20 && cloudiness <= 60;

  switch (true) {
    case cloudiness < 20:
      return "Clear";
    case cloudy:
      return "Partly Cloudy";
    default:
      return "Cloudy";
  }
};

export const getTimezoneString = (timezone) => {
  const offsetHours = timezone / 3600;
  switch (true) {
    case offsetHours > 0:
      return `GMT +${offsetHours}`;
    case offsetHours < 0:
      return `GMT ${offsetHours}`;
    default:
      return "-";
  }
};
