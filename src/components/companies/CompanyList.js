import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CompanyList = ({ companies }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Contato</th>
        <th>Email</th>
        <th>Telefone</th>
        <th>Produto</th>
      </tr>
    </thead>
    <tbody>
      {companies.map(company => {
        return (
          <tr key={company.id}>
            <td>
              <Link to={"/company/" + company.slug}>{company.name}</Link>
            </td>
            <td>{company.contact.name}</td>
            <td>{company.contact.email}</td>
            <td>{company.contact.phone}</td>
            <td>{company.products[0].productName}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

CompanyList.propTypes = {
  companies: PropTypes.array.isRequired
};

export default CompanyList;
