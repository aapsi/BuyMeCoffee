import { useState, useEffect } from "react";

const Memos = (state) => {
    const [memos, setMemos] = useState([]);
    const { contract } = state;

    useEffect(() => {
        const memosMessage = async() => {
            const {contract} = state;
            const memos = await contract.getMemos();
            setMemos(memos);
        }

        contract && memosMessage();
    }, [contract]);
};

export default Memos;