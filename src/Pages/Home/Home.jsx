import React, {  useState } from 'react';
import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com";

export default function Home() {
    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(false);

    async function onButtonClick() {
        setLoading(true);
        try {
            const { data } = await axios.get(`${BASE_URL}/users`);
            setItems(data);
            setLoading(false);
        } catch (error) {
            alert(error.message);
            setLoading(false);
        }
    }

    return isLoading ? (<div class="loader"></div>) : (
        <div>
            <h1>Welcome to Home Page!</h1>
            <button onClick={onButtonClick}>
                Fetch Records
            </button>

            <ul className="name_list">
                {items.map((item) => (
                    <li key={item.id}>
                        <input type="checkbox" checked={item.name.includes('u') ? true : false} />
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
