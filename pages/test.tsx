import { useState, useEffect } from 'react';
import React from "react";
class Korean {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.country = 'Korea';
  }

  addAge(age) {  
    return this.age + age;
  }
}

function Test () {

  // make Korean object 
  const korean = new Korean('John', 20);
  console.log(korean.name); // John
  console.log(korean.age); // 20

  const jsxElement = (
    <div>
      <h1>Test</h1>
    </div>
  );
  return jsxElement
};

export default Test;