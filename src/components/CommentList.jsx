import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";



class Commentlist extends Component {


    render(){
        return(
            <ListGroup>

                {
                    this.props.arrayOfComments.map((com) => (
                        <div key={com._id}>
                            <ListGroup.Item>{com.comment}, {com.rate}/5</ListGroup.Item>
                        </div>

                    ))
                }
            </ListGroup>
        )
    }
}

export default Commentlist


// comment list che mostrerà la lista di commenti, array di recensioni verrà passato da comment area come prop
//