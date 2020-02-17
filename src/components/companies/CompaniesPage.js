import React from "react";
import { connect } from "react-redux";
import * as companyActions from "../../redux/actions/CompanyActions";
import * as productActions from "../../redux/actions/ProductActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CompanyList from "./CompanyList";
import { sendMethods } from "../constants/SendMethod";

class CompaniesPage extends React.Component {
  componentDidMount() {
    if (this.props.companies.length === 0) {
      this.props.actions.loadCompanies().catch(error => {
        alert("Loading companies failed " + error);
      });
    }
  }
  render() {
    return (
      <>
        <h2>Empresas</h2>
        <CompanyList companies={this.props.companies} />
      </>
    );
  }
}

CompaniesPage.propTypes = {
  companies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    companies: state.companies.map(company => {
      return {
        ...company,
        sendMethodName: sendMethods.find(a => a.id === company.sendMethod).name
      };
    }),
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCompanies: bindActionCreators(companyActions.loadCompanies, dispatch),
      loadProducts: bindActionCreators(productActions.loadProducts, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);
