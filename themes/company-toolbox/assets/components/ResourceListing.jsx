import * as React from 'react';
import Grid from '@mui/material/Grid';
import ResourceCard from './ResourceCard';
import Typography from '@mui/material/Typography';

export default class ResourceListing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      resources : [],
      catData : {}
    }
  }

  readDataLink() {
    return fetch(this.props.dataLink)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          resources: responseJson.data.resources,
          catData: responseJson.data
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.readDataLink();
  }

  render() {
    return (
      <React.Fragment>
        <Typography component="div" variant="h6">
          {this.state.catData.title}
        </Typography>

        <Grid container spacing={4} sx={{ py: 2 }}>
          {this.state.resources.map((resource) => (
            <Grid item key={resource.title} xs={12} sm={6} md={4} lg={3} xl={3}>
              <ResourceCard itemData={resource} appCnf={this.props.appCnf}/>
            </Grid>
          ))}
        </Grid>
      </React.Fragment>

    );
  }
}


