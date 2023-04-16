let arr = [];
function secondsToHms(totalSeconds) {
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;
  return `${hours}:${minutes}:${seconds}`;
}
function getTotalTime(timeStrings) {
  let totalSeconds = 0;
  timeStrings.forEach(timeString => {
    let [minutes, seconds] = timeString.split(':').map(num => parseInt(num));
    totalSeconds += (minutes * 60) + seconds;
  });
  return totalSeconds;
}

function getDurations() {
  let x = document.querySelectorAll("#playlist-items");

  x.forEach(item => {
    let thumbnail = item.querySelector("#thumbnail-container");
    
      arr.push(thumbnail.innerText);
    
  });

 
}
getDurations();
console.log(secondsToHms(getTotalTime(arr)));
