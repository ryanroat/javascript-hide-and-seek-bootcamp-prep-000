function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget () {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.getElementsByClassName('ranked-list');
  let oldNum, newNum;
  
  // console.log(lis);
  
  for (let i = 0; i < lis.length; i++) {
    
    oldNum = parseInt(lis[i].innerHTML);  // pull innerHTML out as an int
    newNum = oldNum + n;                  // increase and store in newNum
    
    lis[i].innerHTML = newNum.toString();
  }
}

function deepestChild() {
  let gn = document.getElementById('grand-node');
  let gndivs = gn.getElementsByTagName('div');
  depth = gndivs.length - 1;
  return gndivs[depth];
}