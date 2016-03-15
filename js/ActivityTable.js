import React from "React"
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';




export default class ActivityTable extends React.Component {

	readableDate(dt){

		dt = new Date(dt);  /*  should be converted to  date object otherwise dates builtin function will not work  */
		var dd = dt.getDate();
        var mm = dt.getMonth()+1; //January is 0!

        var yyyy = dt.getFullYear();
        if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 
        var newDT = dd+'-'+mm+'-'+yyyy;

        console.log(newDT);
        return newDT;

	}
	render(){
		
		var listItem = this.props.activityList.filter(function(item,i){

			if( i!= 0 && i!=2){return item };
			
		});

		
		var listNodes =  listItem.map(function(ob,index){

			return(
				          /* it is mandatory to give an unique key */
				<TableRow key = {index}>
						<TableRowColumn>{ob.id}  </TableRowColumn>
						<TableRowColumn>{ob.name} </TableRowColumn>
						<TableRowColumn>{ this.readableDate(ob.date) } </TableRowColumn>
				</TableRow>
			);
		}.bind(this));

		return (
			<Table>
				<TableHeader>
					<TableRow>
					<TableHeaderColumn>ID</TableHeaderColumn>
					<TableHeaderColumn>Name</TableHeaderColumn>
					<TableHeaderColumn>Date</TableHeaderColumn>
					</TableRow>
				</TableHeader>
				<TableBody>
					{listNodes}
				</TableBody>
			</Table>
		);
	}
	
}

