import React, { useEffect, useState } from "react";
import { Text, TextInput, Group, Button } from "@mantine/core";
import "./Login.scss";

const Login: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 20000); // Adjust the timing according to your animation duration
    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="login-container">
      <div className={`left-side ${animate ? "animate-left" : ""}`}>
        <Text className="brand-text-left">Script</Text>
      </div>
      <div className={`right-side ${animate ? "animate-right" : ""}`}>
        <Text className="brand-text-right">Assist</Text>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            placeholder="Your email"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
          <TextInput
            label="Password"
            placeholder="Your password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <Group position="center">
            <Button type="submit">Login</Button>
          </Group>
        </form>
      </div>
    </div>
  );
};

export default Login;
