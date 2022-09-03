module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag
        description: 'Upload Template File', // short desc
        operationId: 'uloadTemplateFile', // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UploadTemplateFile', // agency input data model
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            402: {
                description: 'Please Provide All Values!', // response desc
            },
            // response code
            500: {
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
};