import React, { useEffect, useState } from 'react'
import {
    Card, CardHeader, CardText, CardBody, CardFooter, Button, Row, Col,
    CardTitle, CardSubtitle, CardImg
} from 'reactstrap';
import Carousel from 'react-elastic-carousel'
import { getSonyLiv,getNetflix } from '../services/appService';
import Popup from './Popup';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactPlayer from 'react-player';

const OwlCarouselSlider = ({ name }) => {
    const [details, setDetails] = useState([]);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]
    useEffect(() => {
        console.log(name);
        switch (name) {
            case 'sonyliv': getNetflix().then(res => {
                setDetails(res.data);
                console.log(res.data);
            }); break;
        }
    }, []);

    const [isOpen, setOpen] = useState(false);
    const [imageUrl,setUrl] = useState('');
    const [modalData,setModalData] = useState({});
    const openModal = (modalData) => {
        // history.push()
        console.log(modalData);
        if(isOpen) {

        } else {
            setOpen(!isOpen);
            setModalData({title: modalData.title, url: modalData.url});
        }
    }
    const noRefCheck = () => {
        console.log('hello');
        setOpen(!isOpen);
    }
    return (
        <>
            <Carousel itemsToShow={4} breakPoints={breakPoints}>
                {details && details.map(d => (
                    <Card onClick={() => openModal(d)}>
                        <CardImg className="can-click" top width="100%" src="https://i.ytimg.com/vi/wGlXX5rbPIU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlTYq4fyXkMT5Kq7T2sDoDrpF0gQ" alt="Card image cap" />
                        <CardBody>
                            <CardTitle><strong>{d.plTitle}</strong></CardTitle>
                            <CardText>{d.title}</CardText>
                        </CardBody>
                    </Card>
                ))}
            </Carousel>
            <Modal
                isOpen={isOpen}
                scrollable={false} 
                keyboard={true} toggle={() => setOpen(!isOpen)}>
                <ModalHeader toggle={() => setOpen(!isOpen)}>
                    {modalData.title}
                </ModalHeader>
                <ModalBody>
                    <div className='player-wrapper'>
                        <ReactPlayer className='react-player'
                            width='100%'
                            height='100%' controls={true} playing= {true} url={modalData.url} />
                    </div>
                </ModalBody>
               
            </Modal>
        </>
    )
}

export default OwlCarouselSlider
