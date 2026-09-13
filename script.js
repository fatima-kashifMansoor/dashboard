$(document).ready(function () {

    let darkMode = false;

    $("#themeButton").click(function () {

        if (darkMode === false) {

            $("body").css({
                "background": "#1e293b",
                "color": "#ffffff"
            });

            $(".main-content").css("background", "#1e293b");
            $(".dashboard-card").css({
                "background": "#334155",
                "color": "#ffffff"
            });

            $(".chart-box").css({
                "background": "#334155",
                "color": "#ffffff"
            });

            $(".table-box").css({
                "background": "#334155",
                "color": "#ffffff"
            });

            $(".topbar p").css("color", "#cbd5e1");

            $("#themeButton").text("Light Theme");

            darkMode = true;

        } else {

            $("body").css({
                "background": "#f5f7fb",
                "color": "#1f2937"
            });

            $(".main-content").css("background", "#f5f7fb");

            $(".dashboard-card").css({
                "background": "white",
                "color": "#1f2937"
            });

            $(".chart-box").css({
                "background": "white",
                "color": "#1f2937"
            });

            $(".table-box").css({
                "background": "white",
                "color": "#1f2937"
            });

            $(".topbar p").css("color", "#64748b");

            $("#themeButton").text("Dark Theme");

            darkMode = false;
        }
    });


    $(".sidebar li").click(function () {

        $(".sidebar li").removeClass("active");

        $(this).addClass("active");

        let section = $(this).text();

        if (section === "Home") {
            $(".topbar h1").text("Welcome Back!");
            $(".topbar p").text("Here's what's happening with your business today.");
        }

        if (section === "Sales") {
            $(".topbar h1").text("Sales");
            $(".topbar p").text("View your sales performance and revenue.");
        }

        if (section === "Orders") {
            $(".topbar h1").text("Orders");
            $(".topbar p").text("View and manage your recent orders.");
        }

        if (section === "Customers") {
            $(".topbar h1").text("Customers");
            $(".topbar p").text("View your customer information.");
        }

        if (section === "Reports") {
            $(".topbar h1").text("Reports");
            $(".topbar p").text("View your business reports and statistics.");
        }
    });


    new Chart(document.getElementById("salesChart"), {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Sales",
                data: [1200, 1900, 1500, 2500, 2200, 3000],
                borderWidth: 3,
                tension: 0.4
            }]
        },
        options: {
            responsive: true
        }
    });


    new Chart(document.getElementById("categoryChart"), {
        type: "doughnut",
        data: {
            labels: ["Electronics", "Clothing", "Furniture", "Others"],
            datasets: [{
                data: [40, 25, 20, 15],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });


    new Chart(document.getElementById("revenueChart"), {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Revenue",
                data: [5000, 7000, 6000, 9000, 8500, 11000],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });


    new Chart(document.getElementById("ordersChart"), {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Orders",
                data: [120, 180, 150, 230, 210, 280],
                borderWidth: 3,
                tension: 0.4
            }]
        },
        options: {
            responsive: true
        }
    });

});
