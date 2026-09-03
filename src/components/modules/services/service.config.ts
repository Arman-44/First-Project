import bgSEO from '@/assets/bg-services/bg-seo.svg'
import bgSmm from '@/assets/bg-services/bg-smm.svg'
import bgResearch from '@/assets/bg-services/bg-research.svg'
import bgTraffic from '@/assets/bg-services/bg-traffic.svg'
import bgContentPr from '@/assets/bg-services/bg-content-pr.svg'


interface ServiceNavType {
    name: string,
    change: string,
}


export const serviceNav: ServiceNavType[] = [
    {
        name: 'Social Media',
        change: 'sotial',
    },
    {
        name: 'SEO',
        change: 'seo',
    },
    {
        name: 'Research',
        change: 'research',
    },
    {
        name: 'Content & PR',
        change: 'content',
    },
    {
        name: 'Payed Traffic',
        change: 'payed',
    },
]

interface ServiceContetType {
    change:string,
    title:string,
    text:string,
    image:string,
    reverse?:string,
}

export const serviceContent:ServiceContetType[] = [
        {
            change:'seo',
            title:'Search Engine Optimization',
            text:'Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing. Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem in tristique.',
            image:bgSEO,
        },  
        {
            change:'research',
            title:'Research Service',
            text:'Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget. ',
            image:bgResearch,
            reverse:'flex-row-reverse',
        },  
        {
            change:'content',
            title:'Content & PR Service',
            text:'Consequat pharetra elit posuere fringilla luctus sit. Curabitur accumsan fermentum magna amet. Sed nec amet posuere tellus pellentesque vitae. Pulvinar nulla sem risus diam volutpat. Amet, sit aliquet magna in viverra at elit nullam.',
            image:bgContentPr,
        },  
        {
            change:'payed',
            title:'Payed Traffic Management',
            text:'Tortor vitae orci hendrerit lobortis eu. Metus aliquam sem tellus ut fringilla purus nisl, consectetur netus. Velit ac feugiat ut mattis dis nullam ultrices amet. Lacus eu neque arcu arcu curabitur at sapien. Id sed aliquet id sit nibh ornare massa scelerisque.',
            image:bgTraffic,
            reverse:'flex-row-reverse',
        },  
]

