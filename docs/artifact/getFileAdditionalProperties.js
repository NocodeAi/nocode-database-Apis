module.exports = {
    // operation's method
    get: {
        tags: ['Artifacts'], // operation's tag
        description: 'Get File Additional Properties', // short desc
        operationId: 'getFileAdditionalProperties', // unique operation id
        parameters: [
            {
                name: 'id', // name of param
                in: 'params', // location of param
                schema: {
                    $ref: '#/components/schemas/GetFileAdditionalProperties', // id model
                },
                required: true,
                description: 'Get File Additional Properties',
            }
        ],
        responses: {
            200: {
                success: true,
            },
            500: {
                success: false,
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
};
