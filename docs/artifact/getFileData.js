module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag.
        description: 'Get File Data', // operation's desc.
        operationId: 'getFileData', // unique operation id
        parameters: [],           // expected params.,
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/GetFileName', // agency input data model
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                // description: 'Flow is obtained', // response desc.
                success: true,
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/GetFileName', // todo data model
                        },
                    },
                },
            },
            402: {
                description: 'Please Provide File Name!', // response desc.
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
                description: 'No Result Found!', // response desc.
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
                description: 'Something Went Wrong!', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error', // error data model
                        },
                    },
                },
            },
        },
    },
};