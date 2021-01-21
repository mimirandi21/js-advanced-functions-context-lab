/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
	let eligibleDates = this.timeInEvents.map(function (e) {
		return e.date;
	});

	let payable = eligibleDates.reduce(
		function (memo, d) {
			return memo + wagesEarnedOnDate.call(this, d);
		}.bind(this),
		0
	); // <== Hm, why did we need to add bind() there? We'll discuss soon!

	return payable;
};
let createEmployeeRecord = (arr) => {
	const newEmp = {
		firstName: arr[0],
		familyName: arr[1],
		title: arr[2],
		payPerHour: arr[3],
		timeInEvents: [],
		timeOutEvents: [],
	};
	return newEmp;
};

let createEmployeeRecords = (arr) => {
	return arr.map((emp) => createEmployeeRecord(emp));
};

function createTimeInEvent(shift) {
	let date = shift.split(" ");
	this.timeInEvents.push({
		type: "TimeIn",
		hour: parseInt(date[1]),
		date: date[0],
	});
	return this;
}
function createTimeOutEvent(shift) {
	let date = shift.split(" ");
	this.timeOutEvents.push({
		type: "TimeOut",
		hour: parseInt(date[1]),
		date: date[0],
	});
	return this;
}
function hoursWorkedOnDate(date) {
	let y = this.timeInEvents.find((time) => time.date === date);
	let x = this.timeOutEvents.find((time) => time.date === date);
	return (x.hour - y.hour) / 100;
}

function wagesEarnedOnDate(date) {
	return this.payPerHour * hoursWorkedOnDate.call(this, date);
}
function calculatePayroll(arr) {
	return arr.reduce((acc, curr) => acc + allWagesFor.call(curr), 0);
}
function findEmployeeByFirstName(emp, firstName) {
	return emp.find((emp) => emp.firstName === firstName);
}
