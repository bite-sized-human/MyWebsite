
function getStreak() {
  fetch('https://github.com/bite-sized-human', 'GET').then((res) => {
    console.log(res)
  });
}

module.exports = getStreak;
