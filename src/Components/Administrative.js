import React, {Component} from 'react';

class Administrative extends Component{

    DrivingLicence(){
        if(this.props.data.driving === 'true'){
            return(
                "Driving licence: Yes"
            )
        }else{
            return(
                "Driving licence: No"
            )
        }
    }

    render(){
        return(
            <div>
                <h1>{this.props.data.first} {this.props.data.last}</h1>
                <p>{this.props.data.birthdate}</p>
                <p>{this.props.data.age}yo.</p>  
                <p>{this.DrivingLicence()}</p>
                <p>{this.props.data.address}</p>
                <p>{this.props.data.email}</p>
                <p>{this.props.data.phone}</p>
            </div>
        )
    }
}

export default Administrative;

