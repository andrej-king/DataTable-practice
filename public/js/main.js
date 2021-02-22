$(document).ready(function () {
	$.ajax({
		url: "http://localhost:3000/api/specialists",
		type: "post",
		success: function (data) {
			$('#tableWithSpecialists').DataTable({
				data: data,
				columns: [
					{title: "Name"},
					{title: "Position"},
					{title: "Office"},
					{title: "Extn."},
					{title: "Start date"},
					{title: "Salary"}
				]
			});
		}
	});
});