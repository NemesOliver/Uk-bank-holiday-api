// Display name and date of a bank holiday
(function () {
  const fetchName = () => {
    const api = "3ed390c11a1c301b784fbf0a4cb2859465e6f24e";
    //fetch
    fetch(
      `https://calendarific.com/api/v2/holidays?&api_key=${api}&country=GB&year=2021`
    )
      .then((res) => res.json())
      .then((data) => {
        const holidays = data.response.holidays;

        //only bank holidays array
        const bankHol = [];

        //Return each holiday
        holidays.forEach((holiday) => {
          const holidayType = holiday.type[0];

          //check for bank holidays
          if (holidayType === "National holiday") {
            bankHol.push(holiday);
          }
        });
        //for each bank holiday array
        bankHol.forEach((hol) => {
          const name = hol.name;
          const day = hol.date.datetime.day;
          const month = hol.date.datetime.month;
          const year = hol.date.datetime.year;

          const htmlHoliday = document.createElement("div");
          htmlHoliday.classList.add("holiday");
          htmlHoliday.innerHTML = `<p>${name}</p>
                                   <p>${day}.${month}.${year}</p>`;

          const container = document.querySelector(".container");
          container.appendChild(htmlHoliday);
        });
      });
  };
  fetchName();

  
})();
