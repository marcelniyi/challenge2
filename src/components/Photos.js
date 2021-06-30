import { Container, Row, Col, Card } from 'react-bootstrap';
export default function photosContainer({photos}){
  return (
    <Container>
      <Row style={{ marginTop: '30px', padding: '10px'}}>
      {photos && photos.map((photo) => (
        <Col lg="4" key={photo.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={photo.thumbnailUrl} />
            <Card.Body>
              <Card.Title>{photo.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
  )
}
