
        // Function to generate a dynamic calendar
        function generateCalendar() {
            const calendarBody = document.getElementById('calendar-body');
            calendarBody.innerHTML = ''; // Clear existing content

            const currentDate = new Date();
            const currentMonth = currentDate.getMonth();
            const firstDayOfMonth = new Date(currentDate.getFullYear(), currentMonth, 1).getDay();
            const daysInMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate();

            let dayCounter = 1;

            for (let i = 0; i < 6; i++) {
                const row = document.createElement('tr');

                for (let j = 0; j < 7; j++) {
                    const cell = document.createElement('td');

                    if (i === 0 && j < firstDayOfMonth) {
                        // Empty cells before the first day of the month
                        cell.textContent = '';
                    } else if (dayCounter <= daysInMonth) {
                        cell.textContent = dayCounter;

                        if (currentDate.getDate() === dayCounter && currentDate.getMonth() === currentMonth) {
                            // Highlight today's date
                            cell.classList.add('today');
                        }

                        dayCounter++;
                    }

                    row.appendChild(cell);
                }

                calendarBody.appendChild(row);
            }
        }

        // Call the function to generate the calendar
        generateCalendar();
 