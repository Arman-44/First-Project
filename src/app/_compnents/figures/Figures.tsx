import FiguresCard from "@/components/ui/FiguresCard"
import imgExperience from '@/assets/figures/circle-progress-experience.svg'
import imgAwards from '@/assets/figures/circle-progress-awards.svg'
import imgProjects from '@/assets/figures/circle-progress-projects.svg'
import imgClients from '@/assets/figures/circle-progress-clients.svg'

interface FiguresType {
    img: string,
    title: string,
}

export const figuresConfig: FiguresType[] = [
    {
        img:imgExperience.src,
        title:'Years of experience'
    },
    {
        img:imgAwards.src,
        title:'Awards'
    },
    {
        img:imgProjects.src,
        title:'Projects'
    },
    {
        img:imgClients.src,
        title:'Happy clients'
    },
]


export default function Figures() {

    return (
        <section className="w-full flex items-center justify-center my-45"> 
            <ul className="flex items-center justify-center gap-12">
                {figuresConfig.map(e => (
                    <li key={e.title}>
                        <FiguresCard img={e.img} title={e.title}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}