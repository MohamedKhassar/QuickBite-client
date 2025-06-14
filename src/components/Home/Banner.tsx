import Button from "../../UI/Button"

const Banner = () => {
  return (
    <section className="md:my-10 my-6 overflow-hidden rounded-3xl w-full relative group">
      <img loading="lazy" src="/assets/banner.jpg" alt="Banner" className="group-hover:scale-110 duration-300 object-center xl:h-[70vh] lg:h-[60vh] md:h-[50vh] sm:h-[40vh] h-[30vh] w-full object-cover" />
      <div className="absolute inset-0 flex  flex-col w-full h-full bg-black/40 group-hover:backdrop-blur-xs duration-300" />
      <div className="absolute bottom-10 left-1/12 text-white md:space-y-6 space-y-3">
        <h1 className="sm:text-4xl text-2xl md:text-6xl xl:text-8xl lg:text-7xl font-semibold leading-snug">Order your <br />favorite food here</h1>
        <p className="xl:text-lg lg:text-base md:text-sm sm:text-xs text-[9px] font-medium xl:w-[60%] lg:w-[65%] md:w-[75%] sm:w-[80%] w-[90%] text-justify">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is satisfy your craving and elevate your dining experience, one delicious meal at a time.
        </p>
        <Button className="max-sm:text-xs" variant="solid">
          View Menu
        </Button>
      </div>
    </section>
  )
}

export default Banner