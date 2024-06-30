import React from "react";
import './style.css'
const Table = ({ data }) => {
  return (
      <table >
        <tbody>
          {Object.keys(data).map((key, i) => (
            <tr key={i}>
              <td> {key}</td>
              <td> {data[key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default Table;
