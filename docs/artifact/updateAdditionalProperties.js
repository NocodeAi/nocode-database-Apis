module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag
        description: 'Update File Additional Properties', // short desc
        operationId: 'updateFileAdditionalProperties', // unique operation id
        parameters: [
            {
                name: 'id', // name of param
                in: 'params', // location of param
                schema: {
                    $ref: '#/components/schemas/UpdateFileAdditionalProperties', // id model
                },
                required: true, // mandatory
                description: 'Update File Additional Properties', // param desc
            }
        ], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UploadArtifacts', 
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                success: true,

                // description: 'Approval Rejected Successfully!', // response desc
            },
            500: {
                success: false,
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
};