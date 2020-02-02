import React from "react";
import { connect } from "react-redux";
import * as companyActions from "../../redux/actions/CompanyActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CompaniesPage extends React.Component {
  state = {
    company: {
      name: ""
    }
  };

  handleChange = event => {
    const company = { ...this.state.company, name: event.target.value };
    this.setState({ company });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createCompany(this.state.company);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Empresas</h2>
        <h3>Adicionar empresa</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.company.name}
        />
        <input type="submit" value="Salvar" />
        {this.props.companies.map(company => (
          <div key={company.name}>{company.name}</div>
        ))}
      </form>
    );
  }
}

CompaniesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  companies: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    companies: state.companies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(companyActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);
