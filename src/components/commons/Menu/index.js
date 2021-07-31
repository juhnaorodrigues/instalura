import React from "react";
import { Logo } from "../../../theme/Logo";
import { MenuWrapper } from "./styles/MenuWrapper";

export default function Menu (){

    const links = [
        {
            texto: 'Home',
            url: '/'
        },
        {
            texto: 'Perguntas frequentes',
            url: '/faq'
        },
        {
            texto: 'Sobre',
            url: '/sobre'
        },

    ]

    return (
        <MenuWrapper> 
            <MenuWrapper.LeftSide>
                <Logo/>
            </MenuWrapper.LeftSide>

            <MenuWrapper.CentralSide>
                    {links.map((item)=>{
                        return (
                            <li key={item.url}>
                                <a href={item.url}>{item.texto}</a>
                            </li>
                        )
                    })}
            </MenuWrapper.CentralSide>
            
            <MenuWrapper.RightSide>
                <a href="/signup">Entrar</a>
                <button>Cadastrar</button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
    
}