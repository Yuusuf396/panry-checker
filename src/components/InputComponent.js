// import React from 'react'
"use client";
import { useState } from "react";
import { useEffect } from "react";

import { useFirebase } from "../context";
import { collection, addDoc } from "firebase/firestore";

import styles from "./InputComponent.module.css";
const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");
  // const [items,setItems]=useState([])
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [search, setSearch] = useState("");

  // const handleSearch=()=>{
  //     console.log(inputValue.trim());
  //     // if (inputValue.trim() !== '') {
  //     //     console.log(setItems([...items, inputValue]));
  //     //     setInputValue(''); // Clear the input field after adding
  //     //   }
  //     for (let i = 0; i < items.length; i++) {
  //         if (search in items){
  //             console.log(items[i]);
  //         }

  //       }
  // }
  const { db, analytics } = useFirebase();
  const handleDeleteItem = (itemToDelete) => {
    setItems(items.filter((item) => item !== itemToDelete));
  };
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // Filter the items based on the search query
  const filteredItems = items.filter((item) =>
    //  item.toLowerCase().startsWith(search.toLowerCase())
    item.toLowerCase().includes(search.toLowerCase())
  );

  // const handleAddItem=async ()=>{
  //     console.log(items);
  //     if (inputValue.trim() !== '') {
  //         console.log(inputValue.trim());
  //         setItems([...items, inputValue]);
  //         console.log([...items, inputValue]);
  //         // localStorage.setItem("item",[...items, inputValue]);
  //         setInputValue(''); // Clear the input field after adding
  //       }

  // try {
  //     await addDoc(collection(db, "items"), { name: inputValue });
  //     setInputValue("");
  //     console.log("Item added successfully");

  //     // Log event to Firebase Analytics
  //     if (analytics) {
  //       analytics.logEvent("add_item", {
  //         item_name: items,
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error adding item:", error);
  //   }
  // }

  const handleAddItem = async () => {
    if (inputValue.trim() === "") return;

    try {
      await addDoc(collection(db, "items"), { name: inputValue });
      setItems((items) => [...items, inputValue]);
      setInputValue("");
      console.log("Item added successfully");

      // Log event to Firebase Analytics
      if (analytics) {
        analytics.logEvent("add_item", { item_name: inputValue });
      }
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };
  useEffect(() => {
    console.log("Items:", items);
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search For item"
        className={styles.input}
      />
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter an item"
          className={styles.input}
        />
        <button className={styles.button} onClick={handleAddItem}>
          Add
        </button>
      </div>
      <ul className={styles.list}>
      

        {search
          ? filteredItems.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))
          : items.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
                <button
                  onClick={() => handleDeleteItem(item)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default InputComponent;
