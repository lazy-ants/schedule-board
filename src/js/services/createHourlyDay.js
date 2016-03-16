var CreateHourlyDay = function (dayHourRecords, startHour, endHour) {
	if (isNaN(startHour) === true ||
	  isNaN(endHour) === true ||
	   startHour < 0 || endHour > 23 || startHour > endHour) {
	console.log("Write correct hours in config.js between 0 and 23");
	return;
	};
	var time;
	var nextHour;
	var dayArr = [];
	for (var i=startHour; i<endHour; i++) {
		nextHour = startHour+1;

		if (startHour >= 0 && startHour <= 8) {
			time = "0" + startHour + ":00 - 0" + (nextHour) + ":00";
		} else if (startHour === 9) {
			time = "09:00 - 10:00";
		} else if (startHour >= 10 && startHour <= 23) {
			time = startHour + ":00 - " + (nextHour) + ":00";
		};

		dayHourRecords[time] = {title: "-"};

		startHour++;
	};

	return dayHourRecords;
};

module.exports = CreateHourlyDay;