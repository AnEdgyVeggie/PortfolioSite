import React from 'react';
import './AboutMe.css'
import profile from './profile.jpg';
import Smartbrain from './smartbrain.png';
import Robofriends from './robofriends.png';
import BoxShooter from './BoxShooter.png';
import BounceAdventure from './bounceadventure.png';

const AboutMe = ({ firstName, lastName }) => {
	return (
		<div className='about-back'>
			<p className='info'>Partly self-taught
			with courses and certificates to back it up, {firstName} has an education focused lifestyle that
			is centered around learning as much as he can, to be the best that he can. With experience in front and back end web development including building
			single page applications, account services like login and
			database registration, {firstName} has experience working with react, using node,
			and building bug-free apps for a great user experience. <br/>Whether it's
			bootstrap, CSS, or NPM imports such as Tachyons, {firstName} will do a great job designing for your company. </p>
			<img alt='profile' className='profileimage' src={profile} />
			<p className='about-sub'>Dedicated, hard-working and focused. That's what you're going to get
			when you hire {firstName} {lastName}!</p>
			<div className='webdev-section'>
				<p className='info second-info'>{firstName}'s web development projects include working with HTML, Javascript,
				CSS, bootstrap, React, node, SQL, and other foundational and evolving areas. You can view
				some of {firstName}'s web projects below, including projects that utilize APIs and active DOM manipulation</p>
				<div className='project'>
					<a className='textlink' href='https://smart-brain-edgyveggie.herokuapp.com/'>Smartbrain</a>
					<p className='description'>A single page React application using the Clarifai API for face detection - complete with registration,
					 sign-in, and record keeping</p>
					<a href='https://smart-brain-edgyveggie.herokuapp.com/'>
					<img alt='smartbrain' className='projectimg' src={Smartbrain} /></a>
					<a className='githublink' href='https://github.com/AnEdgyVeggie/Smartbrain'><p>View on Github</p></a>
				</div>
				<div className='project'>
					<a className='textlink' href='https://anedgyveggie.github.io/RoboFriendsReactProject/'>Robofriends</a>
					<p className='description'>A single page React application which uses React for DOM manipulation. Search through a list of 
					friends and update the DOM to display friends who correspond with the search results</p>
					<a href='https://anedgyveggie.github.io/RoboFriendsReactProject/'>
					<img alt='robofriends' className='projectimg' src={Robofriends} /></a>
					<a className='githublink' href='https://github.com/AnEdgyVeggie/RoboFriendsReactProject'><p>View on Github</p></a>
				</div>
			</div>
			<div className='divider'>
					<p className='about-sub'>{firstName} is determined, dependable, and other 'd' words that mean good things, too!</p>
				<div className='unity-section'>
					<p className='info second-info'>{firstName}'s Object Oriented programming background primarily includes Javascript, C# and C++
					with a focus on game development. {firstName} has experience using Unreal Engine 4 but more regularly uses Unity. {firstName} has
					a course certificate for both C++ and C# fundamentals and certificates for programming on the Unity engine, but his interest didn't
					stop there. He has designed games in the style of top-down shooters, platformers, and games for his young kids to learn basic computer skills</p>
					<div className='project'>
						<a className='textlink' href='https://www.youtube.com/watch?v=xJTfGKKMmYM&t=91s'>BoxShooter</a>
						<p className='description'>A top-down horde survival shooter. Survive zombie waves, buy new guns, and see how long you can last in this polygon world.
						BoxShooter was designed using the Unity engine and has been produced entirely by one person</p>
						<a href='https://www.youtube.com/watch?v=xJTfGKKMmYM&t=91s'>
						<img alt='BoxShooter' className='projectimg' src={BoxShooter} /></a>
						<a className='githublink' href='https://github.com/AnEdgyVeggie/BoxShooter'><p>View on Github</p></a>
					</div>
					<div className='project'>
						<a className='textlink' href='https://youtu.be/GyfM_i6fDqA'>BounceAdventure</a>
						<p className='description'>A simple platformer where you play a bouncy little adventurer. Time those jumps correctly, or fall to your doom!</p>
						<a href='https://youtu.be/GyfM_i6fDqA'>
						<img alt='bounceadventure' className='projectimg' src={BounceAdventure} /></a>
						<a className='githublink' href='https://github.com/AnEdgyVeggie/BounceAdventure'><p>View on Github</p></a>
					</div>
				</div>
			</div>		
		</div>
	)
}

export default AboutMe;