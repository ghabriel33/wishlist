import { Card } from "../Card/Card";
import styles from "./CardGrid.module.css";

export const CardGrid = ({wishs, handleDlete}) => {
  
    return (
    <div className={styles.grid}>
      {wishs.map((wish, index) => (
        <Card 
        key={`${wish.name}-${index}`}
        name={wish.name}
        description={wish.description}
        image={wish.urlImage}
        date={wish.date}
        onDelete={() => handleDlete(index)}
        />
      ))}
    </div>
    );
};