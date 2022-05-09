import React from 'react';
import './Footer.css';
import Unity from './unity.png';
import LinkedIn from './Linkedin.png'
import Reactlogo from './react.png';
import Github from './github.png';
import Twitter from './twitter.png';


const Footer = () => {
	return(
		<div className='foot'>
			<div className='footerlinks'>
			<a className='flink' href='https://reactjs.org/'>React</a>
			<a className='flink' href='https://unity.com/'>Unity</a>
			<a className='flink' href='https://github.com/AnEdgyVeggie'>Github</a>
				<a className='flink' href='https://twitter.com/AnEdgyVeggy'>Twitter</a>
				<a className='flink' href='https://linkedin.com/in/ethan-sylvester-112888217'>Linked In</a>
			</div>
			<div className='footerimages'>
				<a  href='https://reactjs.org/'><img alt='reactlogo' className='fimage' src={Reactlogo} /></a>
				<a  href='https://unity.com/'><img alt='unitylogo' className='fimage' src={Unity} /></a>
				<a  href='https://github.com/AnEdgyVeggie'><img alt='githublogo' className='fimage' src={Github} /></a>
				<a  href='https://twitter.com/AnEdgyVeggy'><img alt='twitterlogo' className='fimage' src={Twitter} /></a>
				<a  href='https://linkedin.com/in/ethan-sylvester-112888217'><img alt='linkedinlogo' className='fimage' src={LinkedIn} /></a>
			</div>
			<div className='footnote'>
				<h3>Designed with React, by Ethan Sylvester</h3>
			</div>
		</div>
		)
}

export default Footer;