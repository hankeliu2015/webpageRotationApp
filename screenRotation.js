
var pages = [
  'https://weather.com/',
  'https://wsj.com',
  'https://twitter.com/home',
  'https://www.linkedin.com/'
]

var p = pages.length;

// while(--p > -1){
// 	(function(p){
// 		var a = document.createElement('a');
// 		a.href = pages[p];
// 		pages[p] = a;
// 	})(p);
// }

while(--p > -1){
	function setPage(p){
		var a = document.createElement('a');   //create a hyerlink element
		a.href = pages[p];  // assing url attribute to hyperlink element.
		pages[p] = a;     // set  an element of the page as the hyperlink element
	}

  setPage(p);     // invoke the function. 

}

function loadIframe() {
  var page = pages[(p = ++p % pages.length)];
  var bust = 'bustcache=' + new Date().getTime();

  page = page.search ? page.href + '&' + bust : page.href + '?' + bust;

  document.getElementById('if_one').src = page;

  setTimeout(loadIframe, 10000);
}

loadIframe();
