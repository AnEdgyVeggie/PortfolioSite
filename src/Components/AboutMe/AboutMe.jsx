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
			<p className='info'>{firstName} {lastName} is a software developer who is experienced in working with web development, 
			object oriented programming languages, as well as game development. His goal is to find employment where he 
			can grow and refine his skills, and eventually become a senior software engineer.<br /></p>
			<img alt='profile' className='profileimage' src={profile} />
			<p className='about-sub'>Dedicated, hard-working and focused. That's what you're going to get
			when you hire {firstName} {lastName}!</p>
			<div className='webdev-section'>
				<p className='info second-info'>His experience with web development includes: </p>
			 <div className='skills'>
			 	<div className='list'>
			 		<ul>
			 			<p>Javascript</p>
			 			<p>HTML</p>
			 			<p>CSS</p>
			 			<p>Building secure web applications</p>
						<p>JSON</p>
			 		</ul>
			 	</div>
			 	<div className='list'>
			 		<ul>
			 			<p>React with hooks</p>
						<p>Redux </p>
			 			<p>Express.Js</p>
			 			<p>AJAX</p>
			 			<p>Building and implementing API’s</p>
			 		</ul>
			 	</div>
			 	<div className='list'>
			 		<ul>
						<p>Webpack and parcel</p>
			 			<p>Node.Js and NPM</p>
			 			<p>SQL, Firebase and AWS</p>
			 			<p>PostgreSQL and MongoDB</p>
			 			<p>Deployment on Heroku, AWS and Firebase</p>
			 		</ul>
			 	</div>
			 </div>
			 	<p className='info second-info'>Below you will see projects hosted on Github, as well as Heroku, which include 
			 front and back end development. They are responsive, and scalable.</p>
				<div className='project'>
					<a className='textlink' href='https://smart-brain-edgyveggie.herokuapp.com/'>Smartbrain</a>
					<div className='project-info'>
						<p className='description'>A single page React application using the Clarifai API for face detection - complete with registration,
						sign-in, and database utilization</p>
						<a href='https://smart-brain-edgyveggie.herokuapp.com/'>
						<img alt='smartbrain' className='projectimg' src={Smartbrain} /></a>	
					</div>
					<a className='githublink' href='https://github.com/AnEdgyVeggie/Smartbrain'><p>View on Github</p></a>
				</div>
				<div className='project'>
					<a className='textlink' href='https://anedgyveggie.github.io/RobofriendsReactApp/'>Robofriends</a>
					<div className='project-info'>
						<p className='description'>A single page React application which uses React for DOM manipulation. Search through a list of 
						friends and update the DOM to display friends who correspond with the search results</p>
						<a href='https://anedgyveggie.github.io/RoboFriendsReactProject/'>
						<img alt='robofriends' className='projectimg' src={Robofriends} /></a>
					</div>
					<a className='githublink' href='https://github.com/AnEdgyVeggie/RoboFriendsReactProject'><p>View on Github</p></a>
				</div>
			</div>
			<div className='divider'>
					<p className='about-sub'>{firstName} is determined, dependable, and other 'd' words that mean good things, too!</p>
				<div className='unity-section'>
					<p className='info second-info'>{firstName}’s experience with game development is primarily focused around the Unity engine 
					and C#, but {firstName} has experience also with C++ and Unreal Engine 4. {firstName} has created a few games on his own, 
					which include a 2.5D side-scroller and top-down horde shooter, but has also built projects to teach his young children 
					basic computer skills. Game building is a passion for {firstName}, and learning is a lifestyle.</p>
					<div className='skills'>
				 	<div className='list'>
				 		<ul>
				 			<p>C#</p>
				 			<p>Unity Engine Libraries</p>
				 			<p>Utilizing AI for movement</p>
				 			<p>Using Charts to organize script flow</p>
				 		</ul>
				 	</div>
				 	<div className='list'>
				 		<ul>
				 			<p>Class inheritance</p>
				 			<p>Interfaces</p>
				 			<p>Effective use of preprocessors</p>
				 			<p>Creating UI</p>
				 		</ul>
				 	</div>
				 	<div className='list'>
				 		<ul>
				 			<p>Package Manager</p>
				 			<p>Cinemachine</p>
				 			<p>Unity Asset Store</p>
				 			<p>Post-Processing Effects</p>
				 		</ul>
				 	</div>
				 </div>
				 <p className='info second-info'>Below you will see projects available on Github, as well as links to demo videos
				 for each game. Both games were built on the Unity engine.</p>
					<div className='project'>
						<a className='textlink' href='https://www.youtube.com/watch?v=xJTfGKKMmYM&t=91s'>BoxShooter</a>
						<div className='project-info'>
							<p className='description'>A top-down horde survival shooter. Survive zombie waves, buy new guns, and see how long you can last in this polygon world.
							BoxShooter was designed using the Unity engine and has been produced entirely by one person</p>
							<a href='https://www.youtube.com/watch?v=xJTfGKKMmYM&t=91s'>
							<img alt='BoxShooter' className='projectimg' src={BoxShooter} /></a>
						</div>
						<a className='githublink' href='https://github.com/AnEdgyVeggie/BoxShooter'><p>View on Github</p></a>
					</div>
					<div className='project'>
					<a className='textlink' href='https://youtu.be/GyfM_i6fDqA'>BounceAdventure</a>
					<div className='project-info'>
						<p className='description'>A simple platformer where you play a bouncy little adventurer. Time those jumps correctly, or fall to your doom!</p>
						<a href='https://youtu.be/GyfM_i6fDqA'>
						<img alt='bounceadventure' className='projectimg' src={BounceAdventure} /></a>		
					</div>
					<a className='githublink' href='https://github.com/AnEdgyVeggie/BounceAdventure'><p>View on Github</p></a>
					</div>
				</div>
				<p className='contact-info'>Contact {firstName} today!<br/>Ethan.Sylvester@gmx.com<br/>226-886-1836<br />Brigden, Ontario</p>
			</div>		
		</div>
	)
}

export default AboutMe;