function age_in_range(inputBirthday) {
	birthday = new Date(new String(formatDate(inputBirthday)).replace(/-/g, "/"));
	return (moment(birthday).isBetween(moment().subtract(12, 'y'), moment().subtract(3, 'y'), '[]')
	);
}