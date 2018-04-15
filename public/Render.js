'use strict'

function renderLog(log) {
	let dateTime = formatDateTime(log.publishDate);
	return `<tr class="logEntry" tabindex="0">
				<td>${log.title}</td>
				<td>${log.tag}</td>
				<td>${log.type}</td>
				<td>${dateTime}</td>
				<td class="logId" hidden>${log.id}</td>
			</tr>`

	// Non-tabular display:
	//
	// return `<div class="logEntry" tabindex="0">
	// 			<span>Title:</span>	
	// 			<p>${log.title}</p><br>
	// 			<span>Tag:</span>
	// 			<p>${log.tag}</p><br>
	// 			<span>Type:</span>
	// 			<p>${log.type}</p><br>
	// 			<span>Saved:</span>
	// 			<p>${dateTime}</p>
	// 			<p class="logId" hidden>${log.id}</p>
	// 		</div>`;
}

function renderLogs(logs) {
	return logs.map(function(log) {
		return renderLog(log);
	});
}

function renderViewLog(log) {
	let dateTime = formatDateTime(log.publishDate);
	return `<div class="viewLog">
				<span>Title:</span>	
				<p>${log.title}</p>
				<span>Content:</span>
				<p>${log.content}</p>
				<span>Tag:</span>
				<p>${log.tag}</p>
				<span>Type:</span>
				<p>${log.type}</p>
				<span>Last Saved:</span>
				<p>${dateTime}</p>
				<p class="logId" hidden>${log.id}</p>
			</div>`;
}

function formatDateTime(publishDate) {
	// const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
	let d = new Date(publishDate);
	let hour = d.getHours();
	let minutes = d.getMinutes();
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	let year = d.getFullYear();
	let month = d.getMonth() + 1;
	let dateOfMonth = d.getDate();
	// let dayOfWeekIndex = d.getDay();
	// let dayOfWeek = daysOfWeek[dayOfWeekIndex];
	const dateTime = `${month}/${dateOfMonth}/${year} - ${hour}:${minutes}`;
	return dateTime;
}

