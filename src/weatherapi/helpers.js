import { useHistory } from "react-router";

export const getDate = (date) => {
  const d = new Date(date * 1000);

  const day = d.getDay();
  const getDay = () => {
    if (day === 1) {
      return 'Monday';
    } else if (day === 2) {
      return 'Tuesday';
    } else if (day === 3) {
      return 'Wednesday';
    } else if (day === 4) {
      return 'Thursday';
    } else if (day === 5) {
      return 'Friday';
    } else if (day === 6) {
      return 'Saturday';
    } else {
      return 'Sunday';
    }
  };
  return new Date().getDay() === day ? 'Today' : getDay();
};
export const getTime = (time) => {
  return `${new Date(time * 1000).getHours()}:00`;
};
export const hasGeolocationSupport = () => {
  return !!navigator.geolocation;
};




