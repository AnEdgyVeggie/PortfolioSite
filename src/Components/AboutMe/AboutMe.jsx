import React from 'react';
import './AboutMe.css'
import profile from './profile.jpg';
import Smartbrain from './smartbrain.png';
import Robofriends from './robofriends.png';

const AboutMe = ({ firstName, lastName }) => {
	return (
		<div className='about-back'>
			<p className='info'>Experienced in front and back end web development, including building
			single page applications, account services like login, and
			database registration, {firstName} has experience working with react, using node,
			and building bug-free apps for a great user experience. Whether it's
			bootstrap, CSS, or npm imports such as Tachyons, {firstName} will do a great job. Partly self-taught
			with courses and certificates to back it up, {firstName} has an 'education as a lifestyle' that
			is centered around learning as much as he can, to be the best that he can.</p>
			<img className='profileimage' src={profile} />
			<p className='about-sub'>Dedicated, hard-working and focused. That's what you're going to get
			when you hire {firstName} {lastName}!</p>
			<div className='project-section'>
				<p className='info second-info'>{firstName}'s web development projects include working with HTML, Javascript,
				CSS, bootstrap, React, node, SQL, and other foundational and important aspects. You can view
				some of {firstName}'s web projects below, including projects that utilize APIs</p>
				<div className='project1'>
					<a className='textlink' href='https://anedgyveggie.github.io/Smartbrain/'>Smartbrain</a>
					<p className='description'>A single page React application using the Clarifai API for face detection - complete with registration,
					 sign-in, and record keeping</p>
					<a href='https://anedgyveggie.github.io/Smartbrain/'>
					<img className='projectimg' src={Smartbrain} /></a>
				</div>
				<div className='project2'>
					<a className='textlink' href='https://anedgyveggie.github.io/RoboFriendsReactProject/'>Robofriends</a>
					<p className='description'>A single page React application which uses React for DOM manipulation. Search through a list of 
					friends and update the DOM to display friends who correspond with the search results</p>
					<a href='https://anedgyveggie.github.io/RoboFriendsReactProject/'>
					<img className='projectimg' src={Robofriends} /></a>
				</div>
			</div>
		</div>
		)
}

export default AboutMe;