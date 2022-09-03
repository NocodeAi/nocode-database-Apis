module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'],  // operation's tag
        description: 'Assign Artifacts', // short desc
        operationId: 'AssignArtifacts', // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/AssignArtifacts', // create project
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
            // response code
            500: {
                success: false,
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
}