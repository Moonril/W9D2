// comment list che mostrerà la lista di commenti, array di recensioni verrà passato da comment area come prop e:

import { Component } from "react";
import { ListGroup } from "react-bootstrap";



class Commentlist extends Component {


    render(){
        return(
            <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
        )
    }
}

export default Commentlist