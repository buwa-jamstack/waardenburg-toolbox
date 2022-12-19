import * as React from 'react';
import Grid from '@mui/material/Grid';
import CategoryCard from './CategoryCard';
import Typography from '@mui/material/Typography';

export default class CategoryListing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories : []
    }
  }

  readDataLink() {
    //console.log(this.props.dataLink)
    return fetch(this.props.dataLink)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          categories: responseJson.data
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
          Alle categorieën
        </Typography>

        <Grid container spacing={4} sx={{ py: 2 }}>
          {this.state.categories.map((catData) => (
            <Grid item key={catData.title} xs={12} sm={7} md={5} lg={3.5} xl={3}>
              <CategoryCard itemData={catData} />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}


