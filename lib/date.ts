export const convertDate = (date: Date) => {
	//Get the Timestamp
	const date1_time_stamp = new Date().getTime();
	const date2_time_stamp = date.getTime();

	//Check which timestamp is greater
	const calc =
		date1_time_stamp > date2_time_stamp
			? new Date(date1_time_stamp - date2_time_stamp)
			: new Date(date2_time_stamp - date1_time_stamp);

	//Retrieve the date, month and year
	const calcFormatted = {
		hours_passed: Math.abs(calc.getHours()),
		days_passed: Number(Math.abs(calc.getDate()) - 1),
		months_passed: Number(Math.abs(calc.getMonth() + 1) - 1),
		years_passed: Number(Math.abs(calc.getFullYear()) - 1970)
	};

	//Set up custom text
	const yearsText = ['ano', 'anos'];
	const monthsText = ['mes', 'meses'];
	const daysText = ['dia', 'dias'];
	const hoursText = ['hora', 'horas'];

	//Set up the result
	const result =
		calcFormatted.years_passed > 0
			? `há ${calcFormatted.years_passed} ${
					yearsText[calcFormatted.years_passed > 1 ? 1 : 0]
			  }`
			: calcFormatted.months_passed > 0
			? `há ${calcFormatted.months_passed} ${
					monthsText[calcFormatted.months_passed > 1 ? 1 : 0]
			  }`
			: calcFormatted.days_passed > 0
			? `há ${calcFormatted.days_passed} ${daysText[calcFormatted.days_passed > 1 ? 1 : 0]}`
			: calcFormatted.hours_passed > 0
			? `há ${calcFormatted.hours_passed} ${
					hoursText[calcFormatted.hours_passed > 1 ? 1 : 0]
			  }`
			: 'Agora';

	//Return the result
	return result;
};
