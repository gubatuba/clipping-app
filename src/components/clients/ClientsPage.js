import React from "react";
import { connect } from "react-redux";
import * as clientActions from "../../redux/actions/ClientActions";
import * as productActions from "../../redux/actions/ProductActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ClientList from "./ClientList";
import { sendMethods } from "../constants/SendMethod";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class ClientsPage extends React.Component {
  state = {
    redirectToAddClientPage: false
  };

  componentDidMount() {
    if (this.props.clients.length === 0) {
      this.props.actions.loadClients().catch(error => {
        alert("Loading clients failed " + error);
      });
    }
  }

  handleDeleteClient = async client => {
    toast.success("Cliente removido com sucesso!");
    try {
      await this.props.actions.deleteClient(client);
    } catch (error) {
      toast.error("Remoção do cliente falhou. " + error.message, {
        autoClose: false
      });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddClientPage && <Redirect to="/client" />}
        <h2>Clientes</h2>

        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-client"
              onClick={() => this.setState({ redirectToAddClientPage: true })}
            >
              Adicionar Cliente
            </button>
            <ClientList
              onDeleteClick={this.handleDeleteClient}
              clients={this.props.clients}
            />
          </>
        )}
      </>
    );
  }
}

ClientsPage.propTypes = {
  clients: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    clients: state.clients.map(client => {
      return {
        ...client,
        sendMethodName: sendMethods.find(a => a.id === client.sendMethod).name
      };
    }),
    products: state.products,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadClients: bindActionCreators(clientActions.loadClients, dispatch),
      loadProducts: bindActionCreators(productActions.loadProducts, dispatch),
      deleteClient: bindActionCreators(clientActions.deleteClient, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientsPage);
