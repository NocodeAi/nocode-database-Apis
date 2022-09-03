module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag
        description: 'Send Artifact For Approval', // short desc
        operationId: 'sendArtifactForApproval', // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/SendArtifactForApproval', // agency input data model
                    },
                },
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
};