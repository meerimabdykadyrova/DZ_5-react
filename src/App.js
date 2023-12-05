import React from "react";
import {useState} from "react";
import './Form.css';


export default function Form () {
  const [form, setForm] = useState({
    firstName: 'Artem',
    lastName: 'Lee',
    email: 'artemlee1234@gmail.com'
  });

  return(
      <>
        <form>
          <label>
            First Name:
            <input value={form.firstName} onChange={e => {setForm({...form, firstName: e.target.value})}}/>
          </label>

          <label>
            Last Name:
            <input value={form.lastName} onChange={e => {setForm({...form, lastName: e.target.value})}}/>
          </label>

          <label>
            Email.com:
            <input value={form.email} onChange={e => {setForm({...form, email: e.target.value})}}/>
          </label>

          <p>
            {form.firstName} {''}
            {form.lastName} {''}
            ({form.email}) {''}
          </p>
        </form>
      </>
  )
}