import React from "react"
import ReactDOM from "react-dom"
import ActionDoneAll from 'material-ui/lib/svg-icons/action/done-all';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';


const styles = {

	paddingLeft: "15px",
	marginLeft : "10px",
	marginTop : "15px",
	borderLeft : "1px solid #00BCD4"
}

export default class LastAct extends React.Component {

	render() {
		return (
			
			<div style = {styles}>
				<List subheader=" Last Activities">
					<ListItem
						primaryText="Brendan Lim"
						leftIcon={<ActionDoneAll  color = "#26A69A" />}
					/>
					<ListItem
						primaryText="Eric Hoffman"
						leftIcon={<ActionDoneAll color = "#26A69A" />}
					/>
					<ListItem
						primaryText="Grace Ng"
						leftIcon={<ActionDoneAll color = "#26A69A" />}
					/>
					
				</List>
			</div>
		);
	}
}