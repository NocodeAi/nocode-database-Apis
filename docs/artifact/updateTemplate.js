module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'],  // operation's tag
        description: 'update Template', // short desc
        operationId: 'updateTemplate', // unique operation id
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
            200: {
                description: 'Successfully Updated', // response desc
            },
            402: {
                description: 'Please Provide All values!', // response desc
            },
            // response code
            500: {
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
}