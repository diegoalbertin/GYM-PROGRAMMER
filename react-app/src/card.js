import {React} from "react";
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function GenerateCard(props){
    return(
        <div className='card-container col-sm-10 col-md-10 col-lg-10 offset-sm-1 offset-md-1 offset-lg-1' >
            <Card border="dark" className='card'>
                <Card.Img variant="top" src={props.src} alt='problem' />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.Text}
                        </Card.Text>
                    <Button variant="primary">Show more</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default GenerateCard;