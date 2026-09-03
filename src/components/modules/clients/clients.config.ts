import inDept from '@/assets/clients/InDept.svg'
import HigerFit from '@/assets/clients/HigerFit.svg'
import sentinal from '@/assets/clients/Sentinal.svg'
import sunset from '@/assets/clients/Sunset.svg'
import forSale from '@/assets/clients/forSale.svg'
import happyHome from '@/assets/clients/happyHome.svg'



interface ClientsInfo {
    name:string,
    icon:string,
    link:string,
}


export const clients:ClientsInfo[] = [
    {
        name:'InDept Consulting',
        icon:inDept.src,
        link:'#',
    },
    {
        name:'Higer Fit',
        icon:HigerFit.src,
        link:'#',
    },
    {
        name:'Sentinal Consulting',
        icon:sentinal.src,
        link:'#',
    },
    {
        name:'Happy Home',
        icon:happyHome.src,
        link:'#',
    },
    {
        name:'ForSale',
        icon:forSale.src,
        link:'#',
    },
    {
        name:'Sunset Realty',
        icon:sunset.src,
        link:'#',
    },
]