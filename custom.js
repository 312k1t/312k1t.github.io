(function() {
	var customFieldElement = document.getElementById('custom-fields-content');
	customFieldElement.innerHTML = '';
	var iframe = document.createElement('iframe');
	iframe.frameBorder = 0;
	iframe.src = 'https://312k1t.github.io/index.html';	
	iframe.scrolling = "no";
	iframe.style = "overflow:hidden;width:100%;height:500px";
	customFieldElement.appendChild(iframe);
})();

