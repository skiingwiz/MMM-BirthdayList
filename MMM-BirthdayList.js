Module.register("MMM-BirthdayList", {

	// Default module config.
	defaults: {
		updateInterval: 6 * 60 * 60 * 1000,
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
		setTimeout(function () {
			this.updateDom();
		}, this.config.updateInterval);
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
});
