import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext"; // Make sure to import AuthContext from the correct file
import { f, s, t, fo } from '../utils/constants'; // Importing image constants

function ProfilePage() {
    const { updateProfile } = useContext(AuthContext);
    const [fullName, setFullName] = useState("");
    const [bio, setBio] = useState("");
    const [selectedImage, setSelectedImage] = useState(""); // State to track selected image

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Call updateProfile function with the updated profile information
            await updateProfile(fullName, bio, selectedImage); // Use selectedImage instead of image
        } catch (error) {
            console.error("Failed to update profile:", error);
            // Handle error if needed
        }
    };

    const handleImageClick = (imageName) => {
        setSelectedImage(imageName);
        console.log("Current image state:", imageName);
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
                <h2 style={styles.heading}>Update Profile Picture</h2>
                <div style={{ ...styles.imageButtons, flexWrap: "wrap" }}>
                    <div className="category-btn" onClick={() => handleImageClick("f")} style={selectedImage === "f" ? { ...styles.selectedImage, backgroundColor: "red" } : {}}>
                        <img src={f} alt="Image f" style={{ ...styles.image, maxWidth: "170px" }} />
                    </div>
                    <div className="category-btn" onClick={() => handleImageClick("s")} style={selectedImage === "s" ? { ...styles.selectedImage, backgroundColor: "red" } : {}}>
                        <img src={s} alt="Image s" style={{ ...styles.image, maxWidth: "170px" }} />
                    </div>
                    <div className="category-btn" onClick={() => handleImageClick("t")} style={selectedImage === "t" ? { ...styles.selectedImage, backgroundColor: "red" } : {}}>
                        <img src={t} alt="Image t" style={{ ...styles.image, maxWidth: "170px" }} />
                    </div>
                    <div className="category-btn" onClick={() => handleImageClick("fo")} style={selectedImage === "fo" ? { ...styles.selectedImage, backgroundColor: "red" } : {}}>
                        <img src={fo} alt="Image fo" style={{ ...styles.image, maxWidth: "170px" }} />
                    </div>
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
    imageButtons: {
        display: "flex",
        marginBottom: "16px",
        justifyContent: "space-around", // Centering images horizontally
    },
    image: {
        height: "auto", // Maintaining aspect ratio
    },
    selectedImage: {
        border: "2px solid red", // Adding red border for selected image
    },
};
