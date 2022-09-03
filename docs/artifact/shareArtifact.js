module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag
        description: 'Share Artifact', // short desc
        operationId: 'shareArtifact', // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/ShareArtifacts', // agency input data model
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                // description: 'Operation Succesfull!', // response desc
            },
            203: {
                description: 'Artifact With Given Artifact Id Does Not Exist', // response desc
            },
            401: {
                description: 'Share With Given Type Of Entity Not Allowed!', // response desc
            },
            500: {
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
};