import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCompanies, saveCompany } from "../../redux/actions/CompanyActions";
import { loadProducts } from "../../redux/actions/ProductActions";
import PropTypes from "prop-types";
import CompanyForm from "./CompanyForm";
import { newCompany } from "../../../tools/mockData";
import { sendMethods } from "../constants/SendMethod";

function ManageCompanyPage({
  companies,
  products,
  sendMethods,
  loadCompanies,
  loadProducts,
  saveCompany,
  ...props
}) {
  const [company, setCompany] = useState({ ...props.company });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (products.length === 0) {
      loadProducts().catch(error => {
        alert("Loading products failed " + error);
      });
    }
    if (companies.length === 0) {
      loadCompanies().catch(error => {
        alert("Loading companies failed " + error);
      });
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setCompany(prevCompany => ({
      ...prevCompany,
      [name]: name === "sendMethod" ? parseInt(value, 10) : value
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    debugger;
    saveCompany(company);
  }
  return (
    <CompanyForm
      company={company}
      errors={errors}
      products={products}
      sendMethods={sendMethods}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}

ManageCompanyPage.propTypes = {
  company: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  sendMethods: PropTypes.array.isRequired,
  companies: PropTypes.array.isRequired,
  loadCompanies: PropTypes.func.isRequired,
  loadProducts: PropTypes.func.isRequired,
  saveCompany: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    company: newCompany,
    companies: state.companies,
    products: state.products,
    sendMethods
  };
}

const mapDispatchToProps = {
  loadCompanies,
  loadProducts,
  saveCompany
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCompanyPage);
