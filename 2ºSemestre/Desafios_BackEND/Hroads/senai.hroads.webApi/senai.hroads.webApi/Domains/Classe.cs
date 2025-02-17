﻿using System;
using System.Collections.Generic;

#nullable disable

namespace senai.hroads.webApi_.Domains
{
    public partial class Classe
    {
        public Classe()
        {
            Personagems = new HashSet<Personagem>();
        }

        public short IdClasse { get; set; }
        public string DescricaoClasse { get; set; }

        public virtual ICollection<Personagem> Personagems { get; set; }
    }
}
