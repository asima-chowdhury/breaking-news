import React from 'react';
import { Card, Button, Row, Col ,Image} from 'react-bootstrap';
import './News.css'

const News = (props) => {
    const { urlToImage,title, description, author, publishedAt } = props.article;
    // console.log(title);
    // console.log(props);
    return (
        <Row className="news">
            <Col md={4} className="newsImg">
                <Image src={urlToImage} />
            </Col>
            <Col md={8} className="newsInfo">
                <Card>
                    <Card.Header>News</Card.Header>
                    <Card.Body>
                        <Card.Title variant="danger">{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text> <small>Author: {author}</small></Card.Text>
                        <Card.Text><small>Published At: {publishedAt}</small></Card.Text>
                        <Button variant="danger">Read more</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default News;