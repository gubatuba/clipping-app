const companies = [
  {
    id: 1,
    name: "Empresa 1",
    slug: "empresa-1",
    razaoSocial: "Razao Social da Empresa 1",
    fullAddress: {
      address: "logradouro ",
      postalCode: "12345-678",
      city: "Cidade 1",
      state: "UF 1"
    },
    phone: "2112345678",
    fax: "2112345678",
    contact: {
      title: "Sr.",
      name: "contact Empresa 1",
      position: "position 1",
      phone: "2112345678",
      celphone: "21123456789",
      email: "email@empresa1.com"
    },
    financialContact: {
      title: "Sr.",
      name: "contact Financeiro Empresa 1",
      position: "position Financeiro 1",
      phone: "2112345678",
      celphone: "21123456789",
      email: "emailfin@empresa1.com"
    },
    products: [{ id: 1 }, { id: 2 }, { id: 3 }]
  },
  {
    id: 2,
    name: "Empresa 2",
    slug: "empresa-2",
    razaoSocial: "Razao Social da Empresa 2",
    fullAddress: {
      address: "logradouro ",
      postalCode: "12345-678",
      city: "Cidade 2",
      state: "UF 2"
    },
    phone: "2112345678",
    fax: "2112345678",
    contact: {
      title: "Sr.",
      name: "contact Empresa 2",
      position: "position 2",
      phone: "2112345678",
      celphone: "21123456789",
      email: "email@empresa2.com"
    },
    financialContact: {
      title: "Sr.",
      name: "contact Financeiro Empresa 2",
      position: "position Financeiro 2",
      phone: "2112345678",
      celphone: "21123456789",
      email: "emailfin@empresa2.com"
    },
    products: [{ id: 1 }, { id: 2 }, { id: 3 }]
  },
  {
    id: 3,
    name: "Empresa 3",
    slug: "empresa-3",
    razaoSocial: "Razao Social da Empresa 3",
    fullAddress: {
      address: "logradouro ",
      postalCode: "12345-678",
      city: "Cidade 3",
      state: "UF 3"
    },
    phone: "2112345678",
    fax: "2112345678",
    contact: {
      title: "Sr.",
      name: "contact Empresa 3",
      position: "position 3",
      phone: "2112345678",
      celphone: "21123456789",
      email: "email@empresa3.com"
    },
    financialContact: {
      title: "Sr.",
      name: "contact Financeiro Empresa 3",
      position: "position Financeiro 3",
      phone: "2112345678",
      celphone: "21123456789",
      email: "emailfin@empresa3.com"
    },
    products: [{ id: 1 }, { id: 2 }, { id: 3 }]
  },
  {
    id: 4,
    name: "Empresa 4",
    slug: "empresa-4",
    razaoSocial: "Razao Social da Empresa 4",
    fullAddress: {
      address: "logradouro ",
      postalCode: "12345-678",
      city: "Cidade 4",
      state: "UF 4"
    },
    phone: "2112345678",
    fax: "2112345678",
    contact: {
      title: "Sr.",
      name: "contact Empresa 4",
      position: "position 4",
      phone: "2112345678",
      celphone: "21123456789",
      email: "email@empresa4.com"
    },
    financialContact: {
      title: "Sr.",
      name: "contact Financeiro Empresa 4",
      position: "position Financeiro 4",
      phone: "2112345678",
      celphone: "21123456789",
      email: "emailfin@empresa4.com"
    },
    products: [{ id: 1 }, { id: 2 }, { id: 3 }]
  },
  {
    id: 5,
    name: "Empresa 5",
    slug: "empresa-5",
    razaoSocial: "Razao Social da Empresa 5",
    fullAddress: {
      address: "logradouro ",
      postalCode: "12345-678",
      city: "Cidade 5",
      state: "UF 5"
    },
    phone: "2112345678",
    fax: "2112345678",
    contact: {
      title: "Sr.",
      name: "contact Empresa 5",
      position: "position 5",
      phone: "2112345678",
      celphone: "21123456789",
      email: "email@empresa5.com"
    },
    financialContact: {
      title: "Sr.",
      name: "contact Financeiro Empresa 5",
      position: "position Financeiro 5",
      phone: "2112345678",
      celphone: "21123456789",
      email: "emailfin@empresa5.com"
    },
    products: [{ id: 1 }, { id: 2 }, { id: 3 }]
  },
  {
    id: 6,
    name: "Empresa 6",
    slug: "empresa-6",
    razaoSocial: "Razao Social da Empresa 6",
    fullAddress: {
      address: "logradouro ",
      postalCode: "12345-678",
      city: "Cidade 6",
      state: "UF 6"
    },
    phone: "2112345678",
    fax: "2112345678",
    contact: {
      title: "Sr.",
      name: "contact Empresa 6",
      position: "position 6",
      phone: "2112345678",
      celphone: "21123456789",
      email: "email@empresa6.com"
    },
    financialContact: {
      title: "Sr.",
      name: "contact Financeiro Empresa 6",
      position: "position Financeiro 6",
      phone: "2112345678",
      celphone: "21123456789",
      email: "emailfin@empresa6.com"
    },
    products: [{ id: 1 }, { id: 2 }, { id: 3 }]
  },
  {
    id: 7,
    name: "Empresa 7",
    slug: "empresa-7",
    razaoSocial: "Razao Social da Empresa 7",
    fullAddress: {
      address: "logradouro ",
      postalCode: "12345-678",
      city: "Cidade 7",
      state: "UF 7"
    },
    phone: "2112345678",
    fax: "2112345678",
    contact: {
      title: "Sr.",
      name: "contact Empresa 7",
      position: "position 7",
      phone: "2112345678",
      celphone: "21123456789",
      email: "email@empresa7.com"
    },
    financialContact: {
      title: "Sr.",
      name: "contact Financeiro Empresa 7",
      position: "position Financeiro 7",
      phone: "2112345678",
      celphone: "21123456789",
      email: "emailfin@empresa7.com"
    },
    products: [{ id: 1 }, { id: 2 }, { id: 3 }]
  },
  {
    id: 8,
    name: "Empresa 8",
    slug: "empresa-8",
    razaoSocial: "Razao Social da Empresa 8",
    fullAddress: {
      address: "logradouro ",
      postalCode: "12345-678",
      city: "Cidade 8",
      state: "UF 8"
    },
    phone: "2112345678",
    fax: "2112345678",
    contact: {
      title: "Sr.",
      name: "contact Empresa 8",
      position: "position 8",
      phone: "2112345678",
      celphone: "21123456789",
      email: "email@empresa8.com"
    },
    financialContact: {
      title: "Sr.",
      name: "contact Financeiro Empresa 8",
      position: "position Financeiro 8",
      phone: "2112345678",
      celphone: "21123456789",
      email: "emailfin@empresa8.com"
    },
    products: [{ id: 1 }, { id: 2 }, { id: 3 }]
  },
  {
    id: 9,
    name: "Empresa 9",
    slug: "empresa-9",
    razaoSocial: "Razao Social da Empresa 9",
    fullAddress: {
      address: "logradouro ",
      postalCode: "12345-678",
      city: "Cidade 9",
      state: "UF 9"
    },
    phone: "2112345678",
    fax: "2112345678",
    contact: {
      title: "Sr.",
      name: "contact Empresa 9",
      position: "position 1",
      phone: "2112345678",
      celphone: "21123456789",
      email: "email@empresa9.com"
    },
    financialContact: {
      title: "Sr.",
      name: "contact Financeiro Empresa 9",
      position: "position Financeiro 9",
      phone: "2112345678",
      celphone: "21123456789",
      email: "emailfin@empresa9.com"
    },
    products: [{ id: 1 }, { id: 2 }, { id: 3 }]
  },
  {
    id: 10,
    name: "Empresa 10",
    slug: "empresa-10",
    razaoSocial: "Razao Social da Empresa 10",
    fullAddress: {
      address: "logradouro ",
      postalCode: "12345-678",
      city: "Cidade 10",
      state: "UF 10"
    },
    phone: "2112345678",
    fax: "2112345678",
    contact: {
      title: "Sr.",
      name: "contact Empresa 10",
      position: "position 10",
      phone: "2112345678",
      celphone: "21123456789",
      email: "email@empresa10.com"
    },
    financialContact: {
      title: "Sr.",
      name: "contact Financeiro Empresa 10",
      position: "position Financeiro 10",
      phone: "2112345678",
      celphone: "21123456789",
      email: "emailfin@empresa10.com"
    },
    products: [{ id: 1 }, { id: 2 }, { id: 3 }]
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
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
  fullAddress: {
    address: "",
    postalCode: "",
    city: "",
    state: ""
  },
  phone: "",
  fax: "",
  contact: {
    title: "",
    name: "",
    position: "",
    phone: "",
    celphone: "",
    email: ""
  },
  financialContact: {
    title: "",
    name: "",
    position: "",
    phone: "",
    celphone: "",
    email: ""
  },
  products: []
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCompany,
  companies,
  authors,
  products
};
