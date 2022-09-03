const uploadFiles = require('./uploadFiles')
const uploadBoxFiles = require('./uploadBoxFiles')
const updateFile = require('./updateFile')
const uploadTemplateFile = require('./uploadTemplateFile')
const updateTemplate = require('./updateTemplate')
const updateTemplateData = require('./updateTemplateData')
const getAllArtifactsByType = require('./getAllArtifactsByType')
const shareArtifact = require('./shareArtifact')
const sendArtifactForApproval = require('./sendArtifactForApproval')
const setValidate = require('./setValidate')
const updateArtifactApprovalStatus = require('./updateArtifactApprovalStatus')
const shareWithWorkspace = require('./shareWithWorkspace')
const deleteArtifactById = require('./deleteArtifactById')
const deleteMultipleArtifactsById = require('./deleteMultipleArtifactsById')
const assignArtifacts = require('./assignArtifacts')
const uploadNeo4jTemplateSchema = require('./uploadNeo4jTemplateSchema')
const updateArtifactName = require('./updateArtifactName')
const updateAdditionalProperties = require('./updateAdditionalProperties')
const filesNullFields = require("./filesNullFields")
const createTemplate = require("./createTemplate")
const getArtifactsById = require("./getArtifactsById")
const getSharedFilesByShareId = require("./getSharedFilesByShareId")
const getArtifactsForApproval = require("./getArtifactsForApproval")
const getLatestUploaded = require("./getLatestUploaded")
const getArtifactDataByName = require("./getArtifactDataByName")
const getByUserIdAndKey = require("./getByUserIdAndKey")
const getAudioTranscriptData = require("./getAudioTranscriptData")
const getFileAdditionalProperties = require("./getFileAdditionalProperties") 
const getFileData = require("./getFileData")
const uploadDatasetFiles = require("./uploadDatasetFiles")
const xmlDlp =require('./xmlDlp')
const generateUploadSignedUrl=require('./generateUploadSignedUrl')
// const { uploadBoxFiles, updateFile, createTemplate, updateTemplate, updateTemplateData, getAllArtifactsByType, shareArtifact, sendArtifactForApproval, setValidate, updateArtifactApprovalStatus, shareWithWorkspace, deleteArtifactById, deleteMultipleArtifactsById, assignArtifacts, uploadNeo4jTemplateSchema, updateArtifactName, updateAdditionalProperties, filesNullFields } = require("../../controllers/post");


module.exports = {
    paths: {
        '/api/artifact/uploadFiles': {
            ...uploadFiles
        },
        '/api/artifact/upload_box_files': {
            ...uploadBoxFiles //not updated
        },
        '/api/artifact/update_file': {
            ...updateFile
        },
        '/api/artifact/create_template': {
            ...createTemplate
        },
        '/api/artifact/update_template': {
            ...updateTemplate
        },
        '/api/artifact/update_template_data': {
            ...updateTemplateData
        },
        '/api/artifact/create_project': {
            ...uploadTemplateFile
        },
        '/api/artifact/share_artifact': {
            ...shareArtifact
        },
        '/api/artifact/set_validate': {
            ...setValidate
        },
        '/api/artifact/send_artifact_for_approval': {
            ...sendArtifactForApproval
        },
        '/api/artifact/update_artifact_approval_status': {
            ...updateArtifactApprovalStatus
        },
        '/api/artifact/share_with_workspace': {
            ...shareWithWorkspace
        },
        '/api/artifact/delete_artifact/{id}': {
            ...deleteArtifactById
        },
        '/api/artifact/delete_multiple_artifacts': {
            ...deleteMultipleArtifactsById
        },
        '/api/artifact/assign_artifacts': {
            ...assignArtifacts
        },
        '/api/artifact/upload_template_graph_schema': {
            ...uploadNeo4jTemplateSchema
        },
        '/api/artifact/update_name': {
            ...updateArtifactName
        },
        '/api/artifact/update_additional_properties/{id}': {
            ...updateAdditionalProperties
        },
        '/api/artifact/get_all_artifacts_by_type': {
            ...getAllArtifactsByType
        },
        '/api/artifact/get_artifacts_by_ids': {
            ...getArtifactsById
        },
        '/api/artifact/project_files_null_fields': {
            ...filesNullFields
        },
        '/api/artifact/get_file_key_pairs': {
            ...getFileData
        },
        '/api/artifact/upload_template_dataset': {
            ...uploadDatasetFiles
        },
        
        '/api/artifact/get_xml_data': {
            ...xmlDlp
        },
        
        '/api/artifact/get_upload_signed_url': {
            ...generateUploadSignedUrl
        },


        // *****************GET********************
        '/api/artifact/get_shared_files_by_share_id': {
            ...getSharedFilesByShareId
        },
        '/api/artifact/get_artifacts_for_approval': {
            ...getArtifactsForApproval
        },
        '/api/artifact/get_latest_uploaded': {
            ...getLatestUploaded
        },
        '/api/artifact/get_artifact_data_by_name/{file_name}': {
            ...getArtifactDataByName
        },
        '/api/artifact/by_user_id_and_key': {
            ...getByUserIdAndKey
        },
        '/api/artifact/audio_transcript/': {
            ...getAudioTranscriptData
        },
        '/api/artifact/get_additional_properties/{id}': {
            ...getFileAdditionalProperties
        }
    }
}