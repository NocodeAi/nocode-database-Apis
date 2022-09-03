
module.exports = {
    components: {
        schemas: {
            id: {
                type: 'number',
                description: "Enter id",
                example: 1
            },
            Error: {
                type: 'object',
                properties: {
                    message: {
                        type: 'string'
                    },
                    internal_code: {
                        type: 'string'
                    }
                }
            },
            limit: {
                type: "number",
                description: "Limit of Files",
                example: "10"
            },
            page: {
                type: "number",
                description: "Pages",
                example: "1"
            },
            project_id: {
                type: "string", // data type
                description: "An id of Project", // desc
                example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
            },
            UploadArtifacts: {
                type: "object", // data type
                properties: {
                    organization_id: {
                        type: "string", // data type
                        description: "An id of Organization", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    artifact_description: {
                        type: "string", // data type
                        description: "Artifact Description", // desc
                        example: "Artifact Description", // example of an id
                    },
                    summary_text: {
                        type: "string", // data type
                        description: "Artifact Summary", // desc
                        example: "Artifact Summary", // example of an id
                    },
                    user_id: {
                        type: "string", // data type
                        description: "An id of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    user_email: {
                        type: "string", // data type
                        description: "An email of User", // desc
                        example: "admin@contextapp.com", // example of an id
                    },
                    status_id: {
                        type: "string", // data type
                        description: "An id of Status", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    is_form_data: {
                        type: "string", // data type
                        description: "An id of Form", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    form_id: {
                        type: "string", // data type
                        description: "An id of Form", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    form_name: {
                        type: "string", // data type
                        description: "Name of Form", // desc
                        example: "Form 1", // example of an id
                    },
                    api_url: {
                        type: "string", // data type
                        description: "An id of Form", // desc
                        example: "https://us-central1-elaborate-howl-285701.cloudfunctions.net/doc_ai_v3_node_http?processorId=cf3d997d72d9ac64", // example of an id
                    },
                    folder_id: {
                        type: "string", // data type
                        description: "An id of Folder", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    template_file_name: {
                        type: "string", // data type
                        description: "Name Of Template", // desc
                        example: "General", // example of an id
                    },
                    project_name: {
                        type: "string", // data type
                        description: "Name of Project", // desc
                        example: "Project 1", // example of an id
                    },
                    table_name: {
                        type: "string", // data type
                        description: "Name of Table", // desc
                        example: "Table 1", // example of an id
                    },
                    template_id: {
                        type: "string", // data type
                        description: "An id of Template", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    project_id: {
                        type: "string", // data type
                        description: "An id of Project", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    processorId: {
                        type: "string", // data type
                        description: "An id of Processor", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    is_custom: {
                        type: "boolean", // data type
                        description: "Type of Template", // desc
                        example: true, // example of an id
                    },
                    retension: {
                        type: "string", // data type
                        description: "Days for Project", // desc
                        example: "1", // example of an id
                    },
                    files: {
                        type: "file", // data type
                        description: "Upload Artifact", // desc
                        example: "File 1", // example of an id
                    },
                },
            },
            UpdateArtifacts: {
                type: "object", // data type
                properties: {
                    md5: {
                        type: "string", // data type
                        description: "An id", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    user_id: {
                        type: "string", // data type
                        description: "An id of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    fileId: {
                        type: "string", // data type
                        description: "An id of File", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    project_id: {
                        type: "string", // data type
                        description: "An id of Project", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    is_custom: {
                        type: "boolean", // data type
                        description: "Type of Template", // desc
                        example: true, // example of an id
                    },
                    template_file_name: {
                        type: "string", // data type
                        description: "Name Of Template", // desc
                        example: "General", // example of an id
                    },
                    project_name: {
                        type: "string", // data type
                        description: "Name of Project", // desc
                        example: "Project 1", // example of an id
                    },
                    table_name: {
                        type: "string", // data type
                        description: "Name of Table", // desc
                        example: "Table 1", // example of an id
                    },
                    user_email: {
                        type: "string", // data type
                        description: "An email of User", // desc
                        example: "admin@contextapp.com", // example of an id
                    },
                    template_id: {
                        type: "string", // data type
                        description: "An id of Template", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    processorId: {
                        type: "string", // data type
                        description: "An id of Processor", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },

                },
            },
            CreateTemplate: {
                type: "object", // data type
                properties: {
                    form_name: {
                        type: "string", // data-type
                        description: "Name of Form", // desc
                        example: "Form SAAR DD2875", // example of a title
                    },
                    user_id: {
                        type: "string", // data-type
                        description: "An ID of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    description: {
                        type: "string", // data-type
                        description: "Discription", // desc
                        example: "Example of a Description", // example of a title
                    },
                    file: {
                        type: "file",
                        description: "Upload file using Upload methods of File",
                        example: "file-1"
                    }
                },
            },
            updateTemplate: {
                type: "object", // data type
                properties: {
                    arr: {
                        type: "array", // data-type
                        description: "Enter array", // desc
                        example: "[]", // example of a title
                    },
                    user_id: {
                        type: "string", // data-type
                        description: "An ID of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    id: {
                        type: 'string',
                        description: "Enter id",
                        example: "12222222222"
                    },
                    isCustom: {
                        type: "boolean", // data type
                        description: "Type of Template", // desc
                        example: true, // example of an id
                    },
                },
            },
            UpdateTemplateData: {
                type: "object", // data type
                properties: {
                    form_name: {
                        type: "string", // data-type
                        description: "Name of Form", // desc
                        example: "Form SAAR DD2875", // example of a title
                    },
                    user_id: {
                        type: "string", // data-type
                        description: "An ID of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    id: {
                        type: "string", // data-type
                        description: "An ID of Template", // desc
                        example: "0a7f09c9-1a93-448a-sd5c-s45de5d5c888", // example of a title
                    },
                },
            },
            UploadTemplateFile: {
                type: "object", // data type
                properties: {
                    template_id: {
                        type: "string", // data-type
                        description: "An ID of Template", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c675", // example of a title
                    },
                    user_id: {
                        type: "string", // data-type
                        description: "An ID of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    file: {
                        type: "file",
                        description: "Upload file using Upload methods of File",
                        example: "file-1"
                    }
                },
            },
            GetAllArtifactsByType: {
                type: "object", // data type
                properties: {
                    type: {
                        type: "string", // data-type
                        description: "Type of File", // desc
                        example: ".pdf, .mp3, .csv", // example of a title
                    },
                    user_id: {
                        type: "string", // data-type
                        description: "An ID of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    limit: {
                        type: "number",
                        description: "Limit of Files",
                        example: "10"
                    },
                    page: {
                        type: "number",
                        description: "Pages",
                        example: "1"
                    }
                },
            },
            ShareArtifacts: {
                type: "object", // data type
                properties: {
                    artifact_id: {
                        type: "string", // data-type
                        description: "An ID of Artifact", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d4r444", // example of a title
                    },
                    share_id: {
                        type: "string", // data-type
                        description: "Share ID", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5d888", // example of a title
                    },
                    user_id: {
                        type: "string", // data-type
                        description: "An ID of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    type: {
                        type: "string", // data-type
                        description: "Type of Share", // desc
                        example: "Folder", // example of a title
                    }
                },
            },
            SetValidate: {
                type: "object", // data type
                properties: {
                    id: {
                        type: "string", // data-type
                        description: "", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    user_id: {
                        type: "string", // data-type
                        description: "An ID of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    }
                },
            },

            SendArtifactForApproval: {
                type: "object", // data type
                properties: {
                    artifact_id: {
                        type: "string", // data-type
                        description: "An ID of Artifact", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d4r444", // example of a title
                    },
                    share_id: {
                        type: "string", // data-type
                        description: "Share ID", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5d888", // example of a title
                    },
                    user_id: {
                        type: "string", // data-type
                        description: "An ID of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    type: {
                        type: "string", // data-type
                        description: "Type of Share", // desc
                        example: "Folder", // example of a title
                    }
                },
            },
            UpdateArtifactApprovalStatus: {
                type: "object", // data type
                properties: {
                    artifact_id: {
                        type: "string", // data-type
                        description: "An ID of Artifact", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d4r444", // example of a title
                    },
                    status: {
                        type: "string",
                        description: "Status of Artifact",
                        example: "Approve"
                    },
                },
            },
            shareWithWorkspace: {
                type: "object", // data type
                properties: {
                    workspace_id: {
                        type: "string", // data-type
                        description: "An ID of Workspace", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d4r444", // example of a title
                    },
                    artifact_ids: {
                        type: "string", // data-type
                        description: "An ID of Artifact", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d4r444", // example of a title
                    },
                    user_id: {
                        type: "string", // data type
                        description: "An id of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    assign_to_users: {
                        type: "string",
                        description: "Assign to users",
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677"
                    },
                },
            },
            key: {
                type: "string", // data-type
                description: "Key", // desc
                example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
            },
            ArtifactID: {
                type: "object", // data type
                properties: {
                    artifact_id: {
                        type: "string", // data-type
                        description: "An ID of Artifact", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                },
            },
            AssignArtifacts: {
                type: "object", // data type
                properties: {
                    workspace_id: {
                        type: "string", // data-type
                        description: "An ID of Workspace", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d4r444", // example of a title
                    },
                    artifact_ids: {
                        type: "string", // data-type
                        description: "An ID of Artifact", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d4r444", // example of a title
                    },
                    assign_to_users: {
                        type: "string",
                        description: "Assign to users",
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677"
                    },
                }
            },
            UploadNeo4jTemplate: {
                type: "object", // data type
                properties: {
                    user_id: {
                        type: "string", // data-type
                        description: "An ID of Artifact", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d4r444", // example of a title
                    },
                    template_id: {
                        type: "string", // data-type
                        description: "An ID of Artifact", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d4r444", // example of a title
                    },
                    graph_schema: {
                        type: "string",
                        description: "Schema of Graph",
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677"
                    },
                }
            },
            UpdateArtifactName: {
                type: "object", // data type
                properties: {
                    id: {
                        type: "string", // data-type
                        description: "", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    user_id: {
                        type: "string", // data-type
                        description: "An ID of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    original_artifact_name: {
                        type: "string", // data-type
                        description: "An Original Artifact Name", // desc
                        example: "Artifact-1", // example of a title
                    }
                },
            },
            UpdateFileAdditionalProperties: {
                type: "string", // data type
                description: "An id of a File", // desc
                example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
            },
            GetAllArtifactsByType: {
                type: "object", // data type
                properties: {
                    type: {
                        type: "string", // data-type
                        description: "Type of File", // desc
                        example: ".pdf, .mp3, .csv", // example of a title
                    },
                    user_id: {
                        type: "string", // data-type
                        description: "An ID of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    limit: {
                        type: "number",
                        description: "Limit of Files",
                        example: "10"
                    },
                    page: {
                        type: "number",
                        description: "Pages",
                        example: "1"
                    }
                },
            },
            GetArtifactDataByFileName: {
                type: "object", // data type
                properties: {
                    id: {
                        type: "string", // data type
                        description: "An id", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    artifact_name: {
                        type: "string", // data type
                        description: "Unique Name of Artifact", // desc
                        example: "0a7f09c9-1a93-Artifact1", // example of an id
                    },
                    original_artifact_name: {
                        type: "string", // data type
                        description: "Name of Artifact", // desc
                        example: "Artifact 1", // example of an id
                    },
                    artifact_size: {
                        type: "string", // data type
                        description: "Size of File", // desc
                        example: "2.33 MB", // example of an id
                    },
                    artifact_type: {
                        type: "string", // data type
                        description: "Type of Artifact", // desc
                        example: ".pdf, .csv", // example of an id
                    },
                    file_address: {
                        type: "string", // data type
                        description: "Address of file from Cloud Bucket", // desc
                        example: "gs://elaborate-howl-285701_context_primary/Forms/NotProcessed/form-b69d7e6b-1a54-4776-902f-8d3867086195-Invoice5.pdf ", // example of an id
                    },
                    user_id: {
                        type: "string", // data type
                        description: "An id of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    created_at: {
                        type: "string", // data type
                        description: "Date of Creation", // desc
                        example: "2021-07-12T10:51:39.823662", // example of an id
                    },
                    explicit_content: {
                        type: "string", // data type
                        description: "Explicit Content Should be 1 or 0", // desc
                        example: "1", // example of an id
                    },
                    is_validate: {
                        type: "boolen", // data type
                        description: "Is Validate Should be True or False", // desc
                        example: true, // example of an id
                    },
                    is_completed: {
                        type: "boolen", // data type
                        description: "Is Completed Should be True or False", // desc
                        example: true, // example of an id
                    },
                },
            },
            getArtifactsByID: {
                type: "object", // data type
                properties: {
                    artifact_ids: {
                        type: "string", // data-type
                        description: "An ID of Artifact", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d4r444", // example of a title
                    },
                }
            },
            getArtifactsByID: {
                type: "object", // data type
                properties: {
                    type: {
                        type: "string", // data-type
                        description: "Type of Share", // desc
                        example: "Folder", // example of a title
                    },
                    user_id: {
                        type: "string", // data-type
                        description: "An ID of USer", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d4r444", // example of a title
                    },
                    limit: {
                        type: "number",
                        description: "Limit of Files",
                        example: "10"
                    },
                    page: {
                        type: "number",
                        description: "Pages",
                        example: "1"
                    }
                }
            },
            GetSharedFileBySharedID: {
                type: "object", // data type
                properties: {
                    share_id: {
                        type: "string", // data-type
                        description: "An ID of Share", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    limit: {
                        type: "number",
                        description: "Limit of Files",
                        example: "10"
                    },
                    page: {
                        type: "number",
                        description: "Pages",
                        example: "1"
                    },
                    type: {
                        type: "string", // data-type
                        description: "Type of Share", // desc
                        example: "Folder", // example of a title
                    }
                },
            },
            type: {
                type: "string", // data-type
                description: "Type of Share", // desc
                example: "Folder", // example of a title
            },
            getLatestUploaded: {
                type: "object", // data type
                properties: {
                    key: {
                        type: "string", // data-type
                        description: "Key", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    project_id: {
                        type: "string", // data type
                        description: "An id of Project", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    search: {
                        type: "number",
                        description: "Pages",
                        example: "1"
                    },
                    folders: {
                        type: "string", // data-type
                        description: "Enter folder", // desc
                        example: "Folder", // example of a title
                    },
                    limit: {
                        type: "number",
                        description: "Limit of Files",
                        example: "10"
                    },
                    processing: {
                        type: "number",
                        description: "Limit of Files",
                        example: "10"
                    }
                },
            },
            file_name: {
                type: "string", // data-type
                description: "Name of File", // desc
                example: "video-39b306d5-0e2c-4dff-87d8-099d5532bb01-oldspice.mp4 ", // example of a title
            },
            GetArtifactDataByFileName: {
                type: "object", // data type
                properties: {
                    id: {
                        type: "string", // data type
                        description: "An id", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    artifact_name: {
                        type: "string", // data type
                        description: "Unique Name of Artifact", // desc
                        example: "0a7f09c9-1a93-Artifact1", // example of an id
                    },
                    original_artifact_name: {
                        type: "string", // data type
                        description: "Name of Artifact", // desc
                        example: "Artifact 1", // example of an id
                    },
                    artifact_size: {
                        type: "string", // data type
                        description: "Size of File", // desc
                        example: "2.33 MB", // example of an id
                    },
                    artifact_type: {
                        type: "string", // data type
                        description: "Type of Artifact", // desc
                        example: ".pdf, .csv", // example of an id
                    },
                    file_address: {
                        type: "string", // data type
                        description: "Address of file from Cloud Bucket", // desc
                        example: "gs://elaborate-howl-285701_context_primary/Forms/NotProcessed/form-b69d7e6b-1a54-4776-902f-8d3867086195-Invoice5.pdf ", // example of an id
                    },
                    user_id: {
                        type: "string", // data type
                        description: "An id of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
                    },
                    created_at: {
                        type: "string", // data type
                        description: "Date of Creation", // desc
                        example: "2021-07-12T10:51:39.823662", // example of an id
                    },
                    explicit_content: {
                        type: "string", // data type
                        description: "Explicit Content Should be 1 or 0", // desc
                        example: "1", // example of an id
                    },
                    is_validate: {
                        type: "boolen", // data type
                        description: "Is Validate Should be True or False", // desc
                        example: true, // example of an id
                    },
                    is_completed: {
                        type: "boolen", // data type
                        description: "Is Completed Should be True or False", // desc
                        example: true, // example of an id
                    },
                },
            },
            GetArtifactByFileNameParam: {
                type: "object", // data type
                properties: {
                    key: {
                        type: "string", // data-type
                        description: "Key", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    user_id: {
                        type: "string", // data-type
                        description: "An ID of User", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                },
            },
            GetAudioTranscriptData: {
                type: "object", // data type
                properties: {
                    artifact_name: {
                        type: "string", // data-type
                        description: "", // desc
                        example: "Artifact-1", // example of a title
                    }
                },
            },
            GetFileAdditionalProperties: {
                type: "string", // data type
                description: "An id of a File", // desc
                example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of an id
            },
            xmlDLp: {
                type: "object", // data type
                properties: {
                    id: {
                        type: "string", // data-type
                        description: "An ID Of File", // desc
                        example: "0a7f09c9-1a93-448a-8cdc-f65de5d5c677", // example of a title
                    },
                    xmlData: {
                        type: "string", // data-type
                        description: "Data Of Xml Dlp", // desc
                        example: "Data Of XML", // example of a title
                    }
                },
            },
            generateUploadSignedUrl:{
                type: "object", // data type
                properties: {
                    fileOriginalName: {
                        type: "string", // data-type
                        description: "File Original Name", // desc
                        example: "", // example of a title
                    },
                    contentType: {
                        type: "string", // data-type
                        description: "Content Type", // desc
                        example: "", // example of a title
                    },
                    form_name:{
                        type: "string", // data-type
                        description: "Form Name", // desc
                        example: "", // example of a title
                    },
                    md5:{
                        type: "string", // data-type
                        description: "md5", // desc
                        example: "", // example of a title
                    },
                    isTiff:{
                        type: "string", // data-type
                        description: "Is Tiff", // desc
                        example: "", // example of a title
                    },
                },
            },
            GetFileName: {
                type: "object", // data type
                properties: {
                    file_name: {
                    type: "string", // data-type
                    description: "", // desc
                    example: "abc", // example of a title
                  }
                },
              },

        }
    }
}