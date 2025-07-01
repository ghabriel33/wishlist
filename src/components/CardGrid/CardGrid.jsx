import { Card } from "../Card/Card";
import styles from "./CardGrid.module.css";

export const CardGrid = () => {
    return (
    <div className={styles.grid}><Card name="Carreta"
    description="Roletar com a familia..."
    image="https://onlycars.com.br/wp-content/uploads/2024/08/civic-g10-rebaixado-branco-e1722900268269-280x210.jpg"
  />
  <Card name="Robozão"
          description="Para dar um pinote rapido..."
          image="https://tse4.mm.bing.net/th/id/OIP.67O2LPKu782qrCNeJvOsPQHaJQ?cb=thvnext&w=1080&h=1350&rs=1&pid=ImgDetMain&o=7&rm=3"
        />
    </div>
    );
};