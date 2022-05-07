import React from 'react';
import './Header.css';

const Header = ({ name }) => {
	return(
		<div class='head'>
			<h1>{name}</h1>
			<h2>You know, that developer that you were looking for.</h2>
		</div>
		)
}

export default Header;