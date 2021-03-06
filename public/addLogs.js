'use strict';

// const editor = new Quill('#add-content');

function createLogEntry(title, content, tag, type) {
	const params = {
		title: title,
		content: content,
		tag: tag,
		type: type
	}
	Data.postLog(params, handlePostCallback);
}

function handlePostCallback(err, res) {
	if (err) {
		return console.log(err);
	} 
	alert('Log was successfully updated');
	window.history.back();
}

function bindHandlers() {
	$('.log-form').submit(function(event) {
		event.preventDefault();
		let typeValue = $('.log-form li').find('input:checked').val();
		if (typeValue === undefined) {
			alert('Please make a selection for Log Content Type');
		} else {
			let titleTarget = $(this).find('#add-title');
			let titleValue = titleTarget.val();
			let contentTarget = $(this).find('#add-content');
			let contentValue = contentTarget.val();
			let tagTarget = $(this).find('#add-tag');
			let tagValue = tagTarget.val();
			createLogEntry(titleValue, contentValue, tagValue, typeValue);	
			// Make inputs uneditable upon submit
			$('.log-form input, .log-form textarea').prop('readonly', true);
			$('.log-form input:radio').prop('disabled', true)
			$('#add-title, #add-content, #add-tag, .log-form ul').css('background-color', '#E3E2DD');
		}
	});
	$('button').focus(function() {
		$(this).css('background-color', '#FF6F59');
	});
	$('button').blur(function() {
		$(this).css('background-color', '#FFFCF2');
	});
	$('button').keypress((event) => {
		if (event.which === 13) {
			if ($(event.target).prop('id') === 'abort-btn') {
				let answer = confirm('Any unsaved log data will be lost. Do you wish to continue?');
				if (answer) {
					window.location.href = '/view-logs';
				}
			}
		}
	});
	$('#abort-btn').click(() => {
		let answer = confirm('Any unsaved log data will be lost. Do you wish to continue?');
		if (answer) {
			window.location.href = '/view-logs';
		}
	});
}

function initAddLogs() {
	bindHandlers();
}

$(initAddLogs);
