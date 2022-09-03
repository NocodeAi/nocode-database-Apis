module.exports = {
    get: {
        tags: ['Artifacts'],
        description: 'Get Artifacts For Approval',
        operationId: 'getArtifactsForApproval',
        parameters: [
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
                name: 'page', // name of the param
                in: 'query', // location of the param
                schema: {
                    $ref: '#/components/schemas/page', // data model of the param
                },
                required: true, // Mandatory param
                description: 'Page Number', // param desc.
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
            404: {
                success: true,
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
                success: true,
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