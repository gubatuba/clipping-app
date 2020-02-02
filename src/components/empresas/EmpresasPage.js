import React from "react";
import { connect } from "react-redux";
import * as empresaActions from "../../redux/actions/EmpresaActions";
import PropTypes from "prop-types";
class EmpresasPage extends React.Component {
  state = {
    empresa: {
      nome: ""
    }
  };

  handleChange = event => {
    const empresa = { ...this.state.empresa, nome: event.target.value };
    this.setState({ empresa });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(empresaActions.createEmpresa(this.state.empresa));
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Empresas</h2>
        <h3>Adicionar empresa</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.empresa.nome}
        />
        <input type="submit" value="Salvar" />
        {this.props.empresas.map(empresa => (
          <div key={empresa.nome}>{empresa.nome}</div>
        ))}
      </form>
    );
  }
}

EmpresasPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  empresas: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    empresas: state.empresas
  };
}

export default connect(mapStateToProps)(EmpresasPage);
