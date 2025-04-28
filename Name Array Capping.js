function capMe(names) {
	return names.map(name => {
		if (name.length === 0) return name;
		return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
	});
}