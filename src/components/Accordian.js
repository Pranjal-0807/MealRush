import ItemCards from "./ItemCards";

const Accordion = ({ accordianInfo, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(!showItems);
  };

  const { title, itemCards } = accordianInfo?.card?.card;

  return (
    <div className="mb-3 p-6 bg-white shadow-md rounded-lg border-gray-200">
      <div
        onClick={handleClick}
        className="font-semibold flex justify-between items-center cursor-pointer text-black hover:text-gray-600 transition-colors"
      >
        <div className="flex items-center">
          <span className="mr-2">{title}</span>
          <span className="text-sm text-black-500">
            ({itemCards ? itemCards.length : 0})
          </span>
        </div>
        <div className="transform transition-transform duration-200">
          {showItems ? "▲" : "▼"}
        </div>
      </div>

      {showItems && (
        <div className="pt-4">
          <ItemCards cardInfo={itemCards} />
        </div>
      )}
    </div>
  );
};

export default Accordion;
