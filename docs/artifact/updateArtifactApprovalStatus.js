module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag
        description: 'Update Artifact Status', // short desc
        operationId: 'updateArtifactApprovalStatus', // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UpdateArtifactApprovalStatus', // agency input data model
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                success: true,
                description: 'Artifact Approved Successfully!' // response desc
            },
            203: {
                success: false,
                description: 'No Record Exist with this Id!' // response desc
            },
            400: {
                success: false,
                description: 'Cannot Set Irrelevant Status', // response desc
            },
            // response code
            500: {
                success: false,
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
};