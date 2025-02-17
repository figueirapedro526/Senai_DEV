import '../../../src/App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import clogo from '../../assets/img/Logo.png'



export default function Pacientes() {



    const [ListarConsultas, setListarConsultas] = useState([]);



    useEffect(Consultas, []);

    function Consultas() {
        axios('http://192.168.18.9:5000/api/Consultas/paciente', {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
            }
        })
            .then(response => {
                if (response.status === 200) {
                    setListarConsultas(response.data);
                }

            }).catch(erro => console.log(erro));

    };

    // function Consultas() {
    //     axios('http://192.168.3.158:5000/api/Consultas/paciente', {
    //     headers: {
    //         'Authorization': 'Bearer ' + localStorage.getItem('usuario-login')
    //     }
    // })
    //         .then(response => {
    //             if (response.status === 200) {
    //                 setListarConsultas(response.data);
    //             }

    //         }).catch(erro => console.log(erro));

    // };

    return (
        <div>
            <body>
                <div className="App2">

                    <header className="App-header">
                        <div className='sairc'>
                            <nav>
                                <Link to="/"> <a href="">Sair</a></Link>
                            </nav>
                        </div>
                        <img class="clogo" src={clogo} alt="" />
                        <div className="divisaoc">
                            <div className="quadro_azullc">
                                <h1 class="cadastrarl">Lista Pacientes</h1>
                            </div>
                        </div>
                        <div class="LARANJAO">

                            {
                                ListarConsultas.map((consulta) => {

                                    return (
                                        <div key={consulta.idPaciente}>
                                            <div className="brancao">

                                                <section className="lista">
                                                    <ul className="separacao">


                                                        <li>Paciente: {consulta.idPacienteNavigation.nomePaciente}</li>
                                                        <li>Médico: {consulta.idMedicoNavigation.nomeMedico} </li>
                                                        <li>Especialidade:{consulta.idMedicoNavigation.idEspecialidadeNavigation.nomeEspecialidade}</li>
                                                        <li>Data/Hora:{Intl.DateTimeFormat("pt-BR", {
                                                            year: 'numeric', month: 'numeric', day: 'numeric',
                                                            hour: 'numeric', minute: 'numeric', hour12: true
                                                        }).format(new Date(consulta.dataHora))}</li>
                                                        <li>Descrição:{consulta.descricao}</li>
                                                        <li>Situação:{consulta.idSituacaoNavigation.tipoSituacao}</li>


                                                    </ul>

                                                </section>


                                            </div>


                                        </div>
                                    )
                                })

                            }


                        </div>

                    </header>
                </div>

            </body>


        </div>
    )


}