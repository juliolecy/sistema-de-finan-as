import {TiSocialLinkedinCircular} from 'react-icons/ti'
import {AiFillGithub} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {TbBrandTelegram} from 'react-icons/tb'
import * as k from './styles'

export const Footer = ()=>{
    return(
        <k.Container>
            <k.LogoContainer>
                <k.Logo>JLINS</k.Logo>
            </k.LogoContainer>

            <k.RightsContainer>
                <k.RightsQuote>JLins © 2022 All rights reserved.</k.RightsQuote>
            </k.RightsContainer>

            <k.SocialMediaContainer>
            <k.SMLink target='_blank' href='https://www.linkedin.com/in/jlins/'> <TiSocialLinkedinCircular size={50} style={{color: '#fff'}} /></k.SMLink> 
            <k.SMLink target='_blank' href='https://github.com/juliolecy'><AiFillGithub size={40} style={{color: '#fff'}} /></k.SMLink>
            <k.SMLink target='_blank' href='https://t.me/JLins19'><TbBrandTelegram size={40} style={{color: '#fff'}} /></k.SMLink>
            <k.SMLink target='_blank' href='https://api.whatsapp.com/send?phone=5521986739047&text=Ol%C3%A1%2C%20me%20envie%20uma%20mensagem'><BsWhatsapp size={35} style={{color: '#fff'}} /></k.SMLink>

            </k.SocialMediaContainer>

        </k.Container>
    )
}