module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag
        description: 'Set Validate', // short desc
        operationId: 'setValidate', // unique operation id
        parameters: [], // expected params
        requestBody: {
            // expected request body
            content: {
                // content-type
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/SetValidate',
                    },
                },
            },
        },
        // expected responses
        responses: {
            // response code
            200: {
                success: true,
                // description: 'Successfully Updated!', // response desc.
                // content: {
                //     // content-type
                //     'application/json': {
                //         schema: {
                //             $ref: '#/components/schemas/GetArtifactDataByFileName', // todo data model
                //         },
                //     },
                // },
            },
            // response code
            402: {
                success: false,
                description: 'Please Provide Valid UserId!!', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error', // error data model
                        },
                    },
                },
            },
            500: {
                success: false,
                description: 'Something Went Wrong!', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error', // error data model
                        },
                    },
                },
            }
        },
    },
};