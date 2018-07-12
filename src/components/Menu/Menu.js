import React, { Component } from "react";
import { connect } from "react-redux";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import MenuList from "./MenuList";
import AddCategory from "./AddCategory";
import EditCategory from "./EditCategory";
import AddMenu from "./AddMenu";
import isEmpty from "../../validation/isEmpty";

import {
  fetchByCategory,
  fetchCategories
} from "../../store/actions/menuActions";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignSelf: "center",
    width: "75vw",
    marginBottom: "25px"
  },
  icon: {
    marginRight: theme.spacing.unit
  },
  menuContainer: {
    width: "75vw",
    margin: "0 auto 50px"
  },
  tab: {
    position: "absolute",
    width: "75vw",
    margin: "0 auto 20px",
    backgroundColor: theme.palette.primary.main,
    color: "white"
  },
  indicator: {
    height: "10%",
    borderRadius: "25px"
  },
  toolbar: theme.mixins.toolbar,
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class Menu extends Component {
  state = {
    isCategoriesEmpty: true,
    categories: "",
    dish: [],
    currentCategoryId: 0,
    restaurant_id: localStorage.getItem("restaurant_id")
  };

  componentDidMount() {
    const restaurantId = {
      restaurant_id: this.state.restaurant_id
    };

    // fetchCategories(restaurantId).then(response => {
    //   if (response.status === "200") {
    //     this.setState({
    //       isCategoriesEmpty: false,
    //       categories: response.categories,
    //       value: response.categories[0].category_id
    //     });
    //   } else {
    //     this.setState({
    //       categories: ""
    //     });
    //   }

    //   this.tabChange(null, this.state.value);
    // });
    this.props.fetchCategories(restaurantId);
  }

  componentWillReceiveProps(nextProps) {
    const { categories } = nextProps.menu;
    if (isEmpty(categories)) {
      this.setState({
        categories: categories,
        isCategoriesEmpty: true
      });
    } else {
      this.setState({
        categories: categories,
        isCategoriesEmpty: false
      });
      this.tabChange(null, categories[0].category_id);
    }
  }

  showMenu = () => {
    let list = <p>No available data</p>;
    if (this.state.dish) {
      list = this.state.dish.map(data => (
        <MenuList
          data={this.state.categories}
          dish_id={data.dish_id}
          key={data.dish_id}
          name={data.dish_name}
          price={data.price}
          des={data.description}
          category_id={this.state.currentCategoryId}
        />
      ));
    }
    return list;
  };

  tabChange = (event, value) => {
    this.setState({ currentCategoryId: value });
    const categoryId = {
      category_id: value
    };

    fetchByCategory(categoryId).then(response => {
      this.setState({ dish: response });
    });
  };

  render() {
    const { classes } = this.props;
    const { currentCategoryId } = this.state;

    const menu = <TabContainer>{this.showMenu()}</TabContainer>;

    return (
      <div className={classes.root}>
        <div className={classes.buttonContainer}>
          <AddCategory restaurant_id={this.state.restaurant_id} />

          <EditCategory
            restaurant_id={this.state.restaurant_id}
            data={this.state.categories}
          />

          <AddMenu
            data={this.state.categories}
            restaurant_id={this.state.restaurant_id}
          />
        </div>
        {this.state.isCategoriesEmpty ? (
          <p>Empty</p>
        ) : (
          <Paper className={classes.menuContainer}>
            <Paper elevation="4" className={classes.tab}>
              <Tabs
                value={currentCategoryId}
                onChange={this.tabChange}
                scrollable
                scrollButtons="on"
                classes={{ indicator: classes.indicator }}
              >
                {/* All category tab enters here */}

                {this.state.categories.map(data => (
                  <Tab value={data.category_id} label={data.category_name} />
                ))}
              </Tabs>
            </Paper>
            <div className={classes.toolbar} />
            <div elevation="3" className={classes.itemContainer}>
              {/* call categories in order of categories tab 
          add button for each container (maybe make other component)  
          */}

              {menu}
            </div>
          </Paper>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  menu: state.menu
});

export default connect(
  mapStateToProps,
  { fetchCategories }
)(withStyles(styles, { withTheme: true })(Menu));
