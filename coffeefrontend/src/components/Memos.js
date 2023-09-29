import { useState, useEffect } from "react";

const Memos = (state) => {
    const [memos, setMemos] = useState([]);
    const { contract } = state;

    useEffect(() => {
        const memosManager = async() => {
            const {contract} = state;
            const memos = await contract.getMemos();
        }
    })
};

export default Memos;