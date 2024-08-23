import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonComponent } from "./button";
import { InputComponent } from "./input";
import Title from "./title"; // Asegúrate de ajustar la ruta según tu estructura de archivos

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const succesful = () => {
    alert("Login successful");
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, age: Number(age) }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setTimeout(() => {
          succesful();
          navigate("/login");
        }, 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error al registrar el usuario");
      }
    } catch (error) {
      setError("Error de conexión con el servidor");
      console.error("Error de conexión con el servidor:", error);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-slate-900 to-fuchsia-900 h-screen w-full flex items-center justify-center fixed sm:flex flex-col">
      <div className="bg-white p-8 rounded-lg shadow-lg flex gap-2 items-center">
        <div className="flex flex-col gap-4 items-center">
          <Title text="Register" />
          <form
            className="flex flex-col gap-4 bg-white p-8 w-[400px] h-[400px] rounded-lg font-sans"
            onSubmit={handleRegister}
          >
            {/* Username Input */}
            <InputComponent
              id="username"
              type="text" // Especifica el tipo de entrada
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />

            {/* Email Input */}
            <InputComponent
              id="email"
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />

            {/* Password Input */}
            <InputComponent
              id="password"
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />

            {/* Age Input */}
            <InputComponent
              id="age"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
            />

            <ButtonComponent name={"Sign Up"} />

            {error && (
              <p className="text-red-600 text-center text-sm">{error}</p>
            )}

            <p className="text-black text-l text-center my-2">
              Already have an account?{" "}
              <span className="text-purple-950 cursor-pointer" onClick={login}>
                Log in
              </span>
            </p>
          </form>
        </div>

        <div className="w-[400px] h-[400px] flex items-center justify-center">
          <img
            src="../../public/11112829.jpg"
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
