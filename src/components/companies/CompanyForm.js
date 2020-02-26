import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import ProductCheckList from "../products/ProductCheckList";

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
        name="address"
        label="Endereço"
        value={company.address}
        onChange={onChange}
        error={errors.address}
      />
      <TextInput
        name="postalCode"
        label="CEP"
        value={company.postalCode}
        onChange={onChange}
        error={errors.postalCode}
      />
      <TextInput
        name="city"
        label="Cidade"
        value={company.city}
        onChange={onChange}
        error={errors.city}
      />
      <TextInput
        name="state"
        label="Estado"
        value={company.state}
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
        name="contactTitle"
        label="Título"
        value={company.contactTitle}
        onChange={onChange}
        error={errors.contactTitle}
      />
      <TextInput
        name="contactName"
        label="Nome"
        value={company.contactName}
        onChange={onChange}
        error={errors.contactName}
      />
      <TextInput
        name="contactPosition"
        label="Cargo"
        value={company.contactPosition}
        onChange={onChange}
        error={errors.contactPosition}
      />
      <TextInput
        name="contactPhone"
        label="Fixo"
        value={company.contactPhone}
        onChange={onChange}
        error={errors.contactPhone}
      />
      <TextInput
        name="contactCellPhone"
        label="Celular"
        value={company.contactCellPhone}
        onChange={onChange}
        error={errors.contactCellPhone}
      />
      <TextInput
        name="contactEmail"
        label="E-mail"
        value={company.contactEmail}
        onChange={onChange}
        error={errors.contactEmail}
      />

      <h3>Contato Financeiro</h3>
      <TextInput
        name="financialContactTitle"
        label="Título"
        value={company.financialContactTitle}
        onChange={onChange}
        error={errors.financialContactTitle}
      />
      <TextInput
        name="financialContactName"
        label="Nome"
        value={company.financialContactName}
        onChange={onChange}
        error={errors.financialContactName}
      />
      <TextInput
        name="financialContactPosition"
        label="Cargo"
        value={company.financialContactPosition}
        onChange={onChange}
        error={errors.financialContactPosition}
      />
      <TextInput
        name="financialContactPhone"
        label="Fixo"
        value={company.financialContactPhone}
        onChange={onChange}
        error={errors.financialContactPhone}
      />
      <TextInput
        name="financialContactCellPhone"
        label="Celular"
        value={company.financialContactCellPhone}
        onChange={onChange}
        error={errors.financialContactCellPhone}
      />
      <TextInput
        name="financialContactEmail"
        label="E-mail"
        value={company.financialContactEmail}
        onChange={onChange}
        error={errors.financialContactEmail}
      />

      <ProductCheckList products={products} />

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
