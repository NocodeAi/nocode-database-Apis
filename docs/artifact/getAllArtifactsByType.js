module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag.
        description: 'Find All Artifacts By Type', // operation's desc.
        operationId: 'getAllArtifactsByType', // unique operation id
        parameters: [],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/getAllArtifactsByType', // agency input data model
                    },
                },
            },
        },
        responses: {
            // response code
            200: {
                success: true,
            },
            500: {
                success: false,
                description: 'Something Went Wrong!', // response desc
            },
            // response code

        },
    },
};