module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag
        description: 'Delete Artifacts', // short desc
        operationId: 'deleteArtifacts', // unique operation id
        parameters: [
            {
                name: 'id', // name of param
                in: 'path', // location of param
                schema: {
                    $ref: '#/components/schemas/ArtifactID', // id model
                },
                required: true, // mandatory
                description: 'Input Key here', // param desc
            },
        ],
        responses: {
            // response code
            200: {
                content: {
                    success: true,
                    description: 'Artifact Deleted Successfully!', // response desc.
                    // content-type
                    // 'application/json': {
                    //     schema: {
                    //         $ref: '#/components/schemas/Artifact Deleted Successfully!', 
                    //     },
                    // },
                },
            },
            203: {
                content: {
                    success: false,
                    description: 'Artifact with given artifacts id does not exist!', // response desc.
                    // content-type
                    // 'application/json': {
                    //     schema: {
                    //         $ref: '#/components/schemas/Artifact Deleted Successfully!', 
                    //     },
                    // },
                },
            },
            // response code
            400: {
                description: 'Please Provide Valid UserId!', // response desc.
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