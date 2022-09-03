module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag.
        description: 'Upload Dataset Files', // operation's desc.
        operationId: 'uploadDatasetFiles', // unique operation id
        parameters: [],           // expected params.,
        // expected responses
        responses: {
            // response code
            200: {
                // description: 'Flow is obtained', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/GetFileName', // todo data model
                        },
                    },
                },
            },
            // response code
            401: {
                description: 'please provide file name', // response desc.
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