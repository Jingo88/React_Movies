import React from 'react';
import { Link } from 'react-router'

var styles = {
	navBar: {
		backgroundColor: "#F4F4F8",
	},
	fontColor: {
		color: "#009FB7",
	},
	logo: {
		color: "#009FB7",
		fontWeight: "1.5em",
		fontSize: "1.5em"
	}
}

const Main = React.createClass({
	render(){
		return (
			<div>
				<nav>
				  <div 
				  	className="nav-wrapper"
				  	style = {styles.navBar}>
				  	<Link 
				  		to='/'
				  		style={styles.logo}> 
				  		Movie Lister
				  	</Link>
				    
				    <ul 
				    	id="nav-mobile" 
				    	className="right hide-on-med-and-down">

				      <li><a href="/" style={styles.fontColor}>Back To Search</a></li>
				    </ul>
				  </div>
				</nav>
	        
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})

export default Main;