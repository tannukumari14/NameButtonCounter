"use client"
import React from 'react'
const World=(props)=> {
  return (
    <>
      <h1>{props.name}</h1>
      <p>Welcome to {props.name}'s world</p>
      <button type="submit" onClick={props.onClick}>{props.color}</button>

    </>
  );
}
export default World;


