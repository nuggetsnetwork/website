import Avatar from '../Avatar.js';
import UserCard from '../Card/UserCard';
import Notifications from '../Notifications.js';
import SearchInput from '../SearchInput';
import { notificationsData } from '../../demos/header.js';
import withBadge from '../../hocs/withBadge.js';
import React, { useState, useEffect } from 'react';
// api call for notification import app service
import { getIcons, getQuickNotifications } from '../../services/appService.js';
import {
  MdClearAll,
  MdExitToApp,
  MdHelp,
  MdInsertChart,
  MdMessage,
  MdNotificationsActive,
  MdNotificationsNone,
  MdPersonPin,
  MdSettingsApplications,
} from 'react-icons/md';
import {
  Button,
  ListGroup,
  ListGroupItem,
  // NavbarToggler,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
} from 'reactstrap';
import bn from '../../utils/bemnames';
import ReactPlayer from 'react-player';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Popup from '../../pages/Popup.js';
import { logout } from '../../actions/userActions'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../store';
const bem = bn.create('header');

let noOfCallsNotifications = 0;
let noOfCallsProfileCard = 0;
let response = [];

const MdNotificationsActiveWithBadge = withBadge({
  size: 'md',
  color: 'primary',
  style: {
    top: -10,
    right: -10,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: <small>10</small>,
})(MdNotificationsActive);
// const isMobile = useMediaQuery({ maxWidth: 768 })
var isMobile = window.navigator.userAgent.toLowerCase().match(/mobile/i);
const Header = (props) => {
  const dispatch = useDispatch();

  const [isOpenNotificationPopover, setOpenNotificationPopover] = useState(false);
  const [isNotificationConfirmed, setNotificationConfirmed] = useState(false);
  const [isOpenUserCardPopover, setOpenUserCardPopover] = useState(false);
  const [notifyDetails, setnotifyDetails] = useState([]);
  const [notificationData, setnotificationData] = useState([]);
  const [isOpenModal, setisOpenModal] = useState(false);
  const [imgUrl, setimgUrl] = useState('');
  const [ftitle, setftitle] = useState('');

  useEffect(() => {
    getQuickNotifications().then(res => {
      let array = [];
      for (let j of res[6].data) {
        switch (j.name) {
          case 'Netflix': array['Netflix'] = j.img; break;
          case 'NetFlix_India': array['netflix_india'] = j.img; break;
          case 'Amazon_Prime': array['amazon_prime'] = j.img; break;
          case 'Amazon_India': array['amazon_india'] = j.img; break;
          case 'SonyLIV': array['sonyliv'] = j.img; break;
          case 'Zee5': array['zee5'] = j.img; break;
        }
      }
      console.log(array);
      for (let i = 0; i < 6; i++) {
        let split = (res[i].request.responseURL.split('https://nuggetsnetwork.com/Products/'))[1].split('.json');
        collectRecords(mapNotifyDetails1(res[i].data, 2), array[split[0]])
      }
      console.log(response);
      setnotificationData(mapNotifyDetails1(response, 10))
    }).catch(err => {
      console.log(err)
    });
  }, []);
  const collectRecords = (data, collectIcons) => {
    for (let i of data) {
      i['img'] = collectIcons;
      response.push(i);
    }
  }
  const mapNotifyDetails = (array, numOfRecords) => {
    /// the date formate is  11/12/21 <= sorting and giving latest 5 results
    return array.sort((a, b) => new Date(...b['publish_date'].split('/').reverse()) - new Date(...a['publish_date'].split('/').reverse())).slice(0, numOfRecords);
  }
  const mapNotifyDetails1 = (array, numOfRecords) => {
    /// the date formate is  2021-01-12 <= sorting and giving latest 5 results
    return array.sort((a, b) => {
      return new Date(a.publish_date).getTime() -
        new Date(b.publish_date).getTime()
    }).reverse().slice(0, numOfRecords);
  }

  const toggleNotificationPopover = () => {
    console.log(isMobile);
    if (isMobile) {
      if (noOfCallsNotifications % 2 !== 0) {
        if (!isOpenNotificationPopover) {
          // this.setState((prevState, props) => {
          //   return { isOpenNotificationPopover: true };
          // })
          setOpenNotificationPopover(true);
        }
      } else if (noOfCallsNotifications % 2 == 0) {
        if (isOpenNotificationPopover) {
          // this.setState((prevState, props) => {
          //   return { isOpenNotificationPopover: false };
          // });
          setOpenNotificationPopover(false);

          noOfCallsNotifications--;
        }
      }
      noOfCallsNotifications++;
    } else {
      // this.setState((prevState, props) => {
      //   return { isOpenNotificationPopover: !prevState.isOpenNotificationPopover };
      // });
      if (isOpenNotificationPopover) setOpenNotificationPopover(false);
      else setOpenNotificationPopover(true);
    }

    if (!isNotificationConfirmed) {
      // this.setState({ isNotificationConfirmed: true });
      setNotificationConfirmed(true)
    }
  };
  const toggleUserCardPopover = () => {
    if (noOfCallsProfileCard % 2 !== 0) {
      // this.setState({
      //   isOpenUserCardPopover: true,
      // });
      setOpenUserCardPopover(true)
    } else if (noOfCallsProfileCard % 2 == 0) {
      if (isOpenUserCardPopover) {
        // this.setState({
        //   isOpenUserCardPopover: false,
        // });
        setOpenUserCardPopover(false)

        noOfCallsProfileCard--;
      }
    }
    noOfCallsProfileCard++;
  };
  const handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };
  const openInModal = (url, ftitle) => {
    if (isOpenModal) {

    } else {
      // this.setState({
      //   isOpenModal: !this.state.isOpenModal,
      //   imgUrl: url,
      //   ftitle: ftitle
      // });
      setisOpenModal(!isOpenModal);
      setimgUrl(url);
      setftitle(ftitle);
      // this.setState({ isOpenNotificationPopover: !this.state.isOpenNotificationPopover });
      setOpenNotificationPopover(!isOpenNotificationPopover);
    }
  }
  const signOff = () => {
    dispatch(logout());
    // console.log(props.history);
    history.push('/login');
    window.location.reload();
  }
  return (
    <>
      <Navbar light expand className={bem.b('bg-white')}>
        <Nav navbar className="mr-2">
          <Button outline onClick={handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        </Nav>
        {props.isMainLayout === 'Y' && <Nav navbar>
          <SearchInput />
        </Nav>
        } {props.isMainLayout === 'Y' &&
          <Nav navbar className={bem.e('nav-right')}>
            <NavItem className="d-inline-flex">
              <NavLink id="Popover1" className="position-relative">
                {isNotificationConfirmed ? (
                  <MdNotificationsNone
                    size={25}
                    className="text-secondary can-click"
                  // onClick={this.toggleNotificationPopover} 
                  />
                ) : (
                  <MdNotificationsActiveWithBadge
                    size={25}
                    className="text-secondary can-click animated swing infinite"
                  // onClick={this.toggleNotificationPopover}
                  />
                )}
              </NavLink>
              <Popover
                placement="bottom-end"
                isOpen={isOpenNotificationPopover}
                toggle={toggleNotificationPopover}
                target="Popover1"
                className="mt-1 can-click"
                style={{ top: '2rem' }}
              >
                <PopoverBody>
                  <Notifications notificationsData={notificationData} openModal={(url, ftitle) => openInModal(url, ftitle)} />
                </PopoverBody>
              </Popover>
            </NavItem>
            <NavItem>
              <NavLink id="Popover2">
                <Avatar
                  onClick={toggleUserCardPopover}
                  className="can-click"
                />
              </NavLink>
              <Popover
                placement="bottom-end"
                isOpen={isOpenUserCardPopover}
                toggle={toggleUserCardPopover}
                target="Popover2"
                className="p-0 border-0"
                style={{ minWidth: 250 }}
              >
                <PopoverBody className="p-0 border-light">
                  <UserCard
                    title="Nuggets Network"
                    subtitle="nuggetsnetwork@gmail.com"
                    text="Last updated 15th Nov"
                    className="border-light"
                  >
                    <ListGroup flush>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdPersonPin /> Profile
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdInsertChart /> Stats
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdMessage /> Messages
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdSettingsApplications /> Settings
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdHelp /> Help
                      </ListGroupItem>
                      <ListGroupItem tag="button" onClick={signOff} action className="border-light">
                        <MdExitToApp /> Signout
                      </ListGroupItem>
                    </ListGroup>
                  </UserCard>
                </PopoverBody>
              </Popover>
            </NavItem>
          </Nav>
        }
      </Navbar>
      {isOpenModal && <Popup isOpenModal={isOpenModal} ftitle={ftitle} imgUrl={imgUrl} closeModal={() => setisOpenModal(!isOpenModal)}></Popup>
      }
    </>

  );
}
// class Header extends React.Component {
//   state = {
//     isOpenNotificationPopover: false,
//     isNotificationConfirmed: false,
//     isOpenUserCardPopover: false,
//     notifyDetails: [],
//     notificationData: [],
//     isOpenModal: false,
//     imgUrl: '',
//     ftitle: ''
//   };

//   async componentDidMount() {
//     await getQuickNotifications().then(res => {
//       let array = [];
//       for (let j of res[6].data) {
//         switch (j.name) {
//           case 'Netflix': array['Netflix'] = j.img; break;
//           case 'NetFlix_India': array['netflix_india'] = j.img; break;
//           case 'Amazon_Prime': array['amazon_prime'] = j.img; break;
//           case 'Amazon_India': array['amazon_india'] = j.img; break;
//           case 'SonyLIV': array['sonyliv'] = j.img; break;
//           case 'Zee5': array['zee5'] = j.img; break;
//         }
//       }
//       console.log(array);
//       for (let i = 0; i < 6; i++) {
//         let split = (res[i].request.responseURL.split('https://nuggetsnetwork.com/Products/'))[1].split('.json');
//           this.collectRecords(this.mapNotifyDetails1(res[i].data,2), array[split[0]])
//       }
//       console.log(response);
//       this.setState({notificationData: this.mapNotifyDetails1(response,10)})
//     }).catch(err => {
//       console.log(err)
//     });
//   }
//   collectRecords(data, collectIcons) {
//     for (let i of data) {
//       i['img'] = collectIcons;
//       response.push(i);
//     }
//   }
//   mapNotifyDetails = (array,numOfRecords) => {
//     /// the date formate is  11/12/21 <= sorting and giving latest 5 results
//     return array.sort((a, b) => new Date(...b['publish_date'].split('/').reverse()) - new Date(...a['publish_date'].split('/').reverse())).slice(0, numOfRecords);
//   }
//   mapNotifyDetails1 = (array,numOfRecords) => {
//     /// the date formate is  2021-01-12 <= sorting and giving latest 5 results
//     return array.sort((a, b) => {
//       return new Date(a.publish_date).getTime() -
//         new Date(b.publish_date).getTime()
//     }).reverse().slice(0, numOfRecords);
//   }

//   toggleNotificationPopover = () => {
//     console.log(isMobile);
//     if (isMobile) {
//       if (noOfCallsNotifications % 2 !== 0) {
//         if (!this.state.isOpenNotificationPopover) {
//           this.setState((prevState, props) => {
//             return { isOpenNotificationPopover: true };
//           })
//         }
//       } else if (noOfCallsNotifications % 2 == 0) {
//         if (this.state.isOpenNotificationPopover) {
//           this.setState((prevState, props) => {
//             return { isOpenNotificationPopover: false };
//           });
//           noOfCallsNotifications--;
//         }
//       }
//       noOfCallsNotifications++;
//     } else {
//       this.setState((prevState, props) => {
//         return { isOpenNotificationPopover: !prevState.isOpenNotificationPopover };
//       });
//     }

//     if (!this.state.isNotificationConfirmed) {
//       this.setState({ isNotificationConfirmed: true });
//     }
//   };

//   toggleUserCardPopover = () => {
//     if (noOfCallsProfileCard % 2 !== 0) {
//       this.setState({
//         isOpenUserCardPopover: true,
//       });
//     } else if (noOfCallsProfileCard % 2 == 0) {
//       if (this.state.isOpenUserCardPopover) {
//         this.setState({
//           isOpenUserCardPopover: false,
//         });
//         noOfCallsProfileCard--;
//       }
//     }
//     noOfCallsProfileCard++;
//   };

//   handleSidebarControlButton = event => {
//     event.preventDefault();
//     event.stopPropagation();

//     document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
//   };
//   openInModal = (url, ftitle) => {
//     if (this.state.isOpenModal) {

//     } else {
//       this.setState({
//         isOpenModal: !this.state.isOpenModal,
//         imgUrl: url,
//         ftitle: ftitle
//       });
//       this.setState({ isOpenNotificationPopover: !this.state.isOpenNotificationPopover });
//     }
//   }
//   render() {
//     const { isNotificationConfirmed } = this.state;

//     return (
//       <>
//         <Navbar light expand className={bem.b('bg-white')}>
//           <Nav navbar className="mr-2">
//             <Button outline onClick={this.handleSidebarControlButton}>
//               <MdClearAll size={25} />
//             </Button>
//           </Nav>
//           <Nav navbar>
//             <SearchInput />
//           </Nav>

//           <Nav navbar className={bem.e('nav-right')}>
//             <NavItem className="d-inline-flex">
//               <NavLink id="Popover1" className="position-relative">
//                 {isNotificationConfirmed ? (
//                   <MdNotificationsNone
//                     size={25}
//                     className="text-secondary can-click"
//                   // onClick={this.toggleNotificationPopover} 
//                   />
//                 ) : (
//                   <MdNotificationsActiveWithBadge
//                     size={25}
//                     className="text-secondary can-click animated swing infinite"
//                   // onClick={this.toggleNotificationPopover}
//                   />
//                 )}
//               </NavLink>
//               <Popover
//                 placement="bottom-end"
//                 isOpen={this.state.isOpenNotificationPopover}
//                 toggle={this.toggleNotificationPopover}
//                 target="Popover1"
//                 className="mt-1 can-click"
//                 style={{ top: '2rem' }}
//               >
//                 <PopoverBody>
//                   <Notifications notificationsData={this.state.notificationData} openModal={(url, ftitle) => this.openInModal(url, ftitle)} />
//                 </PopoverBody>
//               </Popover>
//             </NavItem>

//             <NavItem>
//               <NavLink id="Popover2">
//                 <Avatar
//                   onClick={this.toggleUserCardPopover}
//                   className="can-click"
//                 />
//               </NavLink>
//               <Popover
//                 placement="bottom-end"
//                 isOpen={this.state.isOpenUserCardPopover}
//                 toggle={this.toggleUserCardPopover}
//                 target="Popover2"
//                 className="p-0 border-0"
//                 style={{ minWidth: 250 }}
//               >
//                 <PopoverBody className="p-0 border-light">
//                   <UserCard
//                     title="Nuggets Network"
//                     subtitle="nuggetsnetwork@gmail.com"
//                     text="Last updated 15th Nov"
//                     className="border-light"
//                   >
//                     <ListGroup flush>
//                       <ListGroupItem tag="button" action className="border-light">
//                         <MdPersonPin /> Profile
//                       </ListGroupItem>
//                       <ListGroupItem tag="button" action className="border-light">
//                         <MdInsertChart /> Stats
//                       </ListGroupItem>
//                       <ListGroupItem tag="button" action className="border-light">
//                         <MdMessage /> Messages
//                       </ListGroupItem>
//                       <ListGroupItem tag="button" action className="border-light">
//                         <MdSettingsApplications /> Settings
//                       </ListGroupItem>
//                       <ListGroupItem tag="button" action className="border-light">
//                         <MdHelp /> Help
//                       </ListGroupItem>
//                       <ListGroupItem tag="button" action className="border-light">
//                         <MdExitToApp /> Signout
//                       </ListGroupItem>
//                     </ListGroup>
//                   </UserCard>
//                 </PopoverBody>
//               </Popover>
//             </NavItem>
//           </Nav>
//         </Navbar>
//         {this.state.isOpenModal && <Popup isOpenModal={this.state.isOpenModal} ftitle={this.state.ftitle} imgUrl={this.state.imgUrl} closeModal={() => this.setState({ isOpenModal: !this.state.isOpenModal })}></Popup>
//         }
//       </>

//     );
//   }
// }

export default Header;
