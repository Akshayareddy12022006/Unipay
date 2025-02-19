import ImageCard from "./ui/cardItem";

const Card = () => {
  return (
        <div className="flex flex-row justify-between w-[70%] flex-wrap">
            <ImageCard
            title="Convert"
            imageSrc="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            linkTo="/ConversionPage"
        />
        <ImageCard
            title="Analysis"
            imageSrc="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            linkTo="/details"
        />
        <ImageCard
            title="Statastics"
            imageSrc="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            linkTo="/StatsPage"
        />
        </div>
  );
};

export default Card;