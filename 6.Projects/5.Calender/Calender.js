    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const monthSelect = document.getElementById("month-select");
    const yearSelect = document.getElementById("year-select");
    const calendarDates = document.getElementById("calendar-dates");
    const display = document.getElementById("month-year-display");

    // Populate month dropdown
    monthNames.forEach((month, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = month;
      monthSelect.appendChild(option);
    });

    // Populate year dropdown (from 1900 to 2100)
    for (let y = 1900; y <= 2100; y++) {
      const option = document.createElement("option");
      option.value = y;
      option.textContent = y;
      yearSelect.appendChild(option);
    }

    function generateCalendar(year, month) {
      calendarDates.innerHTML = ""; // Clear old dates

      // Update header display
      display.textContent = `${monthNames[month]} ${year}`;

      const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday
      const totalDays = new Date(year, month + 1, 0).getDate();

      // Get today's date
      const today = new Date();
      const isThisMonth = today.getFullYear() === year && today.getMonth() === month;
      const todayDate = today.getDate();

      // Empty divs for spacing
      for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement("div");
        calendarDates.appendChild(emptyDiv);
      }

      // Fill actual dates
      for (let day = 1; day <= totalDays; day++) {
        const dateDiv = document.createElement("div");
        dateDiv.textContent = day;

        if (isThisMonth && day === todayDate) {
          dateDiv.classList.add("today");
        }

        calendarDates.appendChild(dateDiv);
      }
    }

    // Set current month/year as default
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    monthSelect.value = currentMonth;
    yearSelect.value = currentYear;

    generateCalendar(currentYear, currentMonth);

    // Listen for dropdown changes
    monthSelect.addEventListener("change", () => {
      generateCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
    });

    yearSelect.addEventListener("change", () => {
      generateCalendar(parseInt(yearSelect.value), parseInt(monthSelect.value));
    });
