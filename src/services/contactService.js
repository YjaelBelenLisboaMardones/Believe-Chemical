// src/services/contactService.js

export const sendInquiry = async (formData) => {
  // Aquí es donde en el futuro usarás fetch() o axios.
  // Por ahora, simulamos una espera de red de 2 segundos.
  console.log("Enviando datos al servidor:", formData);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simula éxito (cambia a false para probar el error)
      const success = true; 
      if (success) {
        resolve({ message: "OK" });
      } else {
        reject(new Error("Network Error"));
      }
    }, 2000);
  });
};