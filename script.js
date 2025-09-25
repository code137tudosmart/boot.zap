document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Get the target tab ID from the data-tab attribute
            const targetTabId = button.dataset.tab;

            // Add 'active' class to the corresponding content
            document.getElementById(targetTabId).classList.add('active');
        });
    });
});