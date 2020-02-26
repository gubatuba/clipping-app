import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CompanyList = ({ companies, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Contato</th>
        <th>Email</th>
        <th>Telefone</th>
        <th>Produto</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {companies.map(company => {
        return (
          <tr key={company.id}>
            <td>
              <Link to={"/company/" + company.slug}>{company.name}</Link>
            </td>
            <td>{company.contactName}</td>
            <td>{company.contactEmail}</td>
            <td>{company.contactPhone}</td>
            <td>{company.sendMethodName}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(company)}
              >
                Remover
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

CompanyList.propTypes = {
  companies: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default CompanyList;
