import React, {Component} from 'react';
import {Button,Modal,Col,InputGroup,FormControl,Card} from 'react-bootstrap';


class FormModal extends Component{
    constructor(props){
        super(props);
        this.state = {show : false};
    }
    handleCloseAndSubmit = () =>{
        this.setState({show : false});
        let elem={
            name : document.getElementById('movieName').value,
            image : document.getElementById('movieLink').value ,
            rating : document.getElementById('movieRating').value,
            show : true
        }
        console.log(elem);
        this.props.add(elem);
    } 
    handleClose = () => this.setState({show : false});
    handleShow = () => this.setState({show : true});
    
    render(){
        return (
            <Col lg={3} md={4} sm={6} >
            <Card style={{height : "100%",minHeight : "200px"}} className="d-flex flex-column justify-content-center align-items-center">
                <Button variant="primary" onClick={this.handleShow}>
                    Add movie
                </Button>
            </Card>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Movie Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text style={{width : "100px"}} id="inputGroup-sizing-sm">Movie Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="movieName" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Name"/>
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text style={{width : "100px"}} id="inputGroup-sizing-sm">Img source</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="movieLink" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="https://example.com/image.jpg"/>
                    </InputGroup>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text style={{width : "100px"}} id="inputGroup-sizing-sm">Rating</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="movieRating" aria-label="Small" aria-describedby="inputGroup-sizing-sm" type="number" min="0" max="5"/>
                    </InputGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleCloseAndSubmit}>
                        Save movie
                    </Button>
                </Modal.Footer>
            </Modal>
            </Col>
        );

    }
    
}


export default FormModal
