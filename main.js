window.addEventListener('DOMContentLoaded', () => {
    const monthYear = document.getElementById('month-year');
    const calendarGrid = document.getElementById('calendar-grid');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let date = new Date();

    function renderCalendar() {
        const year = date.getFullYear();
        const month = date.getMonth();

        const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        monthYear.textContent = `${monthNames[month]} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        calendarGrid.innerHTML = '';

        for (let i = 0; i < firstDay; i++) {
            const empty = document.createElement('div');
            calendarGrid.appendChild(empty);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayEl = document.createElement('div');
            dayEl.textContent = day;

            const today = new Date();
            if (
                day === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear()
            ) {
                dayEl.classList.add('today');
            }

            calendarGrid.appendChild(dayEl);
        }
    }

    prevBtn.addEventListener('click', () => {
        date.setMonth(date.getMonth() - 1);
        renderCalendar();
    });

    nextBtn.addEventListener('click', () => {
        date.setMonth(date.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
});
