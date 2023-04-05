interface Props {
    title: string;
    description: string;
    btnText: string;
    className: string;
};

const BannerText = ({ title, description, btnText, className}:Props) => {
  return (
    <div className={className}>
        <h1 className='font-bold text-2xl'>{title}</h1>
        <p className='text-sm leading-5'>
            {description}
        </p>
        <button className='bg-red-500 text-sm
        text-white font-semibold 
        w-24 h-8 shadow-bannerShadow hover:scale-105 duration-300'
        >
        {btnText}
        </button>
    </div>
  )
}

export default BannerText;