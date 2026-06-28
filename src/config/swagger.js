import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import config from './index.js';

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'CueAI API',
            version: '1.0.0',
            description: 'CueAI Backend API Documentation',
            contact: {
                name: 'Developer'
            }
        },
        servers: [
            {
                url: `http://localhost:${config.app.port}`
            }
        ]
    },
    apis: ['./index.js', './controllers/*.js'] // Check index.js and controllers for Swagger annotations
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const configureSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
