import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCompanies, saveCompany } from "../../redux/actions/CompanyActions";
import { loadProducts } from "../../redux/actions/ProductActions";
import PropTypes from "prop-types";
import CompanyForm from "./CompanyForm";
import { newCompany } from "../../../tools/mockData";
import { sendMethods } from "../constants/SendMethod";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageCompanyPage({
  companies,
  products,
  sendMethods,
  loadCompanies,
  loadProducts,
  saveCompany,
  history,
  ...props
}) {
  const [company, setCompany] = useState({ ...props.company });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

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
    } else {
      setCompany({ ...props.company });
    }
  }, [props.company]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCompany(prevCompany => ({
      ...prevCompany,
      [name]: name === "sendMethod" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { name, sendMethod } = company;
    const errors = {};

    if (!name) errors.name = "O nome da empresa é obrigatório!";
    if (!sendMethod) errors.sendMethod = "O método de envio é obrigatório!";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveCompany(company)
      .then(() => {
        toast.success("Empresa gravada com sucesso");
        history.push("/companies");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return companies.length === 0 || products.length === 0 ? (
    <Spinner />
  ) : (
    <CompanyForm
      company={company}
      errors={errors}
      products={products}
      sendMethods={sendMethods}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
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
  saveCompany: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

function getCompanyBySlug(companies, slug) {
  return companies.find(company => company.slug === slug || null);
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const company =
    slug && state.companies.length > 0
      ? getCompanyBySlug(state.companies, slug)
      : newCompany;
  return {
    company,
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
