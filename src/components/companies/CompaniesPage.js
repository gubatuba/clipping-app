import React from "react";
import { connect } from "react-redux";
import * as companyActions from "../../redux/actions/CompanyActions";
import * as productActions from "../../redux/actions/ProductActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CompanyList from "./CompanyList";
import { sendMethods } from "../constants/SendMethod";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class CompaniesPage extends React.Component {
  state = {
    redirectToAddCompanyPage: false
  };

  componentDidMount() {
    if (this.props.companies.length === 0) {
      this.props.actions.loadCompanies().catch(error => {
        alert("Loading companies failed " + error);
      });
    }
  }

  handleDeleteCompany = async company => {
    toast.success("Empresa removida com sucesso!");
    try {
      await this.props.actions.deleteCompany(company);
    } catch (error) {
      toast.error("Remoção da empresa falhou. " + error.message, {
        autoClose: false
      });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddCompanyPage && <Redirect to="/company" />}
        <h2>Empresas</h2>

        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-company"
              onClick={() => this.setState({ redirectToAddCompanyPage: true })}
            >
              Adicionar Empresa
            </button>
            <CompanyList
              onDeleteClick={this.handleDeleteCompany}
              companies={this.props.companies}
            />
          </>
        )}
      </>
    );
  }
}

CompaniesPage.propTypes = {
  companies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    companies: state.companies.map(company => {
      return {
        ...company,
        sendMethodName: sendMethods.find(a => a.id === company.sendMethod).name
      };
    }),
    products: state.products,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCompanies: bindActionCreators(companyActions.loadCompanies, dispatch),
      loadProducts: bindActionCreators(productActions.loadProducts, dispatch),
      deleteCompany: bindActionCreators(companyActions.deleteCompany, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);
