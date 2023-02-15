// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Sum = () => {
//   const navigate = useNavigate();
//   const [number1, setNumber1] = useState(0);
//   const [number2, setNumber2] = useState(0);
//   const [total, setTotal] = useState(0);
//   const handleSum = async (e) => {
//     e.preventDefault();
// setTotal(parseInt(number1)+parseInt(number2));
//     const res = await fetch("/createSum", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body:JSON.stringify ({
//         number1,
//         number2,
//         total,
//       }),
      
//     });

//     setNumber1("")
//     setNumber2("")
//     const data = res.json();
//     console.log(data);
// console.log(total);
//     if (res.status === 422 || !data) {
//       window.alert("Invalid Credentials");
//     } else {
      
//       window.alert("Created successfully");
      
//     }
//   };
//   return (
//     <div
//       className="container"
//       style={{
//         backgroundColor: "skyblue",
//         margin: "20px 10px 20px 280px",
//         width: "60%",
//         border: "1px solid black",
//       }}
//     >
//       <form className="row g-3">
//         <div className="row-md-2 my-4">
//           <label htmlFor="email" className="form-label">
//             Number1
//           </label>
//           <input
//           placeholder="enter the number"
//             value={number1}
//             onChange={(e) => setNumber1(e.target.value)}
//             type="text"
//             name="email"
//             className="form-control"
//             id="email"
//           />
//         </div>

//         <div className="row-md-2 my-4">
//           <label htmlFor="password" className="form-label">
//             Number2
//           </label>
//           <input
//           placeholder="enter the number"
//             value={number2}
//             onChange={(e) => setNumber2(e.target.value)}
//             type="text"
//             name="password"
//             className="form-control"
//             id="password"
//           />
//         </div>
//         <div className="row-md-2 my-4">
//           <label htmlFor="password" className="form-label">
//             Total::
//           </label>
//           {/* <input
//             value={total}
//             onChange={() => setTotal(number1 + number2)}
//             type="text"
//             name="password"
//             className="form-control"
//             id="password"
//           /> */}
//           {total}
//         </div>
//         <button type="submit" onClick={handleSum} class="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Sum;


import React, { useState } from 'react';

const Sum = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [steps, setSteps] = useState([]);
const [arr,setArr]=useState([]);
  const handleAddition = () => {
    let sum = '';
    let carry =0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0) {
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
      const result = digit1 + digit2 + carry;
      carry = Math.floor(result / 10);
    setArr([...arr,carry])
      console.log(carry);
     console.log(...arr);
      const step = `${digit1} + ${digit2} + ${carry} = ${result % 10}`;
      sum = `${result % 10}${sum}`;
      setSteps([...steps, step]);
      // console.log(...step);
      i--;
      j--;
    }

    if (carry) {
      setSteps([...steps, `Carry: ${carry}`]);
      sum = `${carry}${sum}`;
      setArr([...arr,carry])
    }

    setSteps([...steps, `Result: ${sum}`]);
  };

  return (
    <div>
      <input value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={handleAddition}>Add</button>
     <p>Hello</p>
      <ul>
      {
arr.map(element => {
  console.log(element);
  return <li>{`the carry is ${element}`}</li>
})
      } 
     
       
      </ul>
    </div>
  );
};

export default Sum;
