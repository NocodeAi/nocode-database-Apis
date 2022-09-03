module.exports = {
    // operation's method
    post: {
        tags: ['Artifacts'],  // operation's tag
        description: 'Upload Neo4j Template', // short desc
        operationId: 'UploadNeo4jTemplate', // unique operation id
        parameters: [], // expected params
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/UploadNeo4jTemplate',
                    },
                }
            },
        },
        responses: {
            200: {
                success: true
            },
            // response code
            500: {
                success: false,
                description: 'Something Went Wrong!' // response desc
            },
        },
    },
}