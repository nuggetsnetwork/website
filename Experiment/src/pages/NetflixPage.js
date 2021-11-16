import Page from 'components/Page';
import React from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from "axios";
import { useEffect, useState } from "react";
import MaterialTable from 'material-table';
// import { withStyles, makeStyles } from "@material-ui/core/styles";

const tableTypes = ['', 'bordered', 'striped', 'hover'];

const NetflixPage = () => {
    // const classes = useStyles();
    const [movie, setMovie] = useState([]);
    const [search, setSearch] = useState("");
    const [searchmonth, setSearchmonth] = useState("");
  
    const getMovieData = async () => {
      try {
        const data = await axios.get(
          "https://nuggetsnetwork.com/Products/imdb_excel_2_json.json"
          // "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
        );
        console.log(data.data);
        setMovie(data.data);
      } catch (e) {
        console.log(e);
      }
    };
    
    const columns=[
        {
            title:'Movie Name',field:'fTitle',
            cellStyle:{
                backgroundColor: '#039be5',
                color:'#FFF'
            },
            headerStyle: {
                backgroundColor: '#039be5',
                color:'#FFF',
                fontSize:25
              }
        },
        {
            title:'Month',field:'plTitle',
            headerStyle: {
                backgroundColor: '#039be5',
                color:'#FFF',
                fontSize:25
              }
        },
        {
            title:'Views',field:'views', defaultSort:'desc',
            headerStyle: {
                backgroundColor: '#039be5',
                color:'#FFF',
                fontSize:25,
              }
        },
        {
            title:'Likes',field:'likes',
            headerStyle: {
                backgroundColor: '#039be5',
                color:'#FFF',
                fontSize:25
              }
        },
        {
            title:'IMDB Rating',field:'Rating',
            headerStyle: {
                backgroundColor: '#039be5',
                color:'#FFF',
                fontSize:25
              }
        }
    ]

    useEffect(() => {
      getMovieData();
    }, []);
class DashboardPage extends React.Component{
render() {
  return (
    <Page
      title="Netflix"
      breadcrumbs={[{ name: 'netflix', active: true }]}
      className="NetflixPage"
    >
    
    <MaterialTable title="Netflix Movie Tracker"
        data={movie}
        columns={columns}
        options={{
            filtering:true,
            filterCellStyle:{
                backgroundColor: '#A9E3FF',
                color:'#FFF'
            },
            paging:true,
            pageSize:10,
            pageSizeOptions: [25, 50, 100, 250],
            exportButton:true
        }}
        />
     
      {tableTypes.map((tableType, index) => (
        <Row key={index}>
          <Col>
            <Card className="mb-3">
              <CardHeader>{tableType || 'default'}</CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <Card body>
                      <Table {...{ [tableType || 'default']: true }}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card>
                  </Col>

                  <Col>
                    <Card body>
                      <Table dark>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}

      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>Contextual</CardHeader>
            <CardBody>
              <Table>
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Column heading</th>
                    <th scope="col">Column heading</th>
                    <th scope="col">Column heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <th scope="row">Active</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr>
                    <th scope="row">Default</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>

                  <tr className="table-primary">
                    <th scope="row">Primary</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="table-secondary">
                    <th scope="row">Secondary</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="table-success">
                    <th scope="row">Success</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="table-danger">
                    <th scope="row">Danger</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="table-warning">
                    <th scope="row">Warning</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="table-info">
                    <th scope="row">Info</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="table-light">
                    <th scope="row">Light</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="table-dark">
                    <th scope="row">Dark</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>

        <Col>
          <Card className="mb-3">
            <CardHeader>Contextual</CardHeader>
            <CardBody>
              <Table dark>
                <thead>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Column heading</th>
                    <th scope="col">Column heading</th>
                    <th scope="col">Column heading</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-active">
                    <th scope="row">Active</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr>
                    <th scope="row">Default</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>

                  <tr className="table-primary">
                    <th scope="row">Primary</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="table-secondary">
                    <th scope="row">Secondary</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="table-success">
                    <th scope="row">Success</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="table-danger">
                    <th scope="row">Danger</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="table-warning">
                    <th scope="row">Warning</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="table-info">
                    <th scope="row">Info</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="table-light">
                    <th scope="row">Light</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                  <tr className="table-dark">
                    <th scope="row">Dark</th>
                    <td>Column content</td>
                    <td>Column content</td>
                    <td>Column content</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>Responsive</CardHeader>
            <CardBody>
              <Table responsive>
                <thead>
                  <tr>
                    <th align="center">Title</th>
                    <th>Month</th>
                    <th>Views</th>
                    <th>Likes</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {movie
                    .filter((item) => {
                        if (searchmonth =="") {
                        return item;
                        } else if (
                        item.plTitle.toLowerCase().includes(searchmonth.toLowerCase()) || item.fTitle.toLowerCase().includes(searchmonth.toLowerCase())
                        ){
                        return item;
                        }
                        // if (search =="") {
                        //   return item;
                        // } else if (
                        //   item.fTitle.toLowerCase().includes(search.toLowerCase())
                        //   ){
                        //   return item;
                        // }
                    })
                    .map((item) => {
                        return (
                        <tr key={item.Index}>
                            <td component="th" scope="row">
                            {item.fTitle}
                            </td>
                            <td align="left">
                            {item.plTitle}
                            </td>
                            <td align="left">
                            {item.views}
                            </td>
                            <td align="left">
                            {item.likes}
                            </td>
                            <td align="left">
                            {item.Rating}
                            </td>
                        </tr>
                        );
                    })}  
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card className="mb-3">
            <CardHeader>Size</CardHeader>
            <CardBody>
              <Table size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Page>
    
  );
};
}
}
export default NetflixPage;
