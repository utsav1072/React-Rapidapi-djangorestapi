import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext"; // Make sure to import AuthContext from the correct file

function ProfilePage() {
    const { updateProfile } = useContext(AuthContext);
    const [fullName, setFullName] = useState("");
    const [bio, setBio] = useState("");
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call updateProfile function with the updated profile information
            await updateProfile(fullName, bio, image);
        } catch (error) {
            console.error("Failed to update profile:", error);
            // Handle error if needed
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Update Profile</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Full Name:</label>
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Bio:</label>
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)} style={styles.input} />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Image:</label>
                    <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} style={styles.input} />
                </div>
                <button type="submit" style={{ ...styles.button, backgroundColor: "red" }}>Update Profile</button> {/* Change button color to red */}
            </form>
        </div>
    );
}

export default ProfilePage;

const styles = {
    container: {
        backgroundColor: "#1f1f1f", // Updated background color
        color: "#fff",
        padding: "20px",
        borderRadius: "8px",
    },
    heading: {
        marginBottom: "20px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
    },
    inputGroup: {
        marginBottom: "16px",
    },
    label: {
        marginBottom: "8px",
        display: "block",
    },
    input: {
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        padding: "8px",
        width: "100%",
    },
    button: {
        backgroundColor: "#fff",
        color: "white",
        padding: "10px 20px",
        borderRadius: "4px",
        cursor: "pointer",
    },
};
