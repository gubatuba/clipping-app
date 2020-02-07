import React from "react";
import { connect } from "react-redux";
import * as companyActions from "../../redux/actions/CompanyActions";
import * as productActions from "../../redux/actions/ProductActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CompanyList from "./CompanyList";

class CompaniesPage extends React.Component {
  componentDidMount() {
    if (this.props.products.length === 0) {
      this.props.actions.loadProducts().catch(error => {
        alert("Loading products failed " + error);
      });
    }
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
  actions: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  companies: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    companies: state.companies.map(company => {
      return {
        ...company,
        products:
          state.products.length === 0
            ? []
            : company.products.map(product => {
                return {
                  ...product,
                  productName: state.products.find(a => a.id === product.id)
                    .name
                };
              })
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
