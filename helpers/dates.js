const date = new Date();
const dateNow = date.toISOString().slice(0, 10);
date.setMonth(date.getMonth() + 1);
const nextMonth = date.toISOString().slice(0, 10);
const date2 = new Date();
date2.setFullYear(date2.getFullYear() - 1);
const aYearBefore = date2.toISOString().slice(0, 10);

module.exports = { dateNow, nextMonth, aYearBefore };
