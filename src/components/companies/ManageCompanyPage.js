import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadCompanies, saveCompany } from "../../redux/actions/CompanyActions";
import PropTypes from "prop-types";
import CompanyForm from "./CompanyForm";
import { newCompany } from "../../../tools/mockData";
import { sendMethods } from "../constants/SendMethod";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageCompanyPage({
  companies,
  sendMethods,
  loadCompanies,
  saveCompany,
  history,
  ...props
}) {
  const [company, setCompany] = useState({ ...props.company });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
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

  function handleChangeProduct(event) {
    const { id, checked } = event.target;
    let newProducts = [];

    props.company.products.forEach(product => {


      let newProduct = {}
      newProduct.isEnable = product.id === parseInt(id, 10) ? checked : product.isEnable;
      newProduct.id = product.id
      newProduct.name = product.name

      newProducts.push(newProduct)
    });

    let newCompany = props.company;
    newCompany.products = newProducts;


    setCompany(prevCompany => ({
      ...prevCompany,
      products: [...prevCompany.products, { id: 5, name: "aa", isEnable: true }]
      /*[prevCompany.products[parseInt(id, 10)].isEnable]: false*/
    }));
    /*{
      ...prevCompany.products.forEach(element => {
        if (element.name === name) {
          element.value = isChecked(value);
        }
      })
    }));*/
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

  return companies.length === 0 ? (
    <Spinner />
  ) : (
      <CompanyForm
        company={company}
        errors={errors}
        sendMethods={sendMethods}
        onChange={handleChange}
        onChangeProduct={handleChangeProduct}
        onSave={handleSave}
        saving={saving}
      />
    );
}

ManageCompanyPage.propTypes = {
  company: PropTypes.object.isRequired,
  sendMethods: PropTypes.array.isRequired,
  companies: PropTypes.array.isRequired,
  loadCompanies: PropTypes.func.isRequired,
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
    sendMethods
  };
}

const mapDispatchToProps = {
  loadCompanies,
  saveCompany
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCompanyPage);
