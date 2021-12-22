import TitlePage from './../../components/TitlePage';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function ClienteForm() {
    const navigate = useNavigate();
    let { id } = useParams();

    const voltarLista = () =>{

        navigate('/cliente/lista')
        
    };

    return (
        <>
            <TitlePage title={"Cliente Detalhes" + (id !== undefined ? id : '')}>
                <Button variant="outline-secondary" onClick={voltarLista}>
                <i className="fa fa-reply me-2"></i>
                    Voltar
                </Button>
            </TitlePage>
            <div></div>     

        </>
    )
}
