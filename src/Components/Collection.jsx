import image from "../assets/images/springcollection.jpg";
import image2 from "../assets/images/spring2.jpg";
import image3 from "../assets/images/spring3.jpg";
import image4 from "../assets/images/spring4.jpg";
const Collection = () => {
  return (
    <div className="bg-main-light-grey py-20">
      <div className="flex lg:flex-row xl:flex-row sm:flex-col md:flex-col xm:flex-col lg:w-[80%] xl:w-[80%] md:w-full sm:w-full xm:w-full mx-auto bg-white">
        <div className="lg:w-[100%] xl:w-[100%] mx-auto">
          <img src={image} alt="image" className="h-[600px]" />
        </div>

        <div className="py-32 w-[50%] md:w-full sm:w-full xm:w-full ">
          <h1 className="font-f uppercase text-5xl text-center">
            Spring Collection 2025 <br /> Fresh, Floral & Fabulous
          </h1>
          <p className="w-[80%] mx-auto text-center mt-12 text-main-medium-grey line leading-8">
            Step into the season of renewal with our Spring Collection 2025.
            This collection is all about fresh beginnings, featuring soft
            fabrics, pastel hues, and flowy silhouettes.
          </p>
        </div>
      </div>
      <br /> <br />
      <div className="flex lg:flex-row xl:flex-row sm:flex-col md:flex-col xm:flex-col lg:w-[80%] xl:w-[80%] md:w-full sm:w-full xm:w-full mx-auto bg-white">
        <div className="lg:w-[100%] xl:w-[100%] mx-auto">
          <img src={image2} alt="image" className="h-[600px]" />
        </div>

        <div className="py-32 w-[50%] md:w-full sm:w-full xm:w-full ">
          <h1 className="font-f uppercase text-5xl text-center">
            SOFT EDGE: <br /> SPRING’S BOLD NEW BALANCE
          </h1>
          <p className="w-[80%] mx-auto text-center mt-12 text-main-medium-grey line leading-8">
            This season is all about contrasts—structured yet soft, bold yet
            understated, effortless yet curated. Our Spring 2025 Collection
            brings a fresh perspective to the art of dressing.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="flex lg:flex-row xl:flex-row sm:flex-col md:flex-col xm:flex-col lg:w-[80%] xl:w-[80%] md:w-full sm:w-full xm:w-full mx-auto bg-white">
        <div className="lg:w-[100%] xl:w-[100%] mx-auto">
          <img src={image3} alt="image" className="h-[600px]" />
        </div>

        <div className="py-32 w-[50%] md:w-full sm:w-full xm:w-full ">
          <h1 className="font-f uppercase text-5xl text-center">
            THE 2025 SPRING MOOD: <br /> BARELY THERE, FULL IMPACT
          </h1>
          <p className="w-[80%] mx-auto text-center mt-12 text-main-medium-grey line leading-8">
            Forget loud logos and over-the-top statements. This spring,
            understated is the new bold. Our latest collection whispers luxury
            through texture, silhouette, and movement.
          </p>
        </div>
      </div>
      <br /> <br />
      <div className="flex lg:flex-row xl:flex-row sm:flex-col md:flex-col xm:flex-col lg:w-[80%] xl:w-[80%] md:w-full sm:w-full xm:w-full mx-auto bg-white">
        <div className="lg:w-[100%] xl:w-[100%] mx-auto">
          <img src={image4} alt="image" className="h-[600px]" />
        </div>
        <div className="py-32 w-[50%] md:w-full sm:w-full xm:w-full ">
          <h1 className="font-f uppercase text-5xl text-center">
            SPRING 2025: <br /> REDEFINE THE SILHOUETTE
          </h1>
          <p className="w-[80%] mx-auto text-center mt-12 text-main-medium-grey line leading-8">
            It’s time to break free from convention. This season, silhouettes
            take on new life—unexpected proportions, asymmetry, and movement are
            at the core of our design philosophy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collection;
