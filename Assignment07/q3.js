let marks = [78, 45, 92, 66, 88, 54, 91, 73];
let marks2 = [78, 45, 92, 66, 88, 54,];

let combinedMarks = marks.concat(marks2);
console.log(combinedMarks);

let selectedMarks = combinedMarks.slice(0, 4);
console.log(selectedMarks);

let updatedMarks = selectedMarks[2] = 82;
console.log(updatedMarks);

let totalNumberOfMarks = updatedMarks.length;
console.log(totalNumberOfMarks);

let arrangedMarks = updatedMarks.sort(function (a, b) { return a - b });
console.log(arrangedMarks);

let reversedMarks = arrangedMarks.reverse();
console.log(reversedMarks);


let displayResult = (marks) => {
    console.log("Final result:", marks);
};

displayResult(reversedMarks);



