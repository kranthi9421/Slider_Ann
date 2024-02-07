
type Props = {
    icon: string;
    title:string
}

const SliderCard = ({icon, title}:Props) => {
  return (
    <div className='card transition ease-in-out  scale-[0.9] h-[300px] shadow-[0_0_10px_0_#d4d4d4] flex justify-center items-center flex-col'>
      <span className="w-[100px] h-[100px] block">
        <img src={icon} className="w-full h-full transition ease-in-out " />
      </span>
      <h3 className="text-[24px] font-bold">{title}</h3>
    </div>
  )
}

export default SliderCard
