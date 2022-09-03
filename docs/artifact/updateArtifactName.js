    module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag
        description: 'Update Artifact Name', // short desc
        operationId: 'updateArtifactName', // unique operation id
        parameters: [], // expected params
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UpdateArtifactName', // agency input data model
                    },
                },
            },
        },
        responses: {
            200: {
                success: true

                // description: 'Approval Rejected Successfully!', // response desc
            },
            500: {
                success: false,
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
};