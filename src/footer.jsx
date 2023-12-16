function Footer(){
	const currentDate = new Date();
	let year = currentDate.getFullYear();
	const content = <footer>
		<p>
			Copyright &#169; {year}
		</p>
	</footer>;

	return content;
}

export default Footer;