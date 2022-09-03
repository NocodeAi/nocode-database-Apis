module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'], // operation's tag.
        description: 'Find Artifacts By ID', // operation's desc.
        operationId: 'getArtifactsByID', // unique operation id
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/generateUploadSignedUrl', // agency input data model
                    },
                },
            },
        },
        responses: {
            // response code
            200: {
                description: 'Opertaion Successfull', // response desc.
                success:true
                
            },
           
            500: {
                description: 'Something Went Wrong!', // response desc.
                success:false
            },
        },
    },
};
