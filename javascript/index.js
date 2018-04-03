function dateFunction() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  var today = dd + '/' + mm + '/' + yyyy;

  document.getElementById("DATE").innerHTML = today;

}

function objectFunction() {
  var object = {
    number: 1,
    string: "This is String",
    boolean: true,
    undefined: undefined,
    null: null,
    array: ["a", 1, true, undefined, null]
  };

  document.getElementById("object").innerHTML = JSON.stringify(object);
}

var names = [
  "Mr. Fahri",
  "Mr. Abdul",
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hakim"
];

var mr = [];
var mrs = [];
for (var counter = 0; counter < names.length; counter++) {
  if (names[counter].indexOf("Mr. ") === 0) {
    mr.push(names[counter]);
    // console.log(names[counter]);
    // console.log(names.indexOf(names[counter] === "M."));
  } else {
    mrs.push(names[counter]);
  }
}
console.log(mr);
console.log(mrs);
