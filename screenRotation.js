
var pages = [
  'https://yahoo.com',
  'https://nypost.com',
  'https://twitter.com',
  'https://linkedin.com'
], p = pages.length;

while(--p > -1){
	(function(p){
		var a = document.createElement('a');
		a.href = pages[p];
		pages[p] = a;
	})(p);
}

function loadIframe() {
var page = pages[(p = ++p % pages.length)], bust = 'bustcache=' + new Date().getTime();
page = page.search? page.href + '&' + bust : page.href + '?' + bust;
document.getElementById('if_one').src = page;

setTimeout(loadIframe, 20000);
}

loadIframe();
