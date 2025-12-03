import axios from "axios";

class NucleoService {
  constructor() {
    this.baseUrl = process.env.NUCLEO_URL;     // URL base de Grupo Núcleo
    this.apiKey = process.env.NUCLEO_API_KEY;  // Token o API Key
  }

  // Método base para hacer requests
  async request(method, endpoint, data = null) {
    try {
      const response = await axios({
        method,
        url: `${this.baseUrl}${endpoint}`,
        data,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.apiKey}`
        }
      });

      return response.data;

    } catch (error) {
      console.error("Error en NucleoService:", error.response?.data || error);
      throw new Error("Error comunicándose con Grupo Núcleo");
    }
  }

  // Obtener productos
  async getProducts() {
    return this.request("GET", "/productos");
  }

  // Obtener stock de un producto
  async getStock(sku) {
    return this.request("GET", `/stock/${sku}`);
  }

  // Obtener precio de un producto
  async getPrice(sku) {
    return this.request("GET", `/precio/${sku}`);
  }

  // Crear pedido
  async createOrder(orderData) {
    return this.request("POST", "/pedidos", orderData);
  }
}

export default new NucleoService();