/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}




function createEmployeeRecord(employeeInfo) {
   const employeeRecord = {
    firstName: employeeInfo[0],
    familyName: employeeInfo[1],
    title: employeeInfo[2],
    payPerHour: employeeInfo[3],
    timeInEvents: [],
    timeOutEvents: [],
 }
//  console.log('eeeeeeeeeeee',array)

    return employeeRecord
}


function createEmployeeRecords(employeeRecord){
const employeeRecs = employeeRecord.map(employeeRecord => createEmployeeRecord(employeeRecord))
return employeeRecs
// console.log('arghhhhhhhhhhhhhhhhh',EmployeeRecord)
}

function creatTimeInEvent(dateStampIn) {
 let clockIn = {
    type: 'TimeIn',
    hour: parseInt(dateStampIn.hour) ,
    date: dateStampIn.date ,
  }
  return clockIn
}



// it is but as you know the function will only take one parameter which isnt the employee record so is there any way you can think of to access the object?

// Close but call is used on functions
// you can do this.timeInEvents