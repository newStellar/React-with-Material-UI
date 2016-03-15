import React from "react"
import ReactDOM from "react-dom"
import ActionGrade from 'material-ui/lib/svg-icons/action/grade';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left">
    <MoreVertIcon  />
  </IconButton>
);

const rightIconMenu = (

  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Details</MenuItem>
    <MenuItem>Update</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);


const styles = {

	paddingLeft: "15px",
	marginLeft : "10px",
	marginTop : "15px",
	borderLeft : "1px solid #00BCD4"
}

export default class ImportantAct extends React.Component {

	render() {
		return (
			
			<div style = {styles}>
				<List subheader=" Important Activities">
					<ListItem
						rightIconButton={rightIconMenu}
						primaryText="Brendan Lim"
						leftIcon={<ActionGrade color = "#E91E63" />}
					/>
					<ListItem
						primaryText="Eric Hoffman"
						leftIcon={<ActionGrade color = "#E91E63" />}
					/>
					<ListItem
						primaryText="Grace Ng"
						leftIcon={<ActionGrade color = "#E91E63" />}
					/>
					
				</List>
			</div>
		);
	}
}