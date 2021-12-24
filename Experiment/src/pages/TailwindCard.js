import React from 'react'
import "@material-tailwind/react/tailwind.css";

import Card from "@material-tailwind/react/Card";
import CardRow from "@material-tailwind/react/CardRow";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardStatus from "@material-tailwind/react/CardStatus";
import CardStatusFooter from "@material-tailwind/react/CardStatusFooter";
import Icon from "@material-tailwind/react/Icon";
import { Col, Row, ListGroup, ListGroupItem, Badge } from 'reactstrap';

const TailwindCard = ({ title, subscribers, image, color, link, viewCountMillions, addedViewCountMillions }) => {
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
                    <Col lg={9} md={9} sm={9} xs={9}>
                        <span className="text-sm text-gray-700 pt-4 items-center flex">
                            <span class="material-icons text-green-500 text-base leading-none">arrow_upward</span><span class="text-green-500 ml-1 mr-2">38.52M</span><span class="font-light whitespace-nowrap">Since last week</span>
                        </span>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <button onClick={() => window.open(link)}
                            class="bg-purple-500 text-white active:bg-purple-600 font-bold
    uppercase text-xs px-3 py-1 rounded-full shadow hover:shadow-md outline-none
    focus:outline-none mt-4 ease-linear transition-all duration-150" type="button"
                        > <i class="fas fa-location-arrow"></i></button>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default TailwindCard
