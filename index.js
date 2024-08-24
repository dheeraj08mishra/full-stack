document.getElementById('btn').addEventListener('click', function() {
    if(document.getElementById('input').value === ''){
        alert('Please enter a value');
        return;
    }
    const liCreated = document.createElement('li');
  liCreated.innerHTML = document.getElementById('input').value;
    document.getElementById('ul').appendChild(liCreated);
    document.getElementById('input').value = '';
});

document.getElementById('input').addEventListener('keypress', function(e) {
    if(e.key === 'Enter'){
        if(document.getElementById('input').value === ''){
            alert('Please enter a value');
            return;
        }
        const liCreated = document.createElement('li');
        liCreated.innerHTML = document.getElementById('input').value;
        document.getElementById('ul').appendChild(liCreated);
        document.getElementById('input').value = '';
    }
 });

document.getElementById("btn").addEventListener("click", function () {
  if (document.getElementById("input").value === "") {
    alert("Please enter a value");
    return;
  }
  const listItemCreated = document.createElement("li");
  listItemCreated.textContent = document.getElementById("input").value;
  document.getElementById("ul").appendChild(listItemCreated);
  document.getElementById("input").value = "";
  // checkList();
});

document.getElementById("input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (document.getElementById("input").value === "") {
      alert("Please enter a value");
      return;
    }
    const listItemCreated = document.createElement("li");
    listItemCreated.textContent = document.getElementById("input").value;
    document.getElementById("ul").appendChild(listItemCreated);
    document.getElementById("input").value = "";

    // checkList();
  }
});

function checkList() {
  console.log(document.querySelectorAll("li"));
  document.querySelectorAll("li").forEach(function (li) {
    li.addEventListener("click", function () {
      this.remove();
    });
  });
}

document.getElementById("parentDiv").addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      if (confirm("Are you sure you want to delete this item?")) {
        e.target.remove();
      }
    }
    console.log("event bubbling");
  },
  true
);

const p = new Promise((resolve, reject) => {
  reject("error");
  setTimeout(() => {
    resolve("success");
  }, 3000);
});

p.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log("error aa gya");
});

for (let index = 0; index < 3; index++) {
  setTimeout(() => {
    console.log(index);
  }, 1000);
}

function calCulateCacheCheck(){
    let cache  = {};
   return function square(a) {
        if(cache[a]) return cache[a];
        let current1 = 0;
        while(current1 < a){
            console.log("current",current1++);
    
        }
    cache[a] = a * a;
      return a * a;
    }

}
let data = calCulateCacheCheck();

console.log(data(5));
