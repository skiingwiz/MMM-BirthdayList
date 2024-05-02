Module.register("MMM-BirthdayList", {

	// Default module config.
	defaults: {
		tableClass: "small",
        birthdays: []
	},

	// Define required scripts.
	getScripts: function () {
		return [];
	},

	// Define required stylescripts.
	getStyles: function () {
		return ["MMM-BirthdayList.css"];
	},

	// Define start sequence.
	start: function () {
		Log.info("Starting module: " + this.name);
		this.label = "";
        this.setRefreshTimer()
	},

	// Override dom generator.
	getDom: function () {
		var today = new Date();
        var year = today.getYear() + 1900;
        var month = (today.getMonth() + 1)
        var day = today.getDate()
		var wrapper = document.createElement("div");

		var table = document.createElement("table");
		table.className = this.config.tableClass;

        for(item in this.config.birthdays) {
          var bday = this.config.birthdays[item]
          if(month == bday.month && day == bday.day) {
            var age = year - bday.year;
            var ext;
            if(age >= 11 && age <= 13) {
              ext = 'th';
            } else if(age % 10 == 1) {
              ext = 'st';
            } else if(age % 10 == 2) {
              ext = 'nd';
            } else if(age % 10 == 3) {
              ext = 'rd';
            } else {
              ext = 'th';
            }

	        var labelRow = document.createElement("tr");
	        table.appendChild(labelRow);

		    var labelItem = document.createElement("td");
            var balloons = '<img src="modules/MMM-BirthdayList/balloons.png" class="bday-image" />'
		    labelItem.innerHTML = `${balloons}Happy ${age}${ext} Birthday ${bday.name}!!${balloons}`
		    labelRow.appendChild(labelItem);
          }
        }

		return table;
	},

    setRefreshTimer: function () {
        var now = new Date();
        var time = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        var ms = time - now;
		setInterval(function () {
			this.updateDom();
            this.setRefreshTimer();
		}, ms);
    }
});
