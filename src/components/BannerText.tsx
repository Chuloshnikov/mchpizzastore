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
        <p className='text-sm font-bold leading-5'>
            {description}
        </p>
        <a href="#products" className='bg-red-500 text-sm cursor-pointer
        text-white font-semibold max-w-[87px] whitespace-nowrap
        px-2 py-1 shadow-bannerShadow hover:scale-105 duration-300'
        >
        {btnText}
        </a>
    </div>
  )
}

export default BannerText;