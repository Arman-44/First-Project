
interface FigurePropsType {
    img: string,
    title: string,
}



export default function FiguresCard({ img, title }: FigurePropsType) {

    return (
        <>
            <article className="flex flex-col items-center justify-center gap-4">
                <img
                    className="w-37 h-37 relative top-0 left-0"
                    src={img} alt="circle Figure img"
                />
                <h2>{title}</h2>
            </article>
        </>
    )
}