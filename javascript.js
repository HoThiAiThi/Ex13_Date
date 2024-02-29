document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitButton");

    submitButton.addEventListener("click", function() {
        var dateInput = document.getElementById("dateInput").value.trim();
        var datePattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;

        if (datePattern.test(dateInput)) {
            var parts = dateInput.split("-");
            var day = parseInt(parts[0], 10);
            var month = parseInt(parts[1], 10);
            var year = parseInt(parts[2], 10);

            var maxDay = new Date(year, month, 0).getDate();

            if (day <= maxDay) {
                alert("OK");
            } else {
                alert("NOK");
            }
        } else {
            alert("NOK");
        }
    });
    
    clearButton.addEventListener("click", function() {       
        document.getElementById("dateInput").value = "";        
    });

});
