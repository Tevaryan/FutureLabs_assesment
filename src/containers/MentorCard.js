import React, { Component } from 'react';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
  
import '../App.css';


class MentorCard extends Component {

  render() 
  {
    return (
        <div className="m-2">
        <Card>
            <CardBody>
            <CardImg top width="100%" src={this.props.photo} alt="Card image cap" />
            <CardTitle className="mt-2"><h5>{this.props.name}</h5></CardTitle>
            <CardSubtitle>{this.props.jobtitle}</CardSubtitle>
            <div class="d-flex flex-row mt-2" style={{ overflow:'auto', borderRadius:'5px'}}>
                {
                    this.props.expertise.map(expertise => 
                        <div className="mr-2 p-2 border" >{expertise}</div>)
                }
            </div>
            
            <div className="text-right">
                <Button className="mt-2">Connect</Button>
            </div>
            </CardBody>
        </Card>
     </div>
    )
  }
}

export default MentorCard;
