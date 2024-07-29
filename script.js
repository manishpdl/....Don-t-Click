function updateDateTime() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getDay()];
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('datetime').textContent = `${day}, ${date}, ${time}`;
}

setInterval(updateDateTime, 1000); // Update every second
updateDateTime(); // Initial call to display date and time immediately
