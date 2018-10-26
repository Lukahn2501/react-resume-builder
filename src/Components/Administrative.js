import React, {Component} from 'react';

class Administrative extends Component{

    DrivingLicence(){
        if(this.props.driving === 'true'){
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
                <h1>{this.props.first} {this.props.last}</h1>
                <p>{this.props.birthdate}</p>
                <p>{this.props.age}yo.</p>  
                <p>{this.DrivingLicence()}</p>
                <p>{this.props.address}</p>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
            </div>
        )
    }
}

export default Administrative;

