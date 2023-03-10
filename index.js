// Code your solutions in this file
function countDown(num) {
    for (let i = num; i >= 0; i--) {
      console.log(i);
    }
  }

function writeCards(namesArray, eventName) {
    const thankYou = []
    for (let i = 0; i < namesArray.length; i++) {
            thankYou.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`)
    }
    return(thankYou)
}

countDown(10)