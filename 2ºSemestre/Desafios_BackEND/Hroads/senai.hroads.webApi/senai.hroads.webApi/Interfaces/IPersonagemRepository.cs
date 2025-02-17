﻿using senai.hroads.webApi_.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai.hroads.webApi_.Interfaces
{
    interface IPersonagemRepository
    {
        List<Personagem> Listar();

        Personagem BuscarPorId(int idPersonagem);

        void Cadastrar(Personagem novoPesonagem);

        void Atualizar(short idPersonagem, Personagem PersonagemAtualizado);

        void Deletar(int idPersonagem);
    }
}
