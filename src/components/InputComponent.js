// import React from 'react'
 'use client';
import { useState } from 'react';

import styles from "./InputComponent.module.css"
import { useEffect } from 'react';
const InputComponent = () => {
    const [inputValue,setInputValue]=useState("")
    const [items,setItems]=useState([])
    const [search,setSearch]=useState("")

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


    const handleSearch = (event) => {
        setSearch(event.target.value);
      };
    
      // Filter the items based on the search query
    const filteredItems = items.filter((item) =>
    //  item.toLowerCase().startsWith(search.toLowerCase())
    item.toLowerCase().includes(search.toLowerCase())

    
    );

    const handleAddItem=()=>{
        console.log(items);
        if (inputValue.trim() !== '') {
            console.log(inputValue.trim());
            setItems([...items, inputValue]);
            console.log([...items, inputValue]);
            // localStorage.setItem( [...items, inputValue]);
            setInputValue(''); // Clear the input field after adding
          }
        

    }
    
    useEffect(() => {
        console.log('Items:', items);
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
        <button  className={styles.button} onClick={handleAddItem}>
          Add
        </button>
      </div>
      <ul className={styles.list}>
      {!search && items.map((item,index)=>(
            <li key={index} className={styles.listItem}>{item}</li>
          ))}

    
      {filteredItems.map((item,index)=>(
            <li key={index} className={styles.listItem}>{item}</li>
          ))}

      </ul>
    </div>
  )
}

export default InputComponent