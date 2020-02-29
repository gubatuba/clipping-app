import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import ProductCheckList from "../products/ProductCheckList";

const ClientForm = ({
  client,
  sendMethods,
  onSave,
  onChange,
  onChangeProduct,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{client.id ? "Editar" : "Criar"} Cliente</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="company"
        label="Empresa"
        value={client.company}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name="title"
        label="Título"
        value={client.title}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name="name"
        label="Nome"
        value={client.name}
        onChange={onChange}
        error={errors.name}
      />
      <TextInput
        name="position"
        label="Cargo"
        value={client.position}
        onChange={onChange}
        error={errors.position}
      />
      <TextInput
        name="phone"
        label="Telefone"
        value={client.phone}
        onChange={onChange}
        error={errors.phone}
      />
      <TextInput
        name="cellPhone"
        label="Celular"
        value={client.cellPhone}
        onChange={onChange}
        error={errors.cellPhone}
      />

      <TextInput
        name="email"
        label="E-mail"
        value={client.email}
        onChange={onChange}
        error={errors.email}
      />

      <ProductCheckList products={client.products} onChange={onChangeProduct} />

      <SelectInput
        name="sendMethod"
        label="Método de envio"
        value={client.sendMethod || ""}
        defaultOption="Selecione o método de envio"
        options={sendMethods.map(sendMethod => ({
          value: sendMethod.id,
          text: sendMethod.name
        }))}
        onChange={onChange}
        error={errors.sendMethod}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Salvando..." : "Salvar"}
      </button>
    </form>
  );
};

ClientForm.propTypes = {
  client: PropTypes.object.isRequired,
  sendMethods: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeProduct: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default ClientForm;
