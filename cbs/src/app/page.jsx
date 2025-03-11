"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input.jsx";
import { Button } from "@/components/ui/button";
import { useState  } from "react";
import { register } from "@/lib/user";    

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const handle

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    setError("");
    console.log("Logging in with:", { email, password });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="flex flex-col gap-4 p-15 w-1/4 border-black bg-white-500 rounded-xl" 
      onSubmit={handleLogin}
       action={register}>
        <Label>Email</Label>
        <Input
          placeholder="trkrishna@gmail.com"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label>Password</Label>
        <Input
          placeholder="****"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default page;
