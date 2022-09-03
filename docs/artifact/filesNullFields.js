module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'],  // operation's tag
        description: 'Files Null Fields', // short desc
        operationId: 'filesNullFields', // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/project_id',  // create project
                    },
                }
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                description: 'Update Successfully', // response desc
            },
            // response code
            500: {
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
}