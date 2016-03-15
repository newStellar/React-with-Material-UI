import React from "react"
import ReactDOM from "react-dom"
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';


const styles = {

	paddingLeft: "15px",
	marginLeft : "10px",
	borderLeft : "1px solid #00BCD4"
}

export default class ComingAct extends React.Component {

	render() {
		return (
			
			<div style = {styles}>
				<List subheader=" Coming Activities"
					  >

					<ListItem
						primaryText="Brendan Lim"
						
					/>
					<ListItem
						primaryText="Eric Hoffman"
						
					/>
					<ListItem
						primaryText="Grace Ng"
						
					/>
					
				</List>
			</div>
		);
	}
}