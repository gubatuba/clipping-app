import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadClients, saveClient } from "../../redux/actions/ClientActions";
import PropTypes from "prop-types";
import ClientForm from "./ClientForm";
import { newClient } from "../../../tools/mockData";
import { sendMethods } from "../constants/SendMethod";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageClientPage({
  clients,
  sendMethods,
  loadClients,
  saveClient,
  history,
  ...props
}) {
  const [client, setClient] = useState({ ...props.client });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (clients.length === 0) {
      loadClients().catch(error => {
        alert("Loading clients failed " + error);
      });
    } else {
      setClient({ ...props.client });
    }
  }, [props.client]);

  function handleChange(event) {
    const { name, value } = event.target;

    setClient(prevClient => ({
      ...prevClient,
      [name]: name === "sendMethod" ? parseInt(value, 10) : value
    }));
  }

  function handleChangeProduct(event) {
    const { id, checked } = event.target;
    let newProducts = [];

    props.client.products.forEach(product => {
      let newProduct = {};
      newProduct.isEnable =
        product.id === parseInt(id, 10) ? checked : product.isEnable;
      newProduct.id = product.id;
      newProduct.name = product.name;

      newProducts.push(newProduct);
    });

    let newClient = props.client;
    newClient.products = newProducts;

    setClient(newClient);
    /*{
      ...prevClient.products.forEach(element => {
        if (element.name === name) {
          element.value = isChecked(value);
        }
      })
    }));*/
  }

  function formIsValid() {
    const { name, sendMethod } = client;
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
    saveClient(client)
      .then(() => {
        toast.success("Empresa gravada com sucesso");
        history.push("/clients");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return clients.length === 0 ? (
    <Spinner />
  ) : (
    <ClientForm
      client={client}
      errors={errors}
      sendMethods={sendMethods}
      onChange={handleChange}
      onChangeProduct={handleChangeProduct}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageClientPage.propTypes = {
  client: PropTypes.object.isRequired,
  sendMethods: PropTypes.array.isRequired,
  clients: PropTypes.array.isRequired,
  loadClients: PropTypes.func.isRequired,
  saveClient: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

function getClientBySlug(clients, slug) {
  return clients.find(client => client.slug === slug || null);
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const client =
    slug && state.clients.length > 0
      ? getClientBySlug(state.clients, slug)
      : newClient;
  return {
    client,
    clients: state.clients,
    sendMethods
  };
}

const mapDispatchToProps = {
  loadClients,
  saveClient
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageClientPage);
