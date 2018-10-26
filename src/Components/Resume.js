import React, {Component} from 'react';
import Administrative from './Administrative';

class Resume extends Component{
    render(){
        return(
            <div>
                <Administrative
                    first="Kevin"
                    last="Roy"
                    birthdate="07/10/1990"
                    age={28}
                    address="7 rue dr Jean Baptiste Morlot 21000 Dijon"
                    email="kevin.roy.ic@gmail.com"
                    phone="06 08 33 81 88"
                    driving='false'
                />    
            </div>
        )
    }
}

export default Resume;