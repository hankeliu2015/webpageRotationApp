
var pages = [
  'https://weather.com/',
  'https://nytimes.com',
  'https://wsj.com',
  'https://nypost.com',
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
  setPage(p);
}

// function loadIframe() {
//   var page = pages[(p = ++p % pages.length)];
//   var bust = 'bustcache=' + new Date().getTime();
//
//   page = page.search ? page.href + '&' + bust : page.href + '?' + bust;
//
//   document.getElementById('if_one').src = page;
//
//   setTimeout(loadIframe, 10000);
// }

// debugger

function loadIframe() {
  var page = pages[(p = ++p % pages.length)];
  var bust = 'bustcache=' + new Date().getTime();
  var newDate = new Date().getTime();

  // page = page.search ? page.href + '&' + bust : page.href + '?' + bust;
  // page = page.href + '?' + bust;
  page = page.href + "&output=embed";
  // window.location.replace(page);

  document.getElementById('if_one').src = page;
  // document.getElementById('if_one').target = "_parent";
  document.getElementById('if_one').name = newDate;

  setTimeout(loadIframe, 5000);  // recusive
}



loadIframe();
