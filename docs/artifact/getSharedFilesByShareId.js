module.exports = {
    // operation's method
    get: {
        tags: ['Artifacts'], // operation's tag.
        description: 'Get Share File By Shared ID', // operation's desc.
        operationId: 'getSharedFileBySharedID', // unique operation id
        parameters: [
            {
                name: 'share_id', // name of the param
                in: 'query', // location of the param
                schema: {
                    $ref: '#/components/schemas/id', // data model of the param
                },
                required: true, // Mandatory param
                description: 'id', // param desc.
            },
            {
                name: 'limit', // name of the param
                in: 'query', // location of the param
                schema: {
                    $ref: '#/components/schemas/limit', // data model of the param
                },
                required: true, // Mandatory param
                description: 'Limit of Data', // param desc.
            },
            {
                name: 'page', // name of the param
                in: 'query', // location of the param
                schema: {
                    $ref: '#/components/schemas/page', // data model of the param
                },
                required: true, // Mandatory param
                description: 'Page Number', // param desc.
            },
            {
                name: 'type', // name of the param
                in: 'query', // location of the param
                schema: {
                    $ref: '#/components/schemas/type', // data model of the param
                },
                required: true, // Mandatory param
                description: 'Folder', // param desc.
            },
        ],
        responses: {
            // response code
            200: {
                success: true,
                content: {
                    // content-type
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/GetSharedFileBySharedID', // todo data model
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
            },
        },
    },
};
