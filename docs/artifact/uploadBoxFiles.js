module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'],  // operation's tag
        description: 'Update Widget', // short desc
        operationId: 'update-widget', // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/id',  // create project
                    },
                }
            },
        },
        // expected responses
        responses: {
            // response code
            402: {
                description: 'Please Provide Configuration And User Id', // response desc
            },
            // response code
            500: {
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
}