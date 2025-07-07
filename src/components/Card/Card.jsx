import styles from "./Card.module.css";

export const Card = ({ name, description, image, onDelete, date }) => {
  const [ano, mes, dia] =date ? date.split("-") : "";
  const converteDate = new Date(ano, mes -1, dia);
  const formateDate = isNaN(converteDate)? ""
  : Intl.DateTimeFormat("pt-br").format(converteDate);


  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{formateDate}</p>
        <p className={styles.description}>{description}</p>
        <button className={styles.delete} onClick={onDelete}>🗑️</button>
      </div>
    </div>
  );
};