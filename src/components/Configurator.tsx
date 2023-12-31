import { useCustomization } from "../hooks/useCustomization";

const Configurator = () => {
  const custom = useCustomization();
  if (!custom) return null;
  const {
    material,
    setMaterial,
    legs,
    setLegs,
    chairColor,
    chairColors,
    cushionColor,
    cushionColors,
    setChairColor,
    setCushionColor,
  } = custom;

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title">Chair Material</div>
        <div className="configurator__section__values">
          <div className={`item ${material === "leather" && "item--active"}`}>
            <div onClick={() => setMaterial("leather")} className="item__label">
              Leather
            </div>
          </div>
          <div className={`item ${material === "fabric" && "item--active"}`}>
            <div onClick={() => setMaterial("fabric")} className="item__label">
              Fabric
            </div>
          </div>
        </div>
        <div className="configurator__section__title">Leg Type</div>

        <div className="configurator__section__values">
          <div className={`item ${legs === "classic" && "item--active"}`}>
            <div onClick={() => setLegs("classic")} className="item__label">
              Classic
            </div>
          </div>
          <div className={`item ${legs === "modern" && "item--active"}`}>
            <div onClick={() => setLegs("modern")} className="item__label">
              Modern
            </div>
          </div>
        </div>
        <div className="configurator__section__title">Chair Color</div>

        <div className="configurator__section__values">
          {chairColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.name === chairColor ? "item--active" : ""
              }`}
              onClick={() => setChairColor(item.color)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>

        <div className="configurator__section__title">Cushion Color</div>
        <div className="configurator__section__values">
          {cushionColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.name === cushionColor ? "item--active" : ""
              }`}
              onClick={() => setCushionColor(item.color)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
