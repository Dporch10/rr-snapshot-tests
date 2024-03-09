import React from "react";
import {Card} from 'react-bootstrap' 

const GitHubCard = ({ username, imageUrl, bio}) => {
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} alt="Profile" />
            <Card.Body>
                <Card.Title>{username}</Card.Title>
                <Card.Text>{bio}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GitHubCard 