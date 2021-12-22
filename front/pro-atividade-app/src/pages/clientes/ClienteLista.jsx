import { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import TitlePage from "../../components/TitlePage";
import { useNavigate } from 'react-router-dom';

const clientes = [
  {
    id: 1,
    nome: "Microsoft",
    responsavel: "Otto",
    contato: "997871609",
    situacao: "Ativo",
  },
  {
    id: 2,
    nome: "Amazon",
    responsavel: "Willian",
    contato: "27888888",
    situacao: "Desativado",
  },
  {
    id: 3,
    nome: "Google",
    responsavel: "Torino",
    contato: "11111111",
    situacao: "Em Análise",
  },
  {
    id: 4,
    nome: "Facebook",
    responsavel: "Kevin",
    contato: "31997871609",
    situacao: "Ativo",
  },
  {
    id: 5,
    nome: "DuckDuckGo",
    responsavel: "Anonymous",
    contato: "00226548",
    situacao: "Ativo",
  },
];

export default function ClienteLista() {
    
    const navigate = useNavigate();

    const [termoBusca, setTermoBusca] = useState('');

    const handleInputChange = (e) =>{
        setTermoBusca(e.target.value);       
    };

    const clientesFiltrados = clientes.filter((cliente) =>{
           
      return(
        Object.values(cliente)
              .join(' ')
              .toLocaleLowerCase()
              .includes(termoBusca.toLocaleLowerCase())
      );
        // return cliente.nome.toLocaleLowerCase().indexOf(termoBusca) !== -1;     
    } );
    const novoCliente = () =>{

      navigate('/cliente/detalhe')
      
    };
    return (
        <>
        <TitlePage title="Cliente Lista">
            <Button variant="outline-secondary" onClick={novoCliente}>
              <i className="fa fa-plus me-2"></i>
                Novo Cliente
            </Button>
        </TitlePage>
          
        <InputGroup className="mt-3 mb-3">
            <InputGroup.Text>Buscar:</InputGroup.Text>
            <FormControl
                onChange={handleInputChange}
                placeholder="Buscar por nome do cliente"
            />
        </InputGroup>
        <table className="table table-striped table-hover">
            <thead className="table-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Responsável</th>
                <th scope="col">Contato</th>
                <th scope="col">Situação</th>
                <th scope="col">Opções</th>
            </tr>
            </thead>
            <tbody>
            {clientesFiltrados.map((cliente) => (
                <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.responsavel}</td>
                <td>{cliente.contato}</td>
                <td>{cliente.situacao}</td>
                <td>
                    <div>
                    <button className="btn btn-sm btn-outline-primary me-2" 
                            onClick={() => navigate(
                              `/cliente/detalhe/${cliente.id}`
                            )}>
                        <i className="fas fa-user-edit me-2"></i>
                        Editar
                    </button>
                    <button className="btn btn-sm btn-outline-danger me-2">
                        <i className="fas fa-user-times me-2"></i>
                        Desativar
                    </button>
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    );
}
