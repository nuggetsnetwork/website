import Avatar from '../Avatar.js';
import UserCard from '../Card/UserCard';
import Notifications from '../Notifications.js';
import SearchInput from '../SearchInput';
import { notificationsData } from '../../demos/header.js';
import withBadge from '../../hocs/withBadge.js';
import React from 'react';

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

const bem = bn.create('header');


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

class Header extends React.Component {
  state = {
    isOpenNotificationPopover: false,
    isNotificationConfirmed: false,
    isOpenUserCardPopover: false,
    notifyDetails: [],
    notificationData: []
  };
  componentDidMount() {
  }
  collectRecords(data, collectIcons) {
    console.log(collectIcons);
    for (let i of data) {
      i['img'] = collectIcons;
      // console.log(i);
      this.setState({ notificationData: this.state.notificationData.concat(i) })
    }
  }
  mapNotifyDetails = (array) => {
    /// the date formate is  11/12/21 <= sorting and giving latest 5 results
    return array.sort((a, b) => new Date(...b['publish_date'].split('/').reverse()) - new Date(...a['publish_date'].split('/').reverse())).slice(0, 2);
  }
  mapNotifyDetails1 = (array) => {
    /// the date formate is  2021-01-12 <= sorting and giving latest 5 results
    return array.sort((a, b) => {
      return new Date(a.publish_date).getTime() -
        new Date(b.publish_date).getTime()
    }).reverse().slice(0, 2);
  }

  toggleNotificationPopover = () => {
    this.setState({
      isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
    });
    if (!this.state.isOpenNotificationPopover) {
      if (!this.state.notificationData.length) {
        getQuickNotifications().then(res => {
          let collectIcons = res[6].data;
          let array = [];
          for(let j of res[6].data) {
            switch (j.name) {
              case 'Netflix': array['imdb_excel_2_json'] = j.img ;break;
              case 'NetFlix_India': array['netflix_india'] = j.img ;break;
              case 'Amazon_Prime': array['amazon_prime'] = j.img ;break;
              case 'Amazon_India': array['amazon_india'] = j.img ;break;
              case 'SonyLIV': array['sonyliv'] = j.img ;break;
              case 'Zee5': array['zee5'] = j.img ;break;
            }
          }
          console.log(array);
          for (let i = 0; i < 6; i++) {
            let split = (res[i].request.responseURL.split('https://nuggetsnetwork.com/Products/'))[1].split('.json');
            console.log(split[0]);
              if (i === 1 || i === 2) {
                this.collectRecords(this.mapNotifyDetails1(res[i].data),array[split[0]]);
              } else {
                this.collectRecords(this.mapNotifyDetails(res[i].data),array[split[0]])
              }
          }
        }).catch(err => {
          console.log(err)
        });
      }
    }
    if (!this.state.isNotificationConfirmed) {
      this.setState({ isNotificationConfirmed: true });
    }
  };

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  render() {
    const { isNotificationConfirmed } = this.state;

    return (
      <Navbar light expand className={bem.b('bg-white')}>
        <Nav navbar className="mr-2">
          <Button outline onClick={this.handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        </Nav>
        <Nav navbar>
          <SearchInput />
        </Nav>

        <Nav navbar className={bem.e('nav-right')}>
          <NavItem className="d-inline-flex">
            <NavLink id="Popover1" className="position-relative">
              {isNotificationConfirmed ? (
                <MdNotificationsNone
                  size={25}
                  className="text-secondary can-click"
                  onClick={this.toggleNotificationPopover}
                />
              ) : (
                <MdNotificationsActiveWithBadge
                  size={25}
                  className="text-secondary can-click animated swing infinite"
                  onClick={this.toggleNotificationPopover}
                />
              )}
            </NavLink>
            <Popover
              placement="left"
              isOpen={this.state.isOpenNotificationPopover}
              toggle={this.toggleNotificationPopover}
              target="Popover1"
            >
              <PopoverBody>
                <Notifications notificationsData={this.state.notificationData} />
              </PopoverBody>
            </Popover>
          </NavItem>

          <NavItem>
            <NavLink id="Popover2">
              <Avatar
                onClick={this.toggleUserCardPopover}
                className="can-click"
              />
            </NavLink>
            <Popover
              placement="bottom-end"
              isOpen={this.state.isOpenUserCardPopover}
              toggle={this.toggleUserCardPopover}
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
                    <ListGroupItem tag="button" action className="border-light">
                      <MdExitToApp /> Signout
                    </ListGroupItem>
                  </ListGroup>
                </UserCard>
              </PopoverBody>
            </Popover>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
