const companies = [
  {
    id: 1,
    name: "Empresa 1",
    slug: "empresa-1",
    razaoSocial: "Razao Social da Empresa 1",
    address: "logradouro ",
    postalCode: "12345-678",
    city: "Cidade 1",
    state: "UF 1",
    phone: "2112345678",
    fax: "2112345678",
    contactTitle: "Sr.",
    contactName: "contact Empresa 1",
    contactPosition: "position 1",
    contactPhone: "2112345678",
    contactCellPhone: "21123456789",
    contactEmail: "email@empresa1.com",
    financialContactTitle: "Sr.",
    financialContactName: "contact Financeiro Empresa 1",
    financialContactPosition: "position Financeiro 1",
    financialContactPhone: "2112345678",
    financialContactCellPhone: "21123456789",
    financialContactEmail: "emailfin@empresa1.com",
    products: [{ id: 1 }, { id: 2 }, { id: 3 }],
    sendMethod: 1
  },
  {
    id: 2,
    name: "Empresa 2",
    slug: "empresa-2",
    razaoSocial: "Razao Social da Empresa 2",
    address: "logradouro ",
    postalCode: "12345-678",
    city: "Cidade 2",
    state: "UF 2",
    phone: "2112345678",
    fax: "2112345678",
    contactTitle: "Sr.",
    contactName: "contact Empresa 2",
    contactPosition: "position 2",
    contactPhone: "2112345678",
    contactCellPhone: "21123456789",
    contactEmail: "email@empresa2.com",
    financialContactTitle: "Sr.",
    financialContactName: "contact Financeiro Empresa 2",
    financialContactPosition: "position Financeiro 2",
    financialContactPhone: "2112345678",
    financialContactCellPhone: "21123456789",
    financialContactEmail: "emailfin@empresa2.com",
    products: [{ id: 1 }, { id: 2 }, { id: 3 }],
    sendMethod: 1
  },
  {
    id: 3,
    name: "Empresa 3",
    slug: "empresa-3",
    razaoSocial: "Razao Social da Empresa 3",
    address: "logradouro ",
    postalCode: "12345-678",
    city: "Cidade 3",
    state: "UF 3",
    phone: "2112345678",
    fax: "2112345678",
    contactTitle: "Sr.",
    contactName: "contact Empresa 3",
    contactPosition: "position 3",
    contactPhone: "2112345678",
    contactCellPhone: "21123456789",
    contactEmail: "email@empresa3.com",
    financialContactTitle: "Sr.",
    financialContactName: "contact Financeiro Empresa 3",
    financialContactPosition: "position Financeiro 3",
    financialContactPhone: "2112345678",
    financialContactCellPhone: "21123456789",
    financialContactEmail: "emailfin@empresa3.com",
    products: [{ id: 1 }, { id: 2 }, { id: 3 }],
    sendMethod: 1
  },
  {
    id: 4,
    name: "Empresa 4",
    slug: "empresa-4",
    razaoSocial: "Razao Social da Empresa 4",
    address: "logradouro ",
    postalCode: "12345-678",
    city: "Cidade 4",
    state: "UF 4",
    phone: "2112345678",
    fax: "2112345678",
    contactTitle: "Sr.",
    contactName: "contact Empresa 4",
    contactPosition: "position 4",
    contactPhone: "2112345678",
    contactCellPhone: "21123456789",
    contactEmail: "email@empresa4.com",
    financialContactTitle: "Sr.",
    financialContactName: "contact Financeiro Empresa 4",
    financialContactPosition: "position Financeiro 4",
    financialContactPhone: "2112345678",
    financialContactCellPhone: "21123456789",
    financialContactEmail: "emailfin@empresa4.com",
    products: [{ id: 1 }, { id: 2 }, { id: 3 }],
    sendMethod: 2
  }
];

const products = [
  {
    id: 1,
    name: "Seguros - Eventos",
    type: "report"
  },
  {
    id: 2,
    name: "Seguros - Mercado",
    type: "report"
  },
  {
    id: 3,
    name: "Clipping - Seguros",
    type: "clipping"
  },
  {
    id: 4,
    name: "Clipping - Saúde",
    type: "clipping"
  }
];

const newCompany = {
  id: null,
  name: "",
  slug: "",
  razaoSocial: "",
  address: "",
  postalCode: "",
  city: "",
  state: "",
  phone: "",
  fax: "",
  contactTitle: "",
  contactName: "",
  contactPosition: "",
  contactPhone: "",
  contactCellPhone: "",
  contactEmail: "",
  financialContactTitle: "",
  financialContactName: "",
  financialContactPosition: "",
  financialContactPhone: "",
  financialContactCellPhone: "",
  financialContactEmail: "",
  products: [],
  sendMethod: null
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCompany,
  companies,
  products
};
