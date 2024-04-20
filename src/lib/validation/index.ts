import { z } from "zod";

// Validación para el registro de usuario
export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Demasiado corto" }), // Nombre
  username: z.string().min(2, { message: "Demasiado corto" }), // Nombre de usuario
  email: z.string().email({ message: "Correo Inválido" }), // Correo electrónico
  password: z.string().min(8, { message: "La contraseña debe ser al menos de 8 caracteres" }), // Contraseña
});

// Validación para el inicio de sesión
export const SigninValidation = z.object({
  email: z.string().email({ message: "Correo Inválido" }), // Correo electrónico
  password: z.string().min(8, { message: "La contraseña debe ser al menos de 8 caracteres" }), // Contraseña
});

// Validación para crear una publicación
export const PostValidation = z.object({
  caption: z.string().min(5, { message: "Mínimo 5 caracteres." }).max(2200, { message: "Máximo 2,200 caracteres." }), // Leyenda
  file: z.custom<File[]>(), // Archivo adjunto
  location: z.string().min(1, { message: "Este campo es obligatorio" }).max(1000, { message: "Máximo 1000 caracteres." }), // Ubicación
  tags: z.string(), // Etiquetas
});

// Validación para el perfil de usuario
export const ProfileValidation = z.object({
  file: z.custom<File[]>(), // Archivo adjunto
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }), // Nombre
  username: z.string().min(2, { message: "El nombre de usuario debe tener al menos 2 caracteres." }), // Nombre de usuario
  email: z.string().email(), // Correo electrónico
  bio: z.string(), // Biografía
});