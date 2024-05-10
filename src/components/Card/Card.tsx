import image from "../../assets/images/bmw.jpg";

type propsType = {
  title: string;
  description: string;
  price: number;
  image: string;
  action: () => void;
  btnText?: string;
};

function Card({
  title,
  description,
  price,
  image,
  action,
  btnText,
}: propsType) {
  return (
    <div className="border-2 p-2 w-fit">
      <img className="w-[340px] h-[230px] rounded-md" src={image} alt="Bmw" />
      <div className="flex flex-col gap-2">
        <h2 className="font-medium text-[25px]">{title}</h2>
        <p className="font-normal text-xl">${price} Milion</p>
        <p className="text-gray-500">{`${description} ${title}`}</p>
        <button
          onClick={action}
          className="bg-blue-500 text-white w-full py-2 rounded-md"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;
