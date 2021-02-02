const getHolidays = () => {
  //fetch
  fetch(
    `https://calendarific.com/api/v2/holidays?&api_key=${API_KEY}&country=GB&year=2021`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.response.holidays);
      const holidays = data.response.holidays;
      holidays.forEach((holiday) => {
        const day = holiday.date.datetime.day;
        const month = holiday.date.datetime.month;
        const year = holiday.date.datetime.year;
        // console.log(holiday.name);
        const eachName = holiday.name;

        const holName = document.createElement("h1");
        holName.innerHTML = `Holiday: ${eachName}`;
        holName.classList.add("red");
        document.body.appendChild(holName);

        const newDate = document.createElement("h1");
        newDate.innerHTML = `Date: ${day}.${month}.${year}`;
        newDate.classList.add("blue");
        document.body.appendChild(newDate);
      });
    });
};
getHolidays();
