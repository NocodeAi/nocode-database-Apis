module.exports = {
    get: {
        tags: ['Artifacts'], // operation's tag
        description: 'Get Audio Transcript Data', // short desc
        operationId: 'getAudioTranscriptData', // unique operation id
        parameters: [
            {
                name: 'artifact_name', // name of param
                in: 'query', // location of param
                schema: {
                    $ref: '#/components/schemas/GetAudioTranscriptData', // id model
                },
                required: true, // mandatory
                description: 'Get Artifact By File Name', // param desc
            }
        ],
        responses: {
            // response code
            200: {
                success: true,
            },
            404: {
                success: false,
                description: 'No Record found', // response desc
            },
            // response code
            500: {
                success: false,
                description: 'Something Went Wrong!', // response desc
            },
        },
    },
};
