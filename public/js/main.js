$(document).ready(function () {
	$.ajax({
		url: window.location.href + "api/specialists",
		type: "post",
		success: function (data) {
			$('#tableWithSpecialists').DataTable({
				data: data,
				columns: [
					{title: "Name"},
					{title: "Position"},
					{title: "Office"},
					{title: "Age"},
					{title: "Start date"},
					{title: "Salary"}
				]
			});
		}
	});
});