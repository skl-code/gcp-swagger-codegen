# NedapOnsApi.OnsimportRunStatus

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runId** | **String** | Object identifier of the run, usually in the form of a UUID. | [optional] 
**processing** | **Boolean** | Indicates records are still being processed. | [optional] 
**statuses** | **Object** | Map of record status to number of records having that status. Also contains an entry ALL with the total number of records. | [optional] 
**fileValidations** | **[String]** | List of validation messages resulting from uploading XML. These typically concern invalid XML or XSD violations. | [optional] 
