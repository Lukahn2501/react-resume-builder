import React, {Component} from 'react';
import Administrative from './Administrative';

class Resume extends Component{
    render(){
        return(
            <div>
                <Administrative data = {this.props.resume.Administrative}/>    
            </div>
        )
    }
}

export default Resume;