"use server";

const register = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log("Registering with:", { email, password });
}
export { register}