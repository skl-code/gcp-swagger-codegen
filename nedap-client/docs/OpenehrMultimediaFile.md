# NedapOnsApi.OpenehrMultimediaFile

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**ehrId** | **Number** | Integer containing the ehrId. | [optional] 
**clientId** | **Number** | Integer containing the clientId. This might be empty, since a multimedia file is primarily linked to an EHR. An EHR might not have a link to a Cupido client, for example if a client is not known in Ons Administratie. | [optional] 
**committerEmployeeId** | **Number** | Integer containing the employeeId in Ons Administratie of the committer. This can be empty when the committer is not known in Ons Administratie. The name of the committer is recorded in the createdBy field. Note: The committer is not always the same person as the person who composes the object. | [optional] 
**mediaType** | **String** | The IANA Media Type of the file associated with this MultimediaFile | [optional] 
