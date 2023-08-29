import React, { useState, useEffect } from "react";

interface User {
  employee_id: number;
  first_name: string;
  last_name: string;
  hourly_pay: number;
  job: string;
  hire_date: string;
}

function App() {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const tableHead: string[] = [
    "Id",
    "first name",
    "last name",
    "hourly pay",
    "job",
    "hire date",
  ];

  return (
    <>
      <div>
        <table>
          <thead>
            {tableHead.map((th: string, idx: number) => {
              return <th key={idx}>{th}</th>;
            })}
          </thead>
          <tbody>
            {data.map((user: User, idx: number) => (
              <tr key={idx}>
                <td>{user.employee_id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.hourly_pay}</td>
                <td>{user.job}</td>
                <td>{user.hire_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default App;