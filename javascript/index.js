function dateFunction1() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  var today = dd + '/' + mm + '/' + yyyy;

  document.getElementById("DATE").innerHTML = today;

}

function dateFunction() {
  var today = new Date();
  var dd = today.getDate();
  console.log(dd);
  return dd;
}

function monthFunction() {
    var today = new Date();
    var mm = today.getMonth() + 1;
    return mm;
}

function dayFunction() {
  var today = new Date();
  var da = today.getDay() + 1;
  return da;
}

function fullYearFunction() {
  var today = new Date();
  var yyyy = today.getFullYear();
  return yyyy;
}

function hoursFunction() {
  var today = new Date();
  var hh = today.getHours();
  return hh;
}

function minutesFunction() {
  var today = new Date();
  var mn = today.getMinutes();
  return mn;
}

function secondsFunction() {
  var today = new Date();
  var se = today.getSeconds();
  return se;
}

function printDate() {
var date = dateFunction() + '/' + monthFunction() + '/' + fullYearFunction();
document.getElementById("date").innerHTML = date;
return date;
}

function printTime() {
var times = hoursFunction() + ':' + minutesFunction() + ':' + secondsFunction();
document.getElementById("time").innerHTML = times;
return times
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
  } else {
    mrs.push(names[counter]);
  }
}
console.log(mr);
console.log(mrs);
