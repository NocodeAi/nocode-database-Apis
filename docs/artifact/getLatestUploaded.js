module.exports = {
    get: {
        tags: ['Artifacts'],
        description: 'Get Latest Upload',
        operationId: 'getLatestUploaded',
        parameters: [
            {
                name: 'key', // name of the param
                in: 'query', // location of the param
                schema: {
                    $ref: '#/components/schemas/key', // data model of the param
                },
                required: true, // Mandatory param
                description: 'Limit of Data', // param desc.
            },
            {
                name: 'project_id', // name of the param
                in: 'query', // location of the param
                schema: {
                    $ref: '#/components/schemas/id', // data model of the param
                },
                required: true, // Mandatory param
                description: 'Limit of Data', // param desc.
            },
            {
                name: 'search', // name of the param
                in: 'query', // location of the param
                schema: {
                    $ref: '#/components/schemas/id', // data model of the param
                },
                required: true, // Mandatory param
                description: 'Limit of Data', // param desc.
            },
            {
                name: 'folders', // name of the param
                in: 'query', // location of the param
                schema: {
                    $ref: '#/components/schemas/id', // data model of the param
                },
                required: true, // Mandatory param
                description: 'Limit of Data', // param desc.
            },
            {
                name: 'limit', // name of the param
                in: 'query', // location of the param
                schema: {
                    $ref: '#/components/schemas/limit', // data model of the param
                },
                required: true, // Mandatory param
                description: 'Limit of Data', // param desc.
            },
            {
                name: 'processing', // name of the param
                in: 'query', // location of the param
                schema: {
                    $ref: '#/components/schemas/page', // data model of the param
                },
                required: true, // Mandatory param
                description: 'processing', // param desc.
            },
        ],
        // expected responses
        responses: {
            // response code
            200: {
                success: true,
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/GetArtifactsForApproval', // todo data model
                        },
                    },
                },
            },
            // response code
            402: {
                success: false,
                description: 'Please Provide Project Id', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error', // error data model
                        },
                    },
                },
            },
            404: {
                success: false,
                description: 'No Record Found', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error', // error data model
                        },
                    },
                },
            },
            500: {
                success: false,
                description: 'Something Went Wrong', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error', // error data model
                        },
                    },
                },
            }
        },
    },
};