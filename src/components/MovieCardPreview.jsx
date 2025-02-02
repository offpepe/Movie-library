import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Alert, Badge } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';


export default function MovieCard({ movie, setDispatch, submitNewMovie, alert }) {
  const [popOver, setPopOver] = useState()
  const [showAlert, setShowAlert] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const  { title, subtitle, genre, releaseDate, rate, description, cover, createdBy, createdAt } = movie;
  useEffect(() => {
    const setAlert = (response, code, message) => (
      <Alert variant="danger" onClose={ () => setShowAlert(false) } dismissible>
        <Alert.Heading as="h3">{ `${code} -> ${response}` }</Alert.Heading>
        <p>
          { message }
        </p>
      </Alert>
    );
    if(alert) {
        setShowAlert(true);
        if (alert.error) {
          setPopOver(setAlert(alert.error, alert.code, alert.message));
        } else if (alert.success) {
          setPopOver(setAlert(alert.success, alert.code, alert.message));
        }
      }
  }, [setPopOver, alert])
  const dispatchNewMovie = async () => {
    setPopOver('Loading...');
    await submitNewMovie();
  };

  const toggleInfo = () => {
    if (showInfo) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  }

  return (
      <Card style={ { width: '25rem' } } className="card-preview">
          <Card.Img
            variant="top"
            src={ window.URL.createObjectURL(cover) }
            className="card-preview-img"
            />
          <Card.Body>
              <Card.Title>{ title }</Card.Title>
              <Card.Subtitle>{ subtitle }</Card.Subtitle>
              <Card.Text>{ description }</Card.Text>
              <Card.Body className="card-preview-info">
                <h4>
                  <Badge pill bg="dark">{ genre }</Badge>
                </h4>
                <i className="fas fa-question-circle" onClick={ () => toggleInfo() } ></i>
              </Card.Body>
              <div style={ { fontSize: "30px"  } } >
              <StarRatingComponent value={ rate } starCount={ 5 } />  
              </div>
              { showInfo && <div className="card-preview-more-info">
                <p> { `Data de Lançamento: ${releaseDate} `} </p>
                <p> {`Filme adicionado por: ${ createdBy }`} </p>
                <p> {`Adicionado em: ${ createdAt }` } </p>
              </div> }
          </Card.Body>
          <Card.Body fluid="md" className="card-preview-footer">
            <Button variant='success' onClick={ () => dispatchNewMovie() } > Adicionar </Button>
            <Button variant='danger' onClick={ () => setDispatch() } > Cancelar </Button>
          </Card.Body>
          { showAlert && <Card.Footer className="card-preview-alert">
          { alert && popOver }
          </Card.Footer> }
      </Card>
  );
}

MovieCard.propTypes = {
  props: PropTypes.shape({
    movie: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,    
};