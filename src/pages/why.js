import React from 'react';
import '../App.css';

class why extends React.Component{
	 
	render(){
						 
		return(
			<div style={styles.overall}>
			<h2 style={styles.title}>Why do you need a website?</h2>
			<p>If you are here, you are already thinking of the future of your business or personal presence online. That's a perfect start! There are two solid methods of maintaining your online presence, a dedicated website, or social media.</p>
			<h3 style={styles.subTitle}>Social Media, the place to connect</h3>
			<p>Whether it be FaceBook or Twitter, social media is a common launching point for small businesses. Nearly every company, large or small, has some kind of social media presence. It's the perfect place to stay in touch with your clients and customers, let them know of specials and events you're participating in, and helps keep that personal touch customers love. Its largest downfall, however, is that social media is not the place most potential clients and customers will be looking for goods and services. Using only social media, a company CAN grow, but it may be slow and relies on your current customer base sharing their experiences and your posts.</p>
			<h3 style={styles.subTitle}>A Website, the place to grow</h3>
			<p>When you're looking for a plumber because your pipes suddenly burst during a winter storm, where do you go? Google, of course. Or Bing, or whatever your preferred search engine is. And this is where a properly created website shines. They allow you to show up in a potential clients search, and draw them in with a professionally presented showcase of what you can do for them. Their weakness against social media is that sites do not feel personal, and can make it difficult for a current client to feel continuously connected to your business.</p>
			<p>Most frequently, businesses will use a combination of social media and a dedicated site to keep in touch and draw in clients. Hopefully after reading this, you have a better idea of what path is right for your needs. If that path leads you to a website, please feel free to contact me so we can discuss how we can work together to formulate your online presence!</p>
			</div>

		)
	}
}
export default why;

const styles ={
		overall:{
		textAlign: 'center',
	},
	img:{
		maxWidth: '75px',
		maxHeight: '75px',
	},
		proImg:{
		maxWidth: '100px',
		maxHeight: '100px',
		borderRadius: '50%',
		border: 'solid thick rgb(28, 0, 0)'
	},
	title:{
		textAlign: 'center',
		color: 'rgb(204,153,204)',
		fontFamily: 'Charm',
		paddingTop: '25px',
		fontSize: '300%',
	},
		subTitle:{
		textAlign: 'center',
		color: 'rgb(255,102,102)',
		fontFamily: 'Courgette',
		paddingTop: '25px',
	}
}