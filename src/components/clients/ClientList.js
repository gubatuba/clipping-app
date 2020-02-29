import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ClientList = ({ clients, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Empresa</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Telefone</th>
        <th>Envio</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {clients.map(client => {
        return (
          <tr key={client.id}>
            <td>{client.company}</td>
            <td>
              <Link to={"/client/" + client.slug}>{client.name}</Link>
            </td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>{client.sendMethodName}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(client)}
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

ClientList.propTypes = {
  clients: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default ClientList;
