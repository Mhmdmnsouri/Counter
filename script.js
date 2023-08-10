var count = 0;
function changeCount(num) {
    count += num;
    document.querySelector('#number').innerHTML = count;
  }