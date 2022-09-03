module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'],  // operation's tag
        description: 'share With Work space', // short desc
        operationId: 'share With Work space', // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/shareWithWorkspace',  // create project
                    },
                }
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                success: true,
                description: 'User with given id does not exist' // response desc
            },
            203: {
                success: false,
                description: 'User with given id does not exist' // response desc
            },
            401: {
                success: false,
                description: 'Share with given type of entity not allowed', // response desc
            },
            402: {
                success: false,
                description: 'Please Provide All values', // response desc
            },
            // response code
            500: {
                success: false,
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
}