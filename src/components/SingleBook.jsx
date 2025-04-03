import { Container, Row, Col, Card, Button } from "react-bootstrap"
import libriFantasy from '../books/fantasy.json'
import { Component } from "react"
import CommentArea from "./CommentArea"

const styles = {
    card: {
        backgroundColor: '#4fbd8c',
        padding: '1rem'
    },
    cardImage: {
        objectFit: 'cover',
        width: '50vw',
        height: '90vh'
    },
    cardBody: {
        height: 250,
    }
    

}

class SingleBook extends Component {

    state = {
        selected: false,
    }


    render(){

        //const [selected, setSelected] = useState(false)


        return(
            <Col xs={12} md={12} lg={6} xl={4} >
                        <Card style={styles.card}>
                            <Card.Img variant="top" src={this.props.book.img} className="w-100" style={{
                                ...styles.cardImage,
                                border: this.state.selected ? '3px solid red' : 'none'
                            }} onClick={() => {
                                this.setState({
                                    selected: !this.state.selected,
                                })
                            }} />
                            <Card.Body style={styles.cardBody} className="d-flex flex-column align-items-center">
                                <Card.Title className="flex-grow-1">{this.props.book.title}</Card.Title>
                                <Card.Text>{this.props.book.category}</Card.Text>
                                <Card.Text>{this.props.book.price}€</Card.Text>
                                <Button variant="dark" className="w-25" onClick={() => {this.setState({selected: false})}}>Buy me</Button>
                            </Card.Body>
                            {this.state.selected && (
                                <CommentArea asin={this.props.book.asin} />
                            )}
                        </Card>
                </Col>
        )

    }
}

export default SingleBook

//qua in single book comment area deve andare qua, inserita alla fine con short circuit
//comment area componente a classe, che deve fare una fetch delle crecensioni, salvare l'array di recensioni del libro. comment area ha due componenti: comment list addcomment. comment area salva le recensioni e comment list le fa vedere. add comment ha un minuscolo form dentro perchè aggiunge un comment

// elementID = id del libro.
//  single book passa l'asin alla fetch e comment area passa a comment list che fa map dell'array e li mostra

