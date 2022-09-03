module.exports = {
    get: {
        tags: ['Artifacts'],
        description: 'Get Artifact Data By Name',
        operationId: 'getArtifactDataByName',
        parameters: [
            {
                name: 'file_name', // name of the param
                in: 'path', // location of the param
                schema: {
                    $ref: '#/components/schemas/file_name', // data model of the param
                },
                required: true, // Mandatory param
                description: 'Name of File', // param desc.
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
                            $ref: '#/components/schemas/GetArtifactDataByFileName', // todo data model
                        },
                    },
                },
            },
            // response code
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