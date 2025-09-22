// Chart.js revenue chart
const ctx = document.getElementById("revenueTrend");
if (ctx) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [{
        label: "Revenue ($)",
        data: [120, 200, 150, 300, 250],
        borderColor: "#ff66b2",
        backgroundColor: "rgba(255, 102, 178, 0.2)",
        fill: true
      }]
    }
  });
}

// Add Booking button
const addBookingBtn = document.getElementById("addBookingBtn");
if (addBookingBtn) {
  addBookingBtn.addEventListener("click", () => {
    alert("Redirecting to booking form...");
    window.location.href = "contacts.html"; // Or booking page
  });
}
