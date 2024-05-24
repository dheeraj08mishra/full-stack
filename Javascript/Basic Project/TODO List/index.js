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

/// using event bubbling
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

let limit= 10;
let skip= 0;

const randomGenerateref = document.querySelector("#parentDiv #random");
console.log(randomGenerateref);
randomGenerateref.addEventListener("click", function () {
  fetch(`https://dummyjson.com/todos?limit=${limit}&skip=${skip}`)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      data.todos.forEach(function (task) {
        const li = document.createElement("li");
        li.textContent = task.todo;
        document.querySelector("#parentDiv #ul").appendChild(li);
      });
    })
    .catch(function(err){
        alert('Something went wrong');
    })
    skip= skip+10;
});

const clearTaskRef = document.querySelector("#parentDiv #clear");
clearTaskRef.addEventListener('click',function(){
    document.querySelector("#parentDiv #ul").innerHTML = '';
    skip=0;
})
