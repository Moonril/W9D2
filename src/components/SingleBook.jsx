import { Container, Row, Col, Card, Button } from "react-bootstrap"
import libriFantasy from '../books/fantasy.json'
import { Component } from "react"

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

    render(){

        //const [selected, setSelected] = useState(false)


        return(
            <Container>
                <h1 className="text-light">All the Single Books</h1>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={8} xl={6
    
                    } >
                        <Card style={styles.card}>
                            <Card.Img variant="top" src={this.props.img} className="w-100" style={styles.cardImage} />
                            <Card.Body style={styles.cardBody} className="d-flex flex-column align-items-center">
                                <Card.Title className="flex-grow-1">{this.props.title}</Card.Title>
                                <Card.Text>{this.props.category}</Card.Text>
                                <Card.Text>{this.props.price}€</Card.Text>
                                <Button variant="dark" className="w-25" onClick={() => {this.setState({selected: false})}}>Buy me</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )

    }
}

export default SingleBook