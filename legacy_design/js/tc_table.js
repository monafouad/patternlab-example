	$(document).ready(function() {
		$('.tc_table tr').click(function(event) {
			if (event.target.type !== 'checkbox') {
				$(':checkbox', this).trigger('click');
			}
		});

		$("input[type='checkbox']").change(function(e) {
			if ($(this).is(":checked")) {
				$(this).closest('tr').addClass("tc_active");
			} else {
				$(this).closest('tr').removeClass("tc_active");
			}
		});
	});
