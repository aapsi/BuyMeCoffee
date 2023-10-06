import { useState, useEffect } from "react";

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      const { contract } = state;
      if (contract) {
        // Calling the getMemo function from the contract
        const memos = await contract.getMemos();
        const reversedMemos = [...memos].reverse();
        setMemos(reversedMemos);
      }
    };
    contract && memosMessage();
  }, [contract]);

  return (
    < div style={{
      paddingTop: "50px",
        width: "100%",
        overflow: "auto",
      }}>
      <p style={{ textAlign: "center", marginTop: "20px", fontWeight: "bold", color: "white", fontSize: "30"}}>M E S S A G E S</p>
      {memos.map((memo) => {
        return (
          <div
            className="container-fluid d-flex justify-content-center"
            style={{ width: "100%",
                    justifyContent: "center",
                    maxHeight: "200px", // Adjust this value to control the maxHeight
                    overflow: "auto", // Enable scrolling
                   }}
            key={Math.random()}
          >
            <table
              style={{
                marginBottom: "2px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: "rgba(208, 187, 148, 0.7)", // Specify the color with alpha (transparency)
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "2px",
                      width: "200px",
                    }}
                  >
                    {memo.name}
                  </td>
                  <td
                    style={{
                      backgroundColor: "rgba(208, 187, 148, 0.7)",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "auto",
                    }}
                  >
                    {new Date(memo.timestamp * 1000).toLocaleString()}
                  </td>
                  <td
                    style={{
                      backgroundColor: "rgba(208, 187, 148, 0.7)",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "300px",
                    }}
                  >
                    {memo.message}
                  </td>
                  <td
                    style={{
                      backgroundColor: "rgba(208, 187, 148, 0.7)",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "400px",
                    }}
                  >
                    {memo.from}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Memos;

// import { useState, useEffect } from "react";

// const Memos = ({ state }) => {
//   const [memos, setMemos] = useState([]);
//   const { contract } = state;

//   useEffect(() => {
//     const memosMessage = async () => {
//       const { contract } = state;
//       if (contract) {
//         // Calling the getMemo function from the contract
//         const memos = await contract.getMemos();
//         // Create a copy of memos, reverse it, and then set the reversed copy
//         const reversedMemos = [...memos].reverse();
//         setMemos(reversedMemos);
//       }
//     };
//     contract && memosMessage();
//   }, [contract]);

//   return (
//     <div
//       style={{
//         width: "",
//         maxHeight: "200px", // Adjust this value to control the maxHeight
//         overflow: "auto", // Enable scrolling
//         // position: "fixed", // Make the container fixed
//         top: "20px", // Adjust the top position as needed
//         left: "20px", // Optionally adjust the left position
//         right: "20px", // Optionally adjust the right position
//         backgroundColor: "#FFFFFF", // Optionally add a background color
//       }}
//     >
//       <p style={{ textAlign: "center" }}>Messages</p>
//       <div className="container-fluid d-flex justify-content-center">
//         <table
//           style={{
//             marginBottom: "10px",
//           }}
//         >
//           <tbody>
//             {memos.map((memo) => (
//               <tr key={Math.random()}>
//                 <td
//                   style={{
//                     backgroundColor: "#d0bb94",
//                     border: "1px solid white",
//                     borderCollapse: "collapse",
//                     padding: "7px",
//                     width: "200px",
//                   }}
//                 >
//                   {memo.name}
//                 </td>
//                 <td
//                   style={{
//                     backgroundColor: "#d0bb94",
//                     border: "1px solid white",
//                     borderCollapse: "collapse",
//                     padding: "7px",
//                     width: "auto",
//                   }}
//                 >
//                   {new Date(memo.timestamp * 1000).toLocaleString()}
//                 </td>
//                 <td
//                   style={{
//                     backgroundColor: "#d0bb94",
//                     border: "1px solid white",
//                     borderCollapse: "collapse",
//                     padding: "7px",
//                     width: "300px",
//                   }}
//                 >
//                   {memo.message}
//                 </td>
//                 <td
//                   style={{
//                     backgroundColor: "#d0bb94",
//                     border: "1px solid white",
//                     borderCollapse: "collapse",
//                     padding: "7px",
//                     width: "400px",
//                   }}
//                 >
//                   {memo.from}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Memos;
