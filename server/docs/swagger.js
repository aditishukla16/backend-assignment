import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend Assignment API",
      version: "1.0.0",
      description: "REST API with authentication and role-based access",
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1",
      },
    ],
     components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  },
  apis: ["./**/routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;