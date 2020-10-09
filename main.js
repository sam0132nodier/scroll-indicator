window.addEventListener('scroll', () => {
	let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	let scrollHeight = document.documentElement.scrollHeight;
	let browserHeight = document.documentElement.clientHeight;
	let height = scrollHeight - browserHeight;
	let scrolled = (windowScroll / height) * 100;
	document.getElementById("bar").style.width = `${scrolled}%`;
});