module.exports = {
    // operation's method
    get: {
        tags: ['Artifacts'], // operation's tag
        description: 'Get Artifact By User ID and Key', // short desc
        operationId: 'getFileByUserIDandKey', // unique operation id
        parameters: [
            {
                name: 'key', // name of param
                in: 'query', // location of param
                schema: {
                    $ref: '#/components/schemas/GetArtifactByFileNameParam/key', // id model
                },
                required: true, // mandatory
                description: 'Input Key here', // param desc
            },
            {
                name: 'user_id', // name of param
                in: 'query', // location of param
                schema: {
                    $ref: '#/components/schemas/GetArtifactByFileNameParam/user_id', // id model
                },
                required: true, // mandatory
                description: 'Get Artifact By Key User ID', // param desc
            }
        ],
        responses: {
            200: {
                success: false,
            },
            203: {
                success: false,
                description: 'User with given id does not exist', // response desc
            },
            // response code
            500: {
                success: false,
                description: 'Something Went Wrong', // response desc.
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/Error', // error data model
                        },
                    },
                },
            },
        },
    },
};