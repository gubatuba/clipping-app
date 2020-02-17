import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const CompanyForm = ({
  company,
  products,
  sendMethods,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{company.id ? "Editar" : "Criar"} Empresa</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="name"
        label="Nome"
        value={company.name}
        onChange={onChange}
        error={errors.name}
      />
      <TextInput
        name="razaoSocial"
        label="Razão Social"
        value={company.razaoSocial}
        onChange={onChange}
        error={errors.razaoSocial}
      />

      <TextInput
        name="fullAddressaddress"
        label="Endereço"
        value={company.fullAddressaddress}
        onChange={onChange}
        error={errors.address}
      />
      <TextInput
        name="fullAddress.postalCode"
        label="CEP"
        value={company.fullAddress.postalCode}
        onChange={onChange}
        error={errors.postalCode}
      />
      <TextInput
        name="city"
        label="Cidade"
        value={company.fullAddress.city}
        onChange={onChange}
        error={errors.city}
      />
      <TextInput
        name="state"
        label="Estado"
        value={company.fullAddress.state}
        onChange={onChange}
        error={errors.state}
      />
      <TextInput
        name="phone"
        label="Telefone"
        value={company.phone}
        onChange={onChange}
        error={errors.phone}
      />
      <TextInput
        name="fax"
        label="Fax"
        value={company.fax}
        onChange={onChange}
        error={errors.fax}
      />

      <h3>Contato</h3>
      <TextInput
        name="title"
        label="Título"
        value={company.contact.title}
        onChange={onChange}
        error={errors.title}
      />
      <TextInput
        name="name"
        label="Nome"
        value={company.contact.name}
        onChange={onChange}
        error={errors.name}
      />
      <TextInput
        name="position"
        label="Cargo"
        value={company.contact.position}
        onChange={onChange}
        error={errors.position}
      />
      <TextInput
        name="phone"
        label="Fixo"
        value={company.contact.phone}
        onChange={onChange}
        error={errors.phone}
      />
      <TextInput
        name="cellphone"
        label="Celular"
        value={company.contact.cellphone}
        onChange={onChange}
        error={errors.cellphone}
      />
      <TextInput
        name="email"
        label="E-mail"
        value={company.contact.email}
        onChange={onChange}
        error={errors.email}
      />

      <SelectInput
        name="sendMethod"
        label="Método de envio"
        value={company.sendMethod || ""}
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

CompanyForm.propTypes = {
  products: PropTypes.array.isRequired,
  company: PropTypes.object.isRequired,
  sendMethods: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CompanyForm;
