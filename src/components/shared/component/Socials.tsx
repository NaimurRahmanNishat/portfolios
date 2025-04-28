import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

interface Props{
    icon:React.ReactNode;
    path:string;
}

const socials:Props[]=[
    {
        icon:<FaGithub/>,
        path:"https://github.com/NaimurRahmanNishat?tab=repositories",
    },
    {
        icon:<FaLinkedin/>,
        path:"https://www.linkedin.com/in/naimur-rahman-11a621210/",
    },
    {
        icon:<FaFacebook/>,
        path:"https://www.facebook.com/naimurrahmannishat06",
    },
    {
        icon:<FaTwitter/>,
        path:"https://x.com/naimurrahmun34",
    },
];

interface socialProps{
    containerStyles:string;
    iconStyles:string;
}

const Socials = ({containerStyles,iconStyles}:socialProps) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index)=>{
            return(
                <Link key={index} href={item.path} className={iconStyles} target='_blank'>
                    {item.icon}
                </Link>
            );
        })}
    </div>
  )
}

export default Socials;