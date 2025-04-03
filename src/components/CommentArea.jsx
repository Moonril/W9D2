import { Component } from "react";
import Commentlist from "./CommentList";
import AddComment from "./AddComment";

const URL = 'https://striveschool-api.herokuapp.com/api/comments/'
const APIKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2VlN2QzNTFkNDM2ZTAwMTVkYTI3MTkiLCJpYXQiOjE3NDM2ODI4NjksImV4cCI6MTc0NDg5MjQ2OX0.antMXaShZo-QOGkmltLTzqOhABGF7TFwjaHPULTikjI"

class CommentArea extends Component {
    
    // array di comments vuoto
    state = {
        comments: []
    }

    // fetch

    // URL + book.asin?

    getArrayOfComments = () => {
        fetch(URL + this.props.asin, {
            headers: {
                "Authorization": APIKey
            }
        })
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error('response not ok')
            }
        })
        .then((data) =>{
            //array dei commenti del libro selezionato
            console.log('array di commenti', data)
            this.setState({
                comments: data
            })

        })
        .catch(err => {
            console.log('errore', err)
        })
    }

    componentDidMount = () => {

        this.getArrayOfComments()
    }
    
    
    render(){
        return(
            <div>

                <Commentlist arrayOfComments={this.state.comments} />

                {/* <AddComment /> */}
            {/* aggiungere qui commentlist e addcomment */}
            </div>
        )
    }

}
export default CommentArea


// comment area fa la fetch dei commenti, fatto
// comment area ha due sotto componenti:
// comment list che mostrerà la lista di commenti, array di recensioni verrà passato da comment area come prop e:
// add comment che permette di aggiungere un comment, contiene un form che fa una richiesta post

// url + keylibroselezionato?

// commentarea: array di TUTTI i commenti (come fare una fetch del libro selezionato? dovrebbe prendere SOLO quelli del libro selezionato) ->
// commentlist: mostra le recensioni in un elenco, l'array lo riceve come props da comment area ->
// singlecomment mostra il singolo commento nella lista.
