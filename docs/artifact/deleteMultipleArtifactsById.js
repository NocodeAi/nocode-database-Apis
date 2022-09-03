module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'],  // operation's tag
        description: 'Delete Artifacts by id', // short desc
        operationId: 'Delete Artifacts by id', // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/key',  // create project
                    },
                }
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                success: true
            },
            402: {
                success: false,
                description: 'Please Provide Valid Keys', // response desc
            },
            // response code
            500: {
                success: false,
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
}