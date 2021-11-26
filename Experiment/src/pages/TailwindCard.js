import React from 'react'
import "@material-tailwind/react/tailwind.css";

import Card from "@material-tailwind/react/Card";
import CardRow from "@material-tailwind/react/CardRow";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardStatus from "@material-tailwind/react/CardStatus";
import CardStatusFooter from "@material-tailwind/react/CardStatusFooter";
import Icon from "@material-tailwind/react/Icon";
import { Col, Row, ListGroup, ListGroupItem, Badge } from 'reactstrap';

const TailwindCard = ({ title, subscribers, image, color, link, viewCountMillions }) => {
    return (
        <>
            <Card className="m-2">
                <CardRow>
                    <CardHeader size="lg" iconOnly>
                        <img alt="image text" color={color} src={image} />
                    </CardHeader>
                    <CardStatus title={title} amount={subscribers} />
                </CardRow>
                <ListGroup flush id="e-list-style-none">
                    <ListGroupItem className="d-flex justify-content-between">
                        <span> Views {' '}</span>
                        <Badge style={{ lineHeight: '1.5' }} color="secondary">{viewCountMillions}</Badge>
                    </ListGroupItem>
                </ListGroup>
                <Row>
                    <Col lg={8} md={8} sm={8} xs={8}>
                        <CardStatusFooter color="green" amount="97%" date="Since one week">
                            <Icon color="green" name="arrow_upward" />
                        </CardStatusFooter>
                    </Col>
                    <Col lg={4} md={4} sm={4} xs={4}>
                        <button onClick={() => window.open(link)}
                            class="bg-purple-500 text-white active:bg-purple-600 font-bold
    uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none
    focus:outline-none mt-3 ease-linear transition-all duration-150" type="button"
                        > Link</button>
                    </Col>

                </Row>
            </Card>
        </>
    )
}

export default TailwindCard
