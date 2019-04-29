(function() {
	var customFieldElement = document.getElementById('custom-fields-content');
	customFieldElement.innerHTML = '';
	var iframe = document.createElement('iframe');
	iframe.frameBorder = 0;
	iframe.src = 'https://www.google.com/';	
	customFieldElement.appendChild(iframe);
})();

