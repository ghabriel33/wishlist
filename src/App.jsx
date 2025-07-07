import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./App.module.css";
import { CardGrid } from "./components/CardGrid/CardGrid";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AddItemForm } from "./components/AddItemForm/AddItemForm";

function App() {
  const[wishs, setWishs] = useState ([]);
  const [loading, steloading] = useState(true);
  const [search, setSearch] = useState ("");
  const [form, setForm] = useState({
    name: "",
    description: "",
    urlimage: "",
    date: "",
  });

  const filteredWishs = useMemo(() => {
    if (!search.trim()) {
      return wishs;
    }
      return wishs.filter((wish) =>{
        const searchLower = search.toLowerCase();
        return (
          wish.name.toLowerCase().includes(searchLower) ||
          wish.description.toLowerCase().includes(searchLower)
        );
      });
    });

    const onSearch = useCallback((searchValue) => {
      setSearch(searchValue);
    });
      const onClear = useCallback(() => {
        setSearch("");
      });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateWishs = [...wishs, form];
    setWishs(updateWishs);
    setForm({
      name: "",
      description: "",
      urlimage: "",
      date:"",
    })
  };

  useEffect(() => {
    const saveWishs = localStorage.getItem("userWishs");
    console.log(saveWishs);
    if (saveWishs) {
      try{
      const parsedWishs = JSON.parse(saveWishs);
      console.log("parsed: ", parsedWishs);
      setWishs (parsedWishs);
      } catch (error) {
        console.error (error);
      }
    }
    steloading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("userWishs", JSON.stringify (wishs));
    }
    }, [wishs]);

  const handleDelete = useCallback(
  (indexToDelete) => {
    const updateWishs = wishs.filter((_, index) => index !== indexToDelete);
    setWishs(updateWishs);
  },
  [wishs]
);
  
    return (
    <div className={styles.app}>
      <Header onSearch={onSearch} onClear={onClear} /> 
      <main className={styles.main}>
        <AddItemForm 
        handleSubmit={handleSubmit}
        form={form}
        setForm= {setForm}
        />
        <CardGrid wishs={filteredWishs} handleDlete={handleDelete} />
        </main>
        <Footer />
    </div>
  );
}

export default App;
