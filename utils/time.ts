export const getFormattedTime = (time: number) => {
  const padStart = (time: number) => String(time).padStart(2, '0');

  const hour = Math.floor(time / 1000 / 60 / 60);
  const minute = Math.floor(time / 1000 / 60 - hour * 60);
  const second = Math.floor((time / 1000) % 60);

  if (hour > 0) {
    return `${padStart(hour)}시간 ${padStart(minute)}분 ${padStart(second)}초`;
  } else if (minute > 0) {
    return `${padStart(minute)}분 ${padStart(second)}초`;
  }

  return `${padStart(second)}초`;
};
