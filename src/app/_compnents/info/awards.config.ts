import clutch from '@/assets/awards/clutch.svg'
import upCity from '@/assets/awards/upCity.svg'
import forbes from '@/assets/awards/Forbes.svg'
import topSeo from '@/assets/awards/TopSeo.svg'


interface AwardsInfo {
    name:string,
    icon:string,
    link:string,
}

export const awards:AwardsInfo[] = [
    {
        name:'Top SEO Companies 2020 by Clutch',
        icon:clutch.src,
        link:'#',
    },
    {
        name:'Top Digital Marketing Agency 2019 by UpCity',
        icon:upCity.src,
        link:'#',
    },
    {
        name:'Official Member 2020 by Forbes Agency Council',
        icon:forbes.src,
        link:'#',
    },
    {
        name:'Top SEO Companies 2020 by Top Developers',
        icon:topSeo.src,
        link:'#',
    },
]