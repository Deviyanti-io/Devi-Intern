
        const customSelects = document.querySelectorAll('.custom-select-box');
        const backdrop = document.getElementById('searchBackdrop');

        customSelects.forEach(selectBox => {
            const header = selectBox.querySelector('.select-header');
            const listItems = selectBox.querySelectorAll('.dropdown-list li');
            const valDisplay = selectBox.querySelector('.selected-val');

            header.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = selectBox.classList.contains('active');

                closeAllBoxes();

                if (!isOpen) {
                    selectBox.classList.add('active');
                    if (backdrop) backdrop.classList.add('active');
                }
            });

            listItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (valDisplay) {
                        valDisplay.textContent = item.getAttribute('data-value') || item.textContent.trim();
                        valDisplay.style.color = '#000000';
                    }
                    closeAllBoxes();
                });
            });
        });

        if (backdrop) {
            backdrop.addEventListener('click', closeAllBoxes);
        }

        document.addEventListener('click', () => {
            closeAllBoxes();
        });

        function closeAllBoxes() {
            customSelects.forEach(b => b.classList.remove('active'));
            if (backdrop) backdrop.classList.remove('active');
        }

    //    Kalender

        let currentDate = new Date(2026, 8, 16); // 8 = September
        let selectedDay = 16;
        let selectedMonth = 8;
        let selectedYear = 2026;

        const monthNames = [
            "Januari", "Februari", "Maret", "April", "Mei", "Juni",
            "Juli", "Agustus", "September", "Oktober", "November", "Desember"
        ];

        const calMonthYear = document.getElementById('calMonthYear');
        const calDatesGrid = document.getElementById('calDatesGrid');
        const prevMonthBtn = document.getElementById('prevMonth');
        const nextMonthBtn = document.getElementById('nextMonth');
        const inputDate = document.getElementById('inputDate');
        const btnPilihTgl = document.getElementById('btnPilihTgl');

        function renderCalendar() {
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();

            calMonthYear.textContent = `${monthNames[month]} ${year}`;
            calDatesGrid.innerHTML = '';

            const firstDayIndex = new Date(year, month, 1).getDay();
            const totalDays = new Date(year, month + 1, 0).getDate();

            for (let i = 0; i < firstDayIndex; i++) {
                const emptyDiv = document.createElement('div');
                emptyDiv.classList.add('cal-cell', 'empty');
                calDatesGrid.appendChild(emptyDiv);
            }

            for (let day = 1; day <= totalDays; day++) {
                const dateDiv = document.createElement('div');
                dateDiv.classList.add('cal-cell');
                dateDiv.textContent = day;

                if (day === selectedDay && month === selectedMonth && year === selectedYear) {
                    dateDiv.classList.add('selected');
                }

                dateDiv.addEventListener('click', (e) => {
                    e.stopPropagation();
                    selectedDay = day;
                    selectedMonth = month;
                    selectedYear = year;
                    renderCalendar();
                });

                calDatesGrid.appendChild(dateDiv);
            }
        }

        prevMonthBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });

        nextMonthBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });

        if (btnPilihTgl) {
            btnPilihTgl.addEventListener('click', (e) => {
                e.stopPropagation();
                inputDate.value = `${selectedDay} ${monthNames[selectedMonth]} ${selectedYear}`;
                closeAllBoxes();
            });
        }

        // Jalankan kalender pertama kali saat halaman dibuka
        renderCalendar();
