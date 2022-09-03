module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag
        description: 'Upload Artifacts', // short desc
        operationId: 'uploadArtifacts', // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UploadArtifacts', // agency input data model
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                success: true,
            },
            // response code
            402: {
                success: false,
                description: 'Please Provide Current Project Name', // response desc
            },
            500: {
                success: false,
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
};