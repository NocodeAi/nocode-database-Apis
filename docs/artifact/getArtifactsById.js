module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag.
        description: 'Find Artifacts By ID', // operation's desc.
        operationId: 'getArtifactsByID', // unique operation id
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/getArtifactsByID', // agency input data model
                    },
                },
            },
        },
        responses: {
            // response code
            200: {
                // description: 'Flow is obtained', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/GetArtifactDataByFileName', // todo data model
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
