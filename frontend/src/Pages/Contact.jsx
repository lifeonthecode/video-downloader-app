import { useState } from "react";
import axios from "axios";
// import { api } from "../lib/axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [resp, setResp] = useState(null);
    console.log('form: ', form)

    const onChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResp(null);

        try {
            const { data } = await axios.post(`http://localhost:5000/api/contact`, form, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // const { data } = await api.post(`/api/contact`, form);
            setResp({
                success: data.ok,
                message: data.message || (data.ok ? "Message sent!" : "Failed"),
            });
            if (data.ok) setForm({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error(error)
            setResp({ success: false, message: "Something went wrong!" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto px-4 min-h-[calc(100vh-277px)] py-10">
            <h1 className="text-3xl font-bold mb-7 text-black dark:text-white capitalize text-center">Contact</h1>
            <form onSubmit={onSubmit} className="space-y-5">
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your Name"
                    required
                    className="w-full h-[56px] pl-2 border rounded dark:border-white text-black dark:text-white"
                />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Your Email"
                    required
                    className="w-full h-[56px] pl-2 border rounded dark:border-white text-black dark:text-white"
                />
                <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="Subject"
                    required
                    className="w-full h-[56px] pl-2 border rounded dark:border-white text-black dark:text-white"
                />
                <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Your Message"
                    required
                    className="w-full min-h-[200px] pl-2 border rounded dark:border-white text-black dark:text-white"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-xl font-medium capitalize text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>

            {resp && (
                <div
                    className={`mt-4 p-3 rounded ${resp.success
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}
                >
                    {resp.message}
                </div>
            )}
        </div>
    );
}
