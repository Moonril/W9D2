import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class SingleComment extends Component {
    render () {
        return(
            <ListGroup.Item>{com.comment}, {com.rate}/5</ListGroup.Item>
        )
    }
}

export default SingleComment