import { React ,useState } from "react";
import "../CSS/Form.css"

export default function FORM() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setIsError(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.email || !formData.phone || !formData.message) {
            setIsError(true);
        } else {
            alert("Form submitted successfully!");
            setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    {isError && !formData.firstName && <p className="error">Please fill this field</p>}
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                    {isError && !formData.lastName && <p className="error">Please fill this field</p>}
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    {isError && !formData.email && <p className="error">Please fill this field</p>}
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    {isError && !formData.phone && <p className="error">Please fill this field</p>}
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
                    {isError && !formData.message && <p className="error">Please fill this field</p>}
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

