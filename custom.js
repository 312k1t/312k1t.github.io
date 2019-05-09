// (function() {
	// var customFieldElement = document.getElementById('custom-fields-content');
	// customFieldElement.innerHTML = '';
	// var iframe = document.createElement('iframe');
	// iframe.frameBorder = 0;
	// iframe.src = 'https://312k1t.github.io/index.html';	
	// iframe.scrolling = "no";
	// iframe.style = "overflow:hidden;width:100%;height:500px";
	// customFieldElement.appendChild(iframe);
// })();


$(document).ready(function() {
	$('#custom-fields-content input').attr("readonly", "readonly");
	$('#customContent').prepend('<a href="https://312k1t.github.io/index.html" type="button" class="btn btn-default">Edit custom fields</a>');
});
