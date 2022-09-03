module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag
        description: 'Update Template Data', // short desc
        operationId: 'updateTemplateData', // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UpdateTemplateData', // agency input data model
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            201: {
                description: 'Operation Succesfull!', // response desc
            },
            // response code
            500: {
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
};