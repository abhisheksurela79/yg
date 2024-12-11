class CustomCalendar {
  constructor(calendarElement, calendarButtonInput) {
    this.calendar = calendarElement;
    this.calendarButtonInput = calendarButtonInput;

    this.init();
  }

  init() {
    this.calendarButtonInput.addEventListener("click", this.renderCalendar.bind(this));
    this.renderCalendar();
  }

  renderCalendar() {
    console.log("clicked calendar");
  }
}


window.onload = () => {
  const calenderWrapppers = document.querySelectorAll(".custom-calendar-wrapper");
  calenderWrapppers.forEach((wrapper) => {
    const calenderInputButton = wrapper.querySelector(".calender-input-button");
    const customCalendar = wrapper.querySelector(".custom-calender");

    const calendar = new CustomCalendar(customCalendar, calenderInputButton);

    if (customCalendar.classList.contains("single-date-selector")) {
    }
  })
};