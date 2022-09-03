module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag
        description: 'Update Artifacts', // short desc
        operationId: 'updateArtifacts', // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UpdateArtifacts', // agency input data model
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                success: true,
                description: 'Successfully Updated!', // response desc
            },
            // response code
            404: {
                success: false,
                description: 'No Artifact Found To Update!', // response desc
            },
            406: {
                success: false,
                description: 'This File Already Uploaded In This Project!', // response desc
            },
            500: {
                success: false,
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
};