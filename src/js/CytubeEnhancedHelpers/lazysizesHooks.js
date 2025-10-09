document.addEventListener('lazybeforeunveil', (e) => {
	const el = e.target;

	const link = el.getAttribute('data-link');
	if (link && !document.querySelector(`link[rel="stylesheet"][href="${link}"]`)) {
		const l = document.createElement('link');
		l.rel = 'stylesheet';
		l.href = link;
		document.head.appendChild(l);
	}

	const script = el.getAttribute('data-script');
	if (script && !document.querySelector(`script[src="${script}"]`)) {
		const s = document.createElement('script');
		s.src = script;
		document.body.appendChild(s);
	}
});