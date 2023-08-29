import React, { useState, useEffect } from "react";
import moment from 'moment';
interface User {
  employee_id: number;
  first_name: string;
  last_name: string;
  hourly_pay: number;
  job: string;
  hire_date: string;
}

export default function Login() {
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
  const formatDate = (date: string) => {
    return moment(date).format('YYYY-MM-DD');
  }
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
            {tableHead.map((th: string, idx: number) => {
              return <th key={idx}>{th}</th>;
            })}
            </tr>
          </thead>
          <tbody>
            {data.map((user: User, idx: number) => (
              <tr key={idx}>
                <td>{user.employee_id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.hourly_pay}</td>
                <td>{user.job}</td>
                
                <td>{formatDate(user.hire_date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
