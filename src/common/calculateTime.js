export function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

export function timeTakenForQuiz(candidateLevel, remainingTime) {
  let timeTaken = 0;
  if (candidateLevel === "Beginner") {
    let timeAllocation = 5 * 60000;
    timeTaken = millisToMinutesAndSeconds(timeAllocation - remainingTime);
  } else if (candidateLevel === "Intermediate") {
    let timeAllocation = 8 * 60000;
    timeTaken = millisToMinutesAndSeconds(timeAllocation - remainingTime);
  } else if (candidateLevel === "Advance") {
    let timeAllocation = 12 * 60000;
    timeTaken = millisToMinutesAndSeconds(timeAllocation - remainingTime);
  }
  return timeTaken;
}
